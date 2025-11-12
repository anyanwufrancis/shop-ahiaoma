// import { useState, useEffect } from "react";
// import {
//   Box,
//   Text,
//   Image,
//   Center,
//   Flex,
//   Heading,
//   VStack,
//   Container,
// } from "@chakra-ui/react";

// export default function About() {
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => setLoading(false), 2000);
//     return () => clearTimeout(timer);
//   }, []);

//   if (loading) {
//     return (
//       <Flex align="center" justify="center" height="100vh" bg="white">
//         <Image src="src/assets/45.svg" alt="Loading..." boxSize="50px" />
//       </Flex>
//     );
//   }

//   return (
//     <Box bg="white">
//       {/* Banner Section */}
//       <Box
//         position="relative"
//         h="300px"
//         w="full"
//         overflow="hidden"
//         borderRadius="md"
//         mb={8}
//         px={{ base: "5", md: "10%" }}
//       >
//         <Image
//           src="src/assets/about_hero_lg.jpeg"
//           alt="About Banner"
//           objectFit="cover"
//           w="full"
//           h="full"
//           filter="brightness(40%)"
//           mt={-16}
//         />
//         <Center position="absolute" top="0" left="0" w="full" h="full" mt={-5}>
//           <Text
//             color="white"
//             fontSize="xl"
//             fontWeight="semibold"
//             fontFamily="'Playfair Display', serif"
//           >
//             About us
//           </Text>
//         </Center>
//       </Box>

//       {/* Content Section */}
//       <Box py={12}>
//         <Container maxW="7xl">
//           {/* Welcome Section */}
//           <VStack spacing={4} align="start" mb={16}>
//             <Heading
//               size="xl"
//               color="blue.700"
//               mb="8"
//               fontFamily="'Playfair Display', serif"
//             >
//               Welcome
//             </Heading>
//             <Text fontSize="lg" color="gray.700">
//               In Benny International Schools, Diligence and Excellence is our
//               motto and watchword. We have put things in place as we grow to
//               better accommodate the educational needs of our 21st-century
//               students.
//             </Text>
//           </VStack>

//           {/* Vision Section */}
//           <Flex
//             direction={{ base: "column", md: "row" }}
//             align="center"
//             gap={8}
//             mb={{ base: "12", md: "0%" }}
//           >
//             {/* For mobile: title above image */}
//             <Box
//               display={{ base: "block", md: "none" }}
//               textAlign="center"
//               mb="3"
//             >
//               <Heading size="lg" color="blue.700" fontFamily="'Playfair Display', serif">
//                 Our Vision
//               </Heading>
//             </Box>

//             <Image
//               src="src/assets/dprac_14.jpeg"
//               alt="Students cooking"
//               w={{ base: "100%", md: "50%" }}
//               borderRadius="none"
//             />

//             <Box w={{ base: "100%", md: "50%" }}>
//               {/* For desktop: title beside image */}
//               <Heading
//                 size="lg"
//                 color="blue.700"
//                 mb={5}
//                 display={{ base: "none", md: "block" }}
//                 fontFamily="'Playfair Display', serif"
//               >
//                 Our Vision
//               </Heading>
//               <Text color="gray.700">
//                 To raise children with the necessary skills and attitude that
//                 will enable them serve in a highly competitive world.
//               </Text>
//             </Box>
//           </Flex>

//           {/* Mission Section */}
//           <Flex
//             direction={{ base: "column", md: "row-reverse" }}
//             align="center"
//             gap={8}
//             mb={{ base: "12", md: "0%" }}
//           >
//             <Box
//               display={{ base: "block", md: "none" }}
//               textAlign="center"
//               mb={3}
//             >
//               <Heading size="lg" color="blue.700" fontFamily="'Playfair Display', serif">
//                 Our Mission
//               </Heading>
//             </Box>

//             <Image
//               src="src/assets/science_md.jpeg"
//               alt="Science students"
//               w={{ base: "100%", md: "50%" }}
//               borderRadius="none"
//             />

//             <Box w={{ base: "100%", md: "50%" }}>
//               <Heading
//                 size="lg"
//                 color="blue.700"
//                 mb={5}
//                 display={{ base: "none", md: "block" }}
//                 fontFamily="'Playfair Display', serif"
//               >
//                 Our Mission
//               </Heading>
//               <Text color="gray.700">
//                 To support the government in providing qualitative education
//                 through improved standards, eradicate indiscipline and provide
//                 opportunity for children with diverse talents to meet the
//                 challenges of our time.
//               </Text>
//             </Box>
//           </Flex>

