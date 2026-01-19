#!/bin/bash

# MKG Elektromekanik - Production Build Script
# This script handles the complete build process with optimization and validation

set -e  # Exit on error

echo "🚀 MKG Elektromekanik - Production Build"
echo "========================================"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Step 1: Clean previous builds
echo ""
echo "${YELLOW}📦 Step 1: Cleaning previous builds...${NC}"
if [ -d "dist" ]; then
    rm -rf dist
    echo "✓ Removed old dist directory"
fi

# Step 2: Install dependencies (if needed)
echo ""
echo "${YELLOW}📚 Step 2: Checking dependencies...${NC}"
if [ ! -d "node_modules" ]; then
    echo "Installing dependencies..."
    npm install
else
    echo "✓ Dependencies already installed"
fi

# Step 3: Run TypeScript type checking
echo ""
echo "${YELLOW}🔍 Step 3: Running TypeScript type check...${NC}"
npx tsc --noEmit
if [ $? -eq 0 ]; then
    echo "${GREEN}✓ TypeScript check passed${NC}"
else
    echo "${RED}✗ TypeScript errors found. Fix them before building.${NC}"
    exit 1
fi

# Step 4: Build the project
echo ""
echo "${YELLOW}🏗️  Step 4: Building production bundle...${NC}"
npm run build

# Step 5: Analyze bundle size
echo ""
echo "${YELLOW}📊 Step 5: Bundle size analysis...${NC}"
du -sh dist
echo ""
echo "Detailed breakdown:"
du -h dist/assets/* | sort -hr | head -10

# Step 6: Validate build output
echo ""
echo "${YELLOW}✅ Step 6: Validating build output...${NC}"

# Check if index.html exists
if [ ! -f "dist/index.html" ]; then
    echo "${RED}✗ Missing index.html${NC}"
    exit 1
fi

# Check if assets directory exists
if [ ! -d "dist/assets" ]; then
    echo "${RED}✗ Missing assets directory${NC}"
    exit 1
fi

# Check for critical files
CRITICAL_FILES=(
    "dist/index.html"
    "dist/robots.txt"
    "dist/sitemap.xml"
)

for file in "${CRITICAL_FILES[@]}"; do
    if [ -f "$file" ]; then
        echo "✓ Found: $file"
    else
        echo "${RED}✗ Missing: $file${NC}"
        exit 1
    fi
done

# Step 7: Generate build report
echo ""
echo "${YELLOW}📝 Step 7: Generating build report...${NC}"
BUILD_DATE=$(date +"%Y-%m-%d %H:%M:%S")
BUILD_HASH=$(git rev-parse --short HEAD 2>/dev/null || echo "no-git")

cat > dist/build-info.json <<EOF
{
  "buildDate": "$BUILD_DATE",
  "gitCommit": "$BUILD_HASH",
  "nodeVersion": "$(node --version)",
  "npmVersion": "$(npm --version)"
}
EOF

echo "✓ Build info saved to dist/build-info.json"

# Step 8: Security check
echo ""
echo "${YELLOW}🔒 Step 8: Running security audit...${NC}"
npm audit --production --audit-level=high || echo "${YELLOW}⚠️  Security vulnerabilities found. Review and fix.${NC}"

# Step 9: Success summary
echo ""
echo "${GREEN}========================================"
echo "✅ BUILD SUCCESSFUL!"
echo "========================================${NC}"
echo ""
echo "Build Statistics:"
echo "  - Build date: $BUILD_DATE"
echo "  - Git commit: $BUILD_HASH"
echo "  - Output dir: ./dist"
echo ""
echo "Next steps:"
echo "  1. Test locally:  npm run preview"
echo "  2. Deploy:        ./scripts/deploy.sh"
echo ""