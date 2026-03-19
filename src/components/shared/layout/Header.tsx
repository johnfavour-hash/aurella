import { Box, Container, Flex, HStack, IconButton, Text, Button, Menu, Portal, Stack, Icon } from "@chakra-ui/react"
import * as React from "react"
import { Link, useLocation } from "react-router"
import { LuMenu, LuSearch, LuUser, LuShoppingCart, LuHeart, LuX, LuTrash2, LuMinus, LuPlus } from "react-icons/lu"

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Shop", to: "/products" },
  { label: "Women", to: "/women" },
  { label: "Men", to: "/men" },
  { label: "Accessories", to: "/accessories" },
]

const Header = () => {
  const location = useLocation()
  const [cartOpen, setCartOpen] = React.useState(false)
  return (
    <Box position="sticky" top="36px" zIndex="10" bg="#FFFFFF" borderBottomWidth="1px" h="56px">
      <Container maxW="1440px" px="100px" py="10px" mx="auto" w="full">
        <Flex w="1240px" h="36px" align="center" justify="flex-start" gap="222px">
          <Box w="151.11703491210938px" h="28.799999237060547px" flex="0 0 151.11703491210938px" display="flex" alignItems="center">
            <Link to="/" style={{ transition: "all 300ms linear" }}>
              <Text
                fontFamily="body"
                fontWeight="normal"
                fontSize="2xl"
                lineHeight="32px"
                letterSpacing="0"
                color="#111827"
                w="151.11703491210938px"
                h="28.8px"
              >
                AURELIA
              </Text>
            </Link>
          </Box>

          <Box w="474.0001525878906px" flex="0 0 474.0001525878906px" ml="0">
            <HStack
              gap="13px"
              display={{ base: "none", md: "flex" }}
              w="474.0001525878906px"
              h="36px"
              flex="0 0 474.0001525878906px"
              justify="flex-start"
            >
              {navLinks.map((item) => {
                const isSelected = location.pathname === item.to
                const isShop = item.label === "Shop"
                const isWomen = item.label === "Women"
                const isMen = item.label === "Men"
                const isAccessories = item.label === "Accessories"
                const boxW = isAccessories ? "113px" : (isMen ? "61px" : (isWomen ? "82px" : (isShop ? "67px" : "72px")))
                const textW = isAccessories ? "81px" : (isMen ? "29px" : (isWomen ? "50px" : (isShop ? "35px" : "40px")))
                const linkTransition = (isShop || isWomen || isMen || isAccessories) ? "all 0ms linear" : "all 300ms linear"
                const borderColor = isSelected ? "#18181B" : "transparent"
                const borderWidth = isSelected ? "1px" : "0px"
                const textColor = isSelected ? "#18181B" : "#52525B"
                return (
                  <Link
                    key={item.label}
                    to={item.to}
                    style={{ transition: linkTransition, marginLeft: isMen ? "-5px" : undefined }}
                  >
                    <Box
                      w={boxW}
                      h="36px"
                      display="flex"
                      alignItems="center"
                      justifyContent="flex-start"
                      gap={isMen ? "10px" : "8px"}
                      pt="2px"
                      pb="2px"
                      pr="4px"
                      pl="4px"
                      borderBottomWidth={borderWidth}
                      borderBottomColor={borderColor}
                      borderTopWidth={undefined}
                      borderLeftWidth={undefined}
                      borderRightWidth={undefined}
                      _hover={{ borderBottomWidth: "1px", borderBottomColor: "#18181B" }}
                      roundedTop={(isWomen || isMen || isAccessories) ? "l2" : undefined}
                    >
                      <Button
                        variant={(isWomen || isMen || isAccessories) ? "plain" : "ghost"}
                        size="md"
                        fontFamily="body"
                        fontWeight="normal"
                        fontSize="sm"
                        lineHeight="20px"
                        letterSpacing="0"
                        color={textColor}
                        w={textW}
                        height="20px"
                        px="0"
                        _hover={{ color: "#18181B" }}
                      >
                        {item.label}
                      </Button>
                    </Box>
                  </Link>
                )
              })}
            </HStack>
          </Box>

          <Box w="170.8828125px" h="21px" flex="0 0 170.8828125px" ml="auto" mr="34px">
            <HStack
              gap="34px"
              w="170.8828125px"
              h="21px"
              alignItems="center"
              justify="flex-start"
              flex="0 0 170.8828125px"
            >
            <Box w="16px" h="16px" position="relative">
              <Box
                position="absolute"
                top="0"
                left="0"
                w="16px"
                h="16px"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <IconButton aria-label="Search" variant="ghost" size="xs" p="0" minW="unset">
                  <LuSearch style={{ width: "16px", height: "16px" }} />
                </IconButton>
              </Box>
            </Box>

            <Box w="16px" h="16px" position="relative">
              <Box
                position="absolute"
                top="0"
                left="0"
                w="16px"
                h="16px"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <IconButton aria-label="Wishlist" variant="ghost" size="xs" p="0" minW="unset">
                  <LuHeart style={{ width: "16px", height: "16px" }} />
                </IconButton>
              </Box>
            </Box>

            <Box w="16px" h="16px" position="relative">
              <Box
                position="absolute"
                top="0"
                left="0"
                w="16px"
                h="16px"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <IconButton aria-label="Account" variant="ghost" size="xs" p="0" minW="unset">
                  <LuUser style={{ width: "16px", height: "16px" }} />
                </IconButton>
              </Box>
            </Box>

            <Box w="16px" h="16px" position="relative">
              <Box
                position="absolute"
                top="0"
                left="0"
                w="16px"
                h="16px"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <IconButton
                  aria-label="Cart"
                  variant="ghost"
                  size="xs"
                  p="0"
                  minW="unset"
                  onClick={() => setCartOpen(true)}
                  style={{ transition: "all 0ms linear" }}
                >
                  <LuShoppingCart style={{ width: "16px", height: "16px" }} />
                </IconButton>
              </Box>
            </Box>

            <Box display={{ base: "block", md: "none" }}>
              <Menu.Root>
                <Menu.Trigger asChild>
                  <IconButton aria-label="Menu" variant="ghost" size="sm">
                    <LuMenu />
                  </IconButton>
                </Menu.Trigger>
                <Menu.Positioner>
                  <Menu.Content>
                    {navLinks.map((item) => (
                      <Menu.Item key={item.label} value={item.label} asChild>
                        <Link to={item.to}>{item.label}</Link>
                      </Menu.Item>
                    ))}
                  </Menu.Content>
                </Menu.Positioner>
              </Menu.Root>
            </Box>
            </HStack>
          </Box>

          {/* Cart Drawer (instant overlay) */}
          <Portal>
            <Box
              display={cartOpen ? "block" : "none"}
              position="fixed"
              top="0"
              right="0"
              h="866px"
              w="593px"
              bg="#FFFFFF"
              borderLeftWidth="1px"
              borderColor="#E4E4E7"
              zIndex="30"
              boxShadow="lg"
            >
              <Flex
                w="593px"
                h="68px"
                justify="space-between"
                align="center"
                pt="6"
                pr="6"
                pb="4"
                pl="6"
                borderBottomWidth="1px"
                borderColor="#E4E4E7"
              >
                <Text
                  w="545px"
                  h="28px"
                  fontFamily="body"
                  fontWeight="600"
                  fontSize="lg"
                  lineHeight="28px"
                  letterSpacing="0%"
                  color="var(--text-fg, #000000)"
                >
                  Your Cart
                </Text>
                <IconButton
                  aria-label="Close cart"
                  variant="ghost"
                  size="xs"
                  colorPalette="gray"
                  w="32px"
                  h="32px"
                  minW="32px"
                  gap="4px"
                  pt="2px"
                  pr="2.5"
                  pb="2px"
                  pl="2.5"
                  rounded="l2"
                  borderWidth="1px"
                  borderColor="var(--gray-200, #E4E4E7)"
                  onClick={() => setCartOpen(false)}
                >
                  <LuX style={{ width: "24px", height: "24px" }} />
                </IconButton>
              </Flex>
              <Flex
                direction="column"
                w="593px"
                h="655.33px"
                gap="10px"
                pt="24px"
                pr="6"
                pb="24px"
                pl="6"
              >
                <Stack
                  w="545px"
                  h="607.33px"
                  gap="124px"
                >
                  <Stack
                    w="545px"
                    h="341.33px"
                    gap="40px"
                  >
                    {/* Item 1 */}
                    <HStack
                      w="545px"
                      h="150.665px"
                      gap="22px"
                      align="flex-start"
                    >
                      {/* Picture Container */}
                      <Box
                        w="148px"
                        h="150.665px"
                        bg="#FFFFFF"
                        rounded="13.42px"
                        overflow="hidden"
                        position="relative"
                      >
                        <Box
                          as="img"
                          src="/images/cd372093a3f1d750d38579c542ef2223c741f156.jpg"
                          alt="Cashmere Blend Coat"
                          w="150.15371704101562px"
                          h="224.9559783935547px"
                          position="absolute"
                          top="-7.35px"
                          objectFit="cover"
                        />
                      </Box>

                      {/* Details Container */}
                      <Stack
                        w="376px"
                        h="150.665px"
                        gap="40px"
                      >
                        <HStack
                          w="376px"
                          h="32px"
                          justify="space-between"
                          align="center"
                        >
                          <Text
                            w="256px"
                            h="32px"
                            fontFamily="body"
                            fontWeight="medium"
                            fontSize="2xl"
                            lineHeight="32px"
                            letterSpacing="0%"
                            verticalAlign="middle"
                            color="var(--text-fg, #000000)"
                          >
                            Cashmere Blend Coat
                          </Text>
                          <IconButton
                            aria-label="Remove item"
                            variant="ghost"
                            size="xs"
                            colorPalette="gray"
                            w="24px"
                            h="24px"
                            minW="24px"
                            p="0"
                            rounded="l2"
                            onClick={() => {
                              // Action: Swap overlay: "Empty Cart Drawer"
                              setCartOpen(false);
                            }}
                          >
                            <Icon
                              as={LuX}
                              w="24px"
                              h="24px"
                              strokeWidth="1.5px"
                              color="var(--gray-400, #A1A1AA)"
                            />
                          </IconButton>
                        </HStack>

                        {/* Quantity and Price Section */}
                        <HStack
                          w="376px"
                          h="78.665px"
                          gap="80px"
                          align="center"
                        >
                          {/* Quantity Selector */}
                          <Box
                            w="193px"
                            h="54px"
                            rounded="8px"
                            borderWidth="1px"
                            borderColor="var(--gray-200, #E4E4E7)"
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                          >
                            <HStack
                              w="177px"
                              h="52px"
                              gap="0"
                              align="center"
                            >
                              <Box
                                w="52px"
                                h="52px"
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                                cursor="pointer"
                                onClick={() => {}}
                              >
                                <Icon as={LuMinus} w="12px" h="12px" strokeWidth="2px" color="#111827" />
                              </Box>

                              <Box
                                w="73px"
                                h="28px"
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                              >
                                <Text
                                  fontFamily="body"
                                  fontWeight="500"
                                  fontSize="lg"
                                  lineHeight="28px"
                                  letterSpacing="0%"
                                  textAlign="center"
                                  color="var(--gray-900, #18181B)"
                                >
                                  1
                                </Text>
                              </Box>

                              <Box
                                w="52px"
                                h="52px"
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                                cursor="pointer"
                                onClick={() => {}}
                              >
                                <Icon as={LuPlus} w="12px" h="12px" strokeWidth="2px" color="#111827" />
                              </Box>
                            </HStack>
                          </Box>

                          {/* Price Section */}
                          <Stack
                            w="103px"
                            h="78.665px"
                            gap="16px"
                            justify="center"
                          >
                            <Box w="103px" h="32.665px" pb="0.67px">
                              <Text
                                w="103px"
                                h="32px"
                                fontFamily="body"
                                fontWeight="bold"
                                fontSize="2xl"
                                lineHeight="32px"
                                letterSpacing="0%"
                                verticalAlign="middle"
                                color="var(--gray-950, #111111)"
                              >
                                $389.00
                              </Text>
                            </Box>
                            <Box w="80px" h="30px">
                              <Text
                                w="80px"
                                h="30px"
                                fontFamily="body"
                                fontWeight="normal"
                                fontSize="xl"
                                lineHeight="30px"
                                letterSpacing="0%"
                                verticalAlign="middle"
                                color="var(--gray-500, #71717A)"
                              >
                                $520.00
                              </Text>
                            </Box>
                          </Stack>
                        </HStack>
                      </Stack>
                    </HStack>

                    {/* Item 2 */}
                    <HStack
                      w="545px"
                      h="150.665px"
                      gap="22px"
                      align="flex-start"
                    >
                      {/* Picture Container */}
                      <Box
                        w="148px"
                        h="150.665px"
                        bg="#FFFFFF"
                        rounded="13.42px"
                        overflow="hidden"
                        position="relative"
                      >
                        <Box
                          as="img"
                          src="/images/bfd7e30703bbd5af758c3d7993692fd5b40f1159.jpg"
                          alt="Linen Shirt"
                          w="150.15371704101562px"
                          h="224.9559783935547px"
                          position="absolute"
                          top="-87px"
                          left="9px"
                          objectFit="cover"
                        />
                      </Box>

                      {/* Details Container */}
                      <Stack
                        w="376px"
                        h="150.665px"
                        gap="40px"
                      >
                        <HStack
                          w="376px"
                          h="32px"
                          justify="space-between"
                          align="center"
                        >
                          <Text
                            w="256px"
                            h="32px"
                            fontFamily="body"
                            fontWeight="medium"
                            fontSize="2xl"
                            lineHeight="32px"
                            letterSpacing="0%"
                            verticalAlign="middle"
                            color="var(--text-fg, #000000)"
                          >
                           Cashmere Blend Coat
                          </Text>
                          <IconButton
                            aria-label="Remove item"
                            variant="ghost"
                            size="xs"
                            colorPalette="gray"
                            w="24px"
                            h="24px"
                            minW="24px"
                            p="0"
                            rounded="l2"
                            onClick={() => {
                              setCartOpen(false);
                            }}
                          >
                            <Icon
                              as={LuX}
                              w="24px"
                              h="24px"
                              strokeWidth="1.5px"
                              color="var(--gray-400, #A1A1AA)"
                            />
                          </IconButton>
                        </HStack>

                        {/* Quantity and Price Section */}
                        <HStack
                          w="376px"
                          h="78.665px"
                          gap="80px"
                          align="center"
                        >
                          {/* Quantity Selector */}
                          <Box
                            w="193px"
                            h="54px"
                            rounded="8px"
                            borderWidth="1px"
                            borderColor="var(--gray-200, #E4E4E7)"
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                          >
                            <HStack
                              w="177px"
                              h="52px"
                              gap="0"
                              align="center"
                            >
                              <Box
                                w="52px"
                                h="52px"
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                                cursor="pointer"
                                onClick={() => {}}
                              >
                                <Icon as={LuMinus} w="12px" h="12px" strokeWidth="2px" color="#111827" />
                              </Box>

                              <Box
                                w="73px"
                                h="28px"
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                              >
                                <Text
                                  fontFamily="body"
                                  fontWeight="500"
                                  fontSize="lg"
                                  lineHeight="28px"
                                  letterSpacing="0%"
                                  textAlign="center"
                                  color="var(--gray-900, #18181B)"
                                >
                                  1
                                </Text>
                              </Box>

                              <Box
                                w="52px"
                                h="52px"
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                                cursor="pointer"
                                onClick={() => {}}
                              >
                                <Icon as={LuPlus} w="12px" h="12px" strokeWidth="2px" color="#111827" />
                              </Box>
                            </HStack>
                          </Box>

                          {/* Price Section */}
                          <Stack
                            w="103px"
                            h="78.665px"
                            gap="16px"
                            justify="center"
                          >
                            <Box w="103px" h="32.665px" pb="0.67px">
                              <Text
                                w="103px"
                                h="32px"
                                fontFamily="body"
                                fontWeight="bold"
                                fontSize="2xl"
                                lineHeight="32px"
                                letterSpacing="0%"
                                verticalAlign="middle"
                                color="var(--gray-950, #111111)"
                              >
                                $389.00
                              </Text>
                            </Box>
                            <Box w="80px" h="30px">
                              <Text
                                w="80px"
                                h="30px"
                                fontFamily="body"
                                fontWeight="normal"
                                fontSize="xl"
                                lineHeight="30px"
                                letterSpacing="0%"
                                verticalAlign="middle"
                                color="var(--gray-500, #71717A)"
                              >
                                $520.00
                              </Text>
                            </Box>
                          </Stack>
                        </HStack>
                      </Stack>
                    </HStack>
                  </Stack>

                  {/* Summary Section */}
                  <Stack
                    w="545px"
                    h="142px"
                    gap="20px"
                  >
                    <Stack
                      w="545px"
                      h="81px"
                      gap="20px"
                    >
                      {/* Subtotal */}
                      <HStack
                        w="545px"
                        h="20px"
                        justify="space-between"
                        align="center"
                      >
                        <Text
                          w="74px"
                          h="20px"
                          fontFamily="body"
                          fontWeight="normal"
                          fontSize="sm"
                          lineHeight="20px"
                          letterSpacing="0%"
                          color="var(--text-fg_muted, #52525B)"
                        >
                          Subtotal
                        </Text>
                        <Text
                          w="74px"
                          h="20px"
                          fontFamily="body"
                          fontWeight="medium"
                          fontSize="sm"
                          lineHeight="20px"
                          letterSpacing="0%"
                          textAlign="right"
                          color="var(--gray-900, #18181B)"
                        >
                          $1556.00
                        </Text>
                      </HStack>

                      {/* Shipping */}
                      <HStack
                        w="545px"
                        h="20px"
                        justify="space-between"
                        align="center"
                      >
                        <Text
                          w="74px"
                          h="20px"
                          fontFamily="body"
                          fontWeight="normal"
                          fontSize="sm"
                          lineHeight="20px"
                          letterSpacing="0%"
                          color="var(--text-fg_muted, #52525B)"
                        >
                          Shipping
                        </Text>
                        <Text
                          w="74px"
                          h="20px"
                          fontFamily="body"
                          fontWeight="medium"
                          fontSize="sm"
                          lineHeight="20px"
                          letterSpacing="0%"
                          textAlign="right"
                          color="var(--green-solid, #16A34A)"
                        >
                          Free
                        </Text>
                      </HStack>
                    </Stack>

                    {/* Divider Line */}
                    <Box
                      w="545px"
                      h="1px"
                      bg="var(--gray-200, #E4E4E7)"
                    />

                    {/* Total */}
                    <HStack
                      w="545px"
                      h="20px"
                      justify="space-between"
                      align="center"
                    >
                      <Text
                        w="74px"
                        h="20px"
                        fontFamily="body"
                        fontWeight="semibold"
                        fontSize="sm"
                        lineHeight="20px"
                        letterSpacing="0%"
                        color="var(--gray-900, #18181B)"
                      >
                        Total
                      </Text>
                      <Text
                        w="74px"
                        h="20px"
                        fontFamily="body"
                        fontWeight="semibold"
                        fontSize="sm"
                        lineHeight="20px"
                        letterSpacing="0%"
                        textAlign="right"
                        color="var(--gray-900, #18181B)"
                      >
                        $1556.00
                      </Text>
                    </HStack>
                  </Stack>
                </Stack>

                {/* Checkout Section */}
                <Stack
                  w="593px"
                  h="144px"
                  gap="16px"
                  pt="24px"
                  pr="6"
                  pb="24px"
                  pl="6"
                >
                  <Button
                    w="545px"
                    h="40px"
                    minW="40px"
                    bg="var(--gray-solid, #18181B)"
                    color="white"
                    rounded="l2"
                    pt="2px"
                    pr="4"
                    pb="2px"
                    pl="4"
                    gap="8px"
                    _hover={{ bg: "black" }}
                  >
                    <Text
                      w="513px"
                      h="20px"
                      fontFamily="body"
                      fontWeight="medium"
                      fontSize="sm"
                      lineHeight="20px"
                      letterSpacing="0%"
                      textAlign="center"
                      color="var(--gray-contrast, #FFFFFF)"
                    >
                      Checkout
                    </Text>
                  </Button>
                  <Button
                    w="545px"
                    h="40px"
                    minW="40px"
                    bg="var(--gray-subtle, #F4F4F5)"
                    color="var(--gray-fg, #27272A)"
                    rounded="l2"
                    pt="2px"
                    pr="4"
                    pb="2px"
                    pl="4"
                    gap="8px"
                    _hover={{ bg: "#E4E4E7" }}
                    onClick={() => setCartOpen(false)}
                  >
                    <Text
                      w="513px"
                      h="20px"
                      fontFamily="body"
                      fontWeight="medium"
                      fontSize="sm"
                      lineHeight="20px"
                      letterSpacing="0%"
                      textAlign="center"
                    >
                      Continue Shopping
                    </Text>
                  </Button>
                </Stack>
              </Flex>
            </Box>
          </Portal>
        </Flex>
      </Container>
    </Box>
  )
}

export default Header
