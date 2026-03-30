import { Box, Stack, Text, HStack, Input, Button, Icon } from "@chakra-ui/react"
import { LuArrowRight } from "react-icons/lu"

const Subscribe = () => {
  return (
    <Box
      w="full" maxW="1440px"
      h="416px"
      mx="auto"
      px="436px"
      py="116px"
      bg="var(--gray-950, #111111)"
      opacity="1"
    >
      <Stack w="568px" h="184px" gap="32px" align="center">
        {/* Inner layout for text */}
        <Stack w="568px" h="104px" gap="16px" align="center">
          <Text
            w="568px"
            h="40px"
            fontFamily="body"
            fontWeight="500"
            fontSize="4xl"
            lineHeight="44px"
            letterSpacing="0%"
            textAlign="center"
            verticalAlign="middle"
            color="#FFFFFF"
          >
            Join the AURELIA World
          </Text>
          <Text
            w="568px"
            h="48px"
            fontFamily="body"
            fontWeight="normal"
            fontSize="md"
            lineHeight="24px"
            letterSpacing="0%"
            textAlign="center"
            verticalAlign="middle"
            color="var(--gray-50, #FAFAFA)"
          >
            Subscribe for exclusive access to new collections, style inspiration, and members-only offers.
          </Text>
        </Stack>

        {/* Form Layout */}
        <HStack w="465px" h="48px" gap="16px">
          <Input
            w="301px"
            h="48px"
            variant="outline"
            size="xl"
            placeholder="Your email address"
            bg="transparent"
            color="white"
            borderColor="whiteAlpha.400"
            _placeholder={{ color: "whiteAlpha.600" }}
            rounded="l2"
          />
          <Button
            w="148px"
            h="48px"
            minW="48px"
            gap="10px"
            rounded="l2"
            pt="2px"
            pb="2px"
            px="5"
            bg="#FFFFFF"
            variant="solid"
            _hover={{ bg: "gray.100" }}
          >
            <HStack gap="10px" align="center" justify="center">
              <Text
                w="78px"
                h="24px"
                fontFamily="body"
                fontWeight="500"
                fontSize="md"
                lineHeight="24px"
                letterSpacing="0%"
                textAlign="center"
                color="#09090B"
              >
                Subscribe
              </Text>
              <Icon as={LuArrowRight} boxSize="20px" color="#09090B" />
            </HStack>
          </Button>
        </HStack>
      </Stack>
    </Box>
  )
}

export default Subscribe
