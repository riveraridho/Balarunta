import React from 'react';
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

const SignUp = ({navigation}) => {
  const logo = require('../../assets/logo_balarunta.png');
  return (
    <NativeBaseProvider>
      <Box flex="1" safeArea p="2" py="8" bg="#24CCAD">
        <Flex m="5">
          <Image width={400} height={62} resizeMode="stretch" source={logo} />
        </Flex>
        <Heading mx="5" size="lg" fontWeight="600" color="#FFFFFF">
          Sign Up
        </Heading>
        {/* Email */}
        <VStack space={2.5} w="100%" pt="3">
          <FormControl my="2.5" isRequired>
            <Input
              mx="5"
              p="2.5"
              size="lg"
              variant="outline"
              placeholder="Username"
              bgColor="#A5F8E9"
            />
          </FormControl>
          <FormControl my="2.5" isRequired>
            <Input
              mx="5"
              p="2.5"
              size="lg"
              variant="outline"
              placeholder="Email"
              bgColor="#A5F8E9"
            />
          </FormControl>
          {/* Password */}
          <FormControl my="2.5" isRequired>
            <Input
              mx="5"
              p="2.5"
              size="lg"
              variant="outline"
              placeholder="Password"
              type="password"
              bgColor="#A5F8E9"
            />
          </FormControl>
          {/* Confirm Password */}
          <FormControl my="2.5" isRequired>
            <Input
              mx="5"
              p="2.5"
              size="lg"
              variant="outline"
              placeholder="Confirm Password"
              type="password"
              bgColor="#A5F8E9"
            />
          </FormControl>
          <Center>
            <Button
              my="3"
              bgColor="#247B7B"
              w={{
                base: '75%',
                md: '25%',
              }}
              borderRadius="50"
              onPress={() => navigation.navigate('NamePet')}>
              Next
            </Button>
          </Center>
          <HStack mt="2" justifyContent="center">
            <Text
              fontSize="md"
              color="coolGray.600"
              _dark={{
                color: 'warmGray.200',
              }}>
              Already have an account?{' '}
            </Text>
            <Link
              _text={{
                color: '#404040',
                fontWeight: 'medium',
                fontSize: 'md',
              }}
              onPress={() => navigation.navigate('SignIn')}>
              Sign In
            </Link>
          </HStack>
        </VStack>
      </Box>
    </NativeBaseProvider>
  );
};

export default SignUp;
