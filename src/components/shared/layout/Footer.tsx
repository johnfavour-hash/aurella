import { Box, Stack, Text, HStack, Icon, Flex } from "@chakra-ui/react"
import { FaLinkedinIn, FaFacebookF, FaTwitter } from "react-icons/fa"
import { Link } from "react-router"

const Footer = () => {
  return (
    <Box 
      w="1440px" 
      h="412px" 
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
  )
}

export default Footer
