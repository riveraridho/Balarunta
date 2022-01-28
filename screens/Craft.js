import React, {Component} from 'react';
import {
  Image,
  Center,
  Heading,
  VStack,
  HStack,
  ZStack,
  Box,
  NativeBaseProvider,
  Input,
  FormControl,
  Flex,
  Link,
  Button,
  Text,
  Spacer,
  Modal,
  ScrollView,
} from 'native-base';

class Craft extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const qrscan = require('../assets/icon_qrcode.png');
    return (
      <NativeBaseProvider>
        <Box flex="1" safeArea bg="#f6f6f6">
          <Flex direction="row" bg="#24CCAD" alignItems="center">
            <Spacer />
            <Text fontSize="xl" color="#FFFFFF" ml="10" my="5">
              Station
            </Text>
            <Spacer />
            <Image my="5" mr="5" resizeMode="contain" source={qrscan} />
          </Flex>
          <Center>
            <ScrollView
              maxW="300"
              h="80"
              _contentContainerStyle={{
                px: '20px',
                mb: '4',
                minW: '72',
              }}>
              <VStack flex="1">
                <Flex>
                  <Text>Ini adalah screen craft</Text>
                </Flex>
              </VStack>
            </ScrollView>
          </Center>
        </Box>
      </NativeBaseProvider>
    );
  }
}

export default Craft;
