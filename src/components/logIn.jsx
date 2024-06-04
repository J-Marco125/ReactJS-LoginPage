import React from "react";

import { useNavigate } from "react-router-dom";
import {
  Box,
  Container,
  Text,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button,
  Stack,
} from "@chakra-ui/react";
const logIn = () => {
  const navigate = useNavigate();

  const goToSignUp = () => {
    navigate("/signup");
  };

  return (
    <Box display="flex" alignItems="center" w="100%" h="100vh">
      <Container
        borderRadius="15px"
        w="400px"
        h="400px"
        border="none"
        boxShadow="lg"
      >
        <Text p="20px" fontSize="4xl" fontWeight="600" color="teal">
          Log In
        </Text>
        <FormControl color="teal" display="flex" flexDirection="column">
          <FormLabel>Email address</FormLabel>

          <Input mb="20px" type="text" placeholder="Enter yor last name.." />
          <FormLabel>Password</FormLabel>
          <Input mb="20px" type="password" placeholder="Enter yor password." />
        </FormControl>
        <Stack>
          <Button colorScheme="teal" variant="solid">
            Log In
          </Button>
          <Button onClick={goToSignUp} colorScheme="teal" variant="outline">
            Sign Up
          </Button>
        </Stack>
      </Container>
    </Box>
  );
};

export default logIn;
