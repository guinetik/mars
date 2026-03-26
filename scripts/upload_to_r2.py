"""
Upload a file to Cloudflare R2.

Setup:
  1. Create a .env file in this directory with:
     R2_ACCOUNT_ID=...
     R2_ACCESS_KEY_ID=...
     R2_SECRET_ACCESS_KEY=...
     R2_BUCKET_NAME=mars

  2. pip install boto3 python-dotenv

Usage:
  python upload_to_r2.py path/to/file.glb [--key custom/key.glb] [--dry-run]

If --key is omitted, the file is uploaded with its filename as the key.
"""

import argparse
import logging
import mimetypes
import os
import sys
from pathlib import Path

import boto3
from botocore.config import Config
from dotenv import load_dotenv

logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s - %(levelname)s - %(message)s",
)
logger = logging.getLogger(__name__)


def get_r2_client():
    """Create an S3 client configured for Cloudflare R2."""
    account_id = os.environ.get("R2_ACCOUNT_ID")
    access_key = os.environ.get("R2_ACCESS_KEY_ID")
    secret_key = os.environ.get("R2_SECRET_ACCESS_KEY")

    missing = []
    if not account_id:
        missing.append("R2_ACCOUNT_ID")
    if not access_key:
        missing.append("R2_ACCESS_KEY_ID")
    if not secret_key:
        missing.append("R2_SECRET_ACCESS_KEY")

    if missing:
        logger.error(f"Missing environment variables: {', '.join(missing)}")
        logger.error("Set them in a .env file or export them in your shell.")
        sys.exit(1)

    return boto3.client(
        "s3",
        endpoint_url=f"https://{account_id}.r2.cloudflarestorage.com",
        aws_access_key_id=access_key,
        aws_secret_access_key=secret_key,
        config=Config(
            retries={"max_attempts": 3, "mode": "adaptive"},
        ),
        region_name="auto",
    )


def main():
    parser = argparse.ArgumentParser(description="Upload a file to Cloudflare R2")
    parser.add_argument("file", help="Path to the file to upload")
    parser.add_argument("--key", default=None, help="Object key in bucket (default: filename)")
    parser.add_argument("--dry-run", action="store_true", help="Show what would be uploaded")

    args = parser.parse_args()

    # Load .env from script directory
    script_dir = Path(__file__).parent
    load_dotenv(script_dir / ".env")

    local_path = Path(args.file)
    if not local_path.is_absolute():
        local_path = Path.cwd() / local_path

    if not local_path.exists():
        logger.error(f"File not found: {local_path}")
        sys.exit(1)

    bucket = os.environ.get("R2_BUCKET_NAME", "mars")
    key = args.key or local_path.name
    content_type = mimetypes.guess_type(str(local_path))[0] or "application/octet-stream"
    size_mb = local_path.stat().st_size / (1024 * 1024)

    logger.info(f"File:    {local_path}")
    logger.info(f"Bucket:  {bucket}")
    logger.info(f"Key:     {key}")
    logger.info(f"Type:    {content_type}")
    logger.info(f"Size:    {size_mb:.1f} MB")

    if args.dry_run:
        logger.info("[DRY RUN] Would upload — exiting.")
        sys.exit(0)

    client = get_r2_client()

    logger.info("Uploading...")
    client.upload_file(
        str(local_path),
        bucket,
        key,
        ExtraArgs={
            "ContentType": content_type,
            "CacheControl": "public, max-age=31536000, immutable",
        },
    )

    logger.info(f"Done — uploaded {key} to {bucket}")


if __name__ == "__main__":
    main()
