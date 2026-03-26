import { Box, Stack, Text, HStack, Icon, Flex, Button, Image } from "@chakra-ui/react"
import { ChevronRight, Star, Heart, Truck, RefreshCcw, ShieldCheck, Minus, Plus } from "lucide-react"
import Subscribe from "@components/shared/subscribe/Subscribe"
import Footer from "@components/shared/layout/Footer"
import { useState } from "react"
import { Link } from "react-router"

const ProductDetailsPage = () => {
  const [selectedSize, setSelectedSize] = useState("M")
  const [quantity, setQuantity] = useState(1)
  const [activeTab, setActiveTab] = useState("Description")

  return (
    <Box w="full" maxW="1440px" mx="auto" display="flex" flexDirection="column">
      
      {/* Top Banner (Header usually handles this, just hardcoding for visual match if needed, but it seems there's a global header above Breadcrumbs. We just start with breadcrumbs) */}
      
      {/* Breadcrumbs */}
      <Box w="full" px="100px" pt="32px" pb="32px" bg="#FFFFFF">
        <HStack h="20.665px" gap="8px" align="center">
          {["Home", "Shop", "Women", "Cashmere Blend Coat"].map((crumb, idx) => (
            <HStack key={crumb} gap="8px">
              <Text
                fontFamily="body"
                fontWeight={idx === 3 ? "500" : "normal"}
                fontSize="sm"
                color={idx === 3 ? "#18181B" : "#71717A"}
                cursor={idx !== 3 ? "pointer" : "default"}
              >
                {crumb}
              </Text>
              {idx < 3 && <ChevronRight size={16} color="#71717A" />}
            </HStack>
          ))}
        </HStack>
      </Box>

      {/* Main Product Section */}
      <Flex w="full" px="100px" gap="48px" align="flex-start" pb="80px">
        
        {/* Left Side: Images */}
        <Stack gap="20px" w="584px" flexShrink={0}>
          <Box w="584px" h="584px" bg="#F4F4F5" rounded="md" overflow="hidden">
            <Image 
              src="/images/cd372093a3f1d750d38579c542ef2223c741f156.jpg" 
              alt="Cashmere Blend Coat Main" 
              w="full" h="full" objectFit="cover" objectPosition="center 13%" 
            />
          </Box>
          <HStack gap="16px">
            {/* Thumbnails */}
            <Box w="80px" h="80px" rounded="md" overflow="hidden" border="2px solid #18181B" cursor="pointer">
              <Image 
                src="/images/cd372093a3f1d750d38579c542ef2223c741f156.jpg" 
                alt="Thumbnail 1" 
                w="full" h="full" objectFit="cover" objectPosition="center 13%" 
              />
            </Box>
            <Box w="80px" h="80px" rounded="md" overflow="hidden" border="1px solid transparent" opacity="0.6" cursor="pointer" _hover={{ opacity: 1 }}>
              <Image 
                src="/images/bfd7e30703bbd5af758c3d7993692fd5b40f1159.jpg" 
                alt="Thumbnail 2" 
                w="full" h="full" objectFit="cover" 
              />
            </Box>
          </HStack>
        </Stack>

        {/* Right Side: Product Details */}
        <Stack flex={1} gap="32px">
          {/* Title & Reviews & Pricing */}
          <Stack gap="16px">
            <Text fontFamily="body" fontWeight="600" fontSize="3xl" lineHeight="38px" color="#18181B">
              Cashmere Blend Coat
            </Text>
            <HStack gap="8px" align="center">
              <HStack gap="4px">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Icon key={s} as={Star} w="16px" h="16px" fill={s < 5 ? "#EAB308" : "transparent"} color={s < 5 ? "#EAB308" : "#E4E4E7"} />
                ))}
              </HStack>
              <Text fontFamily="body" fontWeight="normal" fontSize="sm" color="#71717A">
                4.8 (124 reviews)
              </Text>
            </HStack>
            <HStack gap="12px" align="center">
              <Text fontFamily="body" fontWeight="600" fontSize="3xl" color="#18181B">
                $389.00
              </Text>
              <Text fontFamily="body" fontWeight="normal" fontSize="lg" color="#A1A1AA" textDecoration="line-through">
                $520.00
              </Text>
              <Box bg="#EF4444" rounded="4px" px="8px" py="4px">
                <Text fontFamily="body" fontWeight="500" fontSize="xs" color="#FFFFFF">
                  Save 25%
                </Text>
              </Box>
            </HStack>
            <Text fontFamily="body" fontWeight="normal" fontSize="md" lineHeight="24px" color="#52525B">
              A timeless coat crafted from a soft cashmere blend for warmth, comfort, and effortless elegance.
            </Text>
          </Stack>

          <Box w="full" h="1px" bg="#E4E4E7" />

          {/* Configuration (Size & Quantity) */}
          <Stack gap="24px">
            {/* Size */}
            <Stack gap="12px">
              <Text fontFamily="body" fontWeight="600" fontSize="sm" letterSpacing="0.35px" textTransform="uppercase" color="#18181B">
                SIZE
              </Text>
              <HStack gap="12px">
                {["XS", "S", "M", "L", "XL", "XXL"].map((size) => (
                  <Box
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    w="48px" h="48px"
                    display="flex" alignItems="center" justifyContent="center"
                    borderWidth="1px"
                    borderColor={selectedSize === size ? "#18181B" : "#E4E4E7"}
                    bg={selectedSize === size ? "transparent" : "#FFFFFF"}
                    rounded="md"
                    cursor="pointer"
                    _hover={{ borderColor: "#18181B" }}
                  >
                    <Text fontFamily="Roboto" fontWeight="500" fontSize="sm" color="#18181B">
                      {size}
                    </Text>
                  </Box>
                ))}
              </HStack>
            </Stack>

            {/* Quantity */}
            <Stack gap="12px">
              <Text fontFamily="body" fontWeight="600" fontSize="sm" letterSpacing="0.35px" textTransform="uppercase" color="#18181B">
                QUANTITY
              </Text>
              <HStack 
                w="120px" h="48px" 
                borderWidth="1px" borderColor="#E4E4E7" 
                rounded="md" 
                display="flex" align="center" justify="space-between" 
                px="4px"
              >
                <Box 
                  w="36px" h="36px" 
                  display="flex" alignItems="center" justifyContent="center"
                  cursor="pointer"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  _hover={{ bg: "#F4F4F5", rounded: "sm" }}
                >
                  <Icon as={Minus} w="16px" h="16px" color="#18181B" />
                </Box>
                <Text fontFamily="body" fontWeight="500" fontSize="md" color="#18181B" w="24px" textAlign="center">
                  {quantity}
                </Text>
                <Box 
                  w="36px" h="36px" 
                  display="flex" alignItems="center" justifyContent="center"
                  cursor="pointer"
                  onClick={() => setQuantity(quantity + 1)}
                  _hover={{ bg: "#F4F4F5", rounded: "sm" }}
                >
                  <Icon as={Plus} w="16px" h="16px" color="#18181B" />
                </Box>
              </HStack>
            </Stack>
          </Stack>

          {/* Actions */}
          <HStack gap="16px" w="full">
            <Button
              flex={1} h="56px"
              bg="#18181B" color="#FFFFFF"
              fontFamily="body" fontWeight="medium" fontSize="16px"
              rounded="md"
              _hover={{ opacity: 0.9 }}
            >
              Add to Cart — $389.00
            </Button>
            <Box 
              w="56px" h="56px" 
              borderWidth="1px" borderColor="#E4E4E7" 
              rounded="md" 
              display="flex" alignItems="center" justifyContent="center"
              cursor="pointer"
              _hover={{ bg: "#F4F4F5" }}
            >
              <Icon as={Heart} w="24px" h="24px" color="#18181B" />
            </Box>
          </HStack>

          {/* Badges Info */}
          <HStack w="full" h="76px" bg="#F4F4F5" rounded="md" justify="space-evenly" align="center" px="16px">
            <Stack align="center" gap="4px">
              <Icon as={Truck} w="20px" h="20px" color="#18181B" />
              <Text fontFamily="body" fontWeight="500" fontSize="xs" color="#18181B">Free Shipping</Text>
            </Stack>
            <Stack align="center" gap="4px">
              <Icon as={RefreshCcw} w="20px" h="20px" color="#18181B" />
              <Text fontFamily="body" fontWeight="500" fontSize="xs" color="#18181B">30 Day Returns</Text>
            </Stack>
            <Stack align="center" gap="4px">
              <Icon as={ShieldCheck} w="20px" h="20px" color="#18181B" />
              <Text fontFamily="body" fontWeight="500" fontSize="xs" color="#18181B">2 Year Warranty</Text>
            </Stack>
          </HStack>

        </Stack>
      </Flex>

      {/* Product Details Tabs (Description, Size Guide, Reviews) */}
      <Box w="full" px="100px" pb="80px">
        <HStack gap="32px" borderBottom="1px solid #E4E4E7" w="full" mb="32px">
          {["Description", "Size Guide", "Reviews (0)"].map((tab) => (
            <Box 
              key={tab} 
              py="12px" 
              borderBottom="2px solid" 
              borderColor={activeTab === tab ? "#18181B" : "transparent"}
              cursor="pointer"
              onClick={() => setActiveTab(tab)}
              mb="-1px"
            >
              <Text fontFamily="body" fontWeight={activeTab === tab ? "500" : "normal"} fontSize="md" color={activeTab === tab ? "#18181B" : "#71717A"}>
                {tab}
              </Text>
            </Box>
          ))}
        </HStack>

        {activeTab === "Description" && (
          <Text fontFamily="body" fontWeight="normal" fontSize="sm" lineHeight="24px" color="#52525B" maxW="800px">
            Crafted from a premium cashmere and wool blend, this statement coat features a relaxed fit, notched lapels, and a double-breasted closure. Fully lined with interior pockets. Dry clean only.
          </Text>
        )}
        {activeTab === "Size Guide" && (
          <Text fontFamily="body" fontWeight="normal" fontSize="sm" lineHeight="24px" color="#52525B" maxW="800px">
            True to size. Model is 5'9" and wearing size M.
          </Text>
        )}
        {activeTab === "Reviews (0)" && (
          <Text fontFamily="body" fontWeight="normal" fontSize="sm" lineHeight="24px" color="#52525B" maxW="800px">
            No reviews yet. Be the first to review this item!
          </Text>
        )}
      </Box>

      {/* You May Also Like Section */}
      <Box w="full" px="100px" pb="120px">
        <Text fontFamily="body" fontWeight="600" fontSize="xl" color="#18181B" mb="32px">
          You May Also Like
        </Text>
        <HStack gap="20px" align="flex-start">
          {[1, 2].map((i) => (
            <Box
              key={i}
              w="292px"
              h="419px"
              bg="#FFFFFF"
              rounded="l3"
              borderWidth="1px"
              borderColor="#E4E4E7"
            >
              <Box w="292px" h="175px" position="relative">
                <Link to={`/product/${i}`}>
                  <Image
                    src={i === 1 ? "/images/cd372093a3f1d750d38579c542ef2223c741f156.jpg" : "/images/bfd7e30703bbd5af758c3d7993692fd5b40f1159.jpg"}
                    alt="Related item"
                    w="292px"
                    h="175px"
                    objectFit="cover"
                    borderTopLeftRadius="12px"
                    borderTopRightRadius="12px"
                  />
                </Link>
              </Box>
              <Box w="292px" h="244px" p="24px">
                <Stack w="244px" h="196px" gap="20px">
                  <Stack w="244px" h="136px" gap="8px">
                    <Text fontFamily="body" fontWeight="500" fontSize="lg" lineHeight="28px" letterSpacing="0" color="#000000" w="187px" h="28px">
                      <Link to={`/product/${i}`}>Cashmere Blend Coat</Link>
                    </Text>
                    <Text fontFamily="body" fontWeight="normal" fontSize="sm" lineHeight="20px" letterSpacing="0" color="#52525B" w="244px" h="60px">
                      A timeless coat crafted from a soft cashmere blend for warmth, comfort, and effortless elegance.
                    </Text>
                    <Text fontFamily="body" fontWeight="500" fontSize="2xl" lineHeight="32px" letterSpacing="0" color="#000000" w="98px" h="32px">
                      $389.00
                    </Text>
                  </Stack>
                  <HStack gap="8px">
                    <Box
                      as="button"
                      w="90px"
                      h="40px"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      rounded="l2"
                      bg="#18181B"
                      color="#FFFFFF"
                    >
                      <Text fontFamily="body" fontWeight="normal" fontSize="sm" lineHeight="20px" letterSpacing="0" w="58px" h="20px">
                        Buy now
                      </Text>
                    </Box>
                    <Box
                      as="button"
                      w="108px"
                      h="40px"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      rounded="l2"
                      color="#18181B"
                      border="1px solid #E4E4E7"
                      _hover={{ bg: "#F4F4F5" }}
                    >
                      <Text fontFamily="body" fontWeight="normal" fontSize="sm" lineHeight="20px" letterSpacing="0">
                        Add to cart
                      </Text>
                    </Box>
                  </HStack>
                </Stack>
              </Box>
            </Box>
          ))}
        </HStack>
      </Box>

      {/* Global Subscribe and Footer */}
      <Box w="full" mt="auto">
        <Subscribe />
        <Footer />
      </Box>

    </Box>
  )
}

export default ProductDetailsPage
