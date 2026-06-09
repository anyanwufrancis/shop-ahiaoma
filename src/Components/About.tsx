"use client";
import {
  Box,
  Text,
  Flex,
  Heading,
  VStack,
  Image,
  // Card,
  HStack,
  Icon,
  Container,
  Stat,
  StatNumber,
  StatLabel,
  StatHelpText,
  SimpleGrid,
  // SimpleGrid,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { MdCheckCircle } from "react-icons/md";
import { FaShieldAlt, FaUsers, FaBullseye } from "react-icons/fa";

import { MdLightbulb as LightbulbIcon } from "react-icons/md";
import Header from "./shared/header";
import Footer from "./shared/footer";
import { FiAward } from "react-icons/fi";

const About = () => {
  const MotionBox = motion(Box);

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
  const values = [
    {
      icon: FaShieldAlt,
      title: "Transparency",
      description:
        "Honest pricing and clear communication with both farmers and buyers.",
      color: "green.400",
      bg: "green.50",
    },
    {
      icon: FaUsers,
      title: "Community",
      description:
        "Empowering rural farmers and small-scale processors to thrive.",
      color: "blue.400",
      bg: "blue.50",
    },
    {
      icon: FaBullseye,
      title: "Impact",
      description:
        "To eliminate food waste and ensure fair pricing across Nigeria.",
      color: "orange.400",
      bg: "orange.50",
    },
  ];
  const team = [
    {
      name: "Mba Agha",
      role: "CHAIRMAN/COO",
      desc: "15+ years of experience in Startup development, Consultant, Business and marketing expert.",
      img: "/mba.png",
    },
    {
      name: "Florence Sydney",
      role: "CEO / FOUNDER",
      desc: "6+ years in Marketing",
      img: "/FlorenceSydney.jpeg",
    },
    {
      name: "Ephraim Umunnakwe",
      role: "CTO / CO-FOUNDER",
      desc: "10+ years Experience in Software Engineering.",
      img: "/ephraim.png",
    },
    {
      name: "Ruth Solomon",
      role: "HEAD OF LOGISTICS & PARTNERSHIPS",
      desc: "7 years of experience in marketing and sales of FMCG",
      img: "/RuthSolomon.jpeg",
    },
  ];
  return (
    <>
      {/* ABOUT HEADER WITH ROCKET AND FLOATING ICONS */}
      {/* Header Section */}
      {/* Header Navigation */}
      <MotionBox
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <Box bg="white" py={0}>
          <Header />
          <Container maxW="7xl" px={{ base: 6, md: 8 }}>
            {/* Header */}
            <VStack spacing={4} textAlign="center" mb={16}>
              <Heading
                as="h1"
                fontSize={{ base: "3xl", md: "5xl" }}
                lineHeight="1.5"
                fontWeight="bold"
                mt={"1em"}
              >
                Empowering Nigeria's{" "}
                <Text as="span" color="green.500">
                  Food Ecosystem
                </Text>
              </Heading>

              <Text
                fontSize={{ base: "lg", md: "xl" }}
                color="gray.600"
                maxW="3xl"
                mx="auto"
              >
                We are on a mission to bridge the gap between rural production
                and urban consumption, ensuring fair value for every stakeholder
                in the agricultural chain.
              </Text>
            </VStack>

            <Flex
              direction={{ base: "column", lg: "row" }}
              gap={12}
              align="center"
            >
              {/* Left Side - Mission & Vision */}
              <VStack flex="1" align="stretch" spacing={10}>
                {/* Mission */}
                <Box>
                  <HStack spacing={4} mb={4}>
                    <Icon as={MdCheckCircle} color="green.500" boxSize={8} />
                    <Heading as="h2" size="lg">
                      Our Mission
                    </Heading>
                  </HStack>
                  <Text fontSize="lg" color="gray.700" lineHeight="tall">
                    To eliminate food waste and ensure fair pricing by creating
                    a direct, efficient connection between food producers and
                    consumers across Nigeria.
                  </Text>
                </Box>

                {/* Vision */}
                <Box>
                  <HStack spacing={4} mb={4}>
                    <Icon as={LightbulbIcon} color="green.500" boxSize={8} />
                    <Heading as="h2" size="lg">
                      Our Vision
                    </Heading>
                  </HStack>
                  <Text fontSize="lg" color="gray.700" lineHeight="tall">
                    To become Africa's most trusted digital agricultural
                    marketplace, driving economic growth in rural communities
                    while providing fresh food for all.
                  </Text>
                </Box>
              </VStack>

              {/* Right Side - Image + Stat */}
              <Box flex="1" position="relative">
                <Image
                  src="/countryside-woman-holding-plant-leaves.jpg"
                  alt="Nigerian woman farmer with fresh vegetables"
                  borderRadius="2xl"
                  boxShadow="2xl"
                  objectFit="cover"
                  w="full"
                  h={{ base: "500px", lg: "560px" }}
                />

                {/* Floating Stat Card */}
                <Box
                  position="absolute"
                  bottom={{ base: 6, lg: 8 }}
                  right={{ base: 6, lg: 8 }}
                  bg="white"
                  p={6}
                  borderRadius="2xl"
                  boxShadow="xl"
                  maxW="240px"
                >
                  <Stat>
                    <HStack>
                      <Box
                        bg="green.500"
                        color="white"
                        p={2}
                        borderRadius="full"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                      >
                        🌱
                      </Box>
                      <StatNumber
                        fontSize="4xl"
                        fontWeight="bold"
                        color="green.600"
                      >
                        45%
                      </StatNumber>
                    </HStack>
                    <StatLabel fontSize="md" mt={2} color="gray.600">
                      Of Nigerian produce is lost annually.
                    </StatLabel>
                    <StatHelpText
                      fontSize="sm"
                      color="green.600"
                      fontWeight="medium"
                    >
                      We're here to reduce that number to zero.
                    </StatHelpText>
                  </Stat>
                </Box>
              </Box>
            </Flex>
          </Container>
          {/* our Core Values */}
          <Box py={20} bg="white">
            <Container maxW="9xl" textAlign="center">
              <Text
                color="green.500"
                fontWeight="semibold"
                fontSize="sm"
                textTransform="uppercase"
                mb={2}
              >
                What Guides Us
              </Text>
              <Heading
                fontSize={{ base: "2xl", md: "4xl" }}
                fontWeight="bold"
                mb={12}
              >
                Our Core Values
              </Heading>
              <Flex wrap="wrap" justify="center" gap={8}>
                {values.map((value) => (
                  <Box
                    key={value.title}
                    w={{ base: "full", md: "sm" }}
                    bg="white"
                    shadow="sm"
                    borderRadius="xl"
                    p={8}
                    textAlign="left"
                    _hover={{ shadow: "md" }}
                  >
                    <VStack align={"center"} spacing={4}>
                      <Box bg={value.bg} p={3} borderRadius="md">
                        <Icon as={value.icon} boxSize={6} color={value.color} />
                      </Box>
                      <Text fontSize="xl" fontWeight="bold">
                        {value.title}
                      </Text>
                      <Text color="gray.600" fontSize="sm">
                        {value.description}
                      </Text>
                    </VStack>
                  </Box>
                ))}
              </Flex>
            </Container>
          </Box>
          <Box py={16} px={6} bg={"gray.50"}>
            <VStack spacing={3} mb={10} textAlign={"center"}>
              <Heading size={"xl"}>Meet Our Team</Heading>
              <Text maxW={"600px"} color={"gray.600"}>
                Our diverse team of expert is dedicated to revolutionizing the
                agricultural landscape of Nigeria
              </Text>
            </VStack>
            <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
              {team.map((member, index) => (
                <Box
                  key={index}
                  border={"1px solid"}
                  borderColor={"gray.300"}
                  borderRadius={"16px"}
                  p={6}
                  textAlign={"center"}
                  bg={"white"}
                  _hover={{ shadow: "md" }}
                >
                  <VStack spacing={4}>
                    <Image
                      src={member.img}
                      alt={member.name}
                      boxSize={"180px"}
                      objectFit={"cover"}
                      borderRadius={"16px"}
                    />
                    <Text fontWeight={"bold"}>{member.name}</Text>
                    <Text
                      fontWeight={"semibold"}
                      fontSize={"sm"}
                      color={"green.500"}
                    >
                      {member.role}
                    </Text>
                    <Text fontSize={"xs"} color={"gray.500"}>
                      {member.desc}
                    </Text>
                  </VStack>
                </Box>
              ))}
            </SimpleGrid>
          </Box>

          <Box mx={"auto"}>
            <FiAward />
            <Box>
              <Text>Ready to transform the food industry</Text>
              <Text>Join Thousand of farmers and consumers who are already part of the Ahiaoma Community Together We're building a smarter fairee food future </Text>
            </Box>
          </Box>
        <Footer/>
        </Box>
      </MotionBox>
    </>
  );
};

export default About;
