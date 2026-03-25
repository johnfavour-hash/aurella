import { Box, Text, HStack, Input, Field, Checkbox, Button, Image, Stack, Icon, Flex } from "@chakra-ui/react"
import { FiChevronRight } from "react-icons/fi"
import { LuArrowRight } from "react-icons/lu"
import { FaLinkedinIn, FaFacebookF, FaTwitter } from "react-icons/fa"
import { Link } from "react-router"
import { useState } from "react"

const CheckoutPage = () => {
  const [selectedPayment, setSelectedPayment] = useState("credit-card")
  const [cardNumber, setCardNumber] = useState("")
  const [expiryDate, setExpiryDate] = useState("")
  const [cvc, setCvc] = useState("")

  const total = "$318.60"

  const paymentOptions = [
    { id: "credit-card", label: "Credit Card", icon: "/images/SVG (2).png" },
    { id: "paystack", label: "Paystack", icon: null },
    { id: "paypal", label: "PayPal", icon: null },
    { id: "apple-pay", label: "Apple Pay", icon: null },
  ]

  const handlePlaceOrder = () => {
    console.log("Place Order clicked", {
      paymentMethod: selectedPayment,
      cardNumber,
      expiryDate,
      cvc,
    })
  }
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
          <HStack gap="40px" w="full" flexWrap="nowrap">
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
                top="-3px"
                pos="relative"
              >
                <FiChevronRight size={12} />
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
                top="-4px"
                pos="relative"
              >
                <FiChevronRight size={12} />
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
              <Box
                w="4px"
                h="8px"
                top="-4px"
                pos="relative"
              >
                <FiChevronRight size={12} />
              </Box>
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
        h="auto"
        gap="48px"
        pl="100px"
        pr="100px"
        pb="80px"
        display="flex"
        flexDirection="row"
        mx="auto"
      >
        {/* Left Column - Forms */}
        <Box
          w="710.3900146484375px"
          h="auto"
          gap="48px"
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
          <Field.Root>
            <Field.Label
              fontSize="sm"
              fontWeight="medium"
              color="var(--fg-default, #000000)"
              mb="6px"
              h="20px"
              w="94px"
            >
              Email address
            </Field.Label>
            <Input
              type="email"
              placeholder="example@gmail.com"
              w="646.3900146484375px"
              h="48px"
              borderRadius="8px"
              px="12px"
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
          </Field.Root>
        </Box>

        {/* Shipping Address Section */}
        <Box
          w="710.3900146484375px"
          h="472px"
          borderRadius="8px"
          p="32px"
          gap="24px"
          display="flex"
          flexDirection="column"
          bg="var(--whiteAlpha-0, #FFFFFF)"
          border="1px solid var(--border-default, #E4E4E7)"
        >
          {/* Shipping Address Heading */}
          <Text
            w="646.3900146484375px"
            h="28px"
            fontFamily="body"
            fontWeight="600"
            fontSize="lg"
            lineHeight="28px"
            letterSpacing="0%"
            verticalAlign="middle"
            color="var(--gray-900, #18181B)"
          >
            Shipping Address
          </Text>

          {/* Form Fields Container */}
          <Box w="646.3900146484375px" h="356px" display="flex" flexDirection="column" gap="20px">
            {/* First Name and Last Name Row */}
            <HStack w="646.2900390625px" h="74px" gap="20px" justify="space-between">
              {/* First Name */}
              <Box w="315px" h="74px" display="flex" flexDirection="column" gap="6px">
                <Text
                  w="71px"
                  h="20px"
                  fontFamily="body"
                  fontWeight="medium"
                  fontSize="sm"
                  lineHeight="20px"
                  letterSpacing="0%"
                  color="var(--fg-default, #000000)"
                >
                  First name
                </Text>
                <Input
                  type="text"
                  placeholder="enter first name"
                  w="315px"
                  h="48px"
                  borderRadius="8px"
                  px="12px"
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
              </Box>

              {/* Last Name */}
              <Box w="315px" h="74px" display="flex" flexDirection="column" gap="6px">
                <Text
                  w="70px"
                  h="20px"
                  fontFamily="body"
                  fontWeight="medium"
                  fontSize="sm"
                  lineHeight="20px"
                  letterSpacing="0%"
                  color="var(--fg-default, #000000)"
                >
                  Last name
                </Text>
                <Input
                  type="text"
                  placeholder="enter last name"
                  w="315px"
                  h="48px"
                  borderRadius="8px"
                  px="12px"
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
              </Box>
            </HStack>

            {/* Address Field */}
            <Box w="646.2900390625px" h="74px" display="flex" flexDirection="column" gap="6px">
              <Text
                w="56px"
                h="20px"
                fontFamily="body"
                fontWeight="medium"
                fontSize="sm"
                lineHeight="20px"
                letterSpacing="0%"
                color="var(--fg-default, #000000)"
              >
                Address
              </Text>
              <Input
                type="text"
                placeholder="enter your address"
                w="646.2900390625px"
                h="48px"
                borderRadius="8px"
                px="12px"
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
            </Box>

            {/* City and State Row */}
            <HStack w="646.2900390625px" h="74px" gap="20px" justify="space-between">
              {/* City */}
              <Box w="315px" h="74px" display="flex" flexDirection="column" gap="6px">
                <Text
                  w="27px"
                  h="20px"
                  fontFamily="body"
                  fontWeight="medium"
                  fontSize="sm"
                  lineHeight="20px"
                  letterSpacing="0%"
                  color="var(--fg-default, #000000)"
                >
                  City
                </Text>
                <Input
                  type="text"
                  placeholder="enter city"
                  w="315px"
                  h="48px"
                  borderRadius="8px"
                  px="12px"
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
              </Box>

              {/* State */}
              <Box w="315px" h="74px" display="flex" flexDirection="column" gap="6px">
                <Text
                  w="36px"
                  h="20px"
                  fontFamily="body"
                  fontWeight="medium"
                  fontSize="sm"
                  lineHeight="20px"
                  letterSpacing="0%"
                  color="var(--fg-default, #000000)"
                >
                  State
                </Text>
                <Input
                  type="text"
                  placeholder="enter state"
                  w="315px"
                  h="48px"
                  borderRadius="8px"
                  px="12px"
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
              </Box>
            </HStack>

            {/* ZIP Code and Phone Row */}
            <HStack w="646.2900390625px" h="74px" gap="20px" justify="space-between">
              {/* ZIP Code */}
              <Box w="315px" h="74px" display="flex" flexDirection="column" gap="6px">
                <Text
                  w="59px"
                  h="20px"
                  fontFamily="body"
                  fontWeight="medium"
                  fontSize="sm"
                  lineHeight="20px"
                  letterSpacing="0%"
                  color="var(--fg-default, #000000)"
                >
                  ZIP code
                </Text>
                <Input
                  type="text"
                  placeholder="enter ZIP code"
                  w="315px"
                  h="48px"
                  borderRadius="8px"
                  px="12px"
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
              </Box>

              {/* Phone */}
              <Box w="315px" h="74px" display="flex" flexDirection="column" gap="6px">
                <Text
                  w="43px"
                  h="20px"
                  fontFamily="body"
                  fontWeight="medium"
                  fontSize="sm"
                  lineHeight="20px"
                  letterSpacing="0%"
                  color="var(--fg-default, #000000)"
                >
                  Phone
                </Text>
                <Input
                  type="tel"
                  placeholder="enter phone number"
                  w="315px"
                  h="48px"
                  borderRadius="8px"
                  px="12px"
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
              </Box>
            </HStack>
          </Box>
        </Box>

        {/* Billing Address Section */}
        <Box
          w="710.3900146484375px"
          h="136px"
          borderRadius="8px"
          p="32px"
          gap="24px"
          display="flex"
          flexDirection="column"
          bg="#FFFFFF"
          border="1px solid var(--border-default, #E4E4E7)"
        >
          {/* Billing Address Heading */}
          <Text
            w="646.3900146484375px"
            h="28px"
            fontFamily="body"
            fontWeight="600"
            fontSize="lg"
            lineHeight="28px"
            letterSpacing="0%"
            verticalAlign="middle"
            color="var(--gray-900, #18181B)"
          >
            Billing Address
          </Text>

          {/* Same as Shipping Address Checkbox */}
          <HStack w="646.3900146484375px" h="20px" gap="0px" align="center">
            <Checkbox.Root
              size="sm"
              defaultChecked
            >
              <Checkbox.Control 
                w="16px" 
                h="16px"
                borderRadius="4px"
                bg="var(--gray-solid, #18181B)"
              >
                <Checkbox.Indicator color="white" />
              </Checkbox.Control>
            </Checkbox.Root>
            <Text
              w="176px"
              h="20px"
              fontFamily="body"
              fontWeight="medium"
              fontSize="sm"
              lineHeight="20px"
              letterSpacing="0%"
              color="var(--fg-default, #000000)"
              pl="8px"
            >
              Same as shipping address
            </Text>
          </HStack>
        </Box>

        {/* Payment Method Section */}
        <Box
          w="710.3900146484375px"
          h="auto"
          borderRadius="8px"
          p="32px"
          gap="24px"
          display="flex"
          flexDirection="column"
          bg="#FFFFFF"
          border="1px solid var(--border-default, #E4E4E7)"
        >
          {/* Payment Method Heading */}
          <Text
            w="646.3900146484375px"
            h="28px"
            fontFamily="body"
            fontWeight="600"
            fontSize="lg"
            lineHeight="28px"
            letterSpacing="0%"
            verticalAlign="middle"
            color="var(--gray-900, #18181B)"
            mb="8px"
          >
            Payment Method
          </Text>

          {/* Payment Options */}
          <Box
            w="646.3900146484375px"
            h="auto"
            gap="12px"
            display="flex"
            flexDirection="column"
            borderTop="1px solid var(--border-default, #E4E4E7)"
            pt="12px"
          >
            {paymentOptions.map((option) => (
              <Box
                key={option.id}
                w="646.3900146484375px"
                h="auto"
                minH="53.77777862548828px"
                gap="8px"
                p="10px 12px"
                borderRadius="8px"
                border={
                  selectedPayment === option.id
                    ? "1px solid var(--gray-solid, #18181B)"
                    : "1px solid var(--border-default, #E4E4E7)"
                }
                bg={
                  selectedPayment === option.id
                    ? "var(--whiteAlpha-50, rgba(255, 255, 255, 0.5))"
                    : "transparent"
                }
                display="flex"
                alignItems="center"
                cursor="pointer"
                transition="all 0.2s"
                onClick={() => setSelectedPayment(option.id)}
                _hover={{
                  borderColor: "var(--gray-solid, #18181B)",
                }}
              >
                {/* Radio Circle */}
                <Box
                  w="16px"
                  h="16px"
                  borderRadius="full"
                  border={
                    selectedPayment === option.id
                      ? "1px solid var(--gray-solid, #18181B)"
                      : "1px solid var(--border-default, #E4E4E7)"
                  }
                  bg={
                    selectedPayment === option.id
                      ? "var(--gray-solid, #18181B)"
                      : "white"
                  }
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  mr="8px"
                  flexShrink={0}
                >
                  {selectedPayment === option.id && (
                    <Box w="8px" h="8px" borderRadius="full" bg="white" />
                  )}
                </Box>

                {/* Option Content */}
                <HStack gap="12px" w="auto" flex={1}>
                  {option.icon && (
                    <Image
                      src={option.icon}
                      alt={option.label}
                      w="20px"
                      h="20px"
                    />
                  )}
                  <Text
                    fontFamily="body"
                    fontWeight="medium"
                    fontSize="sm"
                    lineHeight="20px"
                    color="var(--fg-default, #000000)"
                  >
                    {option.label}
                  </Text>
                </HStack>
              </Box>
            ))}
          </Box>

          {/* Credit Card Form Fields - Only show when credit card is selected */}
          {selectedPayment === "credit-card" && (
            <Box
              w="646.3900146484375px"
              h="auto"
              gap="16px"
              display="flex"
              flexDirection="column"
            >
              {/* Card Number Field */}
              <Box w="646.3900146484375px" h="auto" display="flex" flexDirection="column" gap="6px">
                <Text
                  w="auto"
                  h="20px"
                  fontFamily="body"
                  fontWeight="medium"
                  fontSize="sm"
                  lineHeight="20px"
                  letterSpacing="0%"
                  color="var(--fg-default, #000000)"
                >
                  Card number
                </Text>
                <Input
                  type="text"
                  placeholder="1234 5678 9012 3456"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                  w="646.3900146484375px"
                  h="48px"
                  borderRadius="8px"
                  px="12px"
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
              </Box>

              {/* Expiry Date and CVC Row */}
              <HStack w="646.3900146484375px" h="auto" gap="20px" justify="space-between">
                {/* Expiry Date Field */}
                <Box w="315px" h="auto" display="flex" flexDirection="column" gap="6px">
                  <Text
                    w="auto"
                    h="20px"
                    fontFamily="body"
                    fontWeight="medium"
                    fontSize="sm"
                    lineHeight="20px"
                    letterSpacing="0%"
                    color="var(--fg-default, #000000)"
                  >
                    Expiry date
                  </Text>
                  <Input
                    type="text"
                    placeholder="MM/YY"
                    value={expiryDate}
                    onChange={(e) => setExpiryDate(e.target.value)}
                    w="315px"
                    h="48px"
                    borderRadius="8px"
                    px="12px"
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
                </Box>

                {/* CVC Field */}
                <Box w="315px" h="auto" display="flex" flexDirection="column" gap="6px">
                  <Text
                    w="auto"
                    h="20px"
                    fontFamily="body"
                    fontWeight="medium"
                    fontSize="sm"
                    lineHeight="20px"
                    letterSpacing="0%"
                    color="var(--fg-default, #000000)"
                  >
                    CVC
                  </Text>
                  <Input
                    type="text"
                    placeholder="123"
                    value={cvc}
                    onChange={(e) => setCvc(e.target.value)}
                    w="315px"
                    h="48px"
                    borderRadius="8px"
                    px="12px"
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
                </Box>
              </HStack>
            </Box>
          )}
        </Box>

        {/* Place Order Button Section */}
        <Box
          w="710.3900146484375px"
          h="auto"
          gap="12px"
          display="flex"
          flexDirection="column"
        >
          <Button
            w="full"
            h="64px"
            bg="var(--gray-solid, #18181B)"
            color="var(--gray-contrast, #FFFFFF)"
            fontFamily="body"
            fontWeight="medium"
            fontSize="lg"
            lineHeight="28px"
            textAlign="center"
            borderRadius="8px"
            p="2px 28px"
            onClick={handlePlaceOrder}
            _hover={{
              opacity: 0.9,
            }}
          >
            Place Order — {total}
          </Button>

          {/* Security Message */}
          <HStack w="full" h="20px" gap="8px" justify="center" align="center">
            <Image
              src="/images/SVG (3).png"
              alt="Secure"
              w="16px"
              h="16px"
            />
            <Text
              fontFamily="body"
              fontWeight="normal"
              fontSize="sm"
              lineHeight="20px"
              letterSpacing="0%"
              textAlign="center"
              verticalAlign="middle"
              color="var(--gray-600, #52525B)"
            >
              Your payment info is secure and encrypted
            </Text>
          </HStack>
        </Box>
      </Box>

      {/* Subscribe and Footer Combined Section */}
      <Box
        w="1440px"
        h="868px"
        display="flex"
        flexDirection="column"
        opacity="1"
        mt="72px"
      >
        {/* Subscribe Section */}
        <Box 
          w="1440px" 
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

        {/* Footer Section */}
        <Box 
          w="1440px" 
          h="452px" 
          mx="auto" 
          px="100px" 
          py="40px" 
          bg="white" 
          opacity="1"
        >
          <Stack w="1240px" h="332px" gap="34px">
            {/* Main Footer Content Area */}
            <Stack w="1240px" h="278px" gap="34px" opacity="1">
              {/* Horizontal Divider above the 208px layout */}
              <Box 
                w="1240px" 
                h="1px" 
                bg="var(--gray-200, #E4E4E7)" 
                opacity="1" 
              />
              
              <HStack w="1240px" h="208px" gap="200px" align="flex-start">
                {/* Logo and Icons Section */}
                <Stack w="266px" h="156.6px" gap="28px">
                  <Stack gap="12px">
                    <Text
                      w="266px"
                      h="28.8px"
                      fontFamily="body"
                      fontWeight="normal"
                      fontSize="2xl"
                      lineHeight="32px"
                      letterSpacing="0%"
                      verticalAlign="middle"
                      color="#111827"
                    >
                      AURELIA
                    </Text>
                    <Text
                      w="266px"
                      h="36.8px"
                      fontFamily="body"
                      fontWeight="normal"
                      fontSize="sm"
                      lineHeight="20px"
                      letterSpacing="0%"
                      verticalAlign="middle"
                      color="var(--gray-600, #52525B)"
                    >
                      Modern silhouettes. Elevated essentials. For those who dare to stand out.
                    </Text>
                  </Stack>

                  {/* Icons Layout */}
                  <HStack w="135px" h="35px" gap="15px">
                    <Box 
                      w="35px" 
                      h="35px" 
                      display="flex" 
                      alignItems="center" 
                      justifyContent="center" 
                      rounded="full"
                      border="1.5px solid"
                      borderColor="#E4E4E7"
                       opacity="1"
                     >
                       <Icon as={FaLinkedinIn} w="11.87px" h="11.87px" color="#71717A" opacity="1" />
                     </Box>
                     <Box 
                       w="35px" 
                       h="35px" 
                       display="flex" 
                       alignItems="center" 
                       justifyContent="center" 
                       rounded="full"
                       border="1.5px solid"
                       borderColor="#D4D4D8"
                       opacity="1"
                     >
                       <Icon as={FaFacebookF} w="11.87px" h="11.87px" color="#71717A" opacity="1" />
                     </Box>
                     <Box 
                       w="35px" 
                       h="35px" 
                       display="flex" 
                       alignItems="center" 
                       justifyContent="center" 
                       rounded="full"
                       border="1.5px solid"
                       borderColor="#D4D4D8"
                       opacity="1"
                     >
                       <Icon as={FaTwitter} w="11.87px" h="11.87px" color="#71717A" opacity="1" />
                     </Box>
                  </HStack>
                </Stack>

                {/* Right Hand Side Layout */}
                 <HStack w="646.14px" h="208px" gap="200px" align="flex-start">
                   {/* SHOP Column */}
                   <Stack w="84.25px" h="208px" gap="20px">
                     <Text
                       w="84.25px"
                       h="24px"
                       fontFamily="body"
                       fontWeight="semibold"
                       fontSize="md"
                       lineHeight="24px"
                       letterSpacing="0%"
                       verticalAlign="middle"
                       color="#111827"
                     >
                       SHOP
                     </Text>
                     <Stack gap="12px">
                       <Link to="/women">
                         <Text
                           w="50.54px"
                           h="16.8px"
                           fontFamily="body"
                           fontWeight="normal"
                           fontSize="sm"
                           lineHeight="20px"
                           letterSpacing="0%"
                           verticalAlign="middle"
                           color="var(--gray-600, #52525B)"
                           _hover={{ color: "#111827" }}
                         >
                           Women
                         </Text>
                       </Link>
                       <Link to="/men">
                         <Text
                           w="29.47px"
                           h="16.8px"
                           fontFamily="body"
                           fontWeight="normal"
                           fontSize="sm"
                           lineHeight="20px"
                           letterSpacing="0%"
                           verticalAlign="middle"
                           color="var(--gray-600, #52525B)"
                           _hover={{ color: "#111827" }}
                         >
                           Men
                         </Text>
                       </Link>
                       <Link to="/accessories">
                         <Text
                           w="81.68px"
                           h="16.8px"
                           fontFamily="body"
                           fontWeight="normal"
                           fontSize="sm"
                           lineHeight="20px"
                           letterSpacing="0%"
                           verticalAlign="middle"
                           color="var(--gray-600, #52525B)"
                           _hover={{ color: "#111827" }}
                         >
                           Accessories
                         </Text>
                       </Link>
                       <Link to="/shoes">
                         <Text
                           w="41.54px"
                           h="16.8px"
                           fontFamily="body"
                           fontWeight="normal"
                           fontSize="sm"
                           lineHeight="20px"
                           letterSpacing="0%"
                           verticalAlign="middle"
                           color="var(--gray-600, #52525B)"
                           _hover={{ color: "#111827" }}
                         >
                           Shoes
                         </Text>
                       </Link>
                       <Link to="/products?category=new">
                         <Text
                           w="84.58px"
                           h="16.8px"
                           fontFamily="body"
                           fontWeight="normal"
                           fontSize="sm"
                           lineHeight="20px"
                           letterSpacing="0%"
                           verticalAlign="middle"
                           color="var(--gray-600, #52525B)"
                           _hover={{ color: "#111827" }}
                         >
                           New Arrivals
                         </Text>
                       </Link>
                     </Stack>
                   </Stack>

                   {/* HELP Column */}
                   <Stack w="73.74px" h="208px" gap="20px">
                     <Text
                       w="73.74px"
                       h="24px"
                       fontFamily="body"
                       fontWeight="semibold"
                       fontSize="md"
                       lineHeight="24px"
                       letterSpacing="0%"
                       verticalAlign="middle"
                       color="#111827"
                     >
                       HELP
                     </Text>
                     <Stack gap="12px">
                       <Link to="/faq">
                         <Box h="16.8px" opacity="1">
                           <Text
                             fontFamily="body"
                             fontWeight="normal"
                             fontSize="sm"
                             lineHeight="20px"
                             letterSpacing="0%"
                             verticalAlign="middle"
                             color="var(--gray-600, #52525B)"
                             _hover={{ color: "#111827" }}
                             whiteSpace="nowrap"
                           >
                             FAQ
                           </Text>
                         </Box>
                       </Link>
                       <Link to="/shipping">
                         <Text
                           w="58.43px"
                           h="16.8px"
                           fontFamily="body"
                           fontWeight="normal"
                           fontSize="sm"
                           lineHeight="20px"
                           letterSpacing="0%"
                           verticalAlign="middle"
                           color="var(--gray-600, #52525B)"
                           _hover={{ color: "#111827" }}
                         >
                           Shipping
                         </Text>
                       </Link>
                       <Link to="/returns">
                         <Text
                           w="51.35px"
                           h="16.8px"
                           fontFamily="body"
                           fontWeight="normal"
                           fontSize="sm"
                           lineHeight="20px"
                           letterSpacing="0%"
                           verticalAlign="middle"
                           color="var(--gray-600, #52525B)"
                           _hover={{ color: "#111827" }}
                         >
                           Returns
                         </Text>
                       </Link>
                       <Link to="/size-guide">
                         <Text
                           w="71.16px"
                           h="16.8px"
                           fontFamily="body"
                           fontWeight="normal"
                           fontSize="sm"
                           lineHeight="20px"
                           letterSpacing="0%"
                           verticalAlign="middle"
                           color="var(--gray-600, #52525B)"
                           _hover={{ color: "#111827" }}
                         >
                           Size Guide
                         </Text>
                       </Link>
                       <Link to="/contact">
                         <Text
                           w="74.28px"
                           h="16.8px"
                           fontFamily="body"
                           fontWeight="normal"
                           fontSize="sm"
                           lineHeight="20px"
                           letterSpacing="0%"
                           verticalAlign="middle"
                           color="var(--gray-600, #52525B)"
                           _hover={{ color: "#111827" }}
                         >
                           Contact Us
                         </Text>
                       </Link>
                     </Stack>
                   </Stack>

                   {/* ABOUT Column */}
                   <Stack w="88.15px" h="171.2px" gap="20px">
                     <Text
                       w="88.15px"
                       h="24px"
                       fontFamily="body"
                       fontWeight="semibold"
                       fontSize="md"
                       lineHeight="24px"
                       letterSpacing="0%"
                       verticalAlign="middle"
                       color="#111827"
                     >
                       ABOUT
                     </Text>
                     <Stack gap="12px">
                       <Link to="/about">
                         <Text
                           w="63.77px"
                           h="16.8px"
                           fontFamily="body"
                           fontWeight="normal"
                           fontSize="sm"
                           lineHeight="20px"
                           letterSpacing="0%"
                           verticalAlign="middle"
                           color="var(--gray-600, #52525B)"
                           _hover={{ color: "#111827" }}
                         >
                           Our Story
                         </Text>
                       </Link>
                       <Link to="/careers">
                         <Text
                           w="52.47px"
                           h="16.8px"
                           fontFamily="body"
                           fontWeight="normal"
                           fontSize="sm"
                           lineHeight="20px"
                           letterSpacing="0%"
                           verticalAlign="middle"
                           color="var(--gray-600, #52525B)"
                           _hover={{ color: "#111827" }}
                         >
                           Careers
                         </Text>
                       </Link>
                       <Link to="/press">
                         <Text
                           w="37.24px"
                           h="16.8px"
                           fontFamily="body"
                           fontWeight="normal"
                           fontSize="sm"
                           lineHeight="20px"
                           letterSpacing="0%"
                           verticalAlign="middle"
                           color="var(--gray-600, #52525B)"
                           _hover={{ color: "#111827" }}
                         >
                           Press
                         </Text>
                       </Link>
                       <Link to="/sustainability">
                         <Text
                           w="88.49px"
                           h="16.8px"
                           fontFamily="body"
                           fontWeight="normal"
                           fontSize="sm"
                           lineHeight="20px"
                           letterSpacing="0%"
                           verticalAlign="middle"
                           color="var(--gray-600, #52525B)"
                           _hover={{ color: "#111827" }}
                         >
                           Sustainability
                         </Text>
                       </Link>
                     </Stack>
                   </Stack>
                 </HStack>
              </HStack>
            </Stack>

            {/* Horizontal Divider */}
            <Box 
              w="1240px" 
              h="1px" 
              bg="var(--gray-200, #E4E4E7)" 
              opacity="1" 
            />

            {/* Bottom Bar (Copyright and Legal Links) */}
            <Flex w="1240px" h="20px" justify="space-between" align="center" opacity="1">
              <Box w="246.75px" h="20px" opacity="1">
                <Text
                  fontFamily="Inter"
                  fontWeight="400"
                  fontSize="14px"
                  lineHeight="20px"
                  letterSpacing="0%"
                  verticalAlign="middle"
                  color="var(--gray-500, #71717A)"
                >
                  © 2026 AURELIA. All rights reserved.
                </Text>
              </Box>

              <HStack w="306.99px" h="20px" gap="24px" opacity="1">
                <Link to="/privacy">
                  <Box w="92.58px" h="20px" opacity="1" position="relative">
                    <Text
                      w="92.92px"
                      h="16.8px"
                      position="absolute"
                      top="1.6px"
                      fontFamily="Inter"
                      fontWeight="400"
                      fontSize="14px"
                      lineHeight="20px"
                      letterSpacing="0%"
                      verticalAlign="middle"
                      color="var(--gray-500, #71717A)"
                      _hover={{ color: "#111827" }}
                    >
                      Privacy Policy
                    </Text>
                  </Box>
                </Link>
                <Link to="/terms">
                  <Box w="112.76px" h="20px" opacity="1" position="relative">
                    <Text
                      w="113.13px"
                      h="16.8px"
                      position="absolute"
                      top="1.6px"
                      fontFamily="Inter"
                      fontWeight="400"
                      fontSize="14px"
                      lineHeight="20px"
                      letterSpacing="0%"
                      verticalAlign="middle"
                      color="var(--gray-500, #71717A)"
                      _hover={{ color: "#111827" }}
                    >
                      Terms of Service
                    </Text>
                  </Box>
                </Link>
                <Link to="/cookies">
                  <Box w="53.65px" h="20px" opacity="1" position="relative">
                    <Text
                      w="54.01px"
                      h="16.8px"
                      position="absolute"
                      top="1.6px"
                      fontFamily="Inter"
                      fontWeight="400"
                      fontSize="14px"
                      lineHeight="20px"
                      letterSpacing="0%"
                      verticalAlign="middle"
                      color="var(--gray-500, #71717A)"
                      _hover={{ color: "#111827" }}
                    >
                      Cookies
                    </Text>
                  </Box>
                </Link>
              </HStack>
            </Flex>
          </Stack>
        </Box>
      </Box>
    </Box>
  )
}

export default CheckoutPage