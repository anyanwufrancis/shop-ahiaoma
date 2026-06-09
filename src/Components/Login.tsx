// // import { useState, useEffect } from "react";
// // import {
// //   Box,
// //   Flex,
// //   Image,
// //   VStack,
// //   Heading,
// //   Input,
// //   Button,
// //   Link,
// //   FormControl,
// //   FormLabel,
// //   InputGroup,
// //   InputRightElement,
// //   IconButton,
// //   Alert,
// //   AlertIcon,
// //   Text,
// // } from "@chakra-ui/react";
// // import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
// // import { BiError } from "react-icons/bi";
// // import { IoArrowBackOutline } from "react-icons/io5";
// // import { Link as RouterLink } from "react-router-dom";

// // export default function SchoolLogin() {
// //   const [showPassword, setShowPassword] = useState(false);
// //   const [email, setEmail] = useState("");
// //   const [password, setPassword] = useState("");
// //   const [error, setError] = useState("");
// //   const [loading, setLoading] = useState(true); 

// //   useEffect(() => {
// //     const timer = setTimeout(() => setLoading(false), 2000);
// //     return () => clearTimeout(timer);
// //   }, []);

// //   const handleSignIn = () => {
// //     if (!email || !password) {
// //       setError("Sorry, an error occurred. Please try again later.");
// //       return;
// //     }
// //     setError("");
// //   };

// //   if (loading) {
// //     return (
// //       <Flex align="center" justify="center" height="100vh" bg="white">
// //         <Image
// //           src="src/assets/45.svg"
// //           alt="Loading..."
// //           boxSize="50px"
// //         />
// //       </Flex>
// //     );
// //   }

// //   return (
// //     <Flex
// //       minH="100vh"
// //       direction={{ base: "column", md: "row" }}
// //       bg="gray.50"
// //     >
// //       {/* Left Section (Image) */}
// //       <Box
// //         flex="1"
// //         order={{ base: 0, md: 0 }}
// //         position="relative"
// //         h={{ base: "40vh", md: "100vh" }}
// //       >
// //         <Image
// //           src="src/assets/welcome_md.jpeg"
// //           alt="School"
// //           objectFit="cover"
// //           w="100%"
// //           h="100%"
// //         />
// //         <Box
// //           position="absolute"
// //           top="0"
// //           left="0"
// //           w="100%"
// //           h="100%"
// //           bg="blue.900"
// //           opacity="0.7"
// //         />
// //       </Box>

// //       {/* Right Section (Form) */}
// //       <Flex
// //         flex="1.9"
// //         align="center"
// //         justify="center"
// //         p={{ base: 6, md: 8 }}
// //         bg="white"
// //         order={{ base: 1, md: 1 }}
// //       >
// //         <Box w="full" maxW="md">
// //           <VStack spacing={6} align="stretch">
// //             {/* Logo & School Name */}
// //             <VStack spacing={2}>
// //               <Image
// //                 src="src/assets/benny_logo_300x300.png"
// //                 alt="School Logo"
// //                 boxSize="100px"
// //               />
// //               <Heading
// //                 color="blue.700"
// //                 size="lg"
// //                 textAlign="center"
// //                 fontFamily="'Playfair Display', serif"
// //               >
// //                 Benny International Schools
// //               </Heading>
// //             </VStack>

// //             {/* Error Alert */}
// //             {error && (
// //               <Alert status="warning" borderRadius="md">
// //                 <AlertIcon as={BiError} />
// //                 <Text color="orange.700" fontWeight="medium">
// //                   {error}
// //                 </Text>
// //               </Alert>
// //             )}

// //             {/* Form */}
// //             <Box as="form" mt={2}>
// //               <VStack spacing={5}>
// //                 <FormControl id="email">
// //                   <FormLabel>Email</FormLabel>
// //                   <Input
// //                     size="lg"
// //                     type="email"
// //                     placeholder="Enter your email"
// //                     value={email}
// //                     onChange={(e) => setEmail(e.target.value)}
// //                   />
// //                 </FormControl>

