import { Box, Stack, Text, HStack, Image } from "@chakra-ui/react"

const Testimonial = () => {
  return (
    <Box 
      w="1440px" 
      h="459.2px" 
      mx="auto" 
      px="100px" 
      py="40px" 
      bg="white" 
      opacity="1"
    >
      <Stack w="1240px" h="379.2px" gap="34px" align="center">
        {/* Header Text Layout */}
        <Stack w="1240px" h="72px" gap="8px" align="center">
          <Text
            w="1240px"
            h="40px"
            fontFamily="body"
            fontWeight="500"
            fontSize="4xl"
            lineHeight="44px"
            letterSpacing="0%"
            textAlign="center"
            verticalAlign="middle"
            color="var(--gray-800, #27272A)"
          >
            What Our Customers Say
          </Text>
          <Text
            w="1240px"
            h="24px"
            fontFamily="body"
            fontWeight="normal"
            fontSize="md"
            lineHeight="24px"
            letterSpacing="0%"
            textAlign="center"
            verticalAlign="middle"
            color="var(--gray-600, #52525B)"
          >
            Find your perfect style
          </Text>
        </Stack>

        {/* Testimonials Layout */}
        <HStack w="1240px" h="273.20001220703125px" gap="24px" align="flex-start">
          {/* First Testimonial */}
          <Box 
            w="397.3333435058594px" 
            h="273.20001220703125px" 
            bg="var(--gray-100, #F4F4F5)" 
            borderRadius="16px" 
            p="24px"
          >
            <Stack w="349.3333435058594px" h="225.1999969482422px" gap="12px">
              {/* Quote Vector */}
              <Box w="40px" h="40px" position="relative">
                <Image 
                  src="/images/Vector (2).png" 
                  alt="quote" 
                  w="11.666666030883789px" 
                  h="30px" 
                  position="absolute"
                  top="5px"
                  left="5px"
                />
                <Image 
                  src="/images/Vector (2).png" 
                  alt="quote" 
                  w="11.666666030883789px" 
                  h="30px" 
                  position="absolute"
                  top="5px"
                  left="23.33px"
                />
              </Box>

              {/* Rating */}
              <HStack w="128px" h="24px" gap="2px">
                <Image src="/images/star.png" alt="star" w="24px" h="24px" />
                <Image src="/images/star.png" alt="star" w="24px" h="24px" />
                <Image src="/images/star.png" alt="star" w="24px" h="24px" />
                <Image src="/images/star.png" alt="star" w="24px" h="24px" />
                <Image src="/images/star (1).png" alt="star" w="24px" h="24px" />
              </HStack>

              {/* Testimonies */}
              <Stack w="349.3333435058594px" h="137.1999969482422px" gap="26px">
                <Text
                  w="349.3333435058594px"
                  h="67.19999694824219px"
                  fontFamily="body"
                  fontWeight="normal"
                  fontSize="md"
                  lineHeight="24px"
                  letterSpacing="0%"
                  verticalAlign="middle"
                  color="var(--gray-900, #18181B)"
                >
                  "AURELIA has completely transformed my wardrobe. The quality and attention to detail is unmatched."
                </Text>

                {/* Testifier info */}
                <Stack w="94.57565307617188px" h="44px" gap="0">
                  <Text
                    w="94.57565307617188px"
                    h="24px"
                    fontFamily="body"
                    fontWeight="medium"
                    fontSize="sm"
                    lineHeight="20px"
                    letterSpacing="0%"
                    verticalAlign="middle"
                    color="var(--gray-950, #111111)"
                  >
                    Sarah M.
                  </Text>
                  <Text
                    w="94.57565307617188px"
                    h="20px"
                    fontFamily="body"
                    fontWeight="normal"
                    fontSize="sm"
                    lineHeight="20px"
                    letterSpacing="0%"
                    verticalAlign="middle"
                    color="var(--gray-500, #71717A)"
                  >
                    Fashion Editor
                  </Text>
                </Stack>
              </Stack>
            </Stack>
          </Box>

          {/* Second Testimonial */}
          <Box 
            w="397.3333435058594px" 
            h="273.20001220703125px" 
            bg="var(--gray-100, #F4F4F5)" 
            borderRadius="16px" 
            p="24px"
          >
            <Stack w="349.3333435058594px" h="225.1999969482422px" gap="12px">
              {/* Quote Vector */}
              <Box w="40px" h="40px" position="relative">
                <Image 
                  src="/images/Vector (2).png" 
                  alt="quote" 
                  w="11.666666030883789px" 
                  h="30px" 
                  position="absolute"
                  top="5px"
                  left="5px"
                />
                <Image 
                  src="/images/Vector (2).png" 
                  alt="quote" 
                  w="11.666666030883789px" 
                  h="30px" 
                  position="absolute"
                  top="5px"
                  left="23.33px"
                />
              </Box>

              {/* Rating */}
              <HStack w="128px" h="24px" gap="2px">
                <Image src="/images/star.png" alt="star" w="24px" h="24px" />
                <Image src="/images/star.png" alt="star" w="24px" h="24px" />
                <Image src="/images/star.png" alt="star" w="24px" h="24px" />
                <Image src="/images/star.png" alt="star" w="24px" h="24px" />
                <Image src="/images/star (1).png" alt="star" w="24px" h="24px" />
              </HStack>

              {/* Testimonies */}
              <Stack w="349.3333435058594px" h="137.1999969482422px" gap="26px">
                <Text
                  w="349.3333435058594px"
                  h="67.19999694824219px"
                  fontFamily="body"
                  fontWeight="normal"
                  fontSize="md"
                  lineHeight="24px"
                  letterSpacing="0%"
                  verticalAlign="middle"
                  color="var(--gray-900, #18181B)"
                >
                  "AURELIA has completely transformed my wardrobe. The quality and attention to detail is unmatched."
                </Text>

                {/* Testifier info */}
                <Stack w="94.57565307617188px" h="44px" gap="0">
                  <Text
                    w="94.57565307617188px"
                    h="24px"
                    fontFamily="body"
                    fontWeight="medium"
                    fontSize="sm"
                    lineHeight="20px"
                    letterSpacing="0%"
                    verticalAlign="middle"
                    color="var(--gray-950, #111111)"
                  >
                    Sarah M.
                  </Text>
                  <Text
                    w="94.57565307617188px"
                    h="20px"
                    fontFamily="body"
                    fontWeight="normal"
                    fontSize="sm"
                    lineHeight="20px"
                    letterSpacing="0%"
                    verticalAlign="middle"
                    color="var(--gray-500, #71717A)"
                  >
                    Fashion Editor
                  </Text>
                </Stack>
              </Stack>
            </Stack>
          </Box>

          {/* Third Testimonial */}
          <Box 
            w="397.3333435058594px" 
            h="273.20001220703125px" 
            bg="var(--gray-100, #F4F4F5)" 
            borderRadius="16px" 
            p="24px"
          >
            <Stack w="349.3333435058594px" h="225.1999969482422px" gap="12px">
              {/* Quote Vector */}
              <Box w="40px" h="40px" position="relative">
                <Image 
                  src="/images/Vector (2).png" 
                  alt="quote" 
                  w="11.666666030883789px" 
                  h="30px" 
                  position="absolute"
                  top="5px"
                  left="5px"
                />
                <Image 
                  src="/images/Vector (2).png" 
                  alt="quote" 
                  w="11.666666030883789px" 
                  h="30px" 
                  position="absolute"
                  top="5px"
                  left="23.33px"
                />
              </Box>

              {/* Rating */}
              <HStack w="128px" h="24px" gap="2px">
                <Image src="/images/star.png" alt="star" w="24px" h="24px" />
                <Image src="/images/star.png" alt="star" w="24px" h="24px" />
                <Image src="/images/star.png" alt="star" w="24px" h="24px" />
                <Image src="/images/star.png" alt="star" w="24px" h="24px" />
                <Image src="/images/star (1).png" alt="star" w="24px" h="24px" />
              </HStack>

              {/* Testimonies */}
              <Stack w="349.3333435058594px" h="137.1999969482422px" gap="26px">
                <Text
                  w="349.3333435058594px"
                  h="67.19999694824219px"
                  fontFamily="body"
                  fontWeight="normal"
                  fontSize="md"
                  lineHeight="24px"
                  letterSpacing="0%"
                  verticalAlign="middle"
                  color="var(--gray-900, #18181B)"
                >
                  "AURELIA has completely transformed my wardrobe. The quality and attention to detail is unmatched."
                </Text>

                {/* Testifier info */}
                <Stack w="94.57565307617188px" h="44px" gap="0">
                  <Text
                    w="94.57565307617188px"
                    h="24px"
                    fontFamily="body"
                    fontWeight="medium"
                    fontSize="sm"
                    lineHeight="20px"
                    letterSpacing="0%"
                    verticalAlign="middle"
                    color="var(--gray-950, #111111)"
                  >
                    Sarah M.
                  </Text>
                  <Text
                    w="94.57565307617188px"
                    h="20px"
                    fontFamily="body"
                    fontWeight="normal"
                    fontSize="sm"
                    lineHeight="20px"
                    letterSpacing="0%"
                    verticalAlign="middle"
                    color="var(--gray-500, #71717A)"
                  >
                    Fashion Editor
                  </Text>
                </Stack>
              </Stack>
            </Stack>
          </Box>
        </HStack>
      </Stack>
    </Box>
  )
}

export default Testimonial
