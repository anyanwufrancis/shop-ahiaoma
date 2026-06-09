import {
  Box,
  Text,
  Button,
  HStack,
  VStack,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";
import { useState } from "react";

export default function CookiePopup() {
  const bg = useColorModeValue(
    "rgba(255, 255, 255, 0.6)",
    "rgba(26, 32, 44, 0.6)",
  );

  const [isVisible, setIsVisible] = useState(true);
  if (!isVisible) return null;

  return (
 <Box
  position="fixed"
  bottom="20px"
  left={{ base: "50%", md: "auto" }}
  right={{ base: "auto", md: "20px" }}
  transform={{ base: "translateX(-50%)", md: "none" }}
  zIndex="9999"
  w={["90%", "500px"]}
  p={6}
  borderRadius="2xl"
  backdropFilter="blur(20px)"
  bg={bg}
  boxShadow="xl"
  border="1px solid rgba(255,255,255,0.2)"
>
      <VStack align="start" spacing={4}>
        <Box
          position="absolute"
          top={3}
          right={4}
          cursor="pointer"
          fontSize="lg"
          onClick={() => setIsVisible(false)}
          aria-label="Close"
        >
          ✕
        </Box>

        {/* Header */}
        <HStack spacing={3}>
          <Icon as={CheckCircleIcon} color="green.400" boxSize={6} />
          <Text fontSize="lg" fontWeight="bold">
            Cookie Preferences
          </Text>
        </HStack>

        {/* Description */}
        <Text fontSize="sm" color="gray.600">
          We use cookies to enhance your experience. By continuing to visit this
          site you agree to our{" "}
          <Text as="span" color="green.500" fontWeight="medium">
            Cookie Policy
          </Text>
          .
        </Text>

        {/* Buttons */}
        <HStack w="100%" justify="space-between">
          <Button colorScheme="green" borderRadius="full" px={6} flex="1">
            Accept All
          </Button>

          <Button
            variant="solid"
            bg="gray.800"
            color="white"
            borderRadius="full"
            px={6}
            flex="1"
          >
            Decline
          </Button>
        </HStack>
      </VStack>
    </Box>
  );
}