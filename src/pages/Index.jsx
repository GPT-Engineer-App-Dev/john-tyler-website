// Complete the Index page component here
// Use chakra-ui
import { Box, Text, Button } from "@chakra-ui/react";
import { FaFeatherAlt } from "react-icons/fa";

const Index = () => {
  return (
    <Box p={5} bg="brand.800" color="white">
      <Text fontSize="4xl" fontFamily="Georgia, serif" mb={4}>Welcome to Our Vintage Site</Text>
      <Text fontSize="2xl" fontFamily="Times New Roman, serif">Explore the charm of the mid-19th century.</Text>
      <Button leftIcon={<FaFeatherAlt />} mt={3} bg="brand.900" _hover={{ bg: "brand.700" }}>
        Learn More
      </Button>
    </Box>
  );
};

export default Index;