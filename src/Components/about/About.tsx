"use client";
import {
  Box,
  Text,
  Flex,
  Heading,
  VStack,
  List,
  ListItem,
  ListIcon,
  Grid,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { IoEllipseSharp, IoRocketSharp } from "react-icons/io5";
import { MdCheckCircle } from "react-icons/md";
import { RiCheckboxBlankCircleFill } from "react-icons/ri";
import { BsFillStarFill } from "react-icons/bs";

const About = () => {
  const MotionBox = motion(Box);
  const MotionIcon = motion(IoEllipseSharp);

  return (
    <>
      {/* ABOUT HEADER WITH ROCKET AND FLOATING ICONS */}
      <Box
        bg="linear-gradient(to top right, #eeeeeeff, #ffffff)"
        mb="7em"
        py="0.5em"
      >
        {/* Header */}
        <Flex align="center" justify="center" mt="2em">
          <Flex
            align="center"
            justify="center"
            gap="0.5em"
            px="1em"
            py="0.5em"
            bg="lightgreen"
            borderRadius="1em"
            boxShadow="md"
          >
            <Box fontSize="xl" color="red.700">
              <IoRocketSharp />
            </Box>
            <Text color="green" textAlign="center" fontSize="md">
              About
            </Text>
          </Flex>
        </Flex>

        {/* Floating animated icons + text */}
        <Flex
          align="center"
          justify="center"
          textAlign="center"
          flexDir="column"
          mb="4em"
          position="relative"
        >
          <MotionBox position="absolute" left="10%" top="65%">
            <MotionIcon
              color="rgb(70, 116, 161)"
              animate={{ y: [0, -15, 0] }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                repeat: Infinity,
              }}
            />
          </MotionBox>
          <MotionBox position="absolute" right="15%" bottom="60%">
            <MotionIcon
              color="aqua"
  
              animate={{ y: [0, -20, 0] }}
              transition={{
                duration: 2.5,
                ease: "easeInOut",
                repeat: Infinity,
              }}
            />
          </MotionBox>
          <MotionBox position="absolute" left="5%" top="10%">
            <MotionIcon
              color="lightgreen"
 
              animate={{ y: [0, -15, 0] }}
              transition={{
                duration: 1.8,
                ease: "easeInOut",
                repeat: Infinity,
              }}
            />
          </MotionBox>

          {/* Main Text */}
          <VStack align="center" spacing={4} mt={8}>
            <Heading
              fontSize={{ base: "2xl", md: "5xl" }}
              fontWeight="bolder"
              color="black"
              textAlign="center"
            >
              Your Marketplace for Fair and Fresh Food
            </Heading>
            <Box
              mt="0.5em"
              fontWeight="normal"
              fontSize="lg"
              w={{ base: "90%", md: "37.5em" }}
              textAlign="center"
              color="gray"
            >
              <Text>
                Connecting food producers directly to buyers through a seamless
                digital platform. We're on a mission to fix Nigeria's broken
                agricultural supply chain, ensuring fair pricing, reducing
                waste, and delivering fresh, quality food efficiently.
              </Text>
            </Box>
          </VStack>
        </Flex>
      </Box>

      {/* Challenges and Solution Section */}
      <Flex gap="2em" px="1em" mb="2em" flexWrap="wrap" justify="center">
        {/* The Challenges */}
        <Box px="1em" mb="2em" maxW="600px" w="100%">
          <Heading mb="0.5em">The Challenge</Heading>
          <List gap={3} fontSize="large" color="gray">
            <ListItem mb="0.3em">
              <ListIcon as={RiCheckboxBlankCircleFill} color="red.500" />
              Up to 45% of produce is lost annually, amounting to over ₦3 trillion
            </ListItem>
            <ListItem mb="0.3em">
              <ListIcon as={RiCheckboxBlankCircleFill} color="red.500" />
              Inefficient logistics channels and lack of modern storage facilities
            </ListItem>
            <ListItem mb="0.3em">
              <ListIcon as={RiCheckboxBlankCircleFill} color="red.500" />
              Limited market access and exploitative middlemen drive up costs
            </ListItem>
            <ListItem>
              <ListIcon as={RiCheckboxBlankCircleFill} color="red.500" />
              Limited market access and exploitative middlemen drive up costs
            </ListItem>
          </List>
        </Box>

        {/* Our Solution */}
        <Box px="1em" mb="2em" maxW="600px" w="100%">
          <Heading mb="1em">Our Solution</Heading>
          <Text mb="1em">Ahiaoma bridges these gaps by providing:</Text>
          <List spacing={3} fontSize="large" color="gray">
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.800" />
              <Text as="span" ml="0.5em">
                Direct Connection: Linking food producers directly to buyers
              </Text>
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.800" />
              <Text as="span" ml="0.5em">
                Integrated Logistics: Streamlined delivery channels for efficiency
              </Text>
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.800" />
              <Text as="span" ml="0.5em">
                Fair Pricing Tool: Ensuring equitable prices for all stakeholders
              </Text>
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.800" />
              <Text as="span" ml="0.5em">
                Preservation Infrastructure: Solar-powered cold rooms and preservation hubs
              </Text>
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.800" />
              <Text as="span" ml="0.5em">
                Finance Access: Microloans and financial services for producers
              </Text>
            </ListItem>
          </List>
        </Box>
      </Flex>

      {/* Market Opportunity */}
      <Box backgroundColor={"green.50"} py={"2em"} px="1em" mb="2em">
        <Heading mb="0.5em" fontSize="2xl" textAlign={"center"} fontWeight="bold">
          Market Opportunity
        </Heading>
        <Text fontSize="lg" color="gray" textAlign={"center"}>
          Massive potential in Nigeria's agricultural market
        </Text>
        <Grid
          templateColumns="repeat(auto-fit, minmax(200px, 1fr))"
          gap={4}
          mt={6}
        >
          {[
            {
              value: "₦3T",
              label: "TAM (Total Addressable Market)",
              desc: "Agricultural produce trade in Nigeria",
            },
            {
              value: "₦300B",
              label: "SAM (Serviceable Available Market)",
              desc: "Urban and semi-urban markets of Southeast Nigeria",
            },
            {
              value: "₦3B",
              label: "Target SOM",
              desc: "Transactions within 3 years (1% of SAM)",
            },
          ].map((item, idx) => (
            <Box
              key={idx}
              bg="white"
              py={8}
              w={"24em"}
              rounded={"2em"}
              textAlign="center"
              transition="all 0.3s ease"
              _hover={{
                bg: "blue.50",
                transform: "translateY(-5px)",
                boxShadow: "lg",
              }}
            >
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                w="3em"
                h="3em"
                color="white"
                borderRadius="full"
                bg="#3b5998"
                mx="auto"
              >
                <BsFillStarFill />
              </Box>
              <Text fontSize="4xl" fontWeight="bolder" mt={4}>
                {item.value}
              </Text>
              <Text  color={"green"} fontSize={"xl"} fontWeight={"bolder"}>{item.label}</Text>
              <Text fontSize="lg" mt={2} color="gray.600">
                {item.desc}
              </Text>
            </Box>
          ))}
        </Grid>
      </Box>
      <Box  py={"2em"} px="1em" mb="2em">
        <Heading mb="0.5em" fontSize="2xl" textAlign={"center"} fontWeight="bold">
Traction & Growth       
 </Heading>
        <Text fontSize="lg" color="gray" textAlign={"center"}>
Building momentum across Nigeria's agricultural ecosystem        </Text>
        <Grid
          templateColumns="repeat(auto-fit, minmax(200px, 1fr))"
          gap={4}
          mt={6}
        >
          {[
            {
              value: "65+",
              content: "Sellers Onboarded",
              // desc: "Agricultural produce trade in Nigeria",
            },
            {
              value: "150+",
              content: "Buyers Registered",
              // desc: "Urban and semi-urban markets of Southeast Nigeria",
            },
            {
              value: "1,000+",
              content: "Target SOM",
              // desc: "Transactions within 3 years (1% of SAM)",
            },
            {
              value: "3",
              content: "Target SOM",
              // desc: "Transactions within 3 years (1% of SAM)",
            },
          ].map((item, idx) => (
            <Box
              key={idx}
              bg="green.50"
              py={8}
              w={"19.5em"}
              h={"8em"}
              border={"1px solid lightgreen"}
              rounded={"1em"}
              textAlign="center"
              transition="all 0.3s ease"
              _hover={{
                bg: "blue.50",
                transform: "translateY(-5px)",
                boxShadow: "lg",
              }}
            >
              <Text fontSize="4xl" color={"green"} fontWeight="bolder" mt={"-0.5em"}>
                {item.value}
              </Text>
              <Text color={"gray"}  fontSize={"md"} fontWeight={"medium"}>{item.content}</Text>
            </Box>
          ))}
        </Grid>
      </Box>

    </>
  );
};

export default About;