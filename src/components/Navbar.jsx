import { Box, Flex, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <Flex as="nav" align="center" justify="space-between" wrap="wrap" padding="1.5rem" bg="teal.500" color="white">
      <Box>
        <Link as={RouterLink} to="/" px={2}>Home</Link>
        <Link as={RouterLink} to="/vintage" px={2}>Vintage Style</Link>
      </Box>
    </Flex>
  );
};

export default Navbar;