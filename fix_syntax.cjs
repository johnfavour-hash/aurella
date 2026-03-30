const fs = require('fs');

const files = [
  'C:/Users/DELL/Desktop/Aurella/src/app/pages/women/page.tsx',
  'C:/Users/DELL/Desktop/Aurella/src/app/pages/men/page.tsx',
  'C:/Users/DELL/Desktop/Aurella/src/app/pages/accessories/page.tsx',
  'C:/Users/DELL/Desktop/Aurella/src/app/pages/products/page.tsx'
];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');

  // Fix the first </HStack> issue:
  content = content.replace(
    /<\/HStack>\s*<Stack direction=\{\{ base: "column", lg: "row" \}\}/,
    '</Stack>\n\n        <Stack direction={{ base: "column", lg: "row" }}'
  );

  // Fix the second </HStack> issue:
  content = content.replace(
    /<\/HStack>(\s*)<\/Stack>(\s*)(?:{\/\* New Section \*\/|<\!--|export)/,
    '</Stack>$1</Stack>$2{/* New Section */'
  );
  content = content.replace(
    /<\/HStack>\s*<\/Stack>\s*\n\s*export/g,
    '</Stack>\n      </Stack>\nexport'
  );
  
  // Fix the <Box as="img" to <Image error:
  content = content.replace(/<Box\s+as="img"/g, '<Image');
  content = content.replace(/<\/Box>\s*\{\/\* Product details/g, '</Image>\n              {/* Product details');
  
  // Make sure Image is imported
  if (!content.includes('Image')) {
    content = content.replace(/import \{([^}]+)\}\s+from\s+["']@chakra-ui\/react["']/, 'import { $1, Image } from "@chakra-ui/react"');
  } else if (!content.match(/Image\s*[,}]/)) {
     content = content.replace(/import \{([^}]+)\}\s+from\s+["']@chakra-ui\/react["']/, 'import { $1, Image } from "@chakra-ui/react"');
  }

  fs.writeFileSync(file, content);
  console.log('Fixed syntax in', file);
});