// //                 <FormControl id="password">
// //                   <FormLabel>Password</FormLabel>
// //                   <InputGroup size="lg">
// //                     <Input
// //                       type={showPassword ? "text" : "password"}
// //                       placeholder="Enter your password"
// //                       value={password}
// //                       onChange={(e) => setPassword(e.target.value)}
// //                     />
// //                     <InputRightElement>
// //                       <IconButton
// //                         aria-label="Toggle password visibility"
// //                         icon={showPassword ? <ViewOffIcon /> : <ViewIcon />}
// //                         variant="ghost"
// //                         onClick={() => setShowPassword(!showPassword)}
// //                       />
// //                     </InputRightElement>
// //                   </InputGroup>
// //                 </FormControl>

// //                 <Button colorScheme="blue" w="full" size="lg" onClick={handleSignIn}>
// //                   Sign In
// //                 </Button>

// //                 <Flex justify="space-between" w="full" fontSize="lg" align="center">
// //                   <Link
// //                     as={RouterLink}
// //                     to="/ForgotPassword"
// //                     color="blue.500"
// //                     fontWeight="medium"
// //                     _hover={{ textDecoration: "underline", color: "blue.600" }}
// //                   >
// //                     Forgot Password?
// //                   </Link>

// //                   <Flex align="center" gap={1}>
// //                     <IoArrowBackOutline color="blue.600" />
// //                     <Link
// //                       as={RouterLink}
// //                       to="/"
// //                       color="blue.500"
// //                       fontWeight="medium"
// //                       _hover={{ textDecoration: "underline", color: "blue.600" }}
// //                     >
// //                       Back to Homepage
// //                     </Link>
// //                   </Flex>
// //                 </Flex>
// //               </VStack>
// //             </Box>
// //           </VStack>
// //         </Box>
// //       </Flex>
// //     </Flex>
// //   );
// // }


// import { ChakraProvider, Flex, Image, Box, HStack, Link } from "@chakra-ui/react";
// import { BrowserRouter, Routes, Route, Link as RouterLink, useLocation } from "react-router-dom";
// import { useState, useEffect } from "react";

// import Home from "./Components/Home";
// import About from "./Components/about/About";
// import Contact from "./Components/Contact";
// import { Work } from "./Components/work";

// // NavBar Component
// function NavBar() {
//   const location = useLocation(); // Gets current URL path
 
//   const navLinks = [
//     { name: "Home", path: "/" },
//     { name: "Work", path: "/work" },
//     { name: "About", path: "/about" },
//     { name: "Contact", path: "/contact" },
//   ];

//   return (
//     <Box bg="blue.600" p={4}>
//       <HStack spacing={8} justify="center">
//         {navLinks.map((link) => {
//           // Rule 1: Always show Home
//           // Rule 2: Hide link if you're currently on that page
//           if (link.path === location.pathname && link.name !== "Home") {
//             return null; // Don't show this link
//           }
         
//           return (
//             <Link
//               key={link.path}
//               as={RouterLink}
//               to={link.path}
//               color="white"
//               fontWeight="bold"
//               _hover={{ color: "yellow.300", textDecoration: "none" }}
//             >
//               {link.name}
//             </Link>
//           );
//         })}
//       </HStack>
//     </Box>
//   );
// }

// function AppContent() {
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => setLoading(false), 1500);
//     return () => clearTimeout(timer);
//   }, []);

//   if (loading) {
//     return (
//       <Flex align="center" justify="center" height="100vh">
//         <Image src="/45.svg" alt="Loading..." boxSize="100px" />
//       </Flex>
//     );
//   }

//   return (
//     <>
//       <NavBar /> {/* NavBar shows on all pages */}
//       <Box p={8}>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/work" element={<Work />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/contact" element={<Contact />} />
//         </Routes>
//       </Box>
//     </>
//   );
// }

// function App() {
//   return (
//     <ChakraProvider>
//       <BrowserRouter>
//         <AppContent />
//       </BrowserRouter>
//     </ChakraProvider>
//   );
// }

// export default App;
