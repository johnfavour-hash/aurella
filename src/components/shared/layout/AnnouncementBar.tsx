import { Box, Container, Text } from "@chakra-ui/react"

const AnnouncementBar = () => {
  return (
    <Box bg="#111111" h="36px" position="sticky" top="0" zIndex="20">
      <Container maxW="1440px" h="100%" display="flex" alignItems="center" justifyContent="center" mx="auto" w="full">
        <Text
          fontFamily="body"
          fontWeight="normal"
          fontSize="sm"
          lineHeight="20px"
          textAlign="center"
          letterSpacing="0"
          color="white"
          w="full" maxW="485px"
          h="16.8px"
        >
          Free shipping on orders over $100 | Use code AURELIA20 for 20% off
        </Text>
      </Container>
    </Box>
  )
}

export default AnnouncementBar
