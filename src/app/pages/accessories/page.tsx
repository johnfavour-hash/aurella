import { Box, Stack, Text, HStack, Slider, Button, Icon } from "@chakra-ui/react"
import { ChevronRight, LayoutGrid, List, ChevronDown, ChevronLeft, MoreHorizontal } from "lucide-react"
import Subscribe from "@components/shared/subscribe/Subscribe"
import Footer from "@components/shared/layout/Footer"

const AccessoriesPage = () => {
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
            Accessories
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
        gap="40px"
        mx="auto"
        mt="80px"
        mb="80px"
      >
        {/* Breadcrumbs and Sort */}
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
              gap="0"
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

        <HStack w="1240px" gap="40px" align="flex-start">
          {/* Sidebar */}
          <Stack w="256px" gap="40px">
            {/* Category */}
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
                  Category
                </Text>
              </Box>
              <Stack w="256px" gap="12px">
                {["women", "men", "accessories", "shoes"].map((cat) => (
                  <HStack key={cat} w="256px" h="20px" align="center">
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
                        overflow="hidden"
                        textOverflow="ellipsis"
                      >
                        {cat}
                      </Text>
                    </Box>
                  </HStack>
                ))}
              </Stack>
            </Stack>

            <Box w="256px" h="1px" bg="var(--gray-200, #E4E4E7)" />

            {/* Size */}
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
                {["XS", "S", "M", "L", "XL", "XXL"].map((size) => (
                  <Box
                    key={size}
                    w={size.length > 2 ? "51.7778px" : "51.7778px"}
                    h="37.7778px"
                    pt="7.89px"
                    pr="15.89px"
                    pb="7.89px"
                    pl="15.89px"
                    borderWidth="1px"
                    borderColor="var(--border-default, #E4E4E7)"
                    rounded="8px"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Text
                      w={size.length === 1 ? "18px" : size.length === 2 ? "24px" : "30px"}
                      h="20px"
                      fontFamily="Roboto"
                      fontWeight="500"
                      fontSize="14px"
                      lineHeight="20px"
                      letterSpacing="0%"
                      textAlign="center"
                      color="var(--gray-800, #27272A)"
                    >
                      {size}
                    </Text>
                  </Box>
                ))}
              </Box>
            </Stack>

            <Box w="256px" h="1px" bg="var(--gray-200, #E4E4E7)" />

            {/* Price Range */}
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

          {/* Product Grid and Pagination */}
          <Stack w="944px" gap="40px">
            <Box display="grid" gridTemplateColumns="repeat(3, 292px)" columnGap="20px" rowGap="20px">
              {[1, 2, 3, 4, 5, 6].map((i) => (
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
                    <img
                      src={i % 2 === 0 ? "/images/cd372093a3f1d750d38579c542ef2223c741f156.jpg" : "/images/bfd7e30703bbd5af758c3d7993692fd5b40f1159.jpg"}
                      alt="Featured item"
                      style={{
                        width: "292px",
                        height: "175px",
                        objectFit: "cover",
                        borderTopLeftRadius: "12px",
                        borderTopRightRadius: "12px",
                        ...(i % 2 === 0 ? { objectPosition: "center 13%" } : {})
                      }}
                    />
                    {i % 2 !== 0 ? (
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
                    ) : (
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
                    )}
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
              ))}
            </Box>

            {/* Pagination Section */}
            <HStack w="423px" h="40px" gap="16px" mx="auto" align="center" justify="center">
              {/* Previous Button */}
              <Button
                size="lg"
                variant="ghost"
                colorPalette="gray"
                w="44px"
                h="44px"
                minW="44px"
                gap="12px"
                rounded="l2"
                pt="2px"
                pr="5"
                pb="2px"
                pl="5"
              >
                <Icon
                  as={ChevronLeft}
                  w="20px"
                  h="20px"
                  color="var(--gray-fg, #27272A)"
                />
              </Button>

              {/* Page 1 */}
              <Button
                size="lg"
                variant="solid"
                bg="var(--gray-solid, #18181B)"
                w="48px"
                h="44px"
                minW="44px"
                gap="12px"
                rounded="l2"
                pt="2px"
                pr="5"
                pb="2px"
                pl="5"
              >
                <Text
                  w="8px"
                  h="24px"
                  fontFamily="body"
                  fontWeight="500"
                  fontSize="md"
                  lineHeight="24px"
                  letterSpacing="0%"
                  textAlign="center"
                  color="var(--gray-contrast, #FFFFFF)"
                >
                  1
                </Text>
              </Button>

              {/* Page 2 */}
              <Button
                size="lg"
                variant="outline"
                borderColor="var(--gray-muted, #E4E4E7)"
                borderWidth="1px"
                w="50px"
                h="44px"
                minW="44px"
                gap="12px"
                rounded="l2"
                pt="2px"
                pr="5"
                pb="2px"
                pl="5"
              >
                <Text
                  w="10px"
                  h="24px"
                  fontFamily="body"
                  fontWeight="500"
                  fontSize="md"
                  lineHeight="24px"
                  letterSpacing="0%"
                  textAlign="center"
                  color="var(--gray-fg, #27272A)"
                >
                  2
                </Text>
              </Button>

              {/* Page 3 */}
              <Button
                size="lg"
                variant="outline"
                borderColor="var(--gray-muted, #E4E4E7)"
                borderWidth="1px"
                w="51px"
                h="44px"
                minW="44px"
                gap="12px"
                rounded="l2"
                pt="2px"
                pr="5"
                pb="2px"
                pl="5"
              >
                <Text
                  w="11px"
                  h="24px"
                  fontFamily="body"
                  fontWeight="500"
                  fontSize="md"
                  lineHeight="24px"
                  letterSpacing="0%"
                  textAlign="center"
                  color="var(--gray-fg, #27272A)"
                >
                  3
                </Text>
              </Button>

              {/* Ellipsis */}
              <Button
                size="md"
                variant="outline"
                borderColor="var(--gray-muted, #E4E4E7)"
                borderWidth="1px"
                w="40px"
                h="40px"
                minW="40px"
                gap="8px"
                rounded="l2"
                pt="2px"
                pr="4"
                pb="2px"
                pl="4"
              >
                <Icon as={MoreHorizontal} />
              </Button>

              {/* Page 5 */}
              <Button
                size="lg"
                variant="outline"
                borderColor="var(--gray-muted, #E4E4E7)"
                borderWidth="1px"
                w="50px"
                h="44px"
                minW="44px"
                gap="12px"
                rounded="l2"
                pt="2px"
                pr="5"
                pb="2px"
                pl="5"
              >
                <Text
                  w="10px"
                  h="24px"
                  fontFamily="body"
                  fontWeight="500"
                  fontSize="md"
                  lineHeight="24px"
                  letterSpacing="0%"
                  textAlign="center"
                  color="var(--gray-fg, #27272A)"
                >
                  5
                </Text>
              </Button>

              {/* Next Button */}
              <Button
                size="lg"
                variant="ghost"
                colorPalette="gray"
                w="44px"
                h="44px"
                minW="44px"
                gap="12px"
                rounded="l2"
                pt="2px"
                pr="5"
                pb="2px"
                pl="5"
              >
                <Icon
                  as={ChevronRight}
                  w="20px"
                  h="20px"
                  color="var(--gray-fg, #27272A)"
                />
              </Button>
            </HStack>
          </Stack>
        </HStack>
      </Stack>

      {/* New Section */}
      <Box
        w="1440px"
        h="868px"
      >
        <Subscribe />
        <Footer />
      </Box>
    </>
  )
}

export default AccessoriesPage
