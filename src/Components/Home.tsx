// import {
//   Box,
//   Flex,
//   Text,
//   Button,
//   Image,
//   Stack,
//   SimpleGrid,
//   Icon,
//   Card,
//   CardBody,
//   Avatar,
// } from "@chakra-ui/react";
// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import {
//   FaChalkboardTeacher,
//   FaGraduationCap,
//   FaMoneyCheckAlt,
//   FaDesktop,
// } from "react-icons/fa";
// import { FaArrowLeft, FaArrowRight, FaQuoteLeft } from "react-icons/fa";
// import { motion, AnimatePresence } from "framer-motion";


// const testimonials = [
//   {
//     text: "My Son, David Osazuwa in Jss1A before he was admitted into BENNY INT'L we couldn't read what he was writing, but just a term in BENNY INT'L SCH we were able to read his notebooks and he has improved in his academic work. Kudos to the teachers",
//     name: "Mr. Jude Richy Osazuwa",
//     role: "Parent",
//     image:
//       "https://www.bennyschools.org/assets/images/testimonials/parents/Mr%20Jude%20Richy%20Osazuwa.jpg",
//   },
//   {
//     text: "Benny international is a nice school .it has every good educational quality for your kids. They also have good manner of approach, you can equally depend on the school trying their very best to give your kids the best quality education ever, I have found no fault in them ever since my kids where been admitted.",
//     name: "Mrs. Ebiye Diela",
//     role: "Parent",
//     image:
//       "https://www.bennyschools.org/assets/images/testimonials/parents/Mrs%20Ebiye%20Diela.jpg",
//   },
//   {
//     text: "This is a top notch and fantastic school with a well-planned curriculum, pupils and students’ academic needs-focused with a serene atmosphere fully equipped to assist in learning.",
//     name: "Mrs. Esther E. Muojekwu",
//     role: "Parent",
//     image:
//       "https://www.bennyschools.org/assets/images/testimonials/parents/Mrs%20Esther%20Emarobebh%20Muojekwu.jpg",
//   },
//   {
//     text: "BIS teachers and minders wield a standard to be proud of, their love and care for their students is evident in their resilient efforts to impart the needed academic excellence evidenced on the students, as a parent, I have had cause to call on the teachers some times and discuss my concerns and sure they give me a listening ear and the necessary action is taken, this is commendable.",
//     name: "Mrs. Oke Timipre Gbaiwogha",
//     role: "Parent",
//     image:
//       "src/assets/screenshot-1760540322617.png",
//   },
// ];

// const Home = () => {
//   const navigate = useNavigate();
//   const [current, setCurrent] = useState(0);
  
  
   

  
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
//     }, 5000);
//     return () => clearInterval(interval);
//   }, []);

//   const prevSlide = () => {
//     setCurrent((prev) =>
//       prev === 0 ? testimonials.length - 1 : prev - 1
//     );
//   };

//   const nextSlide = () => {
//     setCurrent((prev) =>
//       prev === testimonials.length - 1 ? 0 : prev + 1
//     );
//   };

//   return (
//     <Box w="100%" py={{ base: 10, md: 4 }}>
//       {/* === Hero Section === */}
//       <Box
//         position="relative"
//         borderRadius="lg"
//         overflow="hidden"
//         w="95%"
//         mx="auto"
//         h={{ base: "300px", md: "500px" }}
//       >
//         <Image
//           src="https://www.bennyschools.org/assets/images/banner.jpg"
//           alt="Students of Benny International Schools"
//           objectFit="cover"
//           w="100%"
//           h="100%"
//           filter="brightness(45%)"
//           opacity={0.8}
//         />

//         <Flex
//           position="absolute"
//           top="0"
//           left="0"
//           w="100%"
//           h="100%"
//           align="center"
//           justify="center"
//           direction="column"
//           textAlign="center"
//           color="white"
//           px={4}
//         >
//           <Text
//             fontSize={{ base: "2xl", md: "6xl" }}
//             fontWeight="bold"
//             mb={4}
//             lineHeight="shorter"
//           >
//             Welcome To Our School
//           </Text>