//           {/* History Section */}
//           <Flex
//             direction={{ base: "column", md: "row" }}
//             align="center"
//             gap={8}
//             mb={{ base: "12", md: "2%" }}
//           >
//             <Box
//               display={{ base: "block", md: "none" }}
//               textAlign="center"
//               mb={3}
//             >
//               <Heading size="lg" color="blue.700" fontFamily="'Playfair Display', serif">
//                 Our History
//               </Heading>
//             </Box>

//             <Image
//               src="src/assets/sports_md.jpeg"
//               alt="Playground"
//               w={{ base: "100%", md: "50%" }}
//               borderRadius="none"
//             />

//             <Box w={{ base: "100%", md: "50%" }}>
//               <Heading
//                 size="lg"
//                 color="blue.700"
//                 mb={5}
//                 display={{ base: "none", md: "block" }}
//                 fontFamily="'Playfair Display', serif"
//               >
//                 Our History
//               </Heading>
//               <Text color="gray.700">
//                 Benny International Schools (BIS) was established on October
//                 1st, 2001 (over 20 years now) by Mrs. Beniere O. Ifidi due to
//                 her desire to contribute to the manpower development of the
//                 state. We began with 31 students in JS1 and JS2 classes. And now
//                 we have over 300 students, all class levels, and over 35 staff.
//               </Text>
//             </Box>
//           </Flex>

//           {/* Awards Section */}
//           <Flex
//             direction={{ base: "column", md: "row-reverse" }}
//             align="center"
//             gap={8}
//           >
//             <Box
//               display={{ base: "block", md: "none" }}
//               textAlign="center"
//               mb={3}
//             >
//               <Heading size="lg" color="blue.700" fontFamily="'Playfair Display', serif">
//                 Awards
//               </Heading>
//             </Box>

//             <Image
//               src="src/assets/awards.jpeg"
//               alt="Awards"
//               w={{ base: "100%", md: "45%" }}
//               borderRadius="none"
//             />

//             <Box w={{ base: "100%", md: "50%" }}>
//               <Heading
//                 size="lg"
//                 color="blue.700"
//                 mb={5}
//                 display={{ base: "none", md: "block" }}
//                 fontFamily="'Playfair Display', serif"
//               >
//                 Awards
//               </Heading>
//               <Text color="gray.700">
//                 Best Standard School, 2018; 1st Position, Shell/NNPC Joint
//                 Science Competition, 2016; 1st Position, NTA 2nd Edition Senior
//                 Secondary School Science Quiz Competition, 2015; 3rd Position,
//                 NTA etv educational Television Senior category Arts, 2015;
//                 Award, Macmillian Team Success, 2011.
//               </Text>
//             </Box>
//           </Flex>
//         </Container>
//       </Box>
//     </Box>
//   );
// }

// import React from 'react'

// type message = {
  
//     content: string,

// }
// export const History:message[] = [
  //   {
    
  //     content: "Benny International Schools (BIS) was established on October 1st, 2001 (over 20 years now) by MdRssFeed. Benerie Object.Ifidi due to her desire to contribute to the manpower development of the startTransitionte. We began with 31 student in Js1 and Jss2 ClassNames.And now we have over 300 students, all clas levels, and over 35 staffs",
  
  //   },
  //   {
    
  //     content: "Benny International Schools (BIS) was established on October 1st, 2001 (over 20 years now) by MdRssFeed. Benerie Object.Ifidi due to her desire to contribute to the manpower development of the startTransitionte. We began with 31 student in Js1 and Jss2 ClassNames.And now we have over 300 students, all clas levels, and over 35 staffs",
  
  //   },
  
  // ];
  
 "use client";
import { Box, Flex, Heading, Text, Image, Stack } from "@chakra-ui/react";

