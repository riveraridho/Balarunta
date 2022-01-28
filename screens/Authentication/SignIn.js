import React, {useState} from 'react';
import {
  Image,
  Center,
  Heading,
  VStack,
  HStack,
  Box,
  NativeBaseProvider,
  Input,
  FormControl,
  Flex,
  Link,
  Button,
  Text,
} from 'native-base';
import {Alert} from 'react-native';

const SignIn = ({navigation}) => {
  const logo = require('../../assets/logo_balarunta.png');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [value, setValue] = useState('');

  const ValidateUser = (email, password) => {
    if (email === 'test@test.com' && password === '123') {
      navigation.navigate('Home', {email: email});
    } else {
      Alert.alert('Email is Not Correct');
    }
  };

  return (
    <NativeBaseProvider>
      <Box flex="1" safeArea p="2" py="8" bg="#24CCAD">
        <Flex m="5">
          <Image width={400} height={62} resizeMode="stretch" source={logo} />
        </Flex>
        <Heading mx="5" size="lg" fontWeight="600" color="#FFFFFF">
          Sign in
        </Heading>
        {/* Email */}
        <VStack space={2.5} w="100%" mt="3">
          {/* <FormControl my="2.5" isRequired> */}
          <Input
            value={email}
            mx="5"
            p="2.5"
            size="lg"
            variant="outline"
            placeholder="Email"
            bgColor="#A5F8E9"
            onChange={event => {
              setEmail(event.nativeEvent.text);
              console.log('test', event.nativeEvent.text);
            }}
          />
          {/* </FormControl> */}
          <Text>Email: {email}</Text>
          {/* Password */}
          <FormControl my="2.5" isRequired>
            <Input
              value={password}
              mx="5"
              p="2.5"
              size="lg"
              variant="outline"
              placeholder="Password"
              type="password"
              bgColor="#A5F8E9"
              onChange={event => {
                setPassword(event.nativeEvent.text);
              }}
            />
          </FormControl>
          <Text>Password: {password}</Text>
          <Flex mx="5">
            <Link
              px="2.5"
              alignSelf="flex-end"
              mt="1"
              _text={{
                color: '#404040',
              }}>
              Forgot Password?
            </Link>
          </Flex>
          <Center>
            <Button
              my="3"
              bgColor="#247B7B"
              w={{
                base: '75%',
                md: '25%',
              }}
              borderRadius="50"
              onPress={() => {
                ValidateUser(email, password);
              }}>
              Sign In
            </Button>
          </Center>
          <HStack mt="2" justifyContent="center">
            <Text
              fontSize="md"
              color="coolGray.600"
              _dark={{
                color: 'warmGray.200',
              }}>
              Don't have an account?{' '}
            </Text>
            <Link
              _text={{
                color: '#404040',
                fontWeight: 'medium',
                fontSize: 'md',
              }}
              onPress={() => navigation.navigate('SignUp')}>
              Sign Up
            </Link>
          </HStack>
        </VStack>
      </Box>
    </NativeBaseProvider>
  );
};

export default SignIn;
