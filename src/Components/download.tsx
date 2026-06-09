import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  GridItem,
  HStack,
  Text,
  VStack,
  Badge,
  Image,
  //   Icon,
} from "@chakra-ui/react";
import {
  FaGooglePlay,
  FaApple,
  FaShieldAlt,
  FaMobileAlt,
} from "react-icons/fa";
import Footer from "./shared/footer";

const DownloadPage = () => {
  return (
    <Box minH="100vh" bg="white">
      <Container maxW="1200px" px={6} py={{ base: 12, md: 20 }}>
        <Grid
          templateColumns={{ base: "1fr", lg: "1fr 1fr" }}
          gap={0}
          alignItems="center"
        >
          {/* Left Content */}
          <GridItem>
            <VStack align="start" spacing={6} maxW="480px">
              <Badge
                variant="outline"
                colorScheme="green"
                borderRadius="full"
                px={4}
                py={1}
                fontSize="xs"
                letterSpacing="0.08em"
              >
                AVAILABLE NOW
              </Badge>

              <Text
                fontSize={{ base: "4xl", md: "5xl" }}
                fontWeight="700"
                lineHeight="1.1"
                color="gray.900"
              >
                Get the{" "}
                <Text as="span" color="green.500">
                  Ahiaoma
                </Text>
                <br />
                App
              </Text>

              <Text
                fontSize="md"
                color="gray.500"
                lineHeight="tall"
                maxW="360px"
              >
                Shop fresh from the farm, track your orders in real-time, and
                get exclusive deals only on the mobile app.
              </Text>

              {/* Store Buttons */}
              <VStack align="start" spacing={3} w="full">
                <HStack spacing={3} flexWrap="wrap">
                  {/* Google Play */}
                  <Button
                    as="a"
                    href="#"
                    bg="gray.900"
                    color="white"
                    _hover={{ bg: "gray.700" }}
                    borderRadius="10px"
                    px={5}
                    h="52px"
                    leftIcon={<FaGooglePlay color="#FFD700" size={20} />}
                  >
                    <VStack spacing={0} align="start">
                      <Text
                        fontSize="9px"
                        color="whiteAlpha.600"
                        lineHeight={1}
                      >
                        GET IT ON
                      </Text>
                      <Text fontSize="14px" fontWeight="500" lineHeight={1.3}>
                        Google Play
                      </Text>
                    </VStack>
                  </Button>

                  {/* App Store */}
                  <VStack align="start" spacing={1}>
                    <Button
                      as="a"
                      href="#"
                      bg="gray.900"
                      color="white"
                      _hover={{ bg: "gray.700" }}
                      borderRadius="10px"
                      px={5}
                      h="52px"
                      leftIcon={<FaApple size={20} />}
                    >
                      <VStack spacing={0} align="start">
                        <Text
                          fontSize="9px"
                          color="whiteAlpha.600"
                          lineHeight={1}
                        >
                          Download on the
                        </Text>
                        <Text fontSize="14px" fontWeight="500" lineHeight={1.3}>
                          App Store
                        </Text>
                      </VStack>
                    </Button>
                    <Text fontSize="xs" color="gray.400">
                      iOS Launch: Launched!
                    </Text>
                  </VStack>
                </HStack>
              </VStack>

              {/* Feature Pills */}
              <Grid templateColumns="1fr 1fr" gap={4} w="full" pt={2}>
                <HStack
                  spacing={3}
                  p={4}
                  border="1px solid"
                  borderColor="gray.100"
                  borderRadius="12px"
                >
                  <Flex
                    w="34px"
                    h="34px"
                    borderRadius="8px"
                    border="1px solid"
                    borderColor="gray.100"
                    align="center"
                    justify="center"
                    color="green.500"
                    flexShrink={0}
                  >
                    <FaShieldAlt size={16} />
                  </Flex>
                  <VStack align="start" spacing={0}>
                    <Text fontSize="13px" fontWeight="500" color="gray.800">
                      Secure Payments
                    </Text>
                    <Text
                      fontSize="10px"
                      color="gray.400"
                      letterSpacing="wider"
                    >
                      ENCRYPTED
                    </Text>
                  </VStack>
                </HStack>

                <HStack
                  spacing={3}
                  p={4}
                  border="1px solid"
                  borderColor="gray.100"
                  borderRadius="12px"
                >
                  <Flex
                    w="34px"
                    h="34px"
                    borderRadius="8px"
                    border="1px solid"
                    borderColor="gray.100"
                    align="center"
                    justify="center"
                    color="green.500"
                    flexShrink={0}
                  >
                    <FaMobileAlt size={16} />
                  </Flex>
                  <VStack align="start" spacing={0}>
                    <Text fontSize="13px" fontWeight="500" color="gray.800">
                      Easy to Use
                    </Text>
                    <Text
                      fontSize="10px"
                      color="gray.400"
                      letterSpacing="wider"
                    >
                      OPTIMIZED UX
                    </Text>
                  </VStack>
                </HStack>
              </Grid>
            </VStack>
          </GridItem>

          {/* Right — Phone Mockup */}
          <GridItem
            display={{ base: "none", lg: "flex" }}
            justifyContent="center"
            position="relative"
          >
            <Box position="relative">
              <Box
                position="absolute"
                bottom="-20px"
                left="50%"
                transform="translateX(-50%)"
                w="160px"
                h="30px"
                bg="green.200"
                borderRadius="50%"
                filter="blur(12px)"
                opacity={0.5}
              />
              <Box>
                <Image src="image.png" alt="Phone Mockup" />
              </Box>
            </Box>
          </GridItem>
        </Grid>
      </Container>
      <Footer />
    </Box>
  );
};

export default DownloadPage;
