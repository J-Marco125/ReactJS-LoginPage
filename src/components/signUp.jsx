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

const signUp = () => {
  const navigate = useNavigate();

  const goToLogIn = () => {
    navigate("/");
  };

  return (
    <Box display="flex" alignItems="center" w="100%" h="100vh">
      <Container
        borderRadius="15px"
        w="400px"
        h="600px"
        border="none"
        boxShadow="lg"
      >
        <Text p="20px" fontSize="4xl" fontWeight="600" color="teal">
          Sign Up
        </Text>
        <FormControl color="teal" display="flex" flexDirection="column">
          <FormLabel>Email address</FormLabel>
          <Input mb="20px" type="email" placeholder="Enter yor email." />
          <FormLabel>First name.</FormLabel>
          <Input mb="20px" type="text" placeholder="Enter yor first name." />
          <FormLabel>Last name</FormLabel>
          <Input mb="20px" type="text" placeholder="Enter yor last name.." />
          <FormLabel>Password</FormLabel>
          <Input mb="20px" type="password" placeholder="Enter yor password." />
        </FormControl>
        <Stack>
          <Button colorScheme="teal" variant="solid">
            Sign Up
          </Button>
          <Button onClick={goToLogIn} colorScheme="teal" variant="outline">
            Log In
          </Button>
        </Stack>
      </Container>
    </Box>
  );
};

export default signUp;
