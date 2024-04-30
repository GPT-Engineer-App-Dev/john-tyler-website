import { Box, VStack, Text, Image, Button, Input, Textarea } from "@chakra-ui/react";
import { FaEnvelope, FaUserCircle } from "react-icons/fa";

const Index = () => {
  return (
    <VStack spacing={8} p={5}>
      <Box p={5} shadow="md" borderWidth="1px">
        <Text fontSize="2xl" fontWeight="bold">John Tyler</Text>
        <Text mt={4}>John Tyler is a professional with over 10 years of experience in the tech industry. He specializes in software development and project management.</Text>
      </Box>
      <Box p={5} shadow="md" borderWidth="1px">
        <Text fontSize="2xl" fontWeight="bold">Photo Gallery</Text>
        <Image src="https://via.placeholder.com/400" alt="Placeholder image" />
        <Image src="https://via.placeholder.com/400" alt="Placeholder image" mt={4} />
      </Box>
      <Box p={5} shadow="md" borderWidth="1px">
        <Text fontSize="2xl" fontWeight="bold">Contact Me</Text>
        <VStack spacing={3} mt={4}>
          <Input placeholder="Your Name" />
          <Input placeholder="Your Email" type="email" />
          <Textarea placeholder="Your Message" />
          <Button rightIcon={<FaEnvelope />} colorScheme="blue">Send</Button>
        </VStack>
      </Box>
    </VStack>
  );
};

export default Index;