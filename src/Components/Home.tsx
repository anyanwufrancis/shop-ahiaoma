"use client";
import {
  Box,
  Flex,
  Image,
  Button,
  Text,
  Icon,
  Heading,
  Grid,
  HStack,

} from "@chakra-ui/react";
import { PiStarFourFill } from "react-icons/pi";
import { IoCheckmarkSharp } from "react-icons/io5";
import { motion } from "framer-motion";
import { FaStar, FaQuoteLeft } from "react-icons/fa6";
import { keyframes } from "@emotion/react";
import { MdOutlineShield } from "react-icons/md";
import { HiMiniShoppingBag } from "react-icons/hi2";
import { FaTruck,  } from "react-icons/fa6";
import { IoEllipseSharp } from "react-icons/io5";
import { IoRocketSharp } from "react-icons/io5";
import { IoIosArrowRoundForward } from "react-icons/io";
import { BiSolidMessageRounded } from "react-icons/bi";
import { useState } from "react";
// import { FiX } from "react-icons/fi"; // Import X icon for close
import Header from "./shared/header";
import Footer from "./shared/footer";

const MotionBox = motion(Box);
const MotionIcon = motion(Icon);

const slowSpin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

// Variants for container and items for staggered animation
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Home = () => {
  // const [isOpen, setIsOpen] = useState(false);

  // const toggleDropdown = () => {
  //   setIsOpen(!isOpen);
  // };
 // State hooks for each card hover
  const [hoverCard1, setHoverCard1] = useState(false);
  const [hoverCard2, setHoverCard2] = useState(false);
  const [hoverCard3, setHoverCard3] = useState(false);

  // Background colors for arrows matching each card
  const arrowBgColors = ["#4CAF50", "#2196F3", "#9C27B0"]; // Green, Blue, Purple
  return (
    <>
     <MotionBox
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Global style for smooth scroll */}
      <Box ml={{ base: "0", md: "0.3em" }} overflowX={"hidden"}>
       <Box id="header-nav">

         <Header />

        {/* HERO SECTION */}
        <MotionBox variants={itemVariants}>
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
                fontSize={{ base: "4xl", md: "7xl" }}
                fontWeight="bolder"
                color="black"
                mt={"-0.1em"}
                w={{ base: "100%", md: "7em" }}
                lineHeight="short"
              >
                Shop Smarter with
                <Box as="span" color="green.500">
                  Ahiaoma
                </Box>
              </Heading>
            </Box>

            <Text
              mt={4}
              fontSize={{ base: "md", md: "2xl" }}
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
              <Box w={{ base: "8em", sm: "8em" }} ml={{ base: "-15em", md: "-1em" }}>
                <Image src="Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg" />
              </Box>
              <Box w={{ base: "8em", sm: "8em" }} ml={{ base: "-15em", md: "-1em" }}>
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
            position="relative"
            mt={{ base: "5em", md: "8em" }}
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
        </MotionBox>
       </Box>
        {/* Power Features Section */}
        <MotionBox variants={itemVariants}>
        <Box id="powerful-features" textAlign="center" mt={"4em"}>
          <Flex
            textAlign="center"
            maxW="1200px"
            mx="auto"
            gap={"0.2em"}
            color="green"
            px={"0.3em"}
            align={"center"}
            py={"0.3em"}
            backgroundColor={"#effdffff"}
            width={"12em"}
            marginX="auto"
          >
            <Box>
              <PiStarFourFill color="gold" />
            </Box>
            <Text rounded={"2em"} fontSize="md" fontWeight={"600"}>
              Why Choose Ahiaoma
            </Text>
          </Flex>
          <Heading fontSize={{ base: "6xl", md: "5xl" }} color="gray.600">
            Powerful Features
          </Heading>
          <Text fontSize={"2xl"} color="gray.400" mt={2}>
            Everything you need for a seamless shopping experience
          </Text>
        </Box>
        </MotionBox>

        {/* Features cards */}
        <MotionBox variants={itemVariants}>
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
        onMouseEnter={() => setHoverCard1(true)}
        onMouseLeave={() => setHoverCard1(false)}
        position="relative"
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
        <Text fontWeight="bold" fontSize="1.9em" mb="4px">
          Secure Payment
        </Text>
        <Text fontSize="2xl" fontWeight={"normal"} color="gray.600">
          Bank-level encryption and fraud protection for every transaction
        </Text>
        {/* Show arrow on hover */}
        {hoverCard1 && (
          <Box
            position="absolute"
            top="90%"
            right="1em"
            transform="translateY(-50%)"
            bg={arrowBgColors[0]}
            p={2}
            borderRadius="full"
            boxShadow="lg"
            cursor="pointer"
            transition="background-color 0.2s"
            _hover={{ bg: "green.600" }}
          >
            <IoIosArrowRoundForward size={20} color="white" />
          </Box>
        )}
      </Box>

      {/* Card 2 */}
      <Box
        bg="white"
        borderRadius="1em"
        boxShadow="lg"
        p="20px"
        _hover={{ transform: "scale(1.05)", bg: "#e0f7fa" }}
        transition="transform 0.2s, background-color 0.2s"
        onMouseEnter={() => setHoverCard2(true)}
        onMouseLeave={() => setHoverCard2(false)}
        position="relative"
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
        <Text fontWeight="bold" fontSize="1.9em" mb="4px">
          Wide Selection
        </Text>
        <Text fontSize="2xl" color="gray.600">
          Millions of products from verified sellers across Nigeria
        </Text>
        {/* Show arrow on hover */}
        {hoverCard2 && (
          <Box
            position="absolute"
            top="90%"
            right="1em"
            transform="translateY(-50%)"
            bg={arrowBgColors[1]}
            p={2}
            borderRadius="full"
            boxShadow="lg"
            cursor="pointer"
            transition="background-color 0.2s"
            _hover={{ bg: "blue.600" }}
          >
            <IoIosArrowRoundForward size={20} color="white" />
          </Box>
        )}
      </Box>

      {/* Card 3 */}
      <Box
        bg="white"
        borderRadius="1em"
        boxShadow="lg"
        p="20px"
        _hover={{ transform: "scale(1.05)", bg: "#f3e5f5" }}
        transition="transform 0.2s, background-color 0.2s"
        onMouseEnter={() => setHoverCard3(true)}
        onMouseLeave={() => setHoverCard3(false)}
        position="relative"
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
        <Text fontWeight="bold" fontSize="1.9em" mb="4px">
          Fast Delivery
        </Text>
        <Text fontSize="2xl" color="gray.600">
          Same-day delivery in major cities, nationwide coverage
        </Text>
        {/* Show arrow on hover */}
        {hoverCard3 && (
          <Box
            position="absolute"
            top="90%"
            right="1em"
            transform="translateY(-50%)"
            bg={arrowBgColors[2]}
            p={2}
            borderRadius="full"
            boxShadow="lg"
            cursor="pointer"
            transition="background-color 0.2s"
            _hover={{ bg: "purple.600" }}
          >
            <IoIosArrowRoundForward size={20} color="white" />
          </Box>
        )}
      </Box>
    </Grid>
        </MotionBox>

        {/* Testimonials Section */}
        <MotionBox variants={itemVariants}>
        <Box
          bg="linear-gradient(to top right, #effdffff, #ffffff)"
          p={10}
          mt={"5em"}
        >
          <Flex
            textAlign="center"
            maxW="1200px"
            mx="auto"
            gap={"0.3em"}
            color="green"
            px={"0.3em"}
            align={"center"}
            rounded={"2em"}
            py={"0.3em"}
            backgroundColor={"#c7f2f8ff"}
            width={"10em"}
            // mx="auto"
          >
            <Box>
              <BiSolidMessageRounded color="white" />
            </Box>
            <Text fontSize="md" fontWeight={"600"}>
              Customer Stories{" "}
            </Text>
          </Flex>
          <Heading
            fontSize={{ base: "2xl", md: "6xl" }}
            color="gray.600"
            textAlign="center"
          >
            Loved by Thousands
          </Heading>
          <Text fontSize={"2xl"} color="gray.400" textAlign="center" mb={10}>
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
                </Box>
              </Box>
            ))}
          </Grid>
        </Box>
        </MotionBox>
            <Footer />

      </Box>
       </MotionBox>
    </>
  );
};

export default Home;