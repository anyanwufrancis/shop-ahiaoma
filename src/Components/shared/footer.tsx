import { Box, Flex, Text, HStack, VStack, Link as ChakraLink } from '@chakra-ui/react';
import { FaTwitter, FaInstagram, FaFacebookF } from 'react-icons/fa';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { Link } from 'react-router-dom';

const navigationLinks = [
  { label: "About Us", path: "/about" },
  { label: "How It Works", path: "/work" },
  { label: "Download App", path: "/download" },
  { label: "Contact", path: "/contact" }
];

const Footer = () => {
  return (
    <Box bg="#0a0a0a" color="white" pt={16} pb={10}>
      <Flex
        maxW="1200px"
        mx="auto"
        px={6}
        flexDirection={{ base: "column", lg: "row" }}
        gap={{ base: 12, lg: 8 }}
      >
        {/* Left Section - Logo & Description */}
        <Box flex="1" maxW={{ lg: "380px" }}>
          <Text fontSize="3xl" fontWeight="bold" color="#00C853" mb={4}>
            Ahiaoma
          </Text>
          <Text fontSize="md" color="gray.400" lineHeight="tall">
            Nigeria's premier fresh produce marketplace.
            <br />
            Connecting rural heartlands to urban homes with trust and efficiency.
          </Text>

          {/* Social Icons */}
          <HStack spacing={4} mt={8}>
            <Box
              as="a"
              href="#"
              w={10}
              h={10}
              bg="whiteAlpha.200"
              rounded="full"
              display="flex"
              alignItems="center"
              justifyContent="center"
              _hover={{ bg: "whiteAlpha.300" }}
            >
              <FaTwitter size={20} />
            </Box>
            <Box
              as="a"
              href="#"
              w={10}
              h={10}
              bg="whiteAlpha.200"
              rounded="full"
              display="flex"
              alignItems="center"
              justifyContent="center"
              _hover={{ bg: "whiteAlpha.300" }}
            >
              <FaInstagram size={20} />
            </Box>
            <Box
              as="a"
              href="#"
              w={10}
              h={10}
              bg="whiteAlpha.200"
              rounded="full"
              display="flex"
              alignItems="center"
              justifyContent="center"
              _hover={{ bg: "whiteAlpha.300" }}
            >
              <FaFacebookF size={20} />
            </Box>
          </HStack>
        </Box>

        {/* Navigation */}
        <Box flex="1">
          <Text fontWeight="semibold" mb={5} fontSize="sm" letterSpacing="wider" color="gray.400">
            NAVIGATION
          </Text>
          <VStack align="start" spacing={3}>
            {navigationLinks.map((item) => (
              <ChakraLink
                key={item.label}
                as={Link}
                to={item.path}
                color="gray.400"
                _hover={{ color: "white", textDecoration: "none" }}
                fontSize="md"
                display="flex"
                alignItems="center"
                gap={2}
                role="group"
              >
                <Box
                  as={MdKeyboardArrowRight}
                  transition="transform 0.2s"
                  _groupHover={{ transform: "translateX(4px)" }}
                  size={18}
                />
                {item.label}
              </ChakraLink>
            ))}
          </VStack>
        </Box>

        {/* Contact */}
        <Box flex="1">
          <Text fontWeight="semibold" mb={5} fontSize="sm" letterSpacing="wider" color="gray.400">
            CONTACT
          </Text>
          <VStack align="start" spacing={5}>
            <HStack spacing={3}>
              <Box bg="whiteAlpha.200" p={2.5} rounded="full">
                ✉️
              </Box>
              <Text color="gray.300">support@shopahiaoma.com</Text>
            </HStack>

            <HStack spacing={3}>
              <Box bg="whiteAlpha.200" p={2.5} rounded="full">
                📞
              </Box>
              <Text color="gray.300">+234 915 743 5239</Text>
            </HStack>
          </VStack>
        </Box>
      </Flex>

      {/* Bottom Bar */}
      <Box borderTop="1px solid" borderColor="whiteAlpha.200" mt={16} pt={8}>
        <Flex
          maxW="1200px"
          mx="auto"
          px={6}
          flexDirection={{ base: "column", md: "row" }}
          justify="space-between"
          align={{ base: "center", md: "flex-end" }}
          gap={4}
        >
          <Text fontSize="sm" color="gray.500">
            © 2026 AHIAOMA. ALL RIGHTS RESERVED.
          </Text>

          <HStack spacing={6} fontSize="sm" color="gray.500">
            <Text cursor="pointer" _hover={{ color: "gray.300" }}>
              PRIVACY
            </Text>
            <Text cursor="pointer" _hover={{ color: "gray.300" }}>
              TERMS
            </Text>
            <Text cursor="pointer" _hover={{ color: "gray.300" }}>
              COOKIES
            </Text>
          </HStack>
        </Flex>
      </Box>
    </Box>
  );
};

export default Footer;
