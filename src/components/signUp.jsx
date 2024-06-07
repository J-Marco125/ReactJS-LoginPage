import React from "react";
import { useNavigate } from "react-router-dom";
import useForm from "../../useForm";
import axios from "axios";
import { useEffect } from "react";
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
    navigate("/login");
  };
  const { values, handleOnchange } = useForm({ name: "marco" });
  const onSubmit = () => {
    console.log("TEST ", values);
  };

  const getUserData = async () => {
    try {
      const result = await axios({
        method: "POST",
        url: "http://localhost:5000/home/signup",
      });
      await setUserData(result.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUserData();

    return () => getUserData;
  }, []);
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
          <Input
            mb="20px"
            type="email"
            placeholder="Enter yor email."
            name="email"
            onChange={handleOnchange}
            value={values.email}
          />
          <FormLabel>First name.</FormLabel>
          <Input
            mb="20px"
            type="text"
            placeholder="Enter yor first name."
            name="firstName"
            onChange={handleOnchange}
            value={values.firstName}
          />
          <FormLabel>Last name</FormLabel>
          <Input
            mb="20px"
            type="text"
            placeholder="Enter yor last name.."
            name="lastName"
            onChange={handleOnchange}
            value={values.lastName}
          />
          <FormLabel>Password</FormLabel>
          <Input
            mb="20px"
            type="password"
            placeholder="Enter yor password."
            name="password"
            onChange={handleOnchange}
            value={values.password}
          />
        </FormControl>
        <Stack>
          <Button colorScheme="teal" variant="solid" onClick={onSubmit}>
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
