import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  VStack,
  useDisclosure,
  Button,
  Container,
  Image,
  Collapse,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import type { FC } from "react";

interface NavLink {
  name: string;
  path: string;
}

const Header: FC = () => {
  const { isOpen, onToggle, onClose } = useDisclosure();
  const location = useLocation();
  const [scrolled, setScrolled] = useState<boolean>(false);

  const navLinks: NavLink[] = [
    { name: "Home", path: "/" },
    { name: "How It Works", path: "/work" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    // {name: "Download", path: "/download"},
  ];
const isActive = (path: string): boolean => location.pathname === path;

  // Scroll detection for header blur
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <Box
      as="header"
      position="sticky"
      top={0}
      zIndex={50}
      bg={scrolled ? "whiteAlpha.900" : "white"}
      backdropFilter={scrolled ? "blur(12px)" : "none"}
      boxShadow={scrolled ? "sm" : "none"}
      borderBottom="1px solid"
      borderColor={scrolled ? "gray.100" : "transparent"}
      transition="all 0.3s ease"
    >
      <Container maxW={{ base: "7xl", xl: "8xl" }} px={4}>
        <Flex h={16} alignItems="center" justifyContent="space-between">
          {/* Logo */}
          <Image
            src="ahiaoma_text_logo.png"
            alt="Ahiaoma Logo"
            maxW="160px"
            objectFit="contain"
          />

          {/* Desktop Navigation */}
          <HStack spacing={8} display={{ base: "none", md: "flex" }}>
         {navLinks.map((link) => (
  <Link
    key={link.path}
    as={RouterLink}
    to={link.path}
    color={isActive(link.path) ? "green.600" : "gray.700"}
    fontWeight={isActive(link.path) ? "700" : "500"}
    borderBottom={isActive(link.path) ? "2px solid" : "none"}
    borderColor="green.600"
    pb={isActive(link.path) ? "1px" : "0"}
    _hover={{ color: "green.600", textDecoration: "none" }}
    transition="color 0.2s"
  >
    {link.name}
  </Link>
))}          </HStack>
          {/* Download App + Hamburger */}
          <Flex alignItems="center" gap={3}>
            <Button
              as="a"
              href="/download"
              colorScheme="green"
              rounded="full"
              px={6}
              size="md"
              fontWeight="semibold"
              display={{ base: "none", md: "flex" }}
            >
              Download App
            </Button>

            {/* Hide hamburger when menu is open */}
            {!isOpen && (
              <IconButton
                size="md"
                icon={<HamburgerIcon />}
                aria-label="Open Menu"
                display={{ md: "none" }}
                onClick={onToggle}
                bg="transparent"
                color="gray.700"
                _hover={{ bg: "gray.100" }}
              />
            )}
          </Flex>
        </Flex>

{/* ==================== MOBILE MENU ==================== */}
<Collapse in={isOpen} animateOpacity>
  <Box
  position="absolute"
  top="0"
  left={0}
  right={0}
  bg="linear-gradient(to bottom, #f5f5f5, #b8bcc8)"
  zIndex={60}
  display={{ md: "none" }}
  overflow="hidden"
  boxShadow="lg"
  borderRadius="0 0 20px 20px"
>
    {/* TOP HEADER */}
    <Flex
      h={16}
      alignItems="center"
      justifyContent="space-between"
      px={4}
      borderBottom="1px solid"
      borderColor="gray.300"
    >
      {/* Logo */}
      <Image
        src="ahiaoma_text_logo.png"
        alt="Ahiaoma Logo"
        maxW="160px"
        objectFit="contain"
      />

      {/* Close Button */}
      <IconButton
        icon={<CloseIcon boxSize={3} />}
        aria-label="Close Menu"
        onClick={onClose}
        variant="ghost"
        color="gray.600"
        _hover={{ bg: "transparent" }}
        _active={{ bg: "transparent" }}
      />
    </Flex>

    {/* MENU LINKS */}
    <VStack
      align="stretch"
      spacing={0}
      px={5}
      py={6}
    >
     {navLinks.map((link) => (
  <Link
    key={link.path}
    as={RouterLink}
    to={link.path}
    onClick={onClose}
    py={3}
    fontSize="lg"
    fontWeight="bold"
    color={isActive(link.path) ? "green.200" : "white"}
    borderLeft={isActive(link.path) ? "3px solid" : "none"}
    borderColor="green.300"
    pl={isActive(link.path) ? 3 : 0}
    _hover={{
      textDecoration: "none",
      color: "green.100",
    }}
  >
    {link.name}
  </Link>
))}

      {/* Download App */}
      <Link
        py={3}
        fontSize="lg"
        fontWeight="bold"
        color="white"
        _hover={{
          textDecoration: "none",
          color: "green.100",
        }}
      >
        Download App
      </Link>
    </VStack>
  </Box>
</Collapse>
      </Container>
    </Box>
  );
}

export default Header;