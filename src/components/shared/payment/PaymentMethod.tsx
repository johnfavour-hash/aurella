import { Box, Text, HStack, Input, Button, Image } from "@chakra-ui/react"
import { useState } from "react"
import { Circle } from "lucide-react"

const PaymentMethod = () => {
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

      {/* Place Order Button Section */}
      <Box
        w="710.3900146484375px"
        h="auto"
        gap="12px"
        display="flex"
        flexDirection="column"
        mt="8px"
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
  )
}

export default PaymentMethod