//           <Text fontSize={{ base: "md", md: "3xl" }} mb={6}>
//             A Great Citadel of Learning
//           </Text>

//           <Button
//             colorScheme="blue"
//             size="lg"
//             borderRadius="md"
//             px={8}
//             fontWeight="bold"
//             transition="all 0.3s ease"
//             _hover={{ bg: "blue.700", transform: "scale(1.05)" }}
//             onClick={() => navigate("/about")}
//           >
//             See More
//           </Button>
//         </Flex>
//       </Box>

//       {/* === Welcome Section === */}
//       <Box
//         w="95%"
//         mx="auto"
//         maxW="1200px"
//         bg="gray.50"
//         borderRadius="xl"
//         mt={{ base: 12, md: 16 }}
//         p={{ base: 6, md: 10 }}
//       >
//         <Flex
//           direction={{ base: "column", md: "row" }}
//           align="center"
//           justify="space-between"
//           gap={10}
//         >
//           <Stack spacing={5} flex="1">
//             <Box>
//               <Text fontSize={{ base: "xl", md: "4xl" }} color="gray.700">
//                 Welcome to
//               </Text>
//               <Text
//                 fontSize={{ base: "2xl", md: "5xl" }}
//                 fontWeight="bold"
//                 color="blue.600"
//                 lineHeight="shorter"
//               >
//                 Benny International Schools
//               </Text>
//             </Box>

//             <Text fontSize="lg" color="gray.600" lineHeight="tall">
//               Benny International Schools (BIS) was established on October 1st, 2001 by
//               Mrs. Beniere O. Ifidi due to her desire to contribute to the manpower
//               development of the state.
//             </Text>

//             <Button
//               colorScheme="blue"
//               w="150px"
//               borderRadius="md"
//               fontWeight="medium"
//               onClick={() => navigate("/about")}
//             >
//               Read On
//             </Button>
//           </Stack>

//           <Box flex="1" textAlign="center">
//             <Image
//               src="https://www.bennyschools.org/assets/images/carousel/slide5/science_sm.jpg"
//               alt="Students in Laboratory"
//               borderRadius="lg"
//               objectFit="cover"
//               w="100%"
//               maxW="500px"
//               mx="auto"
//               boxShadow="md"
//             />
//           </Box>
//         </Flex>
//       </Box>

//       {/* === Why Choose Us Section === */}
//       <Box bg="blue.600" color="white" py={{ base: 12, md: 20 }} mt={16}>
//         <Box textAlign="center" mb={12} px={4}>
//           <Text fontSize={{ base: "2xl", md: "2xl" }} fontWeight="bold" mb={3}>
//             Why Choose Us
//           </Text>
//           <Text
//             fontSize={{ base: "md", md: "md" }}
//             maxW="700px"
//             mx="auto"
//             opacity={0.9}
//           >
//             Diligence and Excellence is our motto and watchword. We have put things
//             in place as we grow to better accommodate the educational needs of our
//             21st century students.
//           </Text>
//         </Box>

//         <SimpleGrid
//           columns={{ base: 1, md: 2 }}
//           spacing={{ base: 10, md: 16 }}
//           maxW="1000px"
//           mx="auto"
//           px={6}
//         >
//           <Flex align="flex-start" gap={4}>
//             <Icon as={FaChalkboardTeacher} boxSize="90px" color="white" />
//             <Box>
//               <Text fontSize="2xl" fontWeight="medium">
//                 Highly Qualified Teachers
//               </Text>
//               <Text mt={2} opacity={0.9}>
//                 We ensure to hire highly qualified teachers for teaching roles in
//                 our school, so that students get the best.
//               </Text>
//             </Box>
//           </Flex>

