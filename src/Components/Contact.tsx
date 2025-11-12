import { Image, Flex, Box, Heading, Text, Input, FormControl, FormLabel, Stack, HStack, Button, Textarea } from "@chakra-ui/react"

const Contact = () => {
  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      justifyContent="center"
      alignItems="flex-start"
      p={4}
    >
      {/* Form Container */}
      <Box w={{ base: "100%", md: "480px" }} mt={{ base: "1em", md: 0 }} h={{ base: "auto", md: "664px" }} mr={{ md: "2em" }}>
        <Box mb={4}>
          <Heading size="lg">Get in touch</Heading>
        </Box>
        <Box mb={8}>
          <Text color="rgba(102, 112, 133, 1)">
            Our friendly team would love to hear from you
          </Text>
        </Box>
        <Stack spacing={4} align="stretch">
          {/* First Name and Last Name side by side on larger screens, stacked on mobile */}
          <HStack spacing={4} flexWrap="wrap" justify="space-between" flexDir={{ base: "column", md: "row" }}>
            <FormControl id="firstName" flex={1}>
              <FormLabel>First Name</FormLabel>
              <Input placeholder="First name" height="44px" />
            </FormControl>
            <FormControl id="lastName" flex={1}>
              <FormLabel>Last Name</FormLabel>
              <Input placeholder="Last name" height="44px" />
            </FormControl>
          </HStack>

          {/* Email */}
          <FormControl id="email">
            <FormLabel>Email</FormLabel>
            <Input placeholder="you@company.com" height="44px" />
          </FormControl>

          {/* Phone number */}
          <FormControl id="phone">
            <FormLabel>Phone Number</FormLabel>
            <Input placeholder="NGN +234-000-0000" height="44px" />
          </FormControl>

          {/* Message textarea */}
          <FormControl id="message">
            <FormLabel>Message</FormLabel>
            <Textarea placeholder="Leave us a message..." rows={4} height="134px" resize="none" />
          </FormControl>

          {/* Send message button */}
          <Button
            colorScheme="blue"
            size="lg"
            width="100%"
            height="48px"
            mt={4}
          >
            Send message
          </Button>
        </Stack>
      </Box>

      {/* Image Container (hidden on mobile) */}
      <Box 
        w={{ base: "100%", md: "576px" }} 
        mt={{ base: "2em", md: 0 }} 
        display={{ base: "none", md: "block" }}
      >
        <Image src={"src/assets/Card (1).png"} w="100%" h="45em" objectFit="contain" />
      </Box>
    </Flex>
  );
}

export default Contact;