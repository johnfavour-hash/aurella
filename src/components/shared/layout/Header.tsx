import { Box, Container, Flex, HStack, IconButton, Text, Button, Menu, Portal } from "@chakra-ui/react"
import * as React from "react"
import { Link, useLocation } from "react-router"
import { LuMenu, LuSearch, LuUser, LuShoppingCart, LuHeart } from "react-icons/lu"
import { ColorModeButton } from "@components/ui/color-mode"

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
        <Flex h="36px" align="center" justify="space-between" gap="222px">
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

          <HStack
            gap="13px"
            display={{ base: "none", md: "flex" }}
            w="474.0001525878906px"
            h="36px"
          >
            {navLinks.map((item) => {
              const isSelected = location.pathname === item.to
              const isShop = item.label === "Shop"
              const boxW = isShop ? "67px" : "72px"
              const textW = isShop ? "35px" : "40px"
              const linkTransition = isShop ? "all 0ms linear" : "all 300ms linear"
              const borderColor = isSelected ? "#18181B" : (isShop ? "#52525B" : "transparent")
              const borderWidth = isShop ? "1px" : (isSelected ? "1px" : "0px")
              const textColor = isShop && !isSelected ? "fg.muted" : "fg"
              return (
                <Link
                  key={item.label}
                  to={item.to}
                  style={{ transition: linkTransition }}
                >
                  <Box
                    w={boxW}
                    h="36px"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    gap="8px"
                    borderBottomWidth={borderWidth}
                    borderBottomColor={borderColor}
                  >
                    <Button
                      variant="ghost"
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
                    >
                      {item.label}
                    </Button>
                  </Box>
                </Link>
              )
            })}
          </HStack>

          <HStack gap="34px" w="170.8828125px" h="21px" align="center">
            <Box w="16px" h="16px" position="relative">
              <Box
                position="absolute"
                top="2px"
                left="2px"
                w="12px"
                h="12px"
                border="1.5px solid #52525B"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <IconButton aria-label="Search" variant="ghost" size="xs" p="0" minW="unset">
                  <LuSearch style={{ width: "12px", height: "12px" }} />
                </IconButton>
              </Box>
            </Box>

            <Box w="16px" h="16px" position="relative">
              <Box
                position="absolute"
                top="2px"
                left="1.33px"
                w="13.333333015441895px"
                h="12px"
                border="1.5px solid #52525B"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <IconButton aria-label="Wishlist" variant="ghost" size="xs" p="0" minW="unset">
                  <LuHeart style={{ width: "12px", height: "12px" }} />
                </IconButton>
              </Box>
            </Box>

            <Box w="16px" h="16px" position="relative">
              <Box
                position="absolute"
                top="2px"
                left="3.33px"
                w="9.333333015441895px"
                h="12px"
                border="1.5px solid #52525B"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <IconButton aria-label="Account" variant="ghost" size="xs" p="0" minW="unset">
                  <LuUser style={{ width: "9.333333015441895px", height: "12px" }} />
                </IconButton>
              </Box>
            </Box>

            <Box w="20.8828125px" h="21px" position="relative">
              <Box
                position="absolute"
                top="1.37px"
                left="1.37px"
                w="13.360000610351562px"
                h="13.300000190734863px"
                border="1.5px solid #52525B"
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
            <ColorModeButton />

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