//           <Flex align="flex-start" gap={4}>
//             <Icon as={FaGraduationCap} boxSize="90px" color="white" />
//             <Box>
//               <Text fontSize="2xl" fontWeight="medium">
//                 Conducive Learning Environment
//               </Text>
//               <Text mt={2} opacity={0.9}>
//                 Our school has great facilities and space to ensure students get
//                 the best.
//               </Text>
//             </Box>
//           </Flex>

//           <Flex align="flex-start" gap={4}>
//             <Icon as={FaMoneyCheckAlt} boxSize="90px" color="white" />
//             <Box>
//               <Text fontSize="2xl" fontWeight="medium">
//                 Affordable
//               </Text>
//               <Text mt={2} opacity={0.9}>
//                 Our fees are moderate and affordable.
//               </Text>
//             </Box>
//           </Flex>

//           <Flex align="flex-start" gap={4}>
//             <Icon as={FaDesktop} boxSize="90px" color="white" />
//             <Box>
//               <Text fontSize="2xl" fontWeight="medium">
//                 ICT Compliant
//               </Text>
//               <Text mt={2} opacity={0.9}>
//                 We ensure our students graduate with proficient ICT skills. Student
//                 performance is monitored closely via our school portal, giving
//                 parents real time feedback on the performance of their wards.
//               </Text>
//             </Box>
//           </Flex>
//         </SimpleGrid>
//       </Box>

//       {/* === Recent Activities Section === */}
//       <Box bg="blue.50" py={{ base: 12, md: 20 }}>
//         <Box textAlign="center" mb={12}>
//           <Text
//             fontSize={{ base: "2xl", md: "4xl" }}
//             fontWeight="medium"
//             color="blue.600"
//           >
//             Recent Activities
//           </Text>
//         </Box>

//         <SimpleGrid
//           columns={{ base: 1, md: 3 }}
//           spacing={{ base: 10, md: 8 }}
//           w="90%"
//           mx="auto"
//           mb={10}
//         >
//           <Card
//             borderRadius="md"
//             overflow="hidden"
//             bg="white"
//             boxShadow="md"
//             transition="all 0.3s"
//             _hover={{ transform: "scale(1.03)", boxShadow: "lg" }}
//           >
//             <Image
//               src="https://www.bennyschools.org/assets/images/gallery/departmental_practicals/md/dprac_02.jpg"
//               alt="Cooking Practical"
//               objectFit="cover"
//               h="220px"
//               w="100%"
//             />
//             <CardBody>
//               <Text
//                 fontSize="2xl"
//                 fontWeight="medium"
//                 color="blue.600"
//                 mb={2}
//               >
//                 Practicals on making Doughnuts and Fish Pie
//               </Text>
//               <Text fontSize="sm" color="blue.500">
//                 April 16, 2021
//               </Text>
//             </CardBody>
//           </Card>

//           <Card
//             borderRadius="md"
//             overflow="hidden"
//             bg="white"
//             boxShadow="md"
//             transition="all 0.3s"
//             _hover={{ transform: "scale(1.03)", boxShadow: "lg" }}
//           >
//             <Image
//               src="https://www.bennyschools.org/assets/images/gallery/departmental_practicals/md/dprac_31.jpg"
//               alt="Chemistry Practical"
//               objectFit="cover"
//               h="220px"
//               w="100%"
//             />
//             <CardBody>
//               <Text
//                 fontSize="2xl"
//                 fontWeight="medium"
//                 color="blue.600"
//                 mb={2}
//               >
//                 Chemistry Practicals on Titration
//               </Text>
//               <Text fontSize="sm" color="blue.500">
//                 November 2, 2020
//               </Text>
//             </CardBody>
//           </Card>

//           <Card
//             borderRadius="md"
//             overflow="hidden"
//             bg="white"
//             boxShadow="md"
//             transition="all 0.3s"
//             _hover={{ transform: "scale(1.03)", boxShadow: "lg" }}
//           >
//             <Image
//               src="https://www.bennyschools.org/assets/images/gallery/departmental_practicals/md/dprac_44.jpg"
//               alt="Fish Preservation Practical"
//               objectFit="cover"
//               h="220px"
//               w="100%"
//             />
//             <CardBody>
//               <Text
//                 fontSize="2xl"
//                 fontWeight="medium"
//                 color="blue.600"
//                 mb={2}
//               >
//                 Practicals on fish preservation techniques
//               </Text>
//               <Text fontSize="sm" color="blue.500">
//                 October 30, 2020
//               </Text>
//             </CardBody>
//           </Card>
//         </SimpleGrid>

