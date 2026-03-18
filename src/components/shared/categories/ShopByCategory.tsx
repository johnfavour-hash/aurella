import { Box, Stack, Flex, Text, HStack, Icon } from "@chakra-ui/react"
import LinkButton from "@components/shared/buttons/LinkButton"
import { LuArrowRight } from "react-icons/lu"

const ShopByCategory = () => {
  return (
    <Box w="1440px" h="561px" mx="auto" px="100px" py="40px" bg="white">
      <Stack w="1240px" h="481px" gap="29px">
        <Flex w="1240px" h="72px" justify="space-between">
          <Stack w="348.2254943847656px" h="72px" gap="8px">
            <Text
              fontFamily="body"
              fontWeight="500"
              fontSize="4xl"
              lineHeight="44px"
              letterSpacing="0"
              color="var(--gray-800, #27272A)"
              w="348.2254943847656px"
              h="40px"
              verticalAlign="middle"
            >
              Shop by Category
            </Text>
            <Text
              fontFamily="body"
              fontWeight="normal"
              fontSize="md"
              lineHeight="24px"
              letterSpacing="0"
              color="var(--gray-600, #52525B)"
              w="348.2254943847656px"
              h="24px"
              verticalAlign="middle"
            >
              Find your perfect style
            </Text>
          </Stack>
          <LinkButton
            to="/products"
            size="xl"
            variant="ghost"
            w="112px"
            h="48px"
            minW="48px"
            pt="2px"
            pb="2px"
            pl="5"
            rounded="l2"
          >
            <HStack gap="10px" align="center" justify="center">
              <Text
                fontFamily="body"
                fontWeight="500"
                fontSize="md"
                lineHeight="24px"
                letterSpacing="0"
                textAlign="center"
                color="var(--gray-fg, #27272A)"
                w="62px"
                h="24px"
              >
                View All
              </Text>
              <Icon as={LuArrowRight} boxSize="20px" color="var(--gray-fg, #27272A)" />
            </HStack>
          </LinkButton>
        </Flex>
        <Flex w="1240px" h="380px" gap="24px">
          {/* Category 1: Women */}
          <Box
            w="292px"
            h="380px"
            gap="10px"
            p="24px"
            borderRadius="l3"
            borderWidth="sm"
            borderColor="transparent"
            bgImage="url(/images/0ec5b5c9c95a72bdf603cdd8f8adaea558a3697a.jpg)"
            bgSize="cover"
            bgPos="center 2%"
            position="relative"
          >
            <Box
              position="absolute"
              top="0"
              left="0"
              w="full"
              h="full"
              borderRadius="l3"
              bg="linear-gradient(0deg, #111111 9.09%, rgba(17, 17, 17, 0) 54.08%)"
            />
            <Stack position="absolute" bottom="24px" left="24px" w="244px" h="52px">
              <Text
                fontFamily="body"
                fontWeight="medium"
                fontSize="xl"
                lineHeight="30px"
                letterSpacing="0"
                color="#FFFFFF"
                w="244px"
                h="32px"
                verticalAlign="middle"
              >
                Women
              </Text>
              <HStack>
                <Text
                  fontFamily="body"
                  fontWeight="normal"
                  fontSize="sm"
                  lineHeight="20px"
                  letterSpacing="0"
                  color="#FFFFFF"
                  w="200px"
                  h="20px"
                >
                  Shop Now
                </Text>
                <Icon as={LuArrowRight} boxSize="20px" color="#FFFFFF" />
              </HStack>
            </Stack>
          </Box>

          {/* Category 2: Men */}
          <Box
            w="292px"
            h="380px"
            gap="10px"
            p="24px"
            borderRadius="l3"
            borderWidth="sm"
            borderColor="transparent"
            bgImage="url(/images/bf861ef2f0673ea2df5e038b11ee87c04c72c51e.jpg)"
            bgSize="cover"
            bgPos="center 2%"
            position="relative"
          >
            <Box
              position="absolute"
              top="0"
              left="0"
              w="full"
              h="full"
              borderRadius="l3"
              bg="linear-gradient(0deg, #111111 9.09%, rgba(17, 17, 17, 0) 54.08%)"
            />
            <Stack position="absolute" bottom="24px" left="24px" w="244px" h="52px">
              <Text
                fontFamily="body"
                fontWeight="medium"
                fontSize="xl"
                lineHeight="30px"
                letterSpacing="0"
                color="#FFFFFF"
                w="244px"
                h="32px"
                verticalAlign="middle"
              >
                Men
              </Text>
              <HStack>
                <Text
                  fontFamily="body"
                  fontWeight="normal"
                  fontSize="sm"
                  lineHeight="20px"
                  letterSpacing="0"
                  color="#FFFFFF"
                  w="200px"
                  h="20px"
                >
                  Shop Now
                </Text>
                <Icon as={LuArrowRight} boxSize="20px" color="#FFFFFF" />
              </HStack>
            </Stack>
          </Box>

          {/* Category 3: Accessories */}
          <Box
            w="292px"
            h="380px"
            gap="10px"
            p="24px"
            borderRadius="l3"
            borderWidth="sm"
            borderColor="transparent"
            bgImage="url(/images/43ec64c90c127232007490d075bc52241ff62789.jpg)"
            bgSize="cover"
            bgPos="center 2%"
            position="relative"
          >
            <Box
              position="absolute"
              top="0"
              left="0"
              w="full"
              h="full"
              borderRadius="l3"
              bg="linear-gradient(0deg, #111111 9.09%, rgba(17, 17, 17, 0) 54.08%)"
            />
            <Stack position="absolute" bottom="24px" left="24px" w="244px" h="52px">
              <Text
                fontFamily="body"
                fontWeight="medium"
                fontSize="xl"
                lineHeight="30px"
                letterSpacing="0"
                color="#FFFFFF"
                w="244px"
                h="32px"
                verticalAlign="middle"
              >
                Accessories
              </Text>
              <HStack>
                <Text
                  fontFamily="body"
                  fontWeight="normal"
                  fontSize="sm"
                  lineHeight="20px"
                  letterSpacing="0"
                  color="#FFFFFF"
                  w="200px"
                  h="20px"
                >
                  Shop Now
                </Text>
                <Icon as={LuArrowRight} boxSize="20px" color="#FFFFFF" />
              </HStack>
            </Stack>
          </Box>

          {/* Category 4: Shoes */}
          <Box
            w="292px"
            h="380px"
            gap="10px"
            p="24px"
            borderRadius="l3"
            borderWidth="sm"
            borderColor="transparent"
            bgImage="url(/images/ba70c54c86de26deaec692791eb3ce0e96e33ac4.jpg)"
            bgSize="cover"
            bgPos="center 2%"
            position="relative"
          >
            <Box
              position="absolute"
              top="0"
              left="0"
              w="full"
              h="full"
              borderRadius="l3"
              bg="linear-gradient(0deg, #111111 9.09%, rgba(17, 17, 17, 0) 54.08%)"
            />
            <Stack position="absolute" bottom="24px" left="24px" w="244px" h="52px">
              <Text
                fontFamily="body"
                fontWeight="medium"
                fontSize="xl"
                lineHeight="30px"
                letterSpacing="0"
                color="#FFFFFF"
                w="244px"
                h="32px"
                verticalAlign="middle"
              >
                Shoes
              </Text>
              <HStack>
                <Text
                  fontFamily="body"
                  fontWeight="normal"
                  fontSize="sm"
                  lineHeight="20px"
                  letterSpacing="0"
                  color="#FFFFFF"
                  w="200px"
                  h="20px"
                >
                  Shop Now
                </Text>
                <Icon as={LuArrowRight} boxSize="20px" color="#FFFFFF" />
              </HStack>
            </Stack>
          </Box>
        </Flex>
      </Stack>
    </Box>
  )
}

export default ShopByCategory
