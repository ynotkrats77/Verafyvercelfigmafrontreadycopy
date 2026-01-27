#!/bin/bash

# Verafy AI - AWS Deployment Script
# This script deploys the application to AWS S3 + CloudFront

set -e  # Exit on error

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${GREEN}======================================"
echo "Verafy AI - AWS Deployment"
echo -e "======================================${NC}"

# Check if AWS CLI is installed
if ! command -v aws &> /dev/null; then
    echo -e "${RED}❌ AWS CLI is not installed${NC}"
    echo "Install it: https://aws.amazon.com/cli/"
    exit 1
fi

# Check if jq is installed (for JSON parsing)
if ! command -v jq &> /dev/null; then
    echo -e "${YELLOW}⚠️  jq is not installed (optional but recommended)${NC}"
fi

# Load configuration
if [ -f ".env.aws" ]; then
    echo -e "${GREEN}✓ Loading AWS configuration...${NC}"
    export $(cat .env.aws | grep -v '^#' | xargs)
else
    echo -e "${YELLOW}⚠️  .env.aws not found, using environment variables${NC}"
fi

# Validate required variables
if [ -z "$AWS_S3_BUCKET" ]; then
    echo -e "${RED}❌ AWS_S3_BUCKET is not set${NC}"
    exit 1
fi

if [ -z "$AWS_CLOUDFRONT_DISTRIBUTION_ID" ]; then
    echo -e "${YELLOW}⚠️  AWS_CLOUDFRONT_DISTRIBUTION_ID is not set (CloudFront invalidation will be skipped)${NC}"
fi

AWS_REGION=${AWS_REGION:-ap-southeast-2}

echo ""
echo -e "${GREEN}Configuration:${NC}"
echo -e "  S3 Bucket: ${YELLOW}${AWS_S3_BUCKET}${NC}"
echo -e "  Region: ${YELLOW}${AWS_REGION}${NC}"
echo -e "  CloudFront: ${YELLOW}${AWS_CLOUDFRONT_DISTRIBUTION_ID:-Not configured}${NC}"
echo ""

# Build the application
echo -e "${GREEN}📦 Building application...${NC}"
npm run build

if [ ! -d "dist" ]; then
    echo -e "${RED}❌ Build failed - dist directory not found${NC}"
    exit 1
fi

echo -e "${GREEN}✓ Build complete${NC}"
echo ""

# Sync to S3
echo -e "${GREEN}☁️  Syncing files to S3...${NC}"

# Sync all files except index.html with cache headers
aws s3 sync dist/ s3://${AWS_S3_BUCKET}/ \
  --region ${AWS_REGION} \
  --delete \
  --cache-control "public, max-age=31536000, immutable" \
  --exclude "index.html" \
  --exclude "*.json" \
  --exclude "*.txt"

# Upload index.html with no-cache
aws s3 cp dist/index.html s3://${AWS_S3_BUCKET}/index.html \
  --region ${AWS_REGION} \
  --cache-control "no-cache, no-store, must-revalidate" \
  --content-type "text/html"

# Upload manifest and other JSON files with short cache
if [ -f "dist/manifest.json" ]; then
  aws s3 cp dist/manifest.json s3://${AWS_S3_BUCKET}/manifest.json \
    --region ${AWS_REGION} \
    --cache-control "public, max-age=3600" \
    --content-type "application/json"
fi

echo -e "${GREEN}✓ S3 sync complete${NC}"
echo ""

# Invalidate CloudFront cache
if [ -n "$AWS_CLOUDFRONT_DISTRIBUTION_ID" ]; then
    echo -e "${GREEN}🔄 Invalidating CloudFront cache...${NC}"
    
    INVALIDATION_ID=$(aws cloudfront create-invalidation \
      --distribution-id ${AWS_CLOUDFRONT_DISTRIBUTION_ID} \
      --paths "/*" \
      --query 'Invalidation.Id' \
      --output text)
    
    echo -e "${GREEN}✓ CloudFront invalidation created: ${YELLOW}${INVALIDATION_ID}${NC}"
    echo -e "${YELLOW}Note: Cache invalidation may take 5-15 minutes to complete${NC}"
else
    echo -e "${YELLOW}⚠️  Skipping CloudFront invalidation (not configured)${NC}"
fi

echo ""
echo -e "${GREEN}======================================"
echo "✅ Deployment Complete!"
echo -e "======================================${NC}"
echo ""
echo -e "🌐 Website: ${GREEN}https://verafyai.com.au${NC}"
echo -e "📊 CloudFront: https://console.aws.amazon.com/cloudfront/v3/home?region=${AWS_REGION}#/distributions/${AWS_CLOUDFRONT_DISTRIBUTION_ID}"
echo -e "🪣 S3 Bucket: https://s3.console.aws.amazon.com/s3/buckets/${AWS_S3_BUCKET}?region=${AWS_REGION}"
echo ""
