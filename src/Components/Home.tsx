"use client";

import {
  Box,
  Flex,
  Image,
  Button,
  Text,
  Heading,
  Grid,
  Icon,
  VStack,
  Circle, // ← added this line
} from "@chakra-ui/react";

import { keyframes } from "@emotion/react";

// import { FaStar, FaQuoteLeft } from "react-icons/fa6";
import { motion } from "framer-motion";
import { MdOutlineShield } from "react-icons/md";
import { HiMiniShoppingBag } from "react-icons/hi2";
import { FaTruck } from "react-icons/fa6";
import { PiStarFourFill } from "react-icons/pi";
// import { BiSolidMessageRounded } from "react-icons/bi";

import { DownloadIcon } from "@chakra-ui/icons";

import Header from "./shared/header";
import Footer from "./shared/footer";
import { BsCheck, BsTruck } from "react-icons/bs";
import Cookies from "./cookies";
// import { title } from "framer-motion/m";

const MotionBox = motion(Box);
const scroll = keyframes`
0% {transform:translateX(0);}
100% {transform:translateX(-50%)}`;

// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: { staggerChildren: 0.3 },
//   },
// };

// const itemVariants = {
//   hidden: { opacity: 0, y: 20 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
// };

const products = [
  {
    image: "/product1.jpg",
    title: "Fresh Tomatoes",
    price: "₦2,500",
  },
  {
    image: "/product2.jpg",
    title: "Organic Lettuce",
    price: "₦1,200",
  },
  {
    image: "/product3.jpg",
    title: "Carrots Bundle",
    price: "₦1,800",
  },
  {
    image: "/product4.jpg",
    title: "Eggplant Pack",
    price: "₦1,800",
  },
  {
    image: "/product5.jpg",
    title: "Fresh Avocados",
    price: "₦3,500",
  },
  {
    image: "/product6.jpg",
    title: "Green And Red Pepper Pack",
    price: "₦2,200",
  },
  {
    image: "/product7.jpg",
    title: "Cabbage Head",
    price: "₦1,500",
  },
  {
    image: "/product8.jpg",
    title: "Spinach Bunch",
    price: "₦1,200",
  },
  {
    image: "/product9.jpg",
    title: "Onions Bag",
    price: "₦2,800",
  },
  {
    image: "/product10.jpg",
    title: "Cucumber Pack",
    price: "₦1,700",
  },
  {
    image: "/product11.jpg",
    title: "Sweet Corn",
    price: "₦2,400",
  },
  {
    image: "/product12.jpg",
    title: "Okra Bowl",
    price: "₦1,600",
  },
];
const steps = [
  {
    id: 1,
    title: "Download App",
    desc: "Available on IOS and Andriod",
  },
  {
    id: 2,
    title: "Browse & Order",
    desc: "Select Fresh Produce directly from farms",
  },
  {
    id: 3,
    title: "Swift Delivery",
    desc: "recieve your order with in 24 hours ",
  },
];