const About = () => {
  return (
    <>
      <Box mx={{ base: "5", lg: "20" }}>
        {/* -------- ABOUT SECTION -------- */}
        <Box px={{ base: "1.5em", md: "6em" }} mt={{ base: 8, md: 12 }}>
          <Text color="blue.500" fontWeight="500">
            About Us
          </Text>

          <Flex
            direction={{ base: "column", md: "row" }}
            align={{ base: "flex-start", md: "center" }}
            gap={{ base: 6, md: 16 }}
            mt={4}
          >
            <Box flex="1">
              <Heading
                fontSize={{ base: "2xl", md: "3xl" }}
                color="rgba(16, 24, 40, 1)"
              >
                Welcome to Benny International School.
              </Heading>
            </Box>

            <Box flex="1">
              <Text color="rgba(102, 112, 133, 1)">
                In Benny International Schools, Diligence and Excellence is our
                motto and watchword. We have put things in place as we grow to
                better accommodate the educational needs of our 21st century
                students.
              </Text>
            </Box>
          </Flex>
        </Box>

        {/* -------- HISTORY -------- */}
        <Box px={{ base: "1.5em", md: "6em" }} mt={{ base: 12, md: 20 }}>
          <Heading color="rgba(16, 24, 40, 1)" mb={6}>
            Our History
          </Heading>

          <Stack
            direction={{ base: "column", md: "row" }}
            spacing={{ base: 8, md: 12 }}
            color="rgba(102, 112, 133, 1)"
          >
            <Text flex="1">
              Benny International Schools (BIS) was established on October 1st,
              2001 (over 20 years now) by Mrs. Beniere O. Ifidi due to her
              desire to contribute to the manpower development of the state. We
              began with 31 students in JSS1 and JSS2 classes. And now we have
              over 300 students across all class levels and over 35 staff
              members.
            </Text>
            <Text flex="1">
              Benny International Schools (BIS) was established on October 1st,
              2001 (over 20 years now) by Mrs. Beniere O. Ifidi due to her
              desire to contribute to the manpower development of the state. We
              began with 31 students in JSS1 and JSS2 classes. And now we have
              over 300 students across all class levels and over 35 staff
              members.
            </Text>
          </Stack>
        </Box>

        {/* Decorative Shapes (Top-Right) — hidden on mobile */}
        <Box
          position="relative"
          w="100%"
          h="300px"
          overflow="hidden"
          mt="4em"
          display={{ base: "none", md: "block" }}
        >
          <Box
            position="absolute"
            top="60px"
            right="50px"
            w="1010px"
            h="2px"
            bg="gray.400"
          />
          <Box position="absolute" top="0" right="10px" opacity={0.9}>
            <Image src="src/assets/Shape (1).png" alt="Blue shape" w="35px" />
          </Box>
          <Box position="absolute" top="80px" right="8px" opacity={0.8}>
            <Image src="src/assets/Shape.png" alt="Green shape" w="100px" />
          </Box>
        </Box>

        {/* -------- WHAT DRIVES US -------- */}
        <Box
          px={{ base: "1.5em", md: "6em" }}
          mt={{ base: "1.5em", md: "-9em" }}
          textAlign="left"
        >
          <Heading ml=".5em" color="rgba(16, 24, 40, 1)" mb={2}>
            What drives us
          </Heading>
          <Text ml="1em" color="rgba(102, 112, 133, 1)" mb={6}>
            Our vision and mission statements are key to us offering our best.
          </Text>

          <Stack
            direction={{ base: "column", md: "row" }}
            spacing={{ base: 8, md: 10 }}
            justify="center"
            align="center"
          >
            {/* Vision Card */}
            <Box
              position="relative"
              w={{ base: "90%", md: "500px" }}
              ml="-1em"
              h="400px"
              borderRadius="24px"
              overflow="hidden"
            >
              <Box
                position="absolute"
                inset="0"
                bgImage="url('src/assets/vision.jpg')"
                bgSize="cover"
                bgPosition="center"
                filter="brightness(0.8)"
              />
              <Box
                position="absolute"
                bottom="6"
                left="50%"
                transform="translateX(-50%)"
                w="90%"
                bg="rgba(255,255,255,0.2)"
                backdropFilter="blur(6px)"
                border="1px solid rgba(255,255,255,0.3)"
                borderRadius="12px"
                p={4}
              >
                <Heading as="h2" size="lg" mb={2} color="white">
                  Our Vision
                </Heading>
                <Text fontSize="md" color="white">
                  To raise children with the necessary skills and attitude that
                  will enable them serve in a highly competitive world.
                </Text>
              </Box>
            </Box>

            {/* Mission Card */}
            <Box
              position="relative"
              w={{ base: "90%", md: "500px" }}
              h="400px"
              borderRadius="24px"
              overflow="hidden"
            >
              <Box
                position="absolute"
                inset="0"
                bgImage="url('src/assets/mission 1.jpg')"
                bgSize="cover"
                bgPosition="center"
                filter="brightness(0.8)"
              />
              <Box
                position="absolute"
                bottom="6"
                left="50%"
                transform="translateX(-50%)"
                w="90%"
                bg="rgba(255,255,255,0.2)"
                backdropFilter="blur(6px)"
                border="1px solid rgba(255,255,255,0.3)"
                borderRadius="12px"
                p={4}
              >
                <Heading as="h2" size="lg" mb={2} color="white">
                  Our Mission
                </Heading>
                <Text fontSize="md" color="white">
                  To support the government in providing qualitative education
                  through improved standards, eradicate indiscipline, and
                  provide opportunities for children with diverse talents to
                  meet the challenges of our time.
                </Text>
              </Box>
            </Box>
          </Stack>
        </Box>

        {/* -------- ACHIEVEMENTS -------- */}
        <Box px={{ base: "1.5em", md: "6em" }} mt={{ base: 12, md: 20 }} pb={10}>
          <Flex align="center" mb={8} ml={{ base: 12, md: "-9em" }} position="relative">
            {/* Decorative shapes — hidden on mobile */}
            <Box
              position="relative"
              w="100px"
              h="100px"
              display={{ base: "none", md: "block" }}
            >
              {/* Blue shape */}
              <Box
                position="absolute"
                left="30px"
                top="0"
                opacity={0.9}
                zIndex={3}
              >
                <Image
                  src="src/assets/Shape (2).png"
                  alt="Blue shape"
                  w="60px"
                />
              </Box>

              {/* Green shape */}
              <Box
                position="absolute"
                left="26px"
                top="80px"
                opacity={0.8}
                zIndex={3}
              >
                <Image
                  src="src/assets/Shape (3).png"
                  alt="Green shape"
                  w="80px"
                />
              </Box>
            </Box>

            {/* Heading — visible on all screens */}
            <Heading
              color="rgba(16, 24, 40, 1)"
              fontSize={{ base: "2xl", md: "3xl" }}
              ml={{ base: "0.5em", md: 4 }}
            >
              Our Achievements
            </Heading>
          </Flex>

          {/* -------- ACHIEVEMENTS -------- */}
<Box
  px={{ base: "1.5em", md: "6em" }}
  mt={{ base: 12, md: 20 }}
  // textAlign="center"
>
  {/* Heading + Decorative Shapes
  <Flex
    align="center"
    justify="center"
    mb={8}
    position="relative"
    gap={4}
  >
    {/* Decorative shapes (hidden on mobile) */}
    {/* <Box */}
      {/* position="relative"
      w="100px"
      h="100px"
      display={{ base: "none", md: "block" }}
    > */}
      {/* Blue shape */}
      {/* <Box position="absolute" left="30px" top="0" opacity={0.9} zIndex={3}>
        <Image src="src/assets/Shape (2).png" alt="Blue shape" w="60px" />
      </Box>

      {/* Green shape */}
      {/* <Box position="absolute" left="26px" top="80px" opacity={0.8} zIndex={3}>
        <Image src="src/assets/Shape (3).png" alt="Green shape" w="80px" />
      </Box>
    </Box> */} 

    {/* Heading — centered */}
    {/* <Heading
      color="rgba(16, 24, 40, 1)"
      fontSize={{ base: "2xl", md: "3xl" }}
    >
      Our Achievements
    </Heading>
  </Flex> */} 

  {/* Achievement Cards */}
  <Flex
    direction={{ base: "column", md: "row" }}
    justify="center"
    align="center"
    gap={{ base: 8, md: 6 }}
    flexWrap="nowrap"       // 🔥 keeps all cards on one straight line on desktop
    overflowX={{ base: "auto", md: "visible" }} // allows horizontal scroll on mobile if needed
    mx="auto"
    maxW="1200px"
  >
    {[
      { year: "2018", text: "Best Standard School", img: "mission.jpg" },
      { year: "2016", text: "Shell/NNPC Joint Science Competition – 1st Position", img: "chesse.jpg" },
      { year: "2015", text: "NTA 2nd Edition Senior Science Quiz Competition", img: "lab.jpg" },
      { year: "2011", text: "Award Macmillan to Team Success", img: "libray.jpg" },
    ].map((item, index) => (
      <Box
        key={index}
        position="relative"
        w={{ base: "90%", md: "280px" }}
        h="380px"
        borderRadius="20px"
        overflow="hidden"
        flexShrink={0}       // 🔥 ensures equal width and straight alignment
      >
        <Box
          position="absolute"
          inset="0"
          bgImage={`url('src/assets/${item.img}')`}
          bgSize="cover"
          bgPosition="center"
        />
        <Box
          position="absolute"
          bottom="6"
          left="50%"
          transform="translateX(-50%)"
          w="85%"
          bg="rgba(255,255,255,0.2)"
          backdropFilter="blur(6px)"
          border="1px solid rgba(255,255,255,0.3)"
          borderRadius="12px"
          p={4}
        >
          <Heading as="h2" size="lg" mb={2} color="white">
            {item.year}
          </Heading>
          <Text fontSize="md" color="white">
            {item.text}
          </Text>
        </Box>
      </Box>
    ))}
  </Flex>
</Box>

        </Box>
      </Box>
    </>
  );
};

export default About;
