import { Box, Stack, Text, Icon, Button } from "@chakra-ui/react"
import { LuArrowRight } from "react-icons/lu"

const LimitedTimeOffer = () => {
  return (
    <Box 
      w="1440px" 
      h="640px" 
      mx="auto" 
      position="relative" 
      opacity="1"
      bgImage="url(/images/c656c57cb17dc87186c307cbc07986f3adbf2e12.jpg)"
      bgSize="cover"
      bgPos="center 15%"
    >
      {/* Overlay */}
      <Box 
        position="absolute" 
        top="0" 
        left="0" 
        w="full" 
        h="full" 
        bg="#00000066" 
      />

      {/* Content Layout */}
      <Stack 
        position="absolute" 
        top="206px" 
        left="505px" 
        w="430.3775634765625px" 
        h="224px" 
        gap="24px" 
        align="center"
      >
        {/* Inner Text Layout */}
        <Stack w="430.3775634765625px" h="152px" gap="10px" align="center">
          <Text
            w="430.3775634765625px"
            h="20px"
            fontFamily="body"
            fontWeight="normal"
            fontSize="sm"
            lineHeight="20px"
            letterSpacing="32%"
            textAlign="center"
            verticalAlign="middle"
            color="#FFFFFF"
          >
            LIMITED TIME OFFER
          </Text>
          <Text
            w="430.3775634765625px"
            h="60px"
            fontFamily="body"
            fontWeight="normal"
            fontSize="6xl"
            lineHeight="72px"
            letterSpacing="-0.4px"
            textAlign="center"
            verticalAlign="middle"
            color="#FFFFFF"
          >
            Up to 40% Off
          </Text>
          <Text
            w="406.95001220703125px"
            h="52px"
            fontFamily="body"
            fontWeight="normal"
            fontSize="lg"
            lineHeight="28px"
            letterSpacing="0%"
            textAlign="center"
            verticalAlign="middle"
            color="#FFFFFF"
          >
            Shop our end-of-season sale for incredible savings on your favorite pieces.
          </Text>
        </Stack>

        {/* Button */}
        <Button
          w="176px"
          h="48px"
          minW="48px"
          gap="10px"
          rounded="l2"
          pt="2px"
          pb="2px"
          px="5"
          bg="#FFFFFF"
          _hover={{ bg: "gray.100" }}
          variant="solid"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Text
            w="106px"
            h="24px"
            fontFamily="body"
            fontWeight="500"
            fontSize="md"
            lineHeight="24px"
            letterSpacing="0%"
            textAlign="center"
            color="#09090B"
          >
            Shop the Sale
          </Text>
          <Icon as={LuArrowRight} boxSize="20px" color="#09090B" />
        </Button>
      </Stack>
    </Box>
  )
}

export default LimitedTimeOffer
