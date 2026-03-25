#!/usr/bin/env node
/**
 * Deploy dist/ to gh-pages branch.
 * Copies 404.html for SPA routing and CNAME for custom domain.
 */
import { execSync } from 'child_process'
import { copyFileSync, writeFileSync } from 'fs'
import { resolve } from 'path'

const dist = resolve('dist')

// SPA fallback — GitHub Pages serves 404.html for unknown routes
copyFileSync(resolve(dist, 'index.html'), resolve(dist, '404.html'))

// Custom domain
writeFileSync(resolve(dist, 'CNAME'), 'mars.guinetik.com\n')

// Deploy via gh-pages
execSync('npx gh-pages -d dist --dotfiles', { stdio: 'inherit' })
