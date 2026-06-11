#!/bin/bash
# Deploy Hugo site to local Nginx + push to GitHub backup
set -e

SITE_DIR="/home/ubuntu/joel-zane.github.io"
DEPLOY_DIR="/var/www/joel-zane"
COMMIT_MSG="${1:-deploy: update site}"

cd "$SITE_DIR"

echo "🔨 Building Hugo..."
sudo chown -R ubuntu:ubuntu "$DEPLOY_DIR"
hugo --gc --minify -d "$DEPLOY_DIR"
sudo chown -R www-data:www-data "$DEPLOY_DIR"
sudo chmod -R 755 "$DEPLOY_DIR"

echo "📤 Pushing to GitHub..."
git add -A
git diff --cached --quiet || {
    git commit -m "$COMMIT_MSG"
    git push origin main
}

echo "✅ Done! Site live at http://40.233.72.74/"
