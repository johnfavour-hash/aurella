import { Box, Stack, Flex, Text, HStack, Icon, Button, Image } from "@chakra-ui/react"
import LinkButton from "@components/shared/buttons/LinkButton"
import { LuArrowRight } from "react-icons/lu"

const FeaturedCollection = () => {
  return (
    <Box w="1440px" h="595px" mx="auto" px="100px" py="40px">
      <Stack gap="24px">
        <Flex w="1240px" h="72px" align="center" justify="space-between">
          <Box w="348.2254943847656px" h="72px">
            <Stack gap="8px" w="348.2254943847656px" h="72px">
              <Text
                fontFamily="body"
                fontWeight="500"
                fontSize="4xl"
                lineHeight="44px"
                letterSpacing="0"
                color="#27272A"
                w="348.2254943847656px"
                h="40px"
                verticalAlign="middle"
              >
                Featured Collection
              </Text>
              <Text
                fontFamily="body"
                fontWeight="normal"
                fontSize="md"
                lineHeight="24px"
                letterSpacing="0"
                color="#52525B"
                w="348.2254943847656px"
                h="24px"
                verticalAlign="middle"
              >
                Our most coveted pieces this season
              </Text>
            </Stack>
          </Box>

          <LinkButton
            to="/products"
            size="xl"
            variant="solid"
            w="112px"
            h="48px"
            minW="48px"
            pt="2px"
            pb="2px"
            pl="5"
            rounded="l2"
            bg="#27272A"
          >
            <HStack gap="10px" align="center" justify="center">
              <Text
                fontFamily="body"
                fontWeight="500"
                fontSize="md"
                lineHeight="24px"
                letterSpacing="0"
                textAlign="center"
                color="#FFFFFF"
                w="62px"
                h="24px"
              >
                View All
              </Text>
              <Icon as={LuArrowRight} boxSize="20px" color="#FFFFFF" />
            </HStack>
          </LinkButton>
        </Flex>

        <Flex w="1240px" h="419px" gap="24px">
          <Box
            w="292px"
            h="419px"
            bg="#FFFFFF"
            rounded="l3"
            borderTopWidth="1px"
            borderTopColor="#E4E4E7"
          >
            <Box w="292px" h="175px" position="relative">
              <Image
                src="/images/bfd7e30703bbd5af758c3d7993692fd5b40f1159.jpg"
                alt="Featured item"
                w="292px"
                h="175px"
                objectFit="cover"
                roundedTop="l3"
              />
              <Button
                variant="solid"
                size="lg"
                position="absolute"
                top="10px"
                right="10px"
                w="85px"
                h="28px"
                minH="16px"
                gap="8px"
                rounded="l2"
                py="10px"
                px="10px"
                bg="#EF4444"
                color="#FFFFFF"
              >
                <Text
                  fontFamily="body"
                  fontWeight="normal"
                  fontSize="sm"
                  lineHeight="20px"
                  letterSpacing="0"
                  w="65px"
                  h="20px"
                >
                  Save 25%
                </Text>
              </Button>
            </Box>
            <Box w="292px" h="244px" pt="24px" pb="24px" pr="6" pl="6">
              <Stack w="244px" h="196px" gap="20px">
                <Stack w="244px" h="136px" gap="8px">
                  <Text
                    fontFamily="body"
                    fontWeight="500"
                    fontSize="lg"
                    lineHeight="28px"
                    letterSpacing="0"
                    color="#000000"
                    w="187px"
                    h="28px"
                  >
                    Cashmere Blend Coat
                  </Text>
                  <Text
                    fontFamily="body"
                    fontWeight="normal"
                    fontSize="sm"
                    lineHeight="20px"
                    letterSpacing="0"
                    color="#52525B"
                    w="244px"
                    h="60px"
                  >
                    A timeless coat crafted from a soft cashmere blend for warmth, comfort, and effortless elegance.
                  </Text>
                  <Text
                    fontFamily="body"
                    fontWeight="500"
                    fontSize="2xl"
                    lineHeight="32px"
                    letterSpacing="0"
                    color="#000000"
                    w="98px"
                    h="32px"
                  >
                    $389.00
                  </Text>
                </Stack>
                <HStack gap="8px">
                  <Button
                    size="md"
                    variant="solid"
                    w="90px"
                    h="40px"
                    minW="40px"
                    gap="8px"
                    rounded="l2"
                    pt="2px"
                    pb="2px"
                    px="4"
                    bg="#18181B"
                    color="#FFFFFF"
                  >
                    <Text
                      fontFamily="body"
                      fontWeight="normal"
                      fontSize="sm"
                      lineHeight="20px"
                      letterSpacing="0"
                      w="58px"
                      h="20px"
                    >
                      Buy now
                    </Text>
                  </Button>
                  <Button
                    size="md"
                    variant="ghost"
                    w="108px"
                    h="40px"
                    minW="40px"
                    gap="8px"
                    rounded="l2"
                    pt="2px"
                    pb="2px"
                    px="4"
                    color="#18181B"
                  >
                    <Text
                      fontFamily="body"
                      fontWeight="normal"
                      fontSize="sm"
                      lineHeight="20px"
                      letterSpacing="0"
                    >
                      Add to cart
                    </Text>
                  </Button>
                </HStack>
              </Stack>
            </Box>
          </Box>
          <Box
            w="292px"
            h="419px"
            bg="#FFFFFF"
            rounded="l3"
            borderTopWidth="1px"
            borderTopColor="#E4E4E7"
          >
            <Box w="292px" h="175px" position="relative">
              <Image
                src="/images/cd372093a3f1d750d38579c542ef2223c741f156.jpg"
                alt="Featured item"
                w="292px"
                h="175px"
                objectFit="cover"
                opacity="1"
                transform="rotate(0deg)"
                roundedTop="l3"
              />
              <Button
                variant="solid"
                size="lg"
                position="absolute"
                top="10px"
                right="10px"
                w="85px"
                h="28px"
                minH="16px"
                gap="8px"
                rounded="l2"
                py="10px"
                px="10px"
                bg="#EF4444"
                color="#FFFFFF"
              >
                <Text
                  fontFamily="body"
                  fontWeight="normal"
                  fontSize="sm"
                  lineHeight="20px"
                  letterSpacing="0"
                  w="65px"
                  h="20px"
                >
                  Save 25%
                </Text>
              </Button>
            </Box>
            <Box w="292px" h="244px" pt="24px" pb="24px" pr="6" pl="6">
              <Stack w="244px" h="196px" gap="20px">
                <Stack w="244px" h="136px" gap="8px">
                  <Text
                    fontFamily="body"
                    fontWeight="500"
                    fontSize="lg"
                    lineHeight="28px"
                    letterSpacing="0"
                    color="#000000"
                    w="187px"
                    h="28px"
                  >
                    Cashmere Blend Coat
                  </Text>
                  <Text
                    fontFamily="body"
                    fontWeight="normal"
                    fontSize="sm"
                    lineHeight="20px"
                    letterSpacing="0"
                    color="#52525B"
                    w="244px"
                    h="60px"
                  >
                    A timeless coat crafted from a soft cashmere blend for warmth, comfort, and effortless elegance.
                  </Text>
                  <Text
                    fontFamily="body"
                    fontWeight="500"
                    fontSize="2xl"
                    lineHeight="32px"
                    letterSpacing="0"
                    color="#000000"
                    w="98px"
                    h="32px"
                  >
                    $389.00
                  </Text>
                </Stack>
                <HStack gap="8px">
                  <Button
                    size="md"
                    variant="solid"
                    w="90px"
                    h="40px"
                    minW="40px"
                    gap="8px"
                    rounded="l2"
                    pt="2px"
                    pb="2px"
                    px="4"
                    bg="#18181B"
                    color="#FFFFFF"
                  >
                    <Text
                      fontFamily="body"
                      fontWeight="normal"
                      fontSize="sm"
                      lineHeight="20px"
                      letterSpacing="0"
                      w="58px"
                      h="20px"
                    >
                      Buy now
                    </Text>
                  </Button>
                  <Button
                    size="md"
                    variant="ghost"
                    w="108px"
                    h="40px"
                    minW="40px"
                    gap="8px"
                    rounded="l2"
                    pt="2px"
                    pb="2px"
                    px="4"
                    color="#18181B"
                  >
                    <Text
                      fontFamily="body"
                      fontWeight="normal"
                      fontSize="sm"
                      lineHeight="20px"
                      letterSpacing="0"
                    >
                      Add to cart
                    </Text>
                  </Button>
                </HStack>
              </Stack>
            </Box>
          </Box>
        </Flex>
      </Stack>
    </Box>
  )
}

export default FeaturedCollection
