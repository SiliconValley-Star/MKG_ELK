#!/bin/bash

# WebP Conversion Script using macOS native 'sips' command
# Converts all JPG and PNG images to WebP format with quality 85

echo "🖼️  Starting WebP conversion with sips..."
echo ""

# Counter variables
total_files=0
converted_files=0
total_original_size=0
total_webp_size=0

# Function to convert a single image
convert_image() {
    local input_file="$1"
    local output_file="${input_file%.*}.webp"
    
    # Skip if WebP already exists
    if [ -f "$output_file" ]; then
        echo "  ⏭️  Skipped: $(basename "$input_file") (WebP already exists)"
        return
    fi
    
    # Get original file size
    local original_size=$(stat -f%z "$input_file")
    
    # Convert to WebP using sips
    # Note: sips doesn't support WebP directly, so we'll use a workaround
    # Convert to PNG first if needed, then use cwebp if available
    
    if command -v cwebp &> /dev/null; then
        # Use cwebp if available (better quality control)
        if cwebp -q 85 "$input_file" -o "$output_file" 2>/dev/null; then
            local webp_size=$(stat -f%z "$output_file")
            local reduction=$(awk "BEGIN {printf \"%.1f\", (1 - $webp_size / $original_size) * 100}")
            
            echo "  ✅ Converted: $(basename "$input_file") → $(basename "$output_file")"
            echo "     Size: $(numfmt --to=iec $original_size) → $(numfmt --to=iec $webp_size) (-${reduction}%)"
            
            converted_files=$((converted_files + 1))
            total_original_size=$((total_original_size + original_size))
            total_webp_size=$((total_webp_size + webp_size))
        else
            echo "  ❌ Failed: $(basename "$input_file")"
        fi
    else
        echo "  ⚠️  cwebp not found. Install with: brew install webp"
        echo "     Skipping: $(basename "$input_file")"
    fi
    
    total_files=$((total_files + 1))
}

# Process directories
for dir in "public/images/blog" "public/images/corporate" "public/images/projects" "public/images/services" "public/images/team"; do
    if [ -d "$dir" ]; then
        echo "📁 Processing: $dir"
        
        # Process JPG files
        for file in "$dir"/*.jpg "$dir"/*.jpeg "$dir"/*.JPG "$dir"/*.JPEG; do
            [ -f "$file" ] && convert_image "$file"
        done
        
        # Process PNG files
        for file in "$dir"/*.png "$dir"/*.PNG; do
            [ -f "$file" ] && convert_image "$file"
        done
        
        echo ""
    fi
done

# Calculate statistics
if [ $converted_files -gt 0 ]; then
    reduction=$(awk "BEGIN {printf \"%.1f\", (1 - $total_webp_size / $total_original_size) * 100}")
    saved=$(awk "BEGIN {printf \"%.2f\", ($total_original_size - $total_webp_size) / 1048576}")
else
    reduction=0
    saved=0
fi

# Print summary
echo "══════════════════════════════════════════════════"
echo "📊 CONVERSION SUMMARY"
echo "══════════════════════════════════════════════════"
echo "Total files processed: $total_files"
echo "Successfully converted: $converted_files"
echo "Total size before: $(awk "BEGIN {printf \"%.2f\", $total_original_size / 1048576}") MB"
echo "Total size after: $(awk "BEGIN {printf \"%.2f\", $total_webp_size / 1048576}") MB"
echo "Total reduction: ${reduction}%"
echo "Space saved: ${saved} MB"
echo "══════════════════════════════════════════════════"
echo ""
echo "✨ Done! Original files are kept as backup."
echo "💡 Tip: Test the site, then delete originals to save space."