import { Box, Flex, Text, Button, Icon, Stack } from "@chakra-ui/react"
import { LuShoppingCart, LuArrowRight } from "react-icons/lu"
import { Link } from "react-router"

interface EmptyCartProps {
  onClose: () => void
}

const EmptyCart = ({ onClose }: EmptyCartProps) => {
  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      w="593px"
      h="798px"
      bg="#FFFFFF"
      opacity="1"
    >
      <Stack
        w="362px"
        h="244px"
        gap="24px"
        align="center"
        justify="center"
        opacity="1"
      >
        <Stack
          w="362px"
          h="180px"
          gap="8px"
          align="center"
          justify="center"
        >
          {/* Icon Wrapper */}
          <Box
            w="98px"
            h="98px"
            rounded="80px"
            bg="var(--gray-100, #F4F4F5)"
            p="24px"
            display="flex"
            alignItems="center"
            justifyContent="center"
            gap="10px"
          >
            <Box
              w="50px"
              h="50px"
              display="flex"
              alignItems="center"
              justifyContent="center"
              position="relative"
            >
              <Icon
                as={LuShoppingCart}
                w="41.75px"
                h="41.5625px"
                strokeWidth="4px"
                color="var(--gray-600, #52525B)"
                position="absolute"
                top="4.27px"
                left="4.27px"
              />
            </Box>
          </Box>

          <Stack gap="12px" align="center">
            <Text
              w="362px"
              h="33px"
              fontFamily="body"
              fontWeight="600"
              fontSize="lg"
              lineHeight="28px"
              letterSpacing="0%"
              textAlign="center"
              color="var(--text-fg, #000000)"
            >
              Your cart is empty
            </Text>
            <Text
              w="362px"
              h="33px"
              fontFamily="body"
              fontWeight="normal"
              fontSize="md"
              lineHeight="24px"
              letterSpacing="0%"
              textAlign="center"
              color="var(--gray-400, #A1A1AA)"
            >
              Looks like you haven't added anything yet.
            </Text>
          </Stack>
        </Stack>

        <Button
          w="161px"
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
          onClick={onClose}
        >
          <Text
            w="129px"
            h="20px"
            fontFamily="body"
            fontWeight="medium"
            fontSize="sm"
            lineHeight="20px"
            letterSpacing="0%"
            textAlign="center"
            color="var(--gray-contrast, #FFFFFF)"
          >
            Continue Shopping
          </Text>
        </Button>
      </Stack>
    </Flex>
  )
}

export default EmptyCart
