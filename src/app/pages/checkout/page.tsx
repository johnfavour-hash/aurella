import { Box, Text, HStack, Input, Field, Checkbox, Button, Image, Flex } from "@chakra-ui/react"
import { FiChevronRight } from "react-icons/fi"
import { useState } from "react"
import Subscribe from "@components/shared/subscribe/Subscribe"
import Footer from "@components/shared/layout/Footer"

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
    console.log("Place Order clicked", { paymentMethod: selectedPayment, cardNumber, expiryDate, cvc })
  }

  return (
    /* Page wrapper: column, full width */
    <Box w="full" maxW="1440px" mx="auto" display="flex" flexDirection="column">

      {/* Breadcrumb */}
      <Box px="100px" pt="24px" pb="24px">
        <HStack gap="8px" flexWrap="nowrap">
          {["Home", "Shop", "Checkout"].map((label, i, arr) => (
            <HStack key={label} gap="8px">
              <Text fontFamily="Inter" fontWeight="400" fontSize="14px" color="#71717A" cursor="pointer">
                {label}
              </Text>
              {i < arr.length - 1 && (
                <Box position="relative" top="-1px">
                  <FiChevronRight size={12} color="#71717A" />
                </Box>
              )}
            </HStack>
          ))}
        </HStack>
      </Box>

      {/* Checkout heading */}
      <Text
        px="100px"
        mb="32px"
        fontFamily="body"
        fontWeight="600"
        fontSize="3xl"
        lineHeight="38px"
        color="#18181B"
      >
        Checkout
      </Text>

      {/* Two-column content row — Flex with direction="row" keeps columns side-by-side */}
      <Flex
        px="100px"
        pb="80px"
        gap="48px"
        align="flex-start"
        direction="row"
      >
        {/* LEFT column: forms */}
        <Flex direction="column" gap="32px" flex="1" minW="0">

          {/* Contact Information */}
          <Box borderRadius="8px" p="32px" border="1px solid #E4E4E7" bg="#FFFFFF" display="flex" flexDirection="column" gap="24px">
            <Text fontFamily="body" fontWeight="600" fontSize="lg" lineHeight="28px" color="#111827">
              Contact Information
            </Text>
            <Field.Root>
              <Field.Label fontSize="sm" fontWeight="medium" color="#000000" mb="6px">Email address</Field.Label>
              <Input
                type="email"
                placeholder="example@gmail.com"
                h="48px"
                borderRadius="8px"
                px="12px"
                border="1px solid #E4E4E7"
                _placeholder={{ color: "#A1A1AA" }}
              />
            </Field.Root>
          </Box>

          {/* Shipping Address */}
          <Box borderRadius="8px" p="32px" border="1px solid #E4E4E7" bg="#FFFFFF" display="flex" flexDirection="column" gap="24px">
            <Text fontFamily="body" fontWeight="600" fontSize="lg" lineHeight="28px" color="#18181B">
              Shipping Address
            </Text>
            <Flex direction="column" gap="20px">
              <HStack gap="20px">
                {[["First name", "enter first name"], ["Last name", "enter last name"]].map(([label, ph]) => (
                  <Box key={label} flex="1" display="flex" flexDirection="column" gap="6px">
                    <Text fontFamily="body" fontWeight="medium" fontSize="sm" color="#000000">{label}</Text>
                    <Input type="text" placeholder={ph} h="48px" borderRadius="8px" px="12px" border="1px solid #E4E4E7" _placeholder={{ color: "#A1A1AA" }} />
                  </Box>
                ))}
              </HStack>

              <Box display="flex" flexDirection="column" gap="6px">
                <Text fontFamily="body" fontWeight="medium" fontSize="sm" color="#000000">Address</Text>
                <Input type="text" placeholder="enter your address" h="48px" borderRadius="8px" px="12px" border="1px solid #E4E4E7" _placeholder={{ color: "#A1A1AA" }} />
              </Box>

              <HStack gap="20px">
                {[["City", "enter city"], ["State", "enter state"]].map(([label, ph]) => (
                  <Box key={label} flex="1" display="flex" flexDirection="column" gap="6px">
                    <Text fontFamily="body" fontWeight="medium" fontSize="sm" color="#000000">{label}</Text>
                    <Input type="text" placeholder={ph} h="48px" borderRadius="8px" px="12px" border="1px solid #E4E4E7" _placeholder={{ color: "#A1A1AA" }} />
                  </Box>
                ))}
              </HStack>

              <HStack gap="20px">
                {[["ZIP code", "enter ZIP code", "text"], ["Phone", "enter phone number", "tel"]].map(([label, ph, type]) => (
                  <Box key={label} flex="1" display="flex" flexDirection="column" gap="6px">
                    <Text fontFamily="body" fontWeight="medium" fontSize="sm" color="#000000">{label}</Text>
                    <Input type={type} placeholder={ph} h="48px" borderRadius="8px" px="12px" border="1px solid #E4E4E7" _placeholder={{ color: "#A1A1AA" }} />
                  </Box>
                ))}
              </HStack>
            </Flex>
          </Box>

          {/* Billing Address */}
          <Box borderRadius="8px" p="32px" border="1px solid #E4E4E7" bg="#FFFFFF" display="flex" flexDirection="column" gap="24px">
            <Text fontFamily="body" fontWeight="600" fontSize="lg" lineHeight="28px" color="#18181B">
              Billing Address
            </Text>
            <HStack align="center">
              <Checkbox.Root size="sm" defaultChecked>
                <Checkbox.Control w="16px" h="16px" borderRadius="4px" bg="#18181B">
                  <Checkbox.Indicator color="white" />
                </Checkbox.Control>
              </Checkbox.Root>
              <Text fontFamily="body" fontWeight="medium" fontSize="sm" color="#000000" pl="8px">
                Same as shipping address
              </Text>
            </HStack>
          </Box>

          {/* Payment Method */}
          <Box borderRadius="8px" p="32px" border="1px solid #E4E4E7" bg="#FFFFFF" display="flex" flexDirection="column" gap="24px">
            <Text fontFamily="body" fontWeight="600" fontSize="lg" lineHeight="28px" color="#18181B">
              Payment Method
            </Text>

            <Flex direction="column" gap="12px" borderTop="1px solid #E4E4E7" pt="12px">
              {paymentOptions.map((option) => (
                <Box
                  key={option.id}
                  minH="54px"
                  px="12px"
                  py="10px"
                  borderRadius="8px"
                  border={selectedPayment === option.id ? "1px solid #18181B" : "1px solid #E4E4E7"}
                  display="flex"
                  alignItems="center"
                  cursor="pointer"
                  transition="all 0.2s"
                  onClick={() => setSelectedPayment(option.id)}
                  _hover={{ borderColor: "#18181B" }}
                >
                  <Box
                    w="16px" h="16px" borderRadius="full" mr="8px" flexShrink={0}
                    border={selectedPayment === option.id ? "1px solid #18181B" : "1px solid #E4E4E7"}
                    bg={selectedPayment === option.id ? "#18181B" : "white"}
                    display="flex" alignItems="center" justifyContent="center"
                  >
                    {selectedPayment === option.id && <Box w="8px" h="8px" borderRadius="full" bg="white" />}
                  </Box>
                  <HStack gap="12px" flex={1}>
                    {option.icon && <Image src={option.icon} alt={option.label} w="20px" h="20px" />}
                    <Text fontFamily="body" fontWeight="medium" fontSize="sm" color="#000000">{option.label}</Text>
                  </HStack>
                </Box>
              ))}
            </Flex>

            {selectedPayment === "credit-card" && (
              <Flex direction="column" gap="16px">
                <Box display="flex" flexDirection="column" gap="6px">
                  <Text fontFamily="body" fontWeight="medium" fontSize="sm" color="#000000">Card number</Text>
                  <Input
                    type="text" placeholder="1234 5678 9012 3456"
                    value={cardNumber} onChange={(e) => setCardNumber(e.target.value)}
                    h="48px" borderRadius="8px" px="12px" border="1px solid #E4E4E7" _placeholder={{ color: "#A1A1AA" }}
                  />
                </Box>
                <HStack gap="20px">
                  <Box flex="1" display="flex" flexDirection="column" gap="6px">
                    <Text fontFamily="body" fontWeight="medium" fontSize="sm" color="#000000">Expiry date</Text>
                    <Input
                      type="text" placeholder="MM/YY"
                      value={expiryDate} onChange={(e) => setExpiryDate(e.target.value)}
                      h="48px" borderRadius="8px" px="12px" border="1px solid #E4E4E7" _placeholder={{ color: "#A1A1AA" }}
                    />
                  </Box>
                  <Box flex="1" display="flex" flexDirection="column" gap="6px">
                    <Text fontFamily="body" fontWeight="medium" fontSize="sm" color="#000000">CVC</Text>
                    <Input
                      type="text" placeholder="123"
                      value={cvc} onChange={(e) => setCvc(e.target.value)}
                      h="48px" borderRadius="8px" px="12px" border="1px solid #E4E4E7" _placeholder={{ color: "#A1A1AA" }}
                    />
                  </Box>
                </HStack>
              </Flex>
            )}
          </Box>

          {/* Place Order button */}
          <Flex direction="column" gap="12px">
            <Button
              w="full" h="64px"
              bg="#18181B" color="#FFFFFF"
              fontFamily="body" fontWeight="medium" fontSize="lg"
              borderRadius="8px"
              onClick={handlePlaceOrder}
              _hover={{ opacity: 0.9 }}
            >
              Place Order — {total}
            </Button>
            <HStack justify="center" gap="8px">
              <Image src="/images/SVG (3).png" alt="Secure" w="16px" h="16px" />
              <Text fontFamily="body" fontWeight="normal" fontSize="sm" color="#52525B" textAlign="center">
                Your payment info is secure and encrypted
              </Text>
            </HStack>
          </Flex>
        </Flex>

        {/* RIGHT column: Order Summary */}
        <Box
          w="420px"
          flexShrink={0}
          borderRadius="8px"
          p="32px"
          border="1px solid #E4E4E7"
          bg="#FFFFFF"
          display="flex"
          flexDirection="column"
          gap="24px"
          position="sticky"
          top="24px"
        >
          <Text fontFamily="body" fontWeight="600" fontSize="lg" lineHeight="28px" color="#18181B">
            Order Summary
          </Text>

          <HStack gap="16px" align="flex-start">
            <Box w="80px" h="80px" borderRadius="8px" overflow="hidden" bg="#F4F4F5" flexShrink={0}>
              <Image
                src="/images/cd372093a3f1d750d38579c542ef2223c741f156.jpg"
                alt="Leather Crossbody Bag"
                w="full" h="full" objectFit="cover"
                fallback={
                  <Box w="full" h="full" bg="#E4E4E7" display="flex" alignItems="center" justifyContent="center">
                    <Text fontSize="xs" color="#A1A1AA">IMG</Text>
                  </Box>
                }
              />
            </Box>
            <Box flex="1">
              <Text fontFamily="body" fontWeight="500" fontSize="sm" color="#18181B">Leather Crossbody Bag</Text>
              <Text fontFamily="body" fontWeight="400" fontSize="sm" color="#71717A" mt="2px">Qty: 1</Text>
            </Box>
            <Text fontFamily="body" fontWeight="500" fontSize="sm" color="#18181B">$299.00</Text>
          </HStack>

          <Box h="1px" bg="#E4E4E7" />

          <Flex direction="column" gap="12px">
            {[["Subtotal", "$299.00"], ["Fees", "$12.00"], ["Tax", "$7.60"]].map(([label, val]) => (
              <HStack key={label} justify="space-between">
                <Text fontFamily="body" fontWeight="400" fontSize="sm" color="#52525B">{label}</Text>
                <Text fontFamily="body" fontWeight="400" fontSize="sm" color="#18181B">{val}</Text>
              </HStack>
            ))}
          </Flex>

          <Box h="1px" bg="#E4E4E7" />

          <HStack justify="space-between">
            <Text fontFamily="body" fontWeight="600" fontSize="md" color="#18181B">Total</Text>
            <Text fontFamily="body" fontWeight="600" fontSize="md" color="#18181B">$318.60</Text>
          </HStack>
        </Box>
      </Flex>

      {/* New Section */}
      <Box w="full" maxW="1440px" mx="auto">
        <Subscribe />
        <Footer />
      </Box>

    </Box>
  )
}

export default CheckoutPage