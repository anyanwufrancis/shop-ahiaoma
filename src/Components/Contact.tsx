// import { Image, Flex, Box, Heading, Text, Input, FormControl, FormLabel, Stack, HStack, Button, Textarea } from "@chakra-ui/react"

// const Contact = () => {
//   return (
//     <Flex
//       direction={{ base: "column", md: "row" }}
//       justifyContent="center"
//       alignItems="flex-start"
//       p={4}
//     >
//       {/* Form Container */}
//       <Box w={{ base: "100%", md: "480px" }} mt={{ base: "1em", md: 0 }} h={{ base: "auto", md: "664px" }} mr={{ md: "2em" }}>
//         <Box mb={4}>
//           <Heading size="lg">Get in touch</Heading>
//         </Box>
//         <Box mb={8}>
//           <Text color="rgba(102, 112, 133, 1)">
//             Our friendly team would love to hear from you
//           </Text>
//         </Box>
//         <Stack spacing={4} align="stretch">
//           {/* First Name and Last Name side by side on larger screens, stacked on mobile */}
//           <HStack spacing={4} flexWrap="wrap" justify="space-between" flexDir={{ base: "column", md: "row" }}>
//             <FormControl id="firstName" flex={1}>
//               <FormLabel>First Name</FormLabel>
//               <Input placeholder="First name" height="44px" />
//             </FormControl>
//             <FormControl id="lastName" flex={1}>
//               <FormLabel>Last Name</FormLabel>
//               <Input placeholder="Last name" height="44px" />
//             </FormControl>
//           </HStack>

//           {/* Email */}
//           <FormControl id="email">
//             <FormLabel>Email</FormLabel>
//             <Input placeholder="you@company.com" height="44px" />
//           </FormControl>

//           {/* Phone number */}
//           <FormControl id="phone">
//             <FormLabel>Phone Number</FormLabel>
//             <Input placeholder="NGN +234-000-0000" height="44px" />
//           </FormControl>

//           {/* Message textarea */}
//           <FormControl id="message">
//             <FormLabel>Message</FormLabel>
//             <Textarea placeholder="Leave us a message..." rows={4} height="134px" resize="none" />
//           </FormControl>

//           {/* Send message button */}
//           <Button
//             colorScheme="blue"
//             size="lg"
//             width="100%"
//             height="48px"
//             mt={4}
//           >
//             Send message
//           </Button>
//         </Stack>
//       </Box>

//       {/* Image Container (hidden on mobile) */}
//       <Box
//         w={{ base: "100%", md: "576px" }}
//         mt={{ base: "2em", md: 0 }}
//         display={{ base: "none", md: "block" }}
//       >
//         <Image src={"src/assets/Card (1).png"} w="100%" h="45em" objectFit="contain" />
//       </Box>
//     </Flex>
//   );
// }

// export default Contact;

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
  Image,
  Card,
  HStack,
  Icon,
  Input,
  Button,
  FormControl,
  FormLabel,
  Stack,
  Textarea,
  useToast,
  Link,
} from "@chakra-ui/react";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { LuAsterisk } from "react-icons/lu";
import { FaPhoneAlt } from "react-icons/fa";
import { useRef, useState } from "react";

