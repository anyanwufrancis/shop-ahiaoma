"use client";
import {
  Box,
  Flex,
  Image,
  Button,
  Text,
  Link,
  Heading,
  Grid,
  HStack,
  Icon,
  VStack,
} from "@chakra-ui/react";

import { IoCheckmarkSharp } from "react-icons/io5";
import { motion } from "framer-motion";
import { FaStar, FaQuoteLeft } from "react-icons/fa6";
import { keyframes } from "@emotion/react";
import { MdOutlineShield, MdOutlineEmail } from "react-icons/md";
import { HiMiniShoppingBag } from "react-icons/hi2";
import { FaTruck, FaPhone } from "react-icons/fa6";
import { IoEllipseSharp } from "react-icons/io5";
import { IoRocketSharp } from "react-icons/io5";
import { IoIosArrowRoundForward } from "react-icons/io";
import { img } from "framer-motion/client";
// import { img } from "framer-motion/client";

const MotionBox = motion(Box);
const MotionIcon = motion(Icon);

const slowSpin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const Home = () => {
  return (
    <>
      {/* Global style for smooth scroll */}

      <Box ml={{ base: "0", md: "0.3em" }} overflowX={"hidden"}>
        {/* Header Navigation */}
        <Flex
          alignItems="center"
          justifyContent="space-between"
          p={4}
          bg="white"
          boxShadow="md"
          borderRadius="md"
          flexWrap="wrap"
        >
          {/* Logo */}
          <Flex align="center" gap={2} w="9em" color="green.600">
            <Image src="ahiaoma_text_logo.png" alt="Logo" />
          </Flex>

          <Flex gap={6} display={{ base: "none", md: "flex" }} flexWrap="wrap">
            <Link href="/#powerful-features">
              <Text
                _hover={{ color: "green.500" }}
                fontWeight="semibold"
                color="gray.700"
              >
                Features
              </Text>
            </Link>
            <Link href="/work">
              <Text
                _hover={{ color: "green.500" }}
                fontWeight="semibold"
                color="gray.700"
              >
                How It Works
              </Text>
            </Link>
            <Link href="/about">
              <Text
                _hover={{ color: "green.500" }}
                fontWeight="semibold"
                color="gray.700"
              >
                About Us
              </Text>
            </Link>
            <Link href="/contact">
              <Text
                _hover={{ color: "green.500" }}
                fontWeight="semibold"
                color="gray.700"
              >
                Contact Us
              </Text>
            </Link>
          </Flex>

          <Button
            bg="green.600"
            rounded="full"
            px={4}
            py={2}
            color="white"
            _hover={{ bg: "green.700" }}
            display={{ base: "none", md: "block" }}
          >
            Join Waitlist
          </Button>
        </Flex>

        {/* HERO SECTION */}
        <Flex
          gap={{ base: 10, md: 20 }}
          direction={{ base: "column", md: "row" }}
          textAlign={{ base: "center", md: "left" }}
          bg="linear-gradient(to top right, #effdffff, #ffffff)"
          py={{ base: 12, md: 20 }}
          px={{ base: 6, md: 10 }}
          position="relative"
        >
          {/* Left Section */}
          <Box flex="1">
            <Box position="relative" display="inline-block" mb={4}>
              <HStack
                gap={2}
                bg="green.100"
                color="green.700"
                px={3}
                mt={"-2em"}
                py={1.5}
                w={"15em"}
                borderRadius="full"
                alignItems="center"
                mb={"5em"}
              >
                <Icon as={IoRocketSharp} color="red.400" boxSize={3} />
                <Text fontSize="sm" fontWeight="semibold">
                  🇳🇬 Nigeria’s #1 Marketplace
                </Text>
              </HStack>

              <MotionBox mt={"-5em"}>
                <MotionIcon
                  as={IoEllipseSharp}
                  color="green.400"
                  boxSize={4}
                  ml={"2em"}
                  transform="translateX(-50%)"
                  animate={{ y: [0, -15, 0] }}
                  transition={{
                    duration: 1.5,
                    ease: "easeInOut",
                    repeat: Infinity,
                  }}
                />
              </MotionBox>

              <Heading
                fontSize={{ base: "2xl", md: "5xl" }}
                fontWeight="bolder"
                color="black"
                mt={"1em"}
                w={{ base: "100%", md: "7em" }}
                lineHeight="short"
              >
                Shop Smarter with
                <Box as="span" color="green.500">
                  Ahiaoma
                </Box>
              </Heading>

              {/* Add the "View Features" link here */}
              <Link
                href="#powerful-features"
                _hover={{ textDecoration: "underline", color: "green.500" }}
                fontWeight="semibold"
                display="block"
                mt={4}
              >
                View Features
              </Link>
            </Box>

            <Text
              mt={4}
              fontSize={{ base: "md", md: "lg" }}
              color="gray.700"
              w={{ base: "100%", md: "25em" }}
              mx={{ base: "auto", md: "0" }}
            >
              Experience the future of online shopping in Nigeria. Secure, fast,
              and reliable connecting buyers and sellers nationwide.
            </Text>

            {/* Buttons Section */}
            <Flex
              mt={6}
              gap={4}
              flexDirection={{ base: "column", sm: "row" }}
              justify={{ base: "center", md: "flex-start" }}
              align="center"
              flexWrap="wrap"
            >
              <Box
                w={{ base: "8em", sm: "8em" }}
                ml={{ base: "-15em", md: "-1em" }}
              >
                <Image src="Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg" />
              </Box>
              <Box
                w={{ base: "8em", sm: "8em" }}
                ml={{ base: "-15em", md: "-1em" }}
              >
                <Image src="google_playstore_images/GetItOnGooglePlay_Badge_Web_color_English.png" />
              </Box>

              <Button
                colorScheme="green"
                rounded="1em"
                px={5}
                py={3}
                h={"4em"}
                w={{ base: "100%", sm: "auto" }}
                _hover={{ bg: "green.700" }}
              >
                Learn More
                <Box ml={2}>
                  {" "}
                  {/* optional spacing */}
                  <IoIosArrowRoundForward size={20} color="white" />
                </Box>
              </Button>
            </Flex>

            {/* Stats Section */}
            <Flex
              gap={{ base: "2em", md: "3em" }}
              textAlign="center"
              mt={10}
              direction={{ base: "row", md: "row" }}
              alignItems="center"
              justifyContent={{ base: "center", md: "flex-start" }}
            >
              <Box>
                <Text fontSize="xl" fontWeight="bold">
                  50K+
                </Text>
                <Text w={{ base: "100%", md: "9em" }}>Happy Users</Text>
              </Box>
              <Box>
                <Text fontSize="xl" fontWeight="bold">
                  10K+
                </Text>
                <Text>Products</Text>
              </Box>
              <Box>
                <Text fontSize="xl" fontWeight="bold">
                  99%
                </Text>
                <Text>Satisfaction</Text>
              </Box>
            </Flex>
            <MotionBox mt={"-5em"}>
              <MotionIcon
                as={IoEllipseSharp}
                color="blue.400"
                ml={{ base: "100%", md: "5em" }}
                transform="translateX(-50%)"
                animate={{ y: [0, -15, 0] }}
                transition={{
                  duration: 1.5,
                  ease: "easeInOut",
                  repeat: Infinity,
                }}
              />
            </MotionBox>
          </Box>

          {/* Right Section */}
          <Box
            // flex="1"
            // ml={{ base: "1em", md: "-1em" }}
            position="relative"
            mt={{ base: 10, md: 0 }}
          >
            <MotionBox
              rounded="1em"
              overflow="hidden"
              w={{ base: "100%", md: "26em" }}
              h={{ base: "13em", md: "21em" }}
              mx={{ base: "auto", md: 0 }}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, ease: "easeInOut", repeat: Infinity }}
            >
              <Image
                src="countryside-woman-holding-plant-leaves.jpg"
                alt="Shopping"
                w="100%"
                h="100%"
                objectFit="cover"
              />
            </MotionBox>

            {/* Floating Star */}
            <Box
              bg="green.500"
              p="0.9em"
              position="absolute"
              top={{ base: "-1em", md: "-1em" }}
              right={{ base: "-1em", md: "-1em" }}
              w="3em"
              h="3em"
              rounded="md"
              animation={`${slowSpin} 25s linear infinite`}
              boxShadow="0 0 20px rgba(72,187,120,0.5)"
            >
              <FaStar size="1.2em" color="white" />
            </Box>

            {/* Floating Checkmark */}
            <MotionBox
              position="absolute"
              left="-0.6em"
              top={{ base: "10em", md: "19em" }}
              mx={{ base: "auto", md: 0 }}
              borderRadius="full"
              display="inline-flex"
              alignItems="center"
              justifyContent="center"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{
                duration: 1.5,
                ease: "easeInOut",
                repeat: Infinity,
              }}
            >
              <Box
                bg="#7b2ff5"
                p="14px"
                borderRadius="full"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <IoCheckmarkSharp size="22px" color="white" />
              </Box>
            </MotionBox>
          </Box>
        </Flex>

        {/* Power Features Section with id */}
        <Box id="powerful-features" textAlign="center" mt={5}>
          <Text
            textAlign="center"
            maxW="1200px"
            mx="auto"
            color="green"
            px={"0.3em"}
            py={"0.3em"}
            backgroundColor={"#effdffff"}
            width={"12em"}
            rounded={"2em"}
            fontSize="md"
            fontWeight={"600"}
          >
            Why Choose Ahiaoma
          </Text>
          <Heading fontSize={{ base: "2xl", md: "3xl" }} color="black">
            Powerful Features
          </Heading>
          <Text color="gray.400" mt={2}>
            Everything you need for a seamless shopping experience
          </Text>
        </Box>

        {/* Features cards */}
        <Grid
          mt={10}
          gap={6}
          gridTemplateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
          px={{ base: 4, md: 10 }}
        >
          {/* Card 1 */}
          <Box
            bg="white"
            borderRadius="1em"
            boxShadow="lg"
            p="20px"
            _hover={{ transform: "scale(1.05)", bg: "#f0fff0" }}
            transition="transform 0.2s, background-color 0.2s"
          >
            <Box
              mb="10px"
              backgroundColor={"#4CAF50"}
              w={"2em"}
              shadow={"md"}
              rounded={"0.4em"}
              py={"0.4em"}
              px={"0.5em"}
              color="white"
              fontSize="30px"
            >
              <MdOutlineShield />
            </Box>
            <Text fontWeight="bold" fontSize="1.1em" mb="4px">
              Secure Payment
            </Text>
            <Text fontSize="0.9em" color="gray.600">
              Bank-level encryption and fraud protection for every transaction
            </Text>
            <Box
              ml={"19em"}
              _hover={{ transform: "scale(1.05)", bg: "#e0f7fa" }}
              transition="transform 0.2s, background-color 0.2s"
              bg="green.500"
                  color="white"
                  rounded="full"
                  p="0.7em"
                  mt={"2em"}
                  boxShadow="lg"
              w={"2.9em"}
              // backgroundColor={"#4CAF50"}
            >
              <IoIosArrowRoundForward size={20} />
            </Box>
          </Box>

          {/* Card 2 */}
          <Box
            bg="white"
            borderRadius="1em"
            boxShadow="lg"
            p="20px"
            _hover={{ transform: "scale(1.05)", bg: "#e0f7fa" }}
            transition="transform 0.2s, background-color 0.2s"
          >
            <Box
              mb="10px"
              backgroundColor={"#2196F3"}
              w={"2em"}
              shadow={"md"}
              rounded={"0.4em"}
              py={"0.4em"}
              px={"0.5em"}
              color="white"
              fontSize="30px"
            >
              <HiMiniShoppingBag />
            </Box>
            <Text fontWeight="bold" fontSize="1.1em" mb="4px">
              Wide Selection
            </Text>
            <Text fontSize="0.9em" color="gray.600">
              Millions of products from verified sellers across Nigeria
            </Text>
              <Box
              ml={"19em"}
              _hover={{ transform: "scale(1.05)", bg: "#e0f7fa" }}
              transition="transform 0.2s, background-color 0.2s"
              bg="green.500"
                  color="white"
                  rounded="full"
                  p="0.7em"
                  mt={"2em"}
                  boxShadow="lg"
              w={"2.9em"}
              // backgroundColor={"#4CAF50"}
            >
              <IoIosArrowRoundForward size={20} />
            </Box>
          </Box>

          {/* Card 3 */}
          <Box
            bg="white"
            borderRadius="1em"
            boxShadow="lg"
            p="20px"
            _hover={{ transform: "scale(1.05)", bg: "#f3e5f5" }}
            transition="transform 0.2s, background-color 0.2s"
          >
            <Box
              mb="10px"
              backgroundColor={"#9C27B0"}
              w={"2em"}
              shadow={"md"}
              rounded={"0.4em"}
              py={"0.4em"}
              px={"0.5em"}
              color="white"
              fontSize="30px"
            >
              <FaTruck />
            </Box>
            <Text fontWeight="bold" fontSize="1.1em" mb="4px">
              Fast Delivery
            </Text>
            <Text fontSize="0.9em" color="gray.600">
              Same-day delivery in major cities, nationwide coverage
            </Text>
              <Box
              ml={"19em"}
              _hover={{ transform: "scale(1.05)", bg: "#e0f7fa" }}
              transition="transform 0.2s, background-color 0.2s"
              bg="green.500"
                  color="white"
                  rounded="full"
                  p="0.7em"
                  mt={"2em"}
                  boxShadow="lg"
              w={"2.9em"}
              // backgroundColor={"#4CAF50"}
            >
              <IoIosArrowRoundForward size={20} />
            </Box>
          </Box>
        </Grid>

        {/* Testimonials Section */}
        <Box
          bg="linear-gradient(to top right, #effdffff, #ffffff)"
          p={8}
          mt={"9em"}
        >
          <Heading
            fontSize={{ base: "2xl", md: "3xl" }}
            color="black"
            textAlign="center"
          >
            Loved by Thousands
          </Heading>
          <Text color="gray.400" textAlign="center" mb={10}>
            See what our community has to say about their experience
          </Text>

          <Grid
            mt={"5em"}
            gap={10}
            justifyContent="center"
            gridTemplateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
            placeItems="center"
          >
            {[
              `"Ahiaoma transformed my business! The platform is intuitive and my sales have tripled."`,
              `"Fast delivery, secure payments, and amazing customer support. Best rising marketplace in Nigeria!"`,
              `"I found exactly what I needed at great prices. The shopping experience is seamless."`,
              // `img: "url"`,
            ].map((quote, index) => (
              <Box
                key={index}
                position="relative"
                w={{ base: "100%", md: "22em" }}
              >
                <Box
                  position="absolute"
                  top="-0.5em"
                  left="-1em"
                  bg="green.500"
                  color="white"
                  rounded="full"
                  p="1em"
                  boxShadow="lg"
                  zIndex={3}
                >
                  <FaQuoteLeft />
                </Box>

                <Box
                  backgroundColor="white"
                  p={10}
                  borderRadius={10}
                  mt="1.5em"
                  _hover={{ transform: "scale(1.05)", bg: "#e0f7fa" }}
                  transition="transform 0.2s, background-color 0.2s"
                  boxShadow="md"
                  shadow={"dark-lg"}
                  textAlign="left"
                >
                  <Flex gap={2} mb={3}>
                    {Array(5)
                      .fill("")
                      .map((_, i) => (
                        <FaStar key={i} color="gold" />
                      ))}
                  </Flex>
                  <Text fontStyle="italic" color="gray.700">
                    {quote}
                  </Text>
                  <Text>{img.length}</Text>
                  {/* <Box>
                     <Image src="chinedu.png"/>
                  </Box> */}
                </Box>
              </Box>
            ))}
          </Grid>
        </Box>

        {/* Footer */}
        <Box bg="#000" color="#fff" p={8} fontFamily="Arial, sans-serif">
          <Flex justify="space-between" flexWrap="wrap" maxW="1200px" mx="auto">
            {/* About Section */}
            <Box flex="1" minW="200px" mb={4}>
              <Text fontWeight="bold" fontSize="xl" color="#00C853">
                Ahiaoma
              </Text>
              <Text mt={2} fontSize="xl" color={"gray.400"}>
                Nigeria's premier marketplace connecting millions of buyers and
                sellers. Shop with confidence, sell with ease.
              </Text>
              <Flex mt={4} gap={3}>
                <Box bg="#3b5998" borderRadius="50%" p={2}>
                  <Image src="facebook.svg" boxSize="40px" borderRadius="50%" />
                </Box>
                <Box bg="#E1306C" borderRadius="50%" p={2}>
                  <Image
                    src="instagram.svg"
                    boxSize="40px"
                    borderRadius="50%"
                  />
                </Box>
                <Box bg="#1DA1F2" borderRadius="50%" p={2}>
                  <Image
                    src="x_icon_twitter.svg"
                    boxSize="40px"
                    borderRadius="50%"
                  />
                </Box>
              </Flex>
            </Box>

            {/* Quick Links */}
            <Box ml={{base:"0.1em", md:"3em"}} minW="200px" mb={4}>
              <Text fontWeight="bold" fontSize="lg" mb={4}>
                Quick Links
              </Text>
              <VStack align="start" gap={2}>
                <Flex gap={"5px"} align={"center"}>
                  <IoEllipseSharp size={"8px"} color="green"/>
                  <Link href="/about">
                  <Text cursor="pointer" color={"gray.400"} fontSize="lg">
                    About Us
                  </Text>
                  </Link>
                </Flex>
                <Flex gap={"5px"} align={"center"}>
                  <IoEllipseSharp size={"8px"} color="green"/>
                  <Link href="/#powerful-features">
                  <Text cursor="pointer" color={"gray.400"} fontSize="lg">
                    How It Works
                  </Text>
                  </Link>
                </Flex>
                <Flex gap={"5px"} align={"center"}>
                  <IoEllipseSharp size={"8px"} color="green"/>
                  <Text cursor="pointer" color={"gray.400"} fontSize="lg">
                    Seller Center
                  </Text>
                </Flex>
                <Flex gap={"5px"} align={"center"}>
                  <IoEllipseSharp size={"8px"} color="green"/>
                  <Text cursor="pointer" color={"gray.400"} fontSize="lg">
                    Help Center
                  </Text>
                </Flex>
              </VStack>
            </Box>

            {/* Contact */}
            <Box ml={{base:"0.1em", md:"9em"}}  minW="200px" mb={4}>
              <Text fontWeight="bold" fontSize="lg" mb={4}>
                Contact
              </Text>
              <VStack align="start" gap={2}>
                <HStack align="center" gap={2}>
                  <Box bg="#4CAF50" p={2} borderRadius="md" h={"2.2em"}>
                    <Icon as={MdOutlineEmail} color="#fff" boxSize={4} />
                  </Box>
                  <Text fontSize="lg" color={"gray.400"}>ahiaoma37@gmail.com</Text>
                </HStack>
                <HStack align="center" gap={2}>
                  <Box bg="#2196F3" p={2} borderRadius="md" h={"2.2em"}>
                    <Icon as={FaPhone} color="#fff" boxSize={4} />
                  </Box>
                  <Text fontSize="lg"  color={"gray.400"}>+234 907 940 5147</Text>
                </HStack>
              </VStack>
            </Box>
          </Flex>

         <Box
            border={"1px"}
            ml={"3em"}
            w={{base:"15em", md:"75em"}}
            borderColor={" grey"}
            h={"-0.1em"}
          />
          <Flex fontSize={"xs"} color={"gray.500"} direction={{base:"row", md:"row"}} gap={"2em"} mt={"2em"}>
            <Text ml={"3.5em"} fontSize="sm" >
              © 2025 Ahiaoma. All rights reserved.
            </Text>
            <Text ml={"53em"}>Privacy Policy</Text>
            <Text>Terms of Policy</Text>
            <Text>Cookies and Policy</Text>
          </Flex>
        </Box>
      </Box>
    </>
  );
};

export default Home;
