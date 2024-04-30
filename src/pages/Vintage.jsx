import { Box, Text, VStack, Image } from '@chakra-ui/react';

const Vintage = () => {
  return (
    <VStack spacing={8} p={5}>
      <Box p={5} shadow="md" borderWidth="1px" bg="papayawhip">
        <Text fontSize="2xl" fontWeight="bold">Vintage Collection</Text>
        <Text mt={4}>Explore our exclusive vintage collection featuring unique styles and designs.</Text>
      </Box>
      <Box p={5} shadow="md" borderWidth="1px" bg="papayawhip">
        <Text fontSize="2xl" fontWeight="bold">Photo Gallery</Text>
        <Image src="https://via.placeholder.com/400" alt="Vintage image" />
        <Image src="https://via.placeholder.com/400" alt="Vintage image" mt={4} />
      </Box>
    </VStack>
  );
};

export default Vintage;