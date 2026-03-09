import { Box, Heading, Text, Stack, HStack, Icon } from "@chakra-ui/react"
import LinkButton from "@components/shared/buttons/LinkButton"
import { LuTruck, LuRotateCcw, LuShieldCheck, LuClock, LuArrowRight } from "react-icons/lu"

 

const FreeShippingItem = () => (
  <Box w="168.18939208984375px" h="56px" p="10px">
    <HStack w="148.18939208984375px" h="36px" gap="8px">
      <Box position="relative" w="20px" h="16px">
        <Icon as={LuTruck} position="absolute" top="4px" left="2px" boxSize="16px" />
      </Box>
      <Box w="116.18939208984375px" h="36px">
        <Text
          fontFamily="body"
          fontWeight="medium"
          fontSize="sm"
          lineHeight="20px"
          letterSpacing="0"
          color="#18181B"
          w="116.18939208984375px"
          h="20px"
        >
          Free Shipping
        </Text>
        <Text
          fontFamily="body"
          fontWeight="normal"
          fontSize="xs"
          lineHeight="16px"
          letterSpacing="0"
          color="#71717A"
          w="116.18939208984375px"
          h="16px"
        >
          On orders over $100
        </Text>
      </Box>
    </HStack>
  </Box>
)

const EasyReturnsItem = () => (
  <Box w="168.13931274414062px" h="56px" p="10px">
    <HStack w="148.13931274414062px" h="36px" gap="8px">
      <Box w="24px" h="24px" display="flex" alignItems="center" justifyContent="center">
        <Icon as={LuRotateCcw} boxSize="24px" />
      </Box>
      <Box w="116.13931274414062px" h="36px">
        <Text
          fontFamily="body"
          fontWeight="medium"
          fontSize="sm"
          lineHeight="20px"
          letterSpacing="0"
          color="#18181B"
          w="116.13931274414062px"
          h="20px"
        >
          Easy Returns
        </Text>
        <Text
          fontFamily="body"
          fontWeight="normal"
          fontSize="xs"
          lineHeight="16px"
          letterSpacing="0"
          color="#71717A"
          w="116.13931274414062px"
          h="16px"
        >
          30-day return policy
        </Text>
      </Box>
    </HStack>
  </Box>
)

const SecurePaymentItem = () => (
  <Box w="197.8929443359375px" h="56px" p="10px">
    <HStack w="177.8929443359375px" h="36px" gap="8px">
      <Box w="24px" h="24px" display="flex" alignItems="center" justifyContent="center">
        <Icon as={LuShieldCheck} boxSize="24px" />
      </Box>
      <Box w="145.8929443359375px" h="36px">
        <Text
          fontFamily="body"
          fontWeight="medium"
          fontSize="sm"
          lineHeight="20px"
          letterSpacing="0"
          color="#18181B"
          w="145.8929443359375px"
          h="20px"
        >
          Secure Payment
        </Text>
        <Text
          fontFamily="body"
          fontWeight="normal"
          fontSize="xs"
          lineHeight="16px"
          letterSpacing="0"
          color="#71717A"
          w="145.8929443359375px"
          h="16px"
        >
          100% protected checkout
        </Text>
      </Box>
    </HStack>
  </Box>
)

const FastDeliveryItem = () => (
  <Box w="156.50115966796875px" h="56px" p="10px">
    <HStack w="136.50115966796875px" h="36px" gap="8px">
      <Box w="24px" h="24px" display="flex" alignItems="center" justifyContent="center">
        <Icon as={LuClock} boxSize="24px" />
      </Box>
      <Box w="104.50115203857422px" h="36px">
        <Text
          fontFamily="body"
          fontWeight="medium"
          fontSize="sm"
          lineHeight="20px"
          letterSpacing="0"
          color="#18181B"
          w="104.50115203857422px"
          h="20px"
        >
          Fast Delivery
        </Text>
        <Text
          fontFamily="body"
          fontWeight="normal"
          fontSize="xs"
          lineHeight="16px"
          letterSpacing="0"
          color="#71717A"
          w="104.50115203857422px"
          h="16px"
        >
          2-5 business days
        </Text>
      </Box>
    </HStack>
  </Box>
)

const Hero = () => {
  return (
    <Box>
      <Box
        position="relative"
        bgImage="url(/images/20aed06fe87a3feca6bb5089fd033be3b5df8e6e.jpg)"
        bgSize="cover"
        bgPos="center"
        height={{ base: "auto", md: "810px" }}
        mt={{ base: "0", md: "-4px" }}
        color="white"
      >
        <Box
          position="absolute"
          top="0"
          left="0"
          w={{ base: "full", md: "1440px" }}
          h={{ base: "100%", md: "810px" }}
          mx={{ md: "auto" }}
          pointerEvents="none"
          zIndex="0"
          style={{
            background:
              "linear-gradient(90deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.3) 50%, rgba(0, 0, 0, 0) 100%)",
          }}
        />
        <Box
          position={{ base: "static", md: "absolute" }}
          top={{ md: "263px" }}
          left={{ md: "100px" }}
          width={{ md: "456px" }}
          height={{ md: "284px" }}
          opacity="1"
          zIndex="1"
        >
          <Stack gap={{ base: "4", md: "40px" }}>
            <Heading
              as="h1"
              fontFamily="'Crimson Pro', serif"
              fontWeight="500"
              fontSize={{ base: "48px", md: "96px" }}
              lineHeight={{ base: "1", md: "0.8" }}
              letterSpacing={{ base: "-0.015em", md: "-0.03em" }}
              width={{ md: "456px" }}
              height={{ md: "140px" }}
            >
              <Box as="span" display="block">Own Your</Box>
              <Box as="span" display="block" fontWeight="700">Presence</Box>
            </Heading>
            <Text fontSize={{ base: "md", md: "lg" }}>
              Modern silhouettes. Elevated essentials.
            </Text>
            <HStack gap="4">
              <LinkButton
                to="/products"
                size="xl"
                variant="solid"
                colorPalette="gray"
                w="123px"
                h="48px"
                minW="48px"
                pt="2px"
                pb="2px"
                px="5"
                rounded="l2"
                bg="#FFFFFF"
                transition="all 300ms linear"
              >
                <HStack gap="10px" align="center" justify="center">
                  <Text
                    fontFamily="body"
                    fontWeight="500"
                    fontSize="md"
                    lineHeight="24px"
                    letterSpacing="0"
                    textAlign="center"
                    color="#09090B"
                    w="53px"
                    h="24px"
                  >
                    Shop
                  </Text>
                  <Icon as={LuArrowRight} boxSize="20px" />
                </HStack>
              </LinkButton>
            </HStack>
          </Stack>
        </Box>
      </Box>

      <Box
        w="1440px"
        h="117px"
        mx="auto"
        px="100px"
        py="24px"
        bg="#F4F4F5"
        borderWidth="1px"
        borderColor="#E4E4E7"
      >
        <HStack gap="133px">
          <FreeShippingItem />
          <EasyReturnsItem />
          <SecurePaymentItem />
          <FastDeliveryItem />
        </HStack>
      </Box>
    </Box>
  )
}

export default Hero
