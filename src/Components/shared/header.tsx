import { useState } from "react";
import { Box, Flex, Image, Link as ChakraLink, Button } from "@chakra-ui/react";
import { FiX } from "react-icons/fi";
import { motion } from "framer-motion";
import { Link as RouterLink } from "react-router-dom";

const MotionBox = motion(Box);


interface NavItem {
  label: string;
  path: string;
}

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleDropdown = (): void => setIsOpen(!isOpen);

  const navItems: NavItem[] = [
    { label: "Features", path: "#powerful-features" },
    { label: "How it Works", path: "/work" },
    { label: "About Us", path: "/about" },
    { label: "Contact Us", path: "/contact" },
  ];

  const handleAnchorClick = (path: string): void => {
    const element = document.querySelector(path);
    if (element) {
      window.scrollTo({
        top: (element as HTMLElement).offsetTop - 80, // adjust for sticky header
        behavior: "smooth",
      });
    }
  };

  return (
    <Box position="relative" w="100%" bg="white" zIndex={50}>
      <Flex
        align="center"
        justify="space-between"
        p={4}
        boxShadow="lg"
        flexWrap="wrap"
        position="relative"
      >
        {/* Logo */}
        <Flex align="center" gap={2} w="9em">
          <Box>
            <Image src="ahiaoma_text_logo.png" alt="Logo" />
          </Box>
        </Flex>

        {/* Desktop Menu */}
        <Flex gap={6} align="center" display={{ base: "none", md: "flex" }}>
          {navItems.map((item) =>
            item.path.startsWith("#") ? (
              <ChakraLink
                key={item.label}
                href={item.path}
                _hover={{ textDecoration: "none", color: "teal.400" }}
                fontWeight="semibold"
                color="gray.600"
                onClick={(e) => {
                  e.preventDefault();
                  handleAnchorClick(item.path);
                }}
              >
                {item.label}
              </ChakraLink>
            ) : (
              <ChakraLink
                key={item.label}
                as={RouterLink}
                to={item.path}
                _hover={{ textDecoration: "none", color: "teal.400" }}
                fontWeight="semibold"
                color="gray.600"
              >
                {item.label}
              </ChakraLink>
            )
          )}

          {/* Join Waitlist Button */}
          <Button
            colorScheme="green"
            rounded="full"
            px={5}
            py={2}
            ml={4}
            _hover={{ bg: "green.600" }}
            onClick={() => alert("Redirect to waitlist page or modal")}
          >
            Join Waitlist
          </Button>
        </Flex>

        {/* Mobile Menu Icon */}
        {!isOpen && (
          <Box
            display={{ base: "block", md: "none" }}
            position="absolute"
            top={4}
            right={4}
            zIndex={20}
            cursor="pointer"
            w="2em"
            h="3em"
          >
            <Image
              src="menu.png"
              alt="Menu"
              onClick={toggleDropdown}
              w="100%"
              h="100%"
              objectFit="contain"
            />
          </Box>
        )}
      </Flex>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <MotionBox
          position="absolute"
          top={0}
          left={0}
          right={0}
          zIndex={15}
          bg="white"
          shadow="lg"
          initial={{ y: "-100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          px={4}
          py={6}
          color="black"
        >
          <Flex justify="space-between" mb={6} align="center">
            <Box w="9em">
              <Image src="ahiaoma_text_logo.png" alt="Logo" />
            </Box>
            <Box cursor="pointer" onClick={toggleDropdown}>
              <FiX size={24} />
            </Box>
          </Flex>

          <Flex direction="column" gap={4}>
            {navItems.map((item) =>
              item.path.startsWith("#") ? (
                <ChakraLink
                  key={item.label}
                  href={item.path}
                  _hover={{ textDecoration: "none", color: "teal.400" }}
                  fontWeight="semibold"
                  onClick={(e) => {
                    e.preventDefault();
                    toggleDropdown();
                    handleAnchorClick(item.path);
                  }}
                >
                  {item.label}
                </ChakraLink>
              ) : (
                <ChakraLink
                  key={item.label}
                  as={RouterLink}
                  to={item.path}
                  _hover={{ textDecoration: "none", color: "teal.400" }}
                  fontWeight="semibold"
                  onClick={toggleDropdown}
                >
                  {item.label}
                </ChakraLink>
              )
            )}

            {/* Join Waitlist button in mobile menu */}
            <Button
              colorScheme="green"
              rounded="full"
              px={5}
              py={2}
              mt={2}
              _hover={{ bg: "green.600" }}
              onClick={() => {
                toggleDropdown();
                alert("Redirect to waitlist page or modal");
              }}
            >
              Join Waitlist
            </Button>
          </Flex>
        </MotionBox>
      )}
    </Box>
  );
};

export default Header;