const Home = () => {
  return (
    <>
      {/* <MotionBox
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      > */}
      <Box ml={{ base: "0", md: "0.3em" }} overflowX="hidden">
        {/* HEADER */}
        <Box id="header-nav">
          <Header />
        </Box>

        {/* HERO SECTION */}
        {/* <MotionBox variants={itemVariants}> */}
        <Flex
          gap={{ base: 10, md: 16 }}
          direction={{ base: "column", md: "row" }}
          textAlign={{ base: "center", md: "left" }}
          bg="gray.50"
          py={{ base: 12, md: 20 }}
          px={{ base: 6, md: 10 }}
          align="center"
        >
          {/* LEFT */}
          <Box flex="1">
            <Heading
              fontSize={{ base: "4xl", md: "6xl" }}
              fontWeight="bold"
              lineHeight="short"
              color="gray.800"
            >
              Fresh Farm Produce,
              <Box as="span" color="green.500">
                {" "}
                Straight to Your Door
              </Box>
            </Heading>

            <Text mt={5} fontSize={{ base: "md", md: "2xl" }} color="gray.600">
              Connecting verified farmers and food producers directly to urban
              buyers.
            </Text>

            {/* COUNTDOWN */}
            <Flex gap={10} mt={10}>
              {[
                { value: "08", label: "DAYS" },
                { value: "07", label: "HOURS" },
                { value: "15", label: "MINUTES" },
                { value: "49", label: "SECONDS" },
              ].map((item, i) => (
                <Box key={i} textAlign="center">
                  <Text fontSize="3xl" fontWeight="bold" color="green.600">
                    {item.value}
                  </Text>
                  <Text fontSize="sm" color="gray.500">
                    {item.label}
                  </Text>
                </Box>
              ))}
            </Flex>

            {/* BUTTONS */}
            <Flex mt={10} gap={4}>
              <Button
                bg="green.500"
                color="white"
                px={6}
                py={6}
                rounded="lg"
                _hover={{ bg: "green.600" }}
              >
                Get Notified
              </Button>

              <Button
                leftIcon={<DownloadIcon />}
                bg="gray.900"
                color="white"
                px={6}
                py={6}
                rounded="lg"
                _hover={{ bg: "black" }}
              >
                Download App
              </Button>
            </Flex>
          </Box>

          {/* RIGHT IMAGE */}
          <Box flex="1" display="flex" justifyContent="center">
            <MotionBox
              position="relative" // مهم
              rounded="lg"
              overflow="hidden"
              w={{ base: "100%", md: "26em" }}
              h={{ base: "18em", md: "28em" }}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              {/* Image */}
              <Image
                src="/countryside-woman-holding-plant-leaves.jpg"
                alt="Farmer"
                w="100%"
                h="100%"
                objectFit="cover"
              />

              {/* Fast Delivery Badge (Top Left) */}
              <Box
                position="absolute"
                top="0"
                left="0"
                bg="white"
                px="4"
                blur={"base"}
                py="2"
                rounded="12px"
                shadow="md"
                display="flex"
                alignItems="center"
                gap="2"
              >
                <BsTruck />
                <Box fontSize="sm">
                  <Box fontWeight="bold">Fast Delivery</Box>
                  <Box fontSize="xs" color="gray.500">
                    WITHIN 24 HOURS
                  </Box>
                </Box>
              </Box>

              {/* Verified Quality Badge (Bottom Right) */}
              <Box
                position="absolute"
                bottom="0"
                right="0"
                bg="white"
                px="4"
                py="2"
                rounded="12px"
                shadow="md"
                display="flex"
                alignItems="center"
                gap="2"
              >
                <BsCheck />
                <Box fontSize="sm">
                  <Box fontWeight="bold">Verified Quality</Box>
                  <Box fontSize="xs" color="gray.500">
                    100% ORGANIC
                  </Box>
                </Box>
              </Box>
            </MotionBox>
          </Box>
        </Flex>
        <Cookies/>
        {/* </MotionBox> */}

        {/* TRENDING PRODUCTS TITLE */}
        {/* <MotionBox variants={itemVariants}> */}
        <Box textAlign="center" mt="5em">
          <Flex
            mx="auto"
            gap="0.4em"
            align="center"
            justify="center"
            color="green.500"
            fontWeight="600"
          >
            <Box w="40px" h="3px" bg="green.500" />
            <Text>OUR TRENDING PRODUCTS</Text>
            <Box w="40px" h="3px" bg="green.500" />
          </Flex>
        </Box>
        {/* </MotionBox> */}

        {/* TRENDING PRODUCTS - HORIZONTAL AUTO SCROLLING */}
        {/* <MotionBox variants={itemVariants}> */}
        <Box py={12} px={{ base: 4, md: 10 }} bg="white" overflow="hidden">
          <VStack spacing={6} mb={8} textAlign="center">
            <Text
              fontSize="lg"
              fontWeight="semibold"
              color="green.600"
              letterSpacing="wide"
              textTransform="uppercase"
            >
              FRESH FROM THE FARM
            </Text>
            {/* <Heading
              fontSize={{ base: "3xl", md: "4xl" }}
              fontWeight="bold"
              color="gray.800"
            >
              Trending This Week
            </Heading> */}
          </VStack>

          {/* Auto Scrolling Horizontal Marquee */}
          <Box position="relative" overflow="hidden" py={4}>
            <Flex
              gap={6}
              animation={`${scroll} 30s linear infinite`}
              whiteSpace="nowrap"
              _hover={{ animationPlayState: "paused" }}
            >
              {[...products, ...products].map((product, i) => (
                <Box
                  key={i}
                  minW={{ base: "260px", md: "280px" }}
                  bg="white"
                  borderRadius="12px"
                  overflow="hidden"
                  boxShadow="md"
                  border="1px solid #eee"
                  _hover={{ transform: "scale(1.03)", shadow: "xl" }}
                  transition="0.3s"
                >
                  <Image
                    src={product.image}
                    alt={product.title}
                    h="180px"
                    w="100%"
                    objectFit="cover"
                  />
                  <Box p={4}>
                    <Text
                      fontSize="xs"
                      color="green.600"
                      fontWeight="semibold"
                      textTransform="uppercase"
                      mb={1}
                    >
                      FRESH FROM FARM
                    </Text>
                    <Text fontWeight="medium" mb={3} noOfLines={2}>
                      {product.title}
                    </Text>

                    <Flex justify="space-between" align="center">
                      <Text fontSize="xl" fontWeight="bold" color="green.600">
                        {product.price}
                      </Text>
                      <Button
                        size="sm"
                        colorScheme="green"
                        variant="outline"
                        _hover={{ bg: "green.50" }}
                      >
                        View Details
                      </Button>
                    </Flex>
                  </Box>
                </Box>
              ))}
            </Flex>
          </Box>
          <Text textAlign="center" fontSize="sm" color="gray.500" mt={6}>
            Scroll left or hover to pause • Fresh produce updated daily
          </Text>
        </Box>
        {/* </MotionBox> */}
        {/* WHY AHIAOMA SECTION */}
        <MotionBox
          // variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          py={{ base: 16, md: 20 }}
          px={{ base: 6, md: 10, lg: 16 }}
          bg="gray.50"
          textAlign="center"
        >
          <Flex
            direction="column"
            align="center"
            maxW="1200px"
            mx="auto"
            mb={12}
          >
            <Flex
              align="center"
              gap={2}
              bg="green.50"
              color="green.600"
              px={5}
              py={2}
              rounded="full"
              fontWeight="semibold"
              fontSize="sm"
              mb={4}
            >
              <PiStarFourFill />
              <Text>WHY AHIAOMA?</Text>
            </Flex>

            <Heading
              fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
              fontWeight="bold"
              color="gray.800"
              mb={4}
            >
              Built for Freshness & Trust
            </Heading>

            <Text
              fontSize={{ base: "lg", md: "xl" }}
              color="gray.600"
              maxW="3xl"
              mx="auto"
            >
              We leverage technology to bridge the gap between farm and table,
              ensuring quality and speed at every step.
            </Text>
          </Flex>

          <Grid
            templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
            gap={{ base: 8, lg: 12 }}
            maxW="1200px"
            mx="auto"
          >
            {/* Card 1 */}
            <Box
              bg="white"
              rounded="2xl"
              p={{ base: 8, lg: 10 }}
              shadow="md"
              transition="all 0.3s ease"
              _hover={{ transform: "translateY(-8px)", shadow: "xl" }}
              textAlign="center"
              position="relative"
              overflow="hidden"
            >
              <Flex
                mx="auto"
                w={20}
                h={20}
                bg="green.50"
                rounded="full"
                align="center"
                justify="center"
                mb={6}
              >
                <Icon as={MdOutlineShield} boxSize={10} color="green.600" />
              </Flex>

              <Heading
                as="h3"
                fontSize={{ base: "xl", md: "2xl" }}
                fontWeight="bold"
                mb={4}
                color="gray.800"
              >
                Safe & Secure
              </Heading>

              <Text fontSize="md" color="gray.600">
                Verified farmers and encrypted payments ensure every transaction
                is protected.
              </Text>
            </Box>

            {/* Card 2 */}
            <Box
              bg="white"
              rounded="2xl"
              p={{ base: 8, lg: 10 }}
              shadow="md"
              transition="all 0.3s ease"
              _hover={{ transform: "translateY(-8px)", shadow: "xl" }}
              textAlign="center"
              position="relative"
              overflow="hidden"
            >
              <Flex
                mx="auto"
                w={20}
                h={20}
                bg="blue.50"
                rounded="full"
                align="center"
                justify="center"
                mb={6}
              >
                <Icon as={HiMiniShoppingBag} boxSize={10} color="blue.600" />
              </Flex>

              <Heading
                as="h3"
                fontSize={{ base: "xl", md: "2xl" }}
                fontWeight="bold"
                mb={4}
                color="gray.800"
              >
                Maximum Choice
              </Heading>

              <Text fontSize="md" color="gray.600">
                Access a wide variety of seasonal produce directly from
                Nigeria's rural heartlands.
              </Text>
            </Box>

            {/* Card 3 */}
            <Box
              bg="white"
              rounded="2xl"
              p={{ base: 8, lg: 10 }}
              shadow="md"
              transition="all 0.3s ease"
              _hover={{ transform: "translateY(-8px)", shadow: "xl" }}
              textAlign="center"
              position="relative"
              overflow="hidden"
            >
              <Flex
                mx="auto"
                w={20}
                h={20}
                bg="purple.50"
                rounded="full"
                align="center"
                justify="center"
                mb={6}
              >
                <Icon as={FaTruck} boxSize={9} color="purple.600" />
              </Flex>

              <Heading
                as="h3"
                fontSize={{ base: "xl", md: "2xl" }}
                fontWeight="bold"
                mb={4}
                color="gray.800"
              >
                Swift Delivery
              </Heading>

              <Text fontSize="md" color="gray.600">
                Our logistics network ensures your produce stays fresh from
                harvest to your doorstep.
              </Text>
            </Box>
          </Grid>
        </MotionBox>

        {/* TESTIMONIALS */}

        <Box mt={"-1em"} bg={"#0b1c3d"} color={"white"} py={20} px={10}>
          <Flex
            justify={"space-between"}
            align={"flex-start"}
            position={"relative"}
            maxW={"1100px"}
            mx={"auto"}
          >
            <Box
              position={"absolute"}
              top={"25px"}
              left={"8%"}
              right={"8%"}
              height={"2px"}
              bg={"gray.600"}
              zIndex={"0"}
            />
            {steps.map((step) => (
              <VStack key={step.id} spacing={4} zIndex={1}>
                <Circle
                  size="50px"
                  bg="green.400"
                  color="white"
                  fontWeight="bold"
                >
                  {" "}
                  {step.id}
                </Circle>
                <Text fontWeight={"bold"} fontSize={"lg"}>
                  {step.title}
                </Text>
                <Text
                  fontSize={"sm"}
                  color={"gray.300"}
                  textAlign={"center"}
                  maxW={"200px"}
                >
                  {" "}
                  {step.desc}
                </Text>
              </VStack>
            ))}
          </Flex>
          <Flex justify={"center"} mt={12}>
            <Button
              leftIcon={<DownloadIcon />}
              bg={"white"}
              color={"black"}
              px={6}
              py={5}
              borderRadius={"lg"}
              _hover={{ bg: "gray.200" }}
            >
              Download Now
            </Button>
          </Flex>
        </Box>

        {/* FOOTER */}
        <Footer />
      </Box>
      {/* </MotionBox> */}
    </>
  );
};

export default Home;