const Contact = () => {
  const toast = useToast();
  const firstNameRef = useRef(null);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    const { firstName, lastName, email, subject, message } = formData;

    if (!firstName || !lastName || !email || !subject || !message) {
      toast({
        title: "Please fill all required fields.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });

      // Scroll to first name
      (firstNameRef.current as unknown as HTMLInputElement)?.focus();
      return;
    }

    toast({
      title: "Your email client has been opened.",
      description: "Please send the pre-filled email to complete your message.",
      status: "success",
      duration: 4000,
      isClosable: true,
    });

    // You could integrate mailto: or API submission here
  };

  return (
    <>
      {/* Header Section */}
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
          <Link href="/">
            <Text
              _hover={{ color: "green.500" }}
              fontWeight="semibold"
              color="gray.700"
              cursor="pointer"
            >
              Home
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
        </Flex>
      </Flex>
      <Box mb={"5em"} textAlign={"center"}>
        <Heading fontSize={"6xl"}>Contact Us</Heading>
        <Text ml={"14em"} fontSize={"xl"} color={"gray"} w={"37em"}>
          Have questions? We'd love to hear from you. Send us a message and
          we'll respond as soon as possible.
        </Text>
      </Box>
      <Flex gap={"5em"} ml={"5em"}>
        <Box ml={"2em"}>
          <Heading fontSize={"3xl"}>Let's Start a Conversation</Heading>
          <Text w={"30em"} fontSize={"xl"} mt={"1em"} color={"gray"}>
            Whether you're a buyer looking for products or a seller wanting to
            join our marketplace, we're here to help you succeed.
          </Text>
          <Flex
            gap={"1em"}
            mt={"2em"}
            _hover={{ boxShadow: "xl" }}
            transition="all 0.3s ease"
            py={"1em"}
            w={"29em"}
            rounded={"1em"}
            shadow={"md"}
          >
            <Box
              border={"1px"}
              py={"1em"}
              rounded={"1em"}
              h={"3em"}
              px={"1em"}
              ml={"2em"}
              backgroundColor={"green"}
              color={"white"}
            >
              <MdEmail />
            </Box>
            <Box>
              <Text fontSize={"2xl"} fontWeight={"bold"}>
                Email Us
              </Text>
              <Text color="#02A150" fontSize={"lg"} fontWeight={"bold"}>
                ahaioma37@gmail.com
              </Text>
              <Text>Send us an email anytime </Text>
            </Box>
          </Flex>
          <Flex
            gap={"1em"}
            mt={"2em"}
            _hover={{ boxShadow: "xl" }}
            transition="all 0.3s ease"
            py={"1em"}
            w={"29em"}
            rounded={"1em"}
            shadow={"md"}
          >
            <Box
              border={"1px"}
              py={"1em"}
              rounded={"1em"}
              h={"3em"}
              px={"1em"}
              ml={"2em"}
              backgroundColor={"#E1306C"}
              color={"white"}
            >
              <FaPhoneAlt />
            </Box>
            <Box>
              <Text fontSize={"2xl"} fontWeight={"bold"}>
                Call Us
              </Text>
              <Text color="#02A150" fontSize={"lg"} fontWeight={"bold"}>
                +234 907 940 5147
              </Text>
              <Text>Mon-Fri from 8am to 5pm </Text>
            </Box>
          </Flex>
          <Flex
            gap={"1em"}
            mt={"2em"}
            _hover={{ boxShadow: "xl" }}
            transition="all 0.3s ease"
            py={"1em"}
            w={"29em"}
            rounded={"1em"}
            shadow={"md"}
          >
            <Box
              border={"1px"}
              py={"1em"}
              rounded={"1em"}
              h={"3em"}
              px={"1em"}
              ml={"2em"}
              backgroundColor={"#1DA1F2"}
              color={"white"}
            >
              <FaLocationDot />
            </Box>
            <Box>
              <Text fontSize={"2xl"} fontWeight={"bold"}>
                Visit Us
              </Text>
              <Text color="#02A150" fontSize={"lg"} fontWeight={"bold"}>
                Green park, 1 Alo street Nteze Abba, Abakaliki, Ebonyi State
              </Text>
              <Text>Come say hello at our office</Text>
            </Box>
          </Flex>
        </Box>
        <Box shadow={"2xl"} px={"2.5em"} py={"2em"} w={"32em"} mt={10}>
          <Box>
            <Heading fontSize={"xl"}>Send us a Message</Heading>
          </Box>
          <Stack gap={4}>
            <Flex mt={"2em"}>
              <FormControl isRequired>
                <FormLabel>First Name</FormLabel>
                <Input
                  ref={firstNameRef}
                  name="firstName"
                  placeholder="Your first name"
                  value={formData.firstName}
                  onChange={handleChange}
                  focusBorderColor="green.500"
                  w={"9em"}
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Last Name</FormLabel>
                <Input
                  name="lastName"
                  placeholder="Your last name"
                  value={formData.lastName}
                  onChange={handleChange}
                  focusBorderColor="green.500"
                  w={"9em"}
                />
              </FormControl>
            </Flex>

            <FormControl isRequired>
              <FormLabel>Email</FormLabel>
              <Input
                size={"lg"}
                name="email"
                type="email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={handleChange}
                focusBorderColor="green.500"
              />
            </FormControl>

            <FormControl>
              <FormLabel>Phone Number</FormLabel>
              <Input
                size={"lg"}
                name="phone"
                type="tel"
                placeholder="+234 xxx xxx xxxx"
                value={formData.phone}
                onChange={handleChange}
                focusBorderColor="green.500"
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Subject</FormLabel>
              <Input
                name="subject"
                placeholder="General Inquiry"
                value={formData.subject}
                onChange={handleChange}
                focusBorderColor="green.500"
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Message</FormLabel>
              <Textarea
                name="message"
                placeholder="Tell us how we can help you..."
                value={formData.message}
                onChange={handleChange}
                focusBorderColor="green.500"
              />
            </FormControl>

            <Button colorScheme="green" onClick={handleSubmit}>
              Send Message
            </Button>
          </Stack>
        </Box>
      </Flex>
      <Box>
        <Heading>Frequently Asked Questions</Heading>
        <Text>
          Quick answers to common questions How do I start selling on Ahiaoma?
        </Text>
      </Box>
      <Box>
        <Heading>How do I start on Ahiaoma?</Heading>
        <Text> Simply download our app, create a sell account, and start listing your products. Our team will guide you through the verification process.</Text>
      </Box>
      <Box>
        <Heading>What are the fees for sellers?</Heading>
        <Text>We charge a small commission on successful sales. There are no upfront fees or monthly charges to list your products.</Text>
      </Box>
      <Box>
        <Heading>How seure are payment on Ahiaoma?</Heading>
        <Text>All payments are processed through secure, encrypted channels. We use bank-level security to protect both buyers and sellers.</Text>
      </Box>
      <Box>
        <Heading>Do you deliver nationwide?</Heading>
        <Text>Yes, we have delivery partners across Nigeria to ensure your products reach customers anywhere in the country.</Text>
      </Box>
    </>
  );
};

export default Contact;
