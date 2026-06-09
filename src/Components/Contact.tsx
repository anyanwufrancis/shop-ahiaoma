import {
  Box,
  Text,
  Flex,
  Heading,
  VStack,
  Input,
  Button,
  // FormControl,
  // FormLabel,
  // Stack,
  Textarea,
  useToast,
  Container,
  Icon,
  SimpleGrid,
  Select,
  Wrap,
  HStack,
} from "@chakra-ui/react";
import { MdEmail, MdPhone } from "react-icons/md";
// import { FaPhoneAlt } from "react-icons/fa";
import { BsFillPatchCheckFill } from "react-icons/bs";
import { useRef, useState } from "react";
// import { motion } from "framer-motion";
import Header from "./shared/header";
import { FiSend, FiArrowRight } from "react-icons/fi";

const Contact = () => {
  const toast = useToast();
  const firstNameRef = useRef(null);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
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
      title: "Message Sent!",
      description: "We'll get back to you shortly.",
      status: "success",
      duration: 4000,
      isClosable: true,
    });

    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <>
      <Header />
{/* CONTACT SECTION */}
<Box bg="gray.50" py={{ base: 16, md: 24 }}>
  <Container maxW="7xl">
    {/* TOP HEADING */}
    <VStack spacing={4} textAlign="center" mb={{ base: 14, md: 20 }}>
      <Text
        color="green.500"
        fontSize="xs"
        fontWeight="bold"
        letterSpacing="widest"
      >
        GET IN TOUCH
      </Text>

      <Heading
        fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
        lineHeight="shorter"
        fontWeight="bold"
        color="gray.900"
      >
        Let&apos;s Start a
        <Text as="span" color="green.500">
          {" "}
          Conversation
        </Text>
      </Heading>

      <Text
        color="gray.500"
        maxW="2xl"
        fontSize={{ base: "md", md: "lg" }}
      >
        Have questions about buying, selling, or partnering with us?
        Our team is here to help you every step of the way.
      </Text>
    </VStack>

    {/* MAIN CONTENT */}
    <Box
      bg="white"
      rounded="3xl"
      p={{ base: 8, md: 14 }}
      boxShadow="sm"
    >
      <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={{ base: 14, md: 16 }}>
        {/* LEFT SIDE */}
        <Box>
          <Heading fontSize="3xl" mb={4} color="gray.900">
            Reach Out Directly
          </Heading>

          <Text color="gray.500" mb={12} maxW="md">
            Choose the most convenient way for you to connect
            with our support team.
          </Text>

          {/* CONTACT CARDS */}
          <HStack
            spacing={{ base: 6, md: 10 }}
            align="flex-start"
            flexWrap="wrap"
          >
            {/* EMAIL */}
            <VStack align="flex-start" spacing={4}>
              <Flex
                w="60px"
                h="60px"
                rounded="full"
                bg="blue.50"
                align="center"
                justify="center"
              >
                <Icon as={MdEmail} color="blue.500" boxSize={6} />
              </Flex>

              <Box>
                <Text fontWeight="bold" color="gray.800">
                  Email Us
                </Text>

                <Text color="gray.500" fontSize="sm" mt={1}>
                  support@ahiaoma.com
                </Text>

                <Text
                  mt={3}
                  color="green.500"
                  fontWeight="semibold"
                  fontSize="sm"
                  cursor="pointer"
                >
                  Send a message →
                </Text>
              </Box>
            </VStack>

            {/* PHONE */}
            <VStack align="flex-start" spacing={4}>
              <Flex
                w="60px"
                h="60px"
                rounded="full"
                bg="green.50"
                align="center"
                justify="center"
              >
                <Icon as={MdPhone} color="green.500" boxSize={6} />
              </Flex>

              <Box>
                <Text fontWeight="bold" color="gray.800">
                  Call Us
                </Text>

                <Text color="gray.500" fontSize="sm" mt={1}>
                  +234 816 743 5219
                </Text>

                <Text
                  mt={3}
                  color="green.500"
                  fontWeight="semibold"
                  fontSize="sm"
                  cursor="pointer"
                >
                  Speak with us →
                </Text>
              </Box>
            </VStack>
          </HStack>

          {/* FEATURES */}
          <Wrap spacing={8} mt={16}>
            <HStack spacing={2}>
              <Icon as={BsFillPatchCheckFill} color="green.500" />
              <Text fontSize="sm" color="gray.600" fontWeight="medium">
                ACTIVE SUPPORT
              </Text>
            </HStack>

            <HStack spacing={2}>
              <Icon as={BsFillPatchCheckFill} color="green.500" />
              <Text fontSize="sm" color="gray.600" fontWeight="medium">
                VERIFIED BUSINESS
              </Text>
            </HStack>

            <HStack spacing={2}>
              <Icon as={BsFillPatchCheckFill} color="green.500" />
              <Text fontSize="sm" color="gray.600" fontWeight="medium">
                FAST RESPONSE
              </Text>
            </HStack>
          </Wrap>
        </Box>

        {/* RIGHT SIDE FORM */}
        <Box>
          <HStack spacing={3} mb={8}>
            <Flex
              w="45px"
              h="45px"
              rounded="full"
              bg="green.600"
              align="center"
              justify="center"
              color="white"
            >
              <Icon as={FiSend} boxSize={4} />
            </Flex>

            <Heading fontSize="2xl" color="gray.900">
              Send a Message
            </Heading>
          </HStack>

          <VStack spacing={6}>
            {/* NAME ROW */}
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5} w="full">
              <Box>
                <Text
                  fontSize="xs"
                  fontWeight="bold"
                  color="gray.500"
                  mb={2}
                  letterSpacing="wide"
                >
                  FIRST NAME
                </Text>

                <Input
                  placeholder="Emeka"
                  size="lg"
                  bg="gray.50"
                  border="1px solid"
                  borderColor="gray.100"
                  _focus={{
                    borderColor: "green.400",
                    boxShadow: "none",
                  }}
                />
              </Box>

              <Box>
                <Text
                  fontSize="xs"
                  fontWeight="bold"
                  color="gray.500"
                  mb={2}
                  letterSpacing="wide"
                >
                  LAST NAME
                </Text>

                <Input
                  placeholder="Nna"
                  size="lg"
                  bg="gray.50"
                  border="1px solid"
                  borderColor="gray.100"
                  _focus={{
                    borderColor: "green.400",
                    boxShadow: "none",
                  }}
                />
              </Box>
            </SimpleGrid>

            {/* EMAIL */}
            <Box w="full">
              <Text
                fontSize="xs"
                fontWeight="bold"
                color="gray.500"
                mb={2}
                letterSpacing="wide"
              >
                EMAIL ADDRESS
              </Text>

              <Input
                placeholder="emeka@example.com"
                size="lg"
                bg="gray.50"
                border="1px solid"
                borderColor="gray.100"
                _focus={{
                  borderColor: "green.400",
                  boxShadow: "none",
                }}
              />
            </Box>

            {/* SUBJECT */}
            <Box w="full">
              <Text
                fontSize="xs"
                fontWeight="bold"
                color="gray.500"
                mb={2}
                letterSpacing="wide"
              >
                SUBJECT
              </Text>

              <Select
                size="lg"
                bg="gray.50"
                border="1px solid"
                borderColor="gray.100"
                _focus={{
                  borderColor: "green.400",
                  boxShadow: "none",
                }}
              >
                <option>General Inquiry</option>
                <option>Seller Support</option>
                <option>Buyer Support</option>
                <option>Partnership</option>
              </Select>
            </Box>

            {/* MESSAGE */}
            <Box w="full">
              <Text
                fontSize="xs"
                fontWeight="bold"
                color="gray.500"
                mb={2}
                letterSpacing="wide"
              >
                MESSAGE
              </Text>

              <Textarea
                placeholder="How can we help you?"
                rows={6}
                resize="none"
                bg="gray.50"
                border="1px solid"
                borderColor="gray.100"
                _focus={{
                  borderColor: "green.400",
                  boxShadow: "none",
                }}
              />
            </Box>

            {/* BUTTON */}
            <Button
              w="full"
              bg="green.600"
              color="white"
              size="lg"
              rounded="xl"
              _hover={{
                bg: "green.700",
              }}
              rightIcon={<FiArrowRight />}
            >
              Send Message
            </Button>
          </VStack>
        </Box>
      </SimpleGrid>
    </Box>
  </Container>
</Box>
    </>
  );
};

export default Contact;