//         <Flex justify="right">
//           <Button colorScheme="blue" size="md" px={6} borderRadius="md">
//             More Activities
//           </Button>
//         </Flex>
//       </Box>

//       {/* === Testimonials Section === */}
// <Box py={{ base: 16, md: 24 }} textAlign="center" bg="white">
//   <Text
//     fontSize={{ base: "2xl", md: "4xl" }}
//     fontWeight="bold"
//     mb={10}
//     color="gray.800"
//   >
//     What Parents Say
//   </Text>

//   <Box position="relative" maxW="800px" mx="auto" minH="420px">
//     <AnimatePresence mode="wait">
//       <motion.div
//         key={current}
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         exit={{ opacity: 0 }}
//         transition={{ duration: 5, ease: "easeInOut" }}
//       >
//         <Icon
//           as={FaQuoteLeft}
//           color="yellow.300"
//           boxSize={10}
//           mb={4}
//           opacity={0.6}
//         />
//         <Text
//           fontSize={{ base: "md", md: "lg" }}
//           color="gray.700"
//           maxW="700px"
//           mx="auto"
//           mb={8}
//         >
//           {testimonials[current].text}
//         </Text>

//         <Avatar
//           size="xl"
//           src={testimonials[current].image}
//           mb={4}
//           mx="auto"
//         />
//         <Text fontWeight="bold" fontSize="lg" color="gray.800">
//           {testimonials[current].name}
//         </Text>
//         <Text color="gray.500">{testimonials[current].role}</Text>
//       </motion.div>
//     </AnimatePresence>

//     <Flex justify="space-between" mt={-32}>
//       <Icon
//         as={FaArrowLeft}
//         boxSize={6}
//         cursor="pointer"
//         onClick={prevSlide}
//       />
//       <Icon
//         as={FaArrowRight}
//         boxSize={6}
//         cursor="pointer"
//         onClick={nextSlide}
//       />
//     </Flex>
//   </Box>
// </Box>
//     </Box>
//   );
// };

// export default Home;




// "use client";
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

import { IoArrowForward, IoCheckmarkSharp } from "react-icons/io5";
import { motion } from "framer-motion";
import { FaStar, FaQuoteLeft } from "react-icons/fa6";
import { keyframes } from "@emotion/react";
import { MdOutlineShield, MdOutlineEmail } from "react-icons/md";
import { HiMiniShoppingBag } from "react-icons/hi2";
import { FaTruck, FaPhone } from "react-icons/fa6";
import { IoEllipseSharp } from "react-icons/io5";
import { IoRocketSharp } from "react-icons/io5";

const MotionBox = motion(Box);
const MotionIcon = motion(Icon);

