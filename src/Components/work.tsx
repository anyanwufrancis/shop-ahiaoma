"use client";
import { AddIcon, } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Image,
  Heading,
  Text,
  VStack,
  HStack,
  Badge,
  // Circle,
  // Link,
  Container,
  SimpleGrid,
  Icon,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaThLarge, FaTruck } from "react-icons/fa";
import { FiMessageSquare, FiShoppingBag } from "react-icons/fi";
import { LuChartColumnIncreasing, LuCreditCard, LuShoppingBag } from "react-icons/lu";
import Header from "./shared/header";
// import { FaPhone } from "react-icons/fa6";
// import { GrAnalytics } from "react-icons/gr";
// import { IoEllipseSharp } from "react-icons/io5";
// import { MdOutlineEmail } from "react-icons/md";

const MotionBox = motion(Box);

export const Work = () => {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <>
      {/* ── HERO SECTION ── */}
      <MotionBox variants={itemVariants}>
        <Header />
        <Box
          bg="white"
          py={{ base: 16, md: 20, lg: 24 }}
          px={{ base: 6, md: 10, lg: 16 }}
          textAlign="center"
        >
          <VStack spacing={6} maxW="900px" mx="auto" mb={{ base: 16, lg: 20 }}>
            <Text
              fontSize={{ base: "lg", md: "xl" }}
              fontWeight="semibold"
              color="green.600"
              letterSpacing="wide"
              textTransform="uppercase"
            >
              Smart Shopping, Simplified
            </Text>
            <Heading
              fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
              fontWeight="bold"
              lineHeight="shorter"
              color="gray.800"
            >
              Smart Shopping,{" "}
              <Box
                as="span"
                color="green.600"
                fontSize={{ base: "4xl", md: "5xl", lg: "7xl" }}
              >
                Simplified
              </Box>
            </Heading>
            <Text
              fontSize={{ base: "lg", md: "xl" }}
              color="gray.600"
              maxW="3xl"
              mx="auto"
            >
              Whether you're a buyer looking for fresh food or a seller growing
              your business, Ahiaoma provides the tools you need.
            </Text>
          </VStack>

          {/* BUYER JOURNEY */}
          <VStack spacing={{ base: 20, lg: 28 }} maxW="1200px" mx="auto">
            <Heading
              fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
              fontWeight="bold"
              color="gray.800"
            >
              Your Fresh Food Journey
            </Heading>

            {/* Step 1 */}
            <Flex
              direction={{ base: "column", lg: "row" }}
              align="center"
              justify="space-between"
              gap={{ base: 10, lg: 16 }}
            >
              <VStack
                flex={1}
                align={{ base: "center", lg: "start" }}
                spacing={6}
              >
                <Flex
                  align="center"
                  gap={3}
                  bg="green.50"
                  px={5}
                  py={3}
                  rounded="full"
                  color="green.700"
                  fontWeight="semibold"
                >
                  <LuShoppingBag size={29} />
                  <Text>Browse Products</Text>
                </Flex>
                <Heading fontSize={{ base: "2xl", lg: "3xl" }} color="gray.800">
                  Explore thousands of fresh products from verified sellers.
                </Heading>
                <Text fontSize="lg" color="gray.600">
                  Discover seasonal farm-fresh items directly from Nigeria's
                  heartlands.
                </Text>
                <HStack
                  spacing={6}
                  wrap="wrap"
                  justify={{ base: "center", lg: "start" }}
                >
                  <Badge colorScheme="green" variant="subtle" px={4} py={2}>
                    Verified Quality
                  </Badge>
                  <Badge colorScheme="green" variant="subtle" px={4} py={2}>
                    Safe Payments
                  </Badge>
                </HStack>
              </VStack>

              <Box flex={1} maxW={{ base: "320px", lg: "310px" }} mx="auto">
                <MotionBox
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <Box
                    bg="black"
                    p={5}
                    rounded="3xl"
                    shadow="xl"
                    borderWidth={3}
                    borderColor="black"
                  >
                    <Image
                      src="/ahiaoma_buyer_app_screenshots/products_page_view_products.png"
                      alt="Browse Products"
                      borderRadius="xl"
                      w="full"
                    />
                  </Box>
                </MotionBox>
              </Box>
            </Flex>

            {/* Step 2 */}
            <Flex
              direction={{ base: "column", lg: "row-reverse" }}
              align="center"
              justify="space-between"
              gap={{ base: 10, lg: 16 }}
            >
              <VStack
                flex={1}
                align={{ base: "center", lg: "start" }}
                spacing={6}
              >
                <Flex
                  align="center"
                  gap={3}
                  bg="blue.50"
                  px={5}
                  py={3}
                  rounded="full"
                  color="blue.700"
                  fontWeight="semibold"
                >
                  <LuShoppingBag size={29} />
                  <Text>Detailed Views</Text>
                </Flex>
                <Heading fontSize={{ base: "2xl", lg: "3xl" }} color="gray.800">
                  Check quality, pricing, and seller ratings before you buy.
                </Heading>
                <Text fontSize="lg" color="gray.600">
                  Full transparency on every product — photos, descriptions,
                  reviews & more.
                </Text>
              </VStack>

              <Box flex={1} maxW={{ base: "320px", lg: "310px" }} mx="auto">
                <MotionBox
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <Box
                    bg="black"
                    p={5}
                    rounded="3xl"
                    shadow="xl"
                    borderWidth={3}
                    borderColor="black"
                  >
                    <Image
                      src="/ahiaoma_buyer_app_screenshots/view_proucts_details.png"
                      alt="Product Details"
                      borderRadius="xl"
                      w="full"
                    />
                  </Box>
                </MotionBox>
              </Box>
            </Flex>

            {/* Step 3 */}
            <Flex
              direction={{ base: "column", lg: "row" }}
              align="center"
              justify="space-between"
              gap={{ base: 10, lg: 16 }}
            >
              <VStack
                flex={1}
                align={{ base: "center", lg: "start" }}
                spacing={6}
              >
                <Flex
                  align="center"
                  gap={3}
                  bg="green.50"
                  px={5}
                  py={3}
                  rounded="full"
                  color="green.700"
                  fontWeight="semibold"
                >
                  <FiMessageSquare size={29} />
                  <Text>STEP 3</Text>
                </Flex>
                <Heading fontSize={{ base: "2xl", lg: "3xl" }} color="gray.800">
                  Chat & Negotiate
                </Heading>
                <Text fontSize="lg" color="gray.600">
                  Connect Directly with Sellers to ask questions or negotiate
                  prices
                </Text>
                <HStack
                  spacing={6}
                  wrap="wrap"
                  justify={{ base: "center", lg: "start" }}
                >
                  <Badge colorScheme="green" variant="subtle" px={4} py={2}>
                    Verified Quality
                  </Badge>
                  <Badge colorScheme="green" variant="subtle" px={4} py={2}>
                    Safe Payments
                  </Badge>
                </HStack>
              </VStack>

              <Box flex={1} maxW={{ base: "320px", lg: "310px" }} mx="auto">
                <MotionBox
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <Box
                    bg="black"
                    p={5}
                    rounded="3xl"
                    shadow="xl"
                    borderWidth={3}
                    borderColor="black"
                  >
                    <Image
                      src="/ahiaoma_buyer_app_screenshots/chat_seller_and_negotiate.png"
                      alt="Browse Products"
                      borderRadius="xl"
                      w="full"
                    />
                  </Box>
                </MotionBox>
              </Box>
            </Flex>
            {/* Step 4 */}
            <Flex
              direction={{ base: "column", lg: "row-reverse" }}
              align="center"
              justify="space-between"
              gap={{ base: 10, lg: 16 }}
            >
              <VStack
                flex={1}
                align={{ base: "center", lg: "start" }}
                spacing={6}
              >
                <Flex
                  align="center"
                  gap={3}
                  bg="blue.50"
                  px={5}
                  py={3}
                  rounded="full"
                  color="blue.700"
                  fontWeight="semibold"
                >
                  <LuCreditCard size={19}/>
                  <Text>STEP 4</Text>
                </Flex>
                <Heading fontSize={{ base: "2xl", lg: "3xl" }} color="gray.800">
                  Secure Checkout
                </Heading>
                <Text fontSize="lg" color="gray.600">
                  Multiple secure payment options to protect your transaction
                </Text>
              </VStack>

              <Box flex={1} maxW={{ base: "320px", lg: "310px" }} mx="auto">
                <MotionBox
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <Box
                    bg="black"
                    p={5}
                    rounded="3xl"
                    shadow="xl"
                    borderWidth={3}
                    borderColor="black"
                  >
                    <Image
                      src="/ahiaoma_buyer_app_screenshots/make_payment.png"
                      alt="Product Details"
                      borderRadius="xl"
                      w="full"
                    />
                  </Box>
                </MotionBox>
              </Box>
            </Flex>
             {/* Step 5 */}
            <Flex
              direction={{ base: "column", lg: "row" }}
              align="center"
              justify="space-between"
              gap={{ base: 10, lg: 16 }}
            >
              <VStack
                flex={1}
                align={{ base: "center", lg: "start" }}
                spacing={6}
              >
                <Flex
                  align="center"
                  gap={3}
                  bg="green.50"
                  px={5}
                  py={3}
                  rounded="full"
                  color="green.700"
                  fontWeight="semibold"
                >
                  <FaTruck />
                  <Text>STEP 5</Text>
                </Flex>
                <Heading fontSize={{ base: "2xl", lg: "3xl" }} color="gray.800">
                 Track & Confirm
                </Heading>
                <Text fontSize="lg" color="gray.600">
                Monitor your delivery in real-time and confirm receipt once happy.
                </Text>
                <HStack
                  spacing={6}
                  wrap="wrap"
                  justify={{ base: "center", lg: "start" }}
                >
                  <Badge colorScheme="green" variant="subtle" px={4} py={2}>
                    Verified Quality
                  </Badge>
                  <Badge colorScheme="green" variant="subtle" px={4} py={2}>
                    Safe Payments
                  </Badge>
                </HStack>
              </VStack>

              <Box flex={1} maxW={{ base: "320px", lg: "310px" }} mx="auto">
                <MotionBox
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <Box
                    bg="black"
                    p={5}
                    rounded="3xl"
                    shadow="xl"
                    borderWidth={3}
                    borderColor="black"
                  >
                    <Image
                      src="/ahiaoma_buyer_app_screenshots/reject_or_confirm_receipt.png"
                      alt="Browse Products"
                      borderRadius="xl"
                      w="full"
                    />
                  </Box>
                </MotionBox>
              </Box>
            </Flex>
           
            {/* Grow section */}
            <Box py={{ base: 16, md: 4 }} bg="gray.50" width="84em">
              <Container maxW={{ base: "7xl", xl: "8xl", "2xl": "9xl" }}>
                {/* Section Label */}
                <Text
                  textAlign="center"
                  color="green.500"
                  fontWeight="bold"
                  letterSpacing="widest"
                  mb={3}
                  fontSize="sm"
                >
                  FOR SELLERS
                </Text>

                {/* Heading */}
                <Heading
                  textAlign="center"
                  mb={{ base: 14, md: 20 }}
                  fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
                  fontWeight="bold"
                  color="gray.800"
                >
                  Grow Your Business
                </Heading>

                {/* Features Grid */}
                <SimpleGrid
                  columns={{ base: 1, md: 2 }}
                  spacing={{ base: 8, md: 10 }}
                >
                  {/* CARD 1 */}
                  <Box
                    bg="white"
                    rounded="3xl"
                    p={{ base: 6, md: 8 }}
                    boxShadow="sm"
                  >
                    <Flex
                      direction={{ base: "column", lg: "row" }}
                      align="center"
                      justify="space-between"
                      gap={8}
                    >
                      <VStack
                        align={{ base: "center", lg: "flex-start" }}
                        textAlign={{ base: "center", lg: "left" }}
                        spacing={4}
                        flex="1"
                      >
                        <Flex
                          w="55px"
                          h="55px"
                          rounded="full"
                          bg="green.600"
                          align="center"
                          justify="center"
                          color="white"
                        >
                          <Icon as={FaThLarge} boxSize={5} />
                        </Flex>

                        <Heading fontSize="2xl" color="gray.900">
                          Smart Dashboard
                        </Heading>

                        <Text color="gray.600" lineHeight="tall">
                          AI-powered insights to help you manage your farm
                          business effectively.
                        </Text>
                      </VStack>

                      <Box flex="1" textAlign="center">
                        {/* Phone Frame */}
                        <Box
                          mx="auto"
                          maxW={{ base: "280px", md: "320px" }}
                          border="12px solid black"
                          borderRadius="3xl"
                          // bg="#1F2937"
                          p={2}
                          boxShadow="lg"
                        >
                          <Image
                            src="/seller_screenshots/smart_dashboard_with_dynamic_insights_and_suggestions.png"
                            alt="Smart dashboard"
                            borderRadius="2xl"
                            objectFit="contain"
                          />
                        </Box>
                      </Box>
                    </Flex>
                  </Box>

                  {/* CARD 2 */}
                  <Box
                    bg="white"
                    rounded="3xl"
                    p={{ base: 6, md: 8 }}
                    boxShadow="sm"
                  >
                    <Flex
                      direction={{ base: "column", lg: "row" }}
                      align="center"
                      justify="space-between"
                      gap={8}
                    >
                      <VStack
                        align={{ base: "center", lg: "flex-start" }}
                        textAlign={{ base: "center", lg: "left" }}
                        spacing={4}
                        flex="1"
                      >
                        <Flex
                          w="55px"
                          h="55px"
                          rounded="full"
                          bg="green.600"
                          align="center"
                          justify="center"
                          color="white"
                        >
                          <Icon as={AddIcon} boxSize={5} />
                        </Flex>

                        <Heading fontSize="2xl" color="gray.900">
                          List Products
                        </Heading>

                        <Text color="gray.600" lineHeight="tall">
                          Easily upload and manage your inventory with a few
                          simple taps.
                        </Text>
                      </VStack>

                      <Box flex="1" textAlign="center">
                        <Box
                          mx="auto"
                          maxW={{ base: "280px", md: "320px" }}
                          border="12px solid black"
                          borderRadius="3xl"
                          // bg="#1F2937"
                          p={2}
                          boxShadow="lg"
                        >
                          <Image
                            src="/seller_screenshots/list_product.png"
                            alt="List product"
                            borderRadius="2xl"
                            objectFit="contain"
                          />
                        </Box>
                      </Box>
                    </Flex>
                  </Box>

                  {/* CARD 3 */}
                  <Box
                    bg="white"
                    rounded="3xl"
                    p={{ base: 6, md: 8 }}
                    boxShadow="sm"
                  >
                    <Flex
                      direction={{ base: "column", lg: "row" }}
                      align="center"
                      justify="space-between"
                      gap={8}
                    >
                      <VStack
                        align={{ base: "center", lg: "flex-start" }}
                        textAlign={{ base: "center", lg: "left" }}
                        spacing={4}
                        flex="1"
                      >
                        <Flex
                          w="55px"
                          h="55px"
                          rounded="full"
                          bg="green.600"
                          align="center"
                          justify="center"
                          color="white"
                        >
                          <Icon as={FiShoppingBag} boxSize={5} />
                        </Flex>

                        <Heading fontSize="2xl" color="gray.900">
                          Manage Orders
                        </Heading>

                        <Text color="gray.600" lineHeight="tall">
                          Receive real-time notifications and manage incoming
                          buyer requests.
                        </Text>
                      </VStack>

                      <Box flex="1" textAlign="center">
                        <Box
                          mx="auto"
                          maxW={{ base: "280px", md: "320px" }}
                          border="12px solid black"
                          borderRadius="3xl"
                          // bg="#1F2937"/
                          p={2}
                          boxShadow="lg"
                        >
                          <Image
                            src="/seller_screenshots/view_incoming_orders.png"
                            alt="Manage orders"
                            borderRadius="2xl"
                            objectFit="contain"
                          />
                        </Box>
                      </Box>
                    </Flex>
                  </Box>

                  {/* CARD 4 */}
                  <Box
                    bg="white"
                    rounded="3xl"
                    p={{ base: 6, md: 8 }}
                    boxShadow="sm"
                  >
                    <Flex
                      direction={{ base: "column", lg: "row" }}
                      align="center"
                      justify="space-between"
                      gap={8}
                    >
                      <VStack
                        align={{ base: "center", lg: "flex-start" }}
                        textAlign={{ base: "center", lg: "left" }}
                        spacing={4}
                        flex="1"
                      >
                        <Flex
                          w="55px"
                          h="55px"
                          rounded="full"
                          bg="green.600"
                          align="center"
                          justify="center"
                          color="white"
                        >
                          <Icon as={LuChartColumnIncreasing} boxSize={5} />
                        </Flex>

                        <Heading fontSize="2xl" color="gray.900">
                          Performance Data
                        </Heading>

                        <Text color="gray.600" lineHeight="tall">
                          Track your sales progress and customer ratings
                          accurately.
                        </Text>
                      </VStack>

                      <Box flex="1" textAlign="center">
                        <Box
                          mx="auto"
                          maxW={{ base: "280px", md: "320px" }}
                          border="12px solid black"
                          borderRadius="3xl"
                          p={2}
                          boxShadow="lg"
                        >
                          <Image
                            src="/seller_screenshots/view_real_time_performance.png"
                            alt="Performance data"
                            borderRadius="2xl"
                            objectFit="contain"
                          />
                        </Box>
                      </Box>
                    </Flex>
                  </Box>
                </SimpleGrid>
              </Container>
            </Box>
            {/* Remaining Buyer Steps (3 to 8) - Clean & Consistent */}
            {/* {[3,4,5,6,7,8].map((step) => (
              <MotionBox key={step} variants={itemVariants}>
                <Flex
                  direction={{ base: "column", md: step % 2 === 0 ? "column-reverse" : "column" }}
                  align="center"
                  justify="space-between"
                  px={{ base: "2em", md: "8em" }}
                  mt="2em"
                  mb="4em"
                  position="relative"
                >
                  <Box flex="1" textAlign={{ base: "center", md: "left" }} ml={{ base: "1em", md: step % 2 === 0 ? "9em" : "0.2em" }}>
                    <Flex align="center" mb="1.5em">
                      <Circle size="3em" bg="green.400" color="white" fontWeight="bold">{step}</Circle>
                      <Box h="4px" w="4em" bg="green.400" rounded="1em" ml="0.5em" />
                    </Flex>
                    <Box>
                      <Heading fontSize={{ base: "3xl", md: "4xl" }} mb="0.5em">
                        {step === 3 && "Add to Cart"}
                        {step === 4 && "Chat with Seller"}
                        {step === 5 && "Confirm Cart"}
                        {step === 6 && "Make Payment"}
                        {step === 7 && "Track Orders"}
                        {step === 8 && "Confirm Receipt"}
                      </Heading>
                      <Text fontSize="lg" color="gray.600">
                        {step === 3 && "Select your desired items and add them to your shopping cart"}
                        {step === 4 && "Negotiate prices and ask questions directly with the seller"}
                        {step === 5 && "Review your items and proceed to checkout"}
                        {step === 6 && "Complete your purchase with secure payment options"}
                        {step === 7 && "Monitor your order status and delivery progress"}
                        {step === 8 && "Confirm delivery and rate your shopping experience"}
                      </Text>
                    </Box>
                  </Box>

                  <Box flex="1" textAlign="center" mt={{ base: "2em", md: "0" }} position="relative">
                    <MotionCircle
                      size="3.5em"
                      bg="blue.500"
                      color="white"
                      fontWeight="bold"
                      position="absolute"
                      top="1.9em"
                      left={{ base: "79%", md: "64%" }}
                      transform="translateX(-50%)"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 1.8, repeat: Infinity }}
                      zIndex="2"
                    >
                      {step}
                    </MotionCircle>

                    <MotionBox
                      display="inline-block"
                      p="0.7em"
                      borderRadius="2.3em"
                      backgroundColor="black"
                      mt="3em"
                      boxShadow="xl"
                      w={{ base: "13em", md: "13em" }}
                      whileHover={{ scale: 1.08 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Image
                        src={`/ahiaoma_buyer_app_screenshots/${getBuyerImage(step)}`}
                        alt={`Step ${step}`}
                        borderRadius="1.5em"
                        w="100%"
                        h="26em"
                      />
                    </MotionBox>
                  </Box>
                </Flex>
              </MotionBox>
            ))} */}
          </VStack>
        </Box>
      </MotionBox>

      {/* SELLER JOURNEY */}

      {/* </Box> */}
    </>
  );
};
