import { Box, Container, Flex, HStack, IconButton, Text, Button, Menu, Portal } from "@chakra-ui/react"
import * as React from "react"
import { Link, useLocation } from "react-router"
import { LuMenu, LuSearch, LuUser, LuShoppingCart, LuHeart } from "react-icons/lu"

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
              h="100vh"
              w="360px"
              bg="bg"
              borderLeftWidth="1px"
              zIndex="30"
            >
              <Flex h="16" align="center" px="4" borderBottomWidth="1px" justify="space-between">
                <Text fontWeight="medium">Your Cart</Text>
                <Button variant="ghost" size="sm" onClick={() => setCartOpen(false)}>
                  Close
                </Button>
              </Flex>
              <Box p="4">
                <Text color="fg.muted">Your Cart Drawer</Text>
              </Box>
            </Box>
          </Portal>
        </Flex>
      </Container>
    </Box>
  )
}

export default Header
