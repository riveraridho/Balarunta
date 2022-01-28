import React from 'react';
import {
  Image,
  Center,
  VStack,
  Box,
  NativeBaseProvider,
  Input,
  FormControl,
  Flex,
  Button,
  Text,
} from 'native-base';

const Pet = ({navigation}) => {
  const logo = require('../../assets/logo_pet.png');
  return (
    <NativeBaseProvider>
      <Box flex="1" safeArea px="2" py="150" bg="#24CCAD">
        <Flex m="5" alignItems="center">
          <Image width={92} height={105} resizeMode="stretch" source={logo} />
        </Flex>
        <Center>
          <Text
            fontSize="md"
            color="#FFFFFF"
            _dark={{
              color: 'warmGray.200',
            }}>
            Enter the name of your Balarunta
          </Text>
        </Center>
        <VStack space={2.5} w="100%" pt="3">
          <FormControl my="2.5" isRequired>
            <Input
              mx="5"
              p="2.5"
              size="lg"
              variant="outline"
              placeholder="Balarunta Name"
              bgColor="#A5F8E9"
            />
          </FormControl>
          <Center>
            <Button
              my="3"
              bgColor="#247B7B"
              w={{
                base: '90%',
                md: '25%',
              }}
              borderRadius="50"
              onPress={() => navigation.navigate('SignIn')}>
              Sign Up
            </Button>
          </Center>
        </VStack>
      </Box>
    </NativeBaseProvider>
  );
};

export default Pet;
