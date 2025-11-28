import {
  Box,
  Text,
  Flex,
  Heading,
  VStack,
  Link,
  Input,
  Button,
  FormControl,
  FormLabel,
  Stack,
  Textarea,
  useToast,
  Image,
  // HStack,
  // Icon,
} from "@chakra-ui/react";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
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
    // Implement email API or mailto: link here if needed
  };

  return (
    // Outer container to prevent overflow
    <Box overflowX="hidden" width="100%">
      {/* Responsive Header */}
      <Flex
        align="center"
        justify="space-between"
        p={4}
        bg="white"
        boxShadow="md"
        borderRadius="md"
        direction={{ base: "column", md: "row" }}
        maxW="1200px"
        mx="auto"
        width="100%"
      >
        {/* Logo */}
        <Flex
          align="center"
          gap={2}
          w={{ base: "100%", md: "auto" }}
          color="green.600"
          mb={{ base: 2, md: 0 }}
        >
          <Image src="ahiaoma_text_logo.png" alt="Logo" maxW="150px" />
        </Flex>

        {/* Navigation Links */}
        <Flex
          gap={6}
          display={{ base: "none", md: "flex" }}
          justify="center"
          w="full"
        >
          <Link href="/">
            <Text
              _hover={{ color: "green.500" }}
              fontWeight="semibold"
              cursor="pointer"
            >
              Home
            </Text>
          </Link>
          <Link href="/about">
            <Text
              _hover={{ color: "green.500" }}
              fontWeight="semibold"
              cursor="pointer"
            >
              About Us
            </Text>
          </Link>
          <Link href="/work">
            <Text
              _hover={{ color: "green.500"}}
              fontWeight="semibold"
              cursor="pointer"
              
            >
              How It Works
            </Text>
          </Link>
        </Flex>
      </Flex>
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
              <FaPhoneAlt />
            </Box>
            <Text color="green" textAlign="center" fontSize="md">
              Get In Touch
            </Text>
          </Flex>
        </Flex>
      {/* Main Heading and Description */}
      <Box
        mb={12}
        textAlign="center"
        px={4}
        maxW="1200px"
        mx="auto"
        width="100%"
      >
        <Heading fontSize={{ base: "4xl", md: "6xl" }}>Contact Us</Heading>
        <Text fontSize="lg" color="gray.600" maxW="37em" mx="auto" mt={4}>
          Have questions? We'd love to hear from you. Send us a message and
          we'll respond as soon as possible.
        </Text>
      </Box>

      {/* Content Section: Two Columns on large screens, stacked on mobile */}
      <Flex
        gap={8}
        flexDirection={{ base: "column", md: "row" }}
        px={4}
        maxW="1200px"
        mx="auto"
        mb={16}
        width="100%"
      >
        {/* Contact Info */}
        <Box flex="1" mb={{ base: 8, md: 0 }} width="100%">
          <Heading fontSize="2xl" mb={4}>
            Let's Start a Conversation
          </Heading>
          <Text mb={6} maxW="30em" fontSize="lg" color="gray.700">
            Whether you're a buyer looking for products or a seller wanting to
            join our marketplace, we're here to help you succeed.
          </Text>

          {/* Contact Methods */}
          <VStack spacing={4} align="stretch">
            {/* Email */}
            <Flex
              align="center"
              p={4}
              rounded="md"
              shadow="md"
              _hover={{ shadow: "xl" }}
              transition="all 0.3s ease"
              bg="white"
            >
              <Box
                border="1px"
                p={2}
                rounded="full"
                bg="green.500"
                color="white"
                mr={4}
              >
                <MdEmail size="24px" />
              </Box>
              <VStack align="start" spacing={0}>
                <Text fontWeight="bold" fontSize="lg">
                  Email Us
                </Text>
                <Text color="#02A150" fontSize="md" fontWeight="bold">
                  ahaioma37@gmail.com
                </Text>
                <Text fontSize="sm">Send us an email anytime</Text>
              </VStack>
            </Flex>

            {/* Call Us */}
            <Flex
              align="center"
              p={4}
              rounded="md"
              shadow="md"
              _hover={{ shadow: "xl" }}
              transition="all 0.3s ease"
              bg="white"
            >
              <Box
                border="1px"
                p={2}
                rounded="full"
                bg="#E1306C"
                color="white"
                mr={4}
              >
                <FaPhoneAlt size="24px" />
              </Box>
              <VStack align="start" spacing={0}>
                <Text fontWeight="bold" fontSize="lg">
                  Call Us
                </Text>
                <Text color="#02A150" fontSize="md" fontWeight="bold">
                  +234 907 940 5147
                </Text>
                <Text fontSize="sm">Mon-Fri from 8am to 5pm</Text>
              </VStack>
            </Flex>

            {/* Visit Us */}
            <Flex
              align="center"
              p={4}
              rounded="md"
              shadow="md"
              _hover={{ shadow: "xl" }}
              transition="all 0.3s ease"
              bg="white"
            >
              <Box
                border="1px"
                p={2}
                rounded="full"
                bg="#1DA1F2"
                color="white"
                mr={4}
              >
                <FaLocationDot size="24px" />
              </Box>
              <VStack align="start" spacing={0}>
                <Text fontWeight="bold" fontSize="lg">
                  Visit Us
                </Text>
                <Text color="#02A150" fontSize="md" fontWeight="bold">
                  Green park, 1 Alo street Nteze Abba, Abakaliki, Ebonyi State
                </Text>
                <Text fontSize="sm">Come say hello at our office</Text>
              </VStack>
            </Flex>
          </VStack>
        </Box>

        {/* Contact Form */}
        <Box
          flex="1"
          bg="green.50"
          p={6}
          borderRadius="md"
          shadow="2xl"
          w="full"
          maxW="500px"
          mx="auto"
          width="100%"
        >
          <Heading fontSize="xl" mb={4}>
            Send us a Message
          </Heading>
          <Stack spacing={4}>
            {/* Name Fields */}
            <Flex gap={4} flexDir={{ base: "column", sm: "row" }}>
              <FormControl isRequired>
                <FormLabel>First Name</FormLabel>
                <Input
                  ref={firstNameRef}
                  name="firstName"
                  placeholder="Your first name"
                  value={formData.firstName}
                  onChange={handleChange}
                  focusBorderColor="green.500"
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
                />
              </FormControl>
            </Flex>

            {/* Email */}
            <FormControl isRequired>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                placeholder="your.email@example.com"
                name="email"
                value={formData.email}
                onChange={handleChange}
                focusBorderColor="green.500"
              />
            </FormControl>

            {/* Phone */}
            <FormControl>
              <FormLabel>Phone Number</FormLabel>
              <Input
                type="tel"
                placeholder="+234 xxx xxx xxxx"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                focusBorderColor="green.500"
              />
            </FormControl>

            {/* Subject */}
            <FormControl isRequired>
              <FormLabel>Subject</FormLabel>
              <Input
                placeholder="General Inquiry"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                focusBorderColor="green.500"
              />
            </FormControl>

            {/* Message */}
            <FormControl isRequired>
              <FormLabel>Message</FormLabel>
              <Textarea
                placeholder="Tell us how we can help you..."
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                focusBorderColor="green.500"
              />
            </FormControl>

            {/* Send Button */}
            <Button colorScheme="green" onClick={handleSubmit} width="full">
              Send Message
            </Button>
          </Stack>
        </Box>
      </Flex>

      {/* FAQ Section */}
      <Box
        bg="green.50"
        px={4}
        py={8}
        maxW="1200px"
        mx="auto"
        mb={16}
        overflowX="hidden"
      >
        <Box textAlign="center" mb={6}>
          <Heading fontSize={{ base: "2xl", md: "4xl" }}>
            Frequently Asked Questions
          </Heading>
          <Text fontSize="md" color="gray.600" mt={2}>
            Quick answers to common questions. How do I start selling on
            Ahiaoma?
          </Text>
        </Box>

        {/* FAQ Items */}
        <VStack spacing={4} align="center" px={2}>
          <Box bg="white" p={6} rounded="md" shadow="md" w="full" maxW="50em">
            <Heading fontSize="xl" mb={2}>
              How do I start on Ahiaoma?
            </Heading>
            <Text color={"gray"}>
              Simply download our app, create a sell account, and start listing
              your products. Our team will guide you through the verification
              process.
            </Text>
          </Box>
          <Box bg="white" p={6} rounded="md" shadow="md" w="full" maxW="50em">
            <Heading fontSize="xl" mb={2}>
              What are the fees for sellers?
            </Heading>
            <Text  color={"gray"}>
              We charge a small commission on successful sales. There are no
              upfront fees or monthly charges to list your products.
            </Text>
          </Box>
          <Box bg="white" p={6} rounded="md" shadow="md" w="full" maxW="50em">
            <Heading fontSize="xl" mb={2}>
              How secure are payments on Ahiaoma?
            </Heading>
            <Text  color={"gray"}>
              All payments are processed through secure, encrypted channels. We
              use bank-level security to protect both buyers and sellers.
            </Text>
          </Box>
          <Box bg="white" p={6} rounded="md" shadow="md" w="full" maxW="50em">
            <Heading fontSize="xl" mb={2}>
              Do you deliver nationwide?
            </Heading>
            <Text  color={"gray"}>
              Yes, we have delivery partners across Nigeria to ensure your
              products reach customers anywhere in the country.
            </Text>
          </Box>
        </VStack>
      </Box>
    </Box>
  );
};

export default Contact;