const slowSpin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const Home = () => {
  return (
    <Box
      // p={{ base: 4, md: 0 }}
      // mt={{ base: "2em", md: "5em" }}
      ml={{ base: "0", md: "0.3em" }}
    >
      {/* Header Navigation */}
      <Flex
        alignItems="center"
        justifyContent="space-between"
        p={4}
        bg="white"
        boxShadow="md"
        borderRadius="md"
      >
        {/* Logo */}
        <Flex align="center" gap={2} w="9em" color="green.600">
          <Image src="ahiaoma_text_logo.png" alt="Logo" />
        </Flex>

 <Flex gap={6} display={{ base: "none", md: "flex" }}>
  {/* Features Link */}
  <Link href="/features">
    <Text
      _hover={{ color: "green.500" }}
      fontWeight="semibold"
      color="gray.700"
      cursor="pointer"
    >
      Features
    </Text>
  </Link>

  {/* How It Works Link */}
  <Link href="/work">
    <Text
      _hover={{ color: "green.500" }}
      fontWeight="semibold"
      color="gray.700"
      cursor="pointer"
    >
      How It Works
    </Text>
  </Link>

  {/* About Us Link */}
  <Link href="/about">
    <Text
      _hover={{ color: "green.500" }}
      fontWeight="semibold"
      color="gray.700"
      cursor="pointer"
    >
      About Us
    </Text>
  </Link>

  {/* Contact Us Link */}
  <Link href="/contact">
    <Text
      _hover={{ color: "green.500" }}
      fontWeight="semibold"
      color="gray.700"
      cursor="pointer"
    >
      Contact Us
    </Text>
  </Link>
</Flex>



        {/* Join Waitlist Button */}
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
        // mt={20}
        gap={{ base: 10, md: 20 }}
        // align="center"
        direction={{ base: "column", md: "row" }}
        textAlign={{ base: "center", md: "left" }}
        bg="linear-gradient(to top right, #effdffff, #ffffff)"
        // p={8}
        py={{ base: 12, md: 20 }}
        px={{ base: 6, md: 10 }}
        // borderRadius="2xl"
        position="relative"
      >
        {/* Background Decorative Ellipse */}
       

        {/* <Icon
          as={IoEllipseSharp}
          color="red"
          // fontSize="7xl"
        /> */}
        {/* Left Section with Heading and Ellipse Icon */}
        <Box maxW={{ base: "100%", md: "15%" }}>
          {/* Container for heading and icon */}
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
            // display="inline-flex"
            alignItems="center"
            mb={"5em"}
          >
            <Icon as={IoRocketSharp} color="red.400" boxSize={3} />
            <Text fontSize="sm" fontWeight="semibold">
              🇳🇬 Nigeria’s #1 Marketplace
            </Text>
          </HStack>
                     {/* Ellipse Icon positioned on top of the heading */}
           <MotionBox
          rounded="1em"
          // overflow="hidden"
          // bg="gray.200"
          // position="relative"
          // display="flex"
          mt={"-5em"}
          // alignItems="center"
          // justifyContent="center"
        >
          {/* Floating Rocket Icon at the top */}
          <MotionIcon
            as={IoEllipseSharp}
            color="red.400"
            boxSize={8}
            // position="absolute"
            top="100%"
            w={"1em"}
            ml={"2em"}
            transform="translateX(-50%)"
            // opacity={0.3}
            animate={{ y: [0, -15, 0] }}
            transition={{
              duration: 1.5,
              ease: "easeInOut",
              repeat: Infinity,
            }}
          />
        </MotionBox>
            {/* Heading */}
            <Heading
              fontSize={{ base: "2xl", md: "5xl" }}
              fontWeight="bolder"
              color="black"
              mt={"1em"}
              w={"7em"}
              lineHeight="short"
            >
              Shop Smarter with{" "}
              <Box as="span" color="green.500">
                Ahiaoma
              </Box>
            </Heading>

 
          </Box>

          {/* Small Tag */}
          

          {/* Description */}
          <Text
            mt={4}
            fontSize={{ base: "md", md: "lg" }}
            color="gray.700"
            // maxW="90%"
            w={"25em"}
            mx={{ base: "auto", md: "0" }}
          >
            Experience the future of online shopping in Nigeria. Secure, fast,
            and reliable comnecting buyers and sellers nationwide.
          </Text>

          {/* Buttons */}
          <Flex
            mt={6}
            alignItems="center"
            justifyContent={{ base: "center", md: "flex-start" }}
            gap={4}
            flexWrap="wrap"
          >
            <Box w="8em">
              <Image src="Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg" />
            </Box>
            <Box w="8em">
              <Image src="google_playstore_images/GetItOnGooglePlay_Badge_Web_color_English.png" />
            </Box>

            <Button
              colorScheme="green"
              rounded="full"
              px={5}
              py={3}
              // _icon={<IoArrowForward />}
              _hover={{ bg: "green.700" }}
            >
              Learn More
            </Button>
          </Flex>
             {/* Stats Section */}

      <Flex
        gap={{ base: "2em", md: "3em" }}
        textAlign="center"
        mt={10}
        direction={{ base: "column", md: "row" }}
        alignItems="center"
        justifyContent={{ base: "row", md: "flex-start" }}
      >
        <Box>
          <Text fontSize="xl" fontWeight="bold">
            50K+
          </Text>
          <Text w={"9em"}>Happy Users</Text>
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
        </Box>

        {/* Right Image + Floating Icons */}
        <Box position="relative">
          <MotionBox
            rounded="1em"
            overflow="hidden"
            // bg="gray"
            ml={{ base: "1em", md: "26em" }}
            w={{ base: "16em", md: "26em" }}
            h={{ base: "13em", md: "21em" }}
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              repeat: Infinity,
            }}
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
            p="0.5em"
            position="absolute"
            top="-1.2em"
            right="-1em"
            w="3em"
            h="3em"
            alignItems="center"
            justifyContent="center"
            rounded="md"
            animation={`${slowSpin} 25s linear infinite`}
            boxShadow="0 0 20px rgba(72,187,120,0.5)"
          >
            <FaStar size="1.2em" color="white" />
          </Box>

          {/* Floating Checkmark */}
          <MotionBox
            position="absolute"
            // bottom="-0.6em"
            left="-0.6em"
            bgGradient="linear(to-r, #7b2ff5, #f107a3)"
            p="4px"
            ml={{ base: "1em", md: "26em" }}
            top={{ base: "10em", md: "19em" }}
            borderRadius="full"
            display="inline-flex"
            alignItems="center"
            justifyContent="center"
            // boxShadow="0 8px 25px rgba(0, 0, 0, 0.15)"
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

    

      {/* Section Title */}
      <Box fontSize="xl" fontWeight="bold" mt={10} color="black" textAlign="center">
        <Heading fontSize={{ base: "2xl", md: "3xl" }}>Powerful Features</Heading>
      </Box>
      <Box color="gray.400" textAlign="center">
        <Text>Everything you need for a seamless shopping experience</Text>
      </Box>

      {/* Cards Section with Grid layout */}
      <Box
        display="grid"
        gap="20px"
        gridTemplateColumns="repeat(auto-fit, minmax(300px, 1fr))"
        p="4"
      >
        {/* Secure Payment */}
        <Box
          bg="white"
          borderRadius="1em"
          boxShadow="lg"
          p="20px"
          _hover={{ transform: "scale(1.05)", bg: "#f0fff0" }}
          transition="transform 0.2s, background-color 0.2s"
        >
          <Box mb="10px" color="#4CAF50" fontSize="30px">
            <MdOutlineShield />
          </Box>
          <Text fontWeight="bold" fontSize="1.1em" mb="4px">
            Secure Payment
          </Text>
          <Text fontSize="0.9em" color="gray.600">
            Bank-level encryption and fraud protection for every transaction
          </Text>
        </Box>

        {/* Wide Selection */}
        <Box
          bg="white"
          borderRadius="1em"
          boxShadow="lg"
          p="20px"
          _hover={{ transform: "scale(1.05)", bg: "#e0f7fa" }}
          transition="transform 0.2s, background-color 0.2s"
        >
          <Box mb="10px" color="#2196F3" fontSize="30px">
            <HiMiniShoppingBag />
          </Box>
          <Text fontWeight="bold" fontSize="1.1em" mb="4px">
            Wide Selection
          </Text>
          <Text fontSize="0.9em" color="gray.600">
            Millions of products from verified sellers across Nigeria
          </Text>
        </Box>

        {/* Fast Delivery */}
        <Box
          bg="white"
          borderRadius="1em"
          boxShadow="lg"
          p="20px"
          _hover={{ transform: "scale(1.05)", bg: "#f3e5f5" }}
          transition="transform 0.2s, background-color 0.2s"
        >
          <Box mb="10px" color="#9C27B0" fontSize="30px">
            <FaTruck />
          </Box>
          <Text fontWeight="bold" fontSize="1.1em" mb="4px">
            Fast Delivery
          </Text>
          <Text fontSize="0.9em" color="gray.600">
            Same-day delivery in major cities, nationwide coverage
          </Text>
        </Box>
      </Box>

      {/* Testimonials */}
      <Box bg="linear-gradient(to top right, #effdffff, #ffffff)" p={8} mt={10}>
        <Heading fontSize={{ base: "2xl", md: "3xl" }} color="black" textAlign="center">
          Loved by Thousands
        </Heading>
        <Text color="gray.400" textAlign="center" mb={10}>
          See what our community has to say about their experience
        </Text>

        <Grid
          mt={10}
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
            <Box key={index} position="relative" w={{ base: "20em", md: "22em" }}>
              <Box
                position="absolute"
                top="-0.5em"
                left="1em"
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
                backgroundColor="#E6E6FA"
                p={10}
                borderRadius={10}
                mt="1.5em"
                boxShadow="md"
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

      {/* Footer */}
      <Box bg="#000" color="#fff" p={8} fontFamily="Arial, sans-serif">
        <Flex justify="space-between" flexWrap="wrap" maxW="1200px" mx="auto">
          {/* About Section */}
          <Box flex="1" minW="200px" mb={4}>
            <Text fontWeight="bold" fontSize="xl" color="#00C853">
              Ahiaoma
            </Text>
            <Text mt={2} fontSize="sm">
              Nigeria's premier marketplace connecting millions of buyers and
              sellers. Shop with confidence, sell with ease.
            </Text>
            <Flex mt={4} gap={3}>
              <Box bg="#3b5998" borderRadius="50%" p={2}>
                <Image src="facebook.svg" boxSize="40px" borderRadius="50%" />
              </Box>
              <Box bg="#E1306C" borderRadius="50%" p={2}>
                <Image src="instagram.svg" boxSize="40px" borderRadius="50%" />
              </Box>
              <Box bg="#1DA1F2" borderRadius="50%" p={2}>
                <Image src="x_icon_twitter.svg" boxSize="40px" borderRadius="50%" />
              </Box>
            </Flex>
          </Box>

          {/* Quick Links */}
          <Box flex="1" minW="200px" mb={4}>
            <Text fontWeight="bold" fontSize="lg" mb={4}>
              Quick Links
            </Text>
            <VStack align="start" gap={2}>
              <Text cursor="pointer" fontSize="sm">
                About Us
              </Text>
              <Text cursor="pointer" fontSize="sm">
                How It Works
              </Text>
              <Text cursor="pointer" fontSize="sm">
                Seller Center
              </Text>
              <Text cursor="pointer" fontSize="sm">
                Help Center
              </Text>
            </VStack>
          </Box>

          {/* Contact */}
          <Box flex="1" minW="200px" mb={4}>
            <Text fontWeight="bold" fontSize="lg" mb={4}>
              Contact
            </Text>
            <VStack align="start" gap={2}>
              <HStack align="center" gap={2}>
                <Box bg="#4CAF50" p={2} borderRadius="md">
                  <Icon as={MdOutlineEmail} color="#fff" boxSize={4} />
                </Box>
                <Text fontSize="sm">ahiaoma37@gmail.com</Text>
              </HStack>
              <HStack align="center" gap={2}>
                <Box bg="#2196F3" p={2} borderRadius="md">
                  <Icon as={FaPhone} color="#fff" boxSize={4} />
                </Box>
                <Text fontSize="sm">+234 907 940 5147</Text>
              </HStack>
            </VStack>
          </Box>
        </Flex>
        <Box mt={8} borderColor="#444" />
        <Text textAlign="center" mt={4} fontSize="sm">
          © 2025 Ahiaoma. All rights reserved.
        </Text>
      </Box>
    </Box>
  );
};

export default Home;