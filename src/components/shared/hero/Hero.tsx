import { Box, Container, Heading, Text, Stack, HStack, Icon, Grid, GridItem } from "@chakra-ui/react"
import LinkButton from "@components/shared/buttons/LinkButton"
import { LuTruck, LuRotateCcw, LuShieldCheck, LuZap, LuArrowRight } from "react-icons/lu"

const TrustItem = ({ icon, label }: { icon: React.ElementType; label: string }) => (
  <HStack gap="2">
    <Icon as={icon} />
    <Text fontSize="sm">{label}</Text>
  </HStack>
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

      <Container maxW="7xl" py="6">
        <Grid templateColumns={{ base: "repeat(2,1fr)", md: "repeat(4,1fr)" }} gap={{ base: "4", md: "6" }}>
          <GridItem>
            <TrustItem icon={LuTruck} label="Free Shipping" />
          </GridItem>
          <GridItem>
            <TrustItem icon={LuRotateCcw} label="Easy Returns" />
          </GridItem>
          <GridItem>
            <TrustItem icon={LuShieldCheck} label="Secure Payment" />
          </GridItem>
          <GridItem>
            <TrustItem icon={LuZap} label="Fast Delivery" />
          </GridItem>
        </Grid>
      </Container>
    </Box>
  )
}

export default Hero
