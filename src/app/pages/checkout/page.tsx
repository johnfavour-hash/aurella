import { Box, Stack, Text, HStack, Input, FormControl, FormLabel, InputGroup } from "@chakra-ui/react"
import { ChevronRight } from "lucide-react"

const CheckoutPage = () => {
  return (
    <Box
      w="1440px"
      h="2655.776123046875px"
      mx="auto"
      display="flex"
      flexDirection="column"
    >
      {/* Breadcrumb Navigation */}
      <Box
        w="1440px"
        h="146.6650390625px"
        bg="var(--whiteAlpha-0, #FFFFFF)"
        pt="24px"
        pr="100px"
        pb="24px"
        pl="100px"
      >
        <Box w="1240px" h="98.6650390625px" display="flex" alignItems="center">
          {/* Breadcrumb Items */}
          <HStack gap="40px" w="full">
            {/* Home */}
            <HStack gap="8px" w="64px" h="20.665000915527344px">
              <Text
                w="40px"
                h="20px"
                fontFamily="Inter"
                fontWeight="400"
                fontSize="14px"
                lineHeight="20px"
                letterSpacing="0%"
                verticalAlign="middle"
                color="var(--gray-500, #71717A)"
              >
                Home
              </Text>
              <Box
                w="4px"
                h="8px"
                borderWidth="1.33px"
                borderColor="var(--gray-500, #71717A)"
                transform="rotate(90deg)"
                top="4px"
                pos="relative"
              >
                <ChevronRight size={8} />
              </Box>
            </HStack>

            {/* Shop */}
            <HStack gap="8px" w="59px" h="20.665000915527344px">
              <Text
                w="35px"
                h="20px"
                fontFamily="Inter"
                fontWeight="400"
                fontSize="14px"
                lineHeight="20px"
                letterSpacing="0%"
                verticalAlign="middle"
                color="var(--gray-500, #71717A)"
                cursor="pointer"
              >
                Shop
              </Text>
              <Box
                w="4px"
                h="8px"
                borderWidth="1.33px"
                borderColor="var(--gray-500, #71717A)"
                transform="rotate(90deg)"
                top="4px"
                pos="relative"
              >
                <ChevronRight size={8} />
              </Box>
            </HStack>

            {/* Checkout */}
            <HStack gap="8px" w="88px" h="20.665000915527344px">
              <Text
                w="64px"
                h="20px"
                fontFamily="Inter"
                fontWeight="400"
                fontSize="14px"
                lineHeight="20px"
                letterSpacing="0%"
                verticalAlign="middle"
                color="var(--gray-500, #71717A)"
              >
                Checkout
              </Text>
            </HStack>
          </HStack>
        </Box>
      </Box>

      {/* Checkout Heading */}
      <Text
        w="1240px"
        h="38px"
        fontFamily="body"
        fontWeight="600"
        fontSize="3xl"
        lineHeight="38px"
        letterSpacing="0%"
        verticalAlign="middle"
        color="var(--gray-900, #18181B)"
        px="100px"
        mb="48px"
      >
        Checkout
      </Text>

      {/* Main Content Layout */}
      <Box
        w="1240px"
        h="1561.111083984375px"
        gap="48px"
        px="100px"
        display="flex"
        flexDirection="column"
      >
        {/* Contact Information Section */}
        <Box
          w="710.3900146484375px"
          h="190px"
          borderRadius="8px"
          p="32px"
          gap="24px"
          display="flex"
          flexDirection="column"
          bg="var(--whiteAlpha-0, #FFFFFF)"
          border="1px solid var(--border-default, #E4E4E7)"
        >
          {/* Contact Information Heading */}
          <Text
            w="646.3900146484375px"
            h="28px"
            fontFamily="body"
            fontWeight="600"
            fontSize="lg"
            lineHeight="28px"
            letterSpacing="0%"
            verticalAlign="middle"
            color="#111827"
            mb="4px"
          >
            Contact Information
          </Text>

          {/* Email Input */}
          <FormControl>
            <FormLabel
              fontSize="sm"
              fontWeight="medium"
              color="var(--fg-default, #000000)"
              mb="6px"
              h="20px"
              w="94px"
            >
              Email address
            </FormLabel>
            <InputGroup>
              <Input
                type="email"
                placeholder="example@gmail.com"
                w="646.3900146484375px"
                h="48px"
                borderRadius="var(--radii-l2, 8px)"
                px="var(--spacing-4_5, 12px)"
                py="10px"
                border="1px solid var(--border-default, #E4E4E7)"
                fontFamily="body"
                fontWeight="normal"
                fontSize="md"
                lineHeight="24px"
                letterSpacing="0%"
                color="var(--fg-subtle, #A1A1AA)"
                _placeholder={{
                  color: "var(--fg-subtle, #A1A1AA)",
                }}
              />
            </InputGroup>
          </FormControl>
        </Box>
      </Box>
    </Box>
  )
}

export default CheckoutPage
