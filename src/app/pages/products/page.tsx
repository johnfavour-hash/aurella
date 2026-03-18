import { Box, Stack, Text, HStack, Slider } from "@chakra-ui/react"
import { ChevronRight, LayoutGrid, List, ChevronDown } from "lucide-react"

const ProductsPage = () => {
  return (
    <>
      <Box
        w="1440px"
        h="208px"
        pt="64px"
        pr="71.5px"
        pb="64px"
        pl="71.5px"
        bg="var(--gray-200, #E4E4E7)"
        mx="auto"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Stack w="208px" h="66px" gap="4px" align="center" justify="center">
          <Text
            w="208px"
            h="38px"
            fontFamily="body"
            fontWeight="600"
            fontSize="3xl"
            lineHeight="38px"
            letterSpacing="0%"
            textAlign="center"
            verticalAlign="middle"
            color="var(--gray-900, #18181B)"
          >
            All Products
          </Text>
          <Text
            w="208px"
            h="24px"
            fontFamily="body"
            fontWeight="normal"
            fontSize="md"
            lineHeight="24px"
            letterSpacing="0%"
            textAlign="center"
            verticalAlign="middle"
            color="#4B5563"
          >
            8 products
          </Text>
        </Stack>
      </Box>
      <Stack
        w="1240px"
        h="1014px"
        gap="40px"
        mx="auto"
        mt="80px"
      >
        <HStack w="1240px" h="36px" gap="40px" align="center" justify="space-between">
          <HStack w="930px" h="20.665px" gap="8px" align="center">
            <Box w="40px" h="20.665px" pb="0.67px" display="flex" alignItems="center">
              <Text
                w="40px"
                h="20px"
                fontFamily="body"
                fontWeight="normal"
                fontSize="sm"
                lineHeight="20px"
                letterSpacing="0%"
                color="var(--gray-500, #71717A)"
                verticalAlign="middle"
              >
                Home
              </Text>
            </Box>
            <Box w="16px" h="16px" display="flex" alignItems="center" justifyContent="center">
              <ChevronRight size={16} strokeWidth={1.33} color="var(--gray-500, #71717A)" />
            </Box>
            <Box w="35px" h="20.665px" pb="0.67px" display="flex" alignItems="center">
              <Text
                w="35px"
                h="20px"
                fontFamily="body"
                fontWeight="normal"
                fontSize="sm"
                lineHeight="20px"
                letterSpacing="0%"
                color="var(--gray-500, #71717A)"
                verticalAlign="middle"
              >
                Shop
              </Text>
            </Box>
            <Box w="16px" h="16px" display="flex" alignItems="center" justifyContent="center">
              <ChevronRight size={16} strokeWidth={1.33} color="var(--gray-500, #71717A)" />
            </Box>
          </HStack>

          <HStack w="270px" h="36px" gap="16px" align="center" justify="flex-end">
            <HStack
              w="74px"
              h="36px"
              borderWidth="1px"
              borderStyle="solid"
              borderColor="#E5E5E5"
              rounded="4px"
              spacing="0"
              overflow="hidden"
            >
              <Box w="36px" h="36px" p="8px" bg="var(--gray-200, #E4E4E7)" display="flex" alignItems="center" justifyContent="center">
                <LayoutGrid size={20} color="var(--gray-fg, #27272A)" />
              </Box>
              <Box
                w="36px"
                h="36px"
                p="8px"
                display="flex"
                alignItems="center"
                justifyContent="center"
                borderTopRightRadius="2px"
                borderBottomRightRadius="2px"
              >
                <List size={20} color="var(--gray-fg, #27272A)" />
              </Box>
            </HStack>

            <HStack
              w="180px"
              h="36px"
              gap="8px"
              pt="10px"
              pr="10px"
              pb="10px"
              pl="10px"
              borderWidth="1px"
              borderStyle="solid"
              borderColor="var(--border-default, #E4E4E7)"
              rounded="l2"
              justify="space-between"
            >
              <Text
                w="132px"
                h="20px"
                fontFamily="body"
                fontWeight="normal"
                fontSize="sm"
                lineHeight="20px"
                letterSpacing="0%"
                color="var(--fg-muted, #52525B)"
              >
                Newest
              </Text>
              <ChevronDown size={20} color="var(--fg-muted, #52525B)" />
            </HStack>
          </HStack>
        </HStack>
        <Stack w="1240px" h="938px" gap="40px">
          <HStack w="1240px" h="938px" gap="40px" align="flex-start">
            <Stack w="256px" h="512.89px" gap="40px">
              <Stack w="256px" h="152.665px" gap="16px">
                <Box w="256px" h="20.665px" pb="0.67px" display="flex" alignItems="center">
                  <Text
                    w="256px"
                    h="20px"
                    fontFamily="body"
                    fontWeight="600"
                    fontSize="sm"
                    lineHeight="20px"
                    letterSpacing="0.35px"
                    textTransform="uppercase"
                    color="var(--gray-950, #111111)"
                  >
                    Category
                  </Text>
                </Box>
                <Stack w="256px" h="116px" gap="12px">
                  <HStack w="256px" h="20px" align="center">
                    <Box w="16px" h="16px" borderWidth="1px" borderColor="#171717" rounded="4px" />
                    <Box flex="1" h="20px" pl="12px" display="flex" alignItems="center">
                      <Text
                        h="20px"
                        fontFamily="body"
                        fontWeight="500"
                        fontSize="sm"
                        lineHeight="20px"
                        letterSpacing="0%"
                        color="#111827"
                        whiteSpace="nowrap"
                        noOfLines={1}
                      >
                        women
                      </Text>
                    </Box>
                  </HStack>
                  <HStack w="256px" h="20px" align="center">
                    <Box w="16px" h="16px" borderWidth="1px" borderColor="#171717" rounded="4px" />
                    <Box flex="1" h="20px" pl="12px" display="flex" alignItems="center">
                      <Text
                        h="20px"
                        fontFamily="body"
                        fontWeight="500"
                        fontSize="sm"
                        lineHeight="20px"
                        letterSpacing="0%"
                        color="#111827"
                        whiteSpace="nowrap"
                        noOfLines={1}
                      >
                        men
                      </Text>
                    </Box>
                  </HStack>
                  <HStack w="256px" h="20px" align="center">
                    <Box w="16px" h="16px" borderWidth="1px" borderColor="#171717" rounded="4px" />
                    <Box flex="1" h="20px" pl="12px" display="flex" alignItems="center">
                      <Text
                        h="20px"
                        fontFamily="body"
                        fontWeight="500"
                        fontSize="sm"
                        lineHeight="20px"
                        letterSpacing="0%"
                        color="#111827"
                        whiteSpace="nowrap"
                        noOfLines={1}
                      >
                        accessories
                      </Text>
                    </Box>
                  </HStack>
                  <HStack w="256px" h="20px" align="center">
                    <Box w="16px" h="16px" borderWidth="1px" borderColor="#171717" rounded="4px" />
                    <Box flex="1" h="20px" pl="12px" display="flex" alignItems="center">
                      <Text
                        h="20px"
                        fontFamily="body"
                        fontWeight="500"
                        fontSize="sm"
                        lineHeight="20px"
                        letterSpacing="0%"
                        color="#111827"
                        whiteSpace="nowrap"
                        noOfLines={1}
                      >
                        shoes
                      </Text>
                    </Box>
                  </HStack>
                </Stack>
              </Stack>
              <Box w="256px" h="1px" bg="var(--gray-200, #E4E4E7)" />
              <Stack w="256px" gap="16px">
                <Box w="256px" h="20.665px" pb="0.67px" display="flex" alignItems="center">
                  <Text
                    w="256px"
                    h="20px"
                    fontFamily="body"
                    fontWeight="600"
                    fontSize="sm"
                    lineHeight="20px"
                    letterSpacing="0.35px"
                    textTransform="uppercase"
                    color="var(--gray-950, #111111)"
                  >
                    Size
                  </Text>
                </Box>
                <Box w="256px" display="grid" gridTemplateColumns="repeat(4, max-content)" gap="8px">
                  <Box w="51.7778px" h="37.7778px" pt="7.89px" pr="15.89px" pb="7.89px" pl="15.89px" borderWidth="1px" borderColor="var(--border-default, #E4E4E7)" rounded="8px" display="flex" alignItems="center" justifyContent="center">
                    <Text w="18px" h="20px" fontFamily="Roboto" fontWeight="500" fontSize="14px" lineHeight="20px" letterSpacing="0%" textAlign="center" color="var(--gray-800, #27272A)">
                      XS
                    </Text>
                  </Box>
                  <Box w="51.7778px" h="37.7778px" pt="7.89px" pr="15.89px" pb="7.89px" pl="15.89px" borderWidth="1px" borderColor="var(--border-default, #E4E4E7)" rounded="8px" display="flex" alignItems="center" justifyContent="center">
                    <Text w="18px" h="20px" fontFamily="Roboto" fontWeight="500" fontSize="14px" lineHeight="20px" letterSpacing="0%" textAlign="center" color="var(--gray-800, #27272A)">
                      S
                    </Text>
                  </Box>
                  <Box w="51.7778px" h="37.7778px" pt="7.89px" pr="15.89px" pb="7.89px" pl="15.89px" borderWidth="1px" borderColor="var(--border-default, #E4E4E7)" rounded="8px" display="flex" alignItems="center" justifyContent="center">
                    <Text w="18px" h="20px" fontFamily="Roboto" fontWeight="500" fontSize="14px" lineHeight="20px" letterSpacing="0%" textAlign="center" color="var(--gray-800, #27272A)">
                      M
                    </Text>
                  </Box>
                  <Box w="51.7778px" h="37.7778px" pt="7.89px" pr="15.89px" pb="7.89px" pl="15.89px" borderWidth="1px" borderColor="var(--border-default, #E4E4E7)" rounded="8px" display="flex" alignItems="center" justifyContent="center">
                    <Text w="18px" h="20px" fontFamily="Roboto" fontWeight="500" fontSize="14px" lineHeight="20px" letterSpacing="0%" textAlign="center" color="var(--gray-800, #27272A)">
                      L
                    </Text>
                  </Box>
                  <Box w="51.7778px" h="37.7778px" pt="7.89px" pr="15.89px" pb="7.89px" pl="15.89px" borderWidth="1px" borderColor="var(--border-default, #E4E4E7)" rounded="8px" display="flex" alignItems="center" justifyContent="center">
                    <Text w="24px" h="20px" fontFamily="Roboto" fontWeight="500" fontSize="14px" lineHeight="20px" letterSpacing="0%" textAlign="center" color="var(--gray-800, #27272A)">
                      XL
                    </Text>
                  </Box>
                  <Box w="51.7778px" h="37.7778px" pt="7.89px" pr="15.89px" pb="7.89px" pl="15.89px" borderWidth="1px" borderColor="var(--border-default, #E4E4E7)" rounded="8px" display="flex" alignItems="center" justifyContent="center">
                    <Text w="30px" h="20px" fontFamily="Roboto" fontWeight="500" fontSize="14px" lineHeight="20px" letterSpacing="0%" textAlign="center" color="var(--gray-800, #27272A)">
                      XXL
                    </Text>
                  </Box>
                </Box>
              </Stack>
              <Box w="256px" h="1px" bg="var(--gray-200, #E4E4E7)" />
              <Stack w="256px" h="78px">
                <Box w="256px" h="20.665px" pb="0.67px" display="flex" alignItems="center">
                  <Text
                    w="256px"
                    h="20px"
                    fontFamily="body"
                    fontWeight="600"
                    fontSize="sm"
                    lineHeight="20px"
                    letterSpacing="0.35px"
                    textTransform="uppercase"
                    color="var(--gray-950, #111111)"
                  >
                    Price Range
                  </Text>
                </Box>
                <Box w="256px" h="16px" display="flex" gap="4px" alignItems="center" py="4px">
                  <Slider.Root
                    defaultValue={[50]}
                    min={0}
                    max={100}
                    orientation="horizontal"
                    size="md"
                    colorPalette="gray"
                    variant="outline"
                    w="256px"
                  >
                    <Slider.Control>
                      <Slider.Track
                        h="8px"
                        borderRadius="9999px"
                        bg="var(--bg-emphasized, #E4E4E7)"
                        boxShadow="inset 0 0 0 1px #0000000D"
                        overflow="hidden"
                      >
                        <Slider.Range h="8px" borderRadius="9999px" bg="var(--gray-solid, #18181B)" />
                      </Slider.Track>
                      <Slider.Thumb
                        index={0}
                        boxSize="20px"
                        bg="var(--bg-default, #FFFFFF)"
                        borderWidth="1px"
                        borderColor="var(--gray-solid, #18181B)"
                        rounded="full"
                      />
                    </Slider.Control>
                  </Slider.Root>
                </Box>
                <HStack w="256px" h="20px" align="center" justify="space-between">
                  <Text
                    w="18px"
                    h="20px"
                    fontFamily="body"
                    fontWeight="normal"
                    fontSize="sm"
                    lineHeight="20px"
                    letterSpacing="0%"
                    verticalAlign="middle"
                    color="var(--gray-600, #52525B)"
                  >
                    $0
                  </Text>
                  <Text
                    w="35px"
                    h="20px"
                    fontFamily="body"
                    fontWeight="normal"
                    fontSize="sm"
                    lineHeight="20px"
                    letterSpacing="0%"
                    verticalAlign="middle"
                    color="var(--gray-600, #52525B)"
                  >
                    $500
                  </Text>
                </HStack>
              </Stack>
            </Stack>
            <Stack w="944px" h="938px" gap="40px">
              <Box w="944px" h="858px" gap="20px">
                <Box display="grid" gridTemplateColumns="292px 292px 292px" columnGap="20px" rowGap="20px">
                <Box
                  w="292px"
                  h="419px"
                  bg="#FFFFFF"
                  rounded="l3"
                  borderWidth="1px"
                  borderColor="#E4E4E7"
                >
                  <Box w="292px" h="175px" position="relative">
                    <img
                      src="/images/bfd7e30703bbd5af758c3d7993692fd5b40f1159.jpg"
                      alt="Featured item"
                      style={{ width: "292px", height: "175px", objectFit: "cover", borderTopLeftRadius: "12px", borderTopRightRadius: "12px" }}
                    />
                    <Box
                      position="absolute"
                      top="10px"
                      right="10px"
                      w="85px"
                      h="28px"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      rounded="l2"
                      bg="#EF4444"
                      color="#FFFFFF"
                    >
                      <Text fontFamily="body" fontWeight="normal" fontSize="sm" lineHeight="20px" letterSpacing="0" w="65px" h="20px">
                        Save 25%
                      </Text>
                    </Box>
                  </Box>
                  <Box w="292px" h="244px" p="24px">
                    <Stack w="244px" h="196px" gap="20px">
                      <Stack w="244px" h="136px" gap="8px">
                        <Text fontFamily="body" fontWeight="500" fontSize="lg" lineHeight="28px" letterSpacing="0" color="#000000" w="187px" h="28px">
                          Cashmere Blend Coat
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
                        >
                          <Text fontFamily="body" fontWeight="normal" fontSize="sm" lineHeight="20px" letterSpacing="0">
                            Add to cart
                          </Text>
                        </Box>
                      </HStack>
                    </Stack>
                  </Box>
                </Box>

                <Box
                  w="292px"
                  h="419px"
                  bg="#FFFFFF"
                  rounded="l3"
                  borderWidth="1px"
                  borderColor="#E4E4E7"
                >
                  <Box w="292px" h="175px" position="relative">
                    <img
                      src="/images/cd372093a3f1d750d38579c542ef2223c741f156.jpg"
                      alt="Featured item"
                      style={{ width: "292px", height: "175px", objectFit: "cover", borderTopLeftRadius: "12px", borderTopRightRadius: "12px", objectPosition: "center 13%" }}
                    />
                    <Box
                      position="absolute"
                      top="10px"
                      left="10px"
                      w="51px"
                      h="28px"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      rounded="l2"
                      bg="#FFFFFF"
                      boxShadow="0px 0px 1px 0px var(--gray-300) inset"
                    >
                      <Text fontFamily="body" fontWeight="normal" fontSize="sm" lineHeight="20px" letterSpacing="0" color="#27272A" w="31px" h="20px">
                        New
                      </Text>
                    </Box>
                  </Box>
                  <Box w="292px" h="244px" p="24px">
                    <Stack w="244px" h="196px" gap="20px">
                      <Stack w="244px" h="136px" gap="8px">
                        <Text fontFamily="body" fontWeight="500" fontSize="lg" lineHeight="28px" letterSpacing="0" color="#000000" w="187px" h="28px">
                          Cashmere Blend Coat
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
                        >
                          <Text fontFamily="body" fontWeight="normal" fontSize="sm" lineHeight="20px" letterSpacing="0">
                            Add to cart
                          </Text>
                        </Box>
                      </HStack>
                    </Stack>
                  </Box>
                </Box>

                <Box
                  w="292px"
                  h="419px"
                  bg="#FFFFFF"
                  rounded="l3"
                  borderWidth="1px"
                  borderColor="#E4E4E7"
                >
                  <Box w="292px" h="175px" position="relative">
                    <img
                      src="/images/bfd7e30703bbd5af758c3d7993692fd5b40f1159.jpg"
                      alt="Featured item"
                      style={{ width: "292px", height: "175px", objectFit: "cover", borderTopLeftRadius: "12px", borderTopRightRadius: "12px" }}
                    />
                    <Box
                      position="absolute"
                      top="10px"
                      right="10px"
                      w="85px"
                      h="28px"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      rounded="l2"
                      bg="#EF4444"
                      color="#FFFFFF"
                    >
                      <Text fontFamily="body" fontWeight="normal" fontSize="sm" lineHeight="20px" letterSpacing="0" w="65px" h="20px">
                        Save 25%
                      </Text>
                    </Box>
                  </Box>
                  <Box w="292px" h="244px" p="24px">
                    <Stack w="244px" h="196px" gap="20px">
                      <Stack w="244px" h="136px" gap="8px">
                        <Text fontFamily="body" fontWeight="500" fontSize="lg" lineHeight="28px" letterSpacing="0" color="#000000" w="187px" h="28px">
                          Cashmere Blend Coat
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
                        >
                          <Text fontFamily="body" fontWeight="normal" fontSize="sm" lineHeight="20px" letterSpacing="0">
                            Add to cart
                          </Text>
                        </Box>
                      </HStack>
                    </Stack>
                  </Box>
                </Box>

                <Box
                  w="292px"
                  h="419px"
                  bg="#FFFFFF"
                  rounded="l3"
                  borderWidth="1px"
                  borderColor="#E4E4E7"
                >
                  <Box w="292px" h="175px" position="relative">
                    <img
                      src="/images/cd372093a3f1d750d38579c542ef2223c741f156.jpg"
                      alt="Featured item"
                      style={{ width: "292px", height: "175px", objectFit: "cover", borderTopLeftRadius: "12px", borderTopRightRadius: "12px", objectPosition: "center 13%" }}
                    />
                    <Box
                      position="absolute"
                      top="10px"
                      left="10px"
                      w="51px"
                      h="28px"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      rounded="l2"
                      bg="#FFFFFF"
                      boxShadow="0px 0px 1px 0px var(--gray-300) inset"
                    >
                      <Text fontFamily="body" fontWeight="normal" fontSize="sm" lineHeight="20px" letterSpacing="0" color="#27272A" w="31px" h="20px">
                        New
                      </Text>
                    </Box>
                  </Box>
                  <Box w="292px" h="244px" p="24px">
                    <Stack w="244px" h="196px" gap="20px">
                      <Stack w="244px" h="136px" gap="8px">
                        <Text fontFamily="body" fontWeight="500" fontSize="lg" lineHeight="28px" letterSpacing="0" color="#000000" w="187px" h="28px">
                          Cashmere Blend Coat
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
                        >
                          <Text fontFamily="body" fontWeight="normal" fontSize="sm" lineHeight="20px" letterSpacing="0">
                            Add to cart
                          </Text>
                        </Box>
                      </HStack>
                    </Stack>
                  </Box>
                </Box>

                <Box
                  w="292px"
                  h="419px"
                  bg="#FFFFFF"
                  rounded="l3"
                  borderWidth="1px"
                  borderColor="#E4E4E7"
                >
                  <Box w="292px" h="175px" position="relative">
                    <img
                      src="/images/bfd7e30703bbd5af758c3d7993692fd5b40f1159.jpg"
                      alt="Featured item"
                      style={{ width: "292px", height: "175px", objectFit: "cover", borderTopLeftRadius: "12px", borderTopRightRadius: "12px" }}
                    />
                    <Box
                      position="absolute"
                      top="10px"
                      right="10px"
                      w="85px"
                      h="28px"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      rounded="l2"
                      bg="#EF4444"
                      color="#FFFFFF"
                    >
                      <Text fontFamily="body" fontWeight="normal" fontSize="sm" lineHeight="20px" letterSpacing="0" w="65px" h="20px">
                        Save 25%
                      </Text>
                    </Box>
                  </Box>
                  <Box w="292px" h="244px" p="24px">
                    <Stack w="244px" h="196px" gap="20px">
                      <Stack w="244px" h="136px" gap="8px">
                        <Text fontFamily="body" fontWeight="500" fontSize="lg" lineHeight="28px" letterSpacing="0" color="#000000" w="187px" h="28px">
                          Cashmere Blend Coat
                        </Text>
                        <Text fontFamily="body" fontWeight="normal" fontSize="sm" lineHeight="20px" letterSpacing="0" color="#52525B" w="244px" h="60px">
                          A timeless coat crafted from a soft cashmere blend for warmth, comfort, and effortless elegance.
                        </Text>
                        <Text fontFamily="body" fontWeight="500" fontSize="2xl" lineHeight="32px" letterSpacing="0" color="#000000" w="98px" h="32px">
                          $389.00
                        </Text>
                      </Stack>
                      <HStack gap="8px">
                        <Box as="button" w="90px" h="40px" display="flex" alignItems="center" justifyContent="center" rounded="l2" bg="#18181B" color="#FFFFFF">
                          <Text fontFamily="body" fontWeight="normal" fontSize="sm" lineHeight="20px" letterSpacing="0" w="58px" h="20px">
                            Buy now
                          </Text>
                        </Box>
                        <Box as="button" w="108px" h="40px" display="flex" alignItems="center" justifyContent="center" rounded="l2" color="#18181B">
                          <Text fontFamily="body" fontWeight="normal" fontSize="sm" lineHeight="20px" letterSpacing="0">
                            Add to cart
                          </Text>
                        </Box>
                      </HStack>
                    </Stack>
                  </Box>
                </Box>

                <Box
                  w="292px"
                  h="419px"
                  bg="#FFFFFF"
                  rounded="l3"
                  borderWidth="1px"
                  borderColor="#E4E4E7"
                >
                  <Box w="292px" h="175px" position="relative">
                    <img
                      src="/images/cd372093a3f1d750d38579c542ef2223c741f156.jpg"
                      alt="Featured item"
                      style={{ width: "292px", height: "175px", objectFit: "cover", borderTopLeftRadius: "12px", borderTopRightRadius: "12px", objectPosition: "center 13%" }}
                    />
                    <Box
                      position="absolute"
                      top="10px"
                      left="10px"
                      w="51px"
                      h="28px"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      rounded="l2"
                      bg="#FFFFFF"
                      boxShadow="0px 0px 1px 0px var(--gray-300) inset"
                    >
                      <Text fontFamily="body" fontWeight="normal" fontSize="sm" lineHeight="20px" letterSpacing="0" color="#27272A" w="31px" h="20px">
                        New
                      </Text>
                    </Box>
                  </Box>
                  <Box w="292px" h="244px" p="24px">
                    <Stack w="244px" h="196px" gap="20px">
                      <Stack w="244px" h="136px" gap="8px">
                        <Text fontFamily="body" fontWeight="500" fontSize="lg" lineHeight="28px" letterSpacing="0" color="#000000" w="187px" h="28px">
                          Cashmere Blend Coat
                        </Text>
                        <Text fontFamily="body" fontWeight="normal" fontSize="sm" lineHeight="20px" letterSpacing="0" color="#52525B" w="244px" h="60px">
                          A timeless coat crafted from a soft cashmere blend for warmth, comfort, and effortless elegance.
                        </Text>
                        <Text fontFamily="body" fontWeight="500" fontSize="2xl" lineHeight="32px" letterSpacing="0" color="#000000" w="98px" h="32px">
                          $389.00
                        </Text>
                      </Stack>
                      <HStack gap="8px">
                        <Box as="button" w="90px" h="40px" display="flex" alignItems="center" justifyContent="center" rounded="l2" bg="#18181B" color="#FFFFFF">
                          <Text fontFamily="body" fontWeight="normal" fontSize="sm" lineHeight="20px" letterSpacing="0" w="58px" h="20px">
                            Buy now
                          </Text>
                        </Box>
                        <Box as="button" w="108px" h="40px" display="flex" alignItems="center" justifyContent="center" rounded="l2" color="#18181B">
                          <Text fontFamily="body" fontWeight="normal" fontSize="sm" lineHeight="20px" letterSpacing="0">
                            Add to cart
                          </Text>
                        </Box>
                      </HStack>
                    </Stack>
                  </Box>
                </Box>
              </Box>
              </Box>
            </Stack>
          </HStack>
        </Stack>
      </Stack>
    </>
  )
}

export default ProductsPage
