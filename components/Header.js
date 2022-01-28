import React from 'react';
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
} from 'native-base';

const Header = () => {
  const logo = require('../assets/logo_balarunta.png');
  const notif = require('../assets/icon_notif.png');
  const energy = require('../assets/icon_energy.png');
  const plasca = require('../assets/icon_plasca.png');
  const balaroin = require('../assets/icon_balaroin.png');

  return (
    <Flex direction="column" bg="#24CCAD" roundedBottom="30" w="full" h="150">
      <Flex direction="row" justifyContent="space-between" mb="2.5">
        <Image
          m="2"
          width={125}
          height={28}
          resizeMode="contain"
          source={logo}
        />
        <Image
          m="2"
          width={22}
          height={28}
          resizeMode="contain"
          source={notif}
        />
      </Flex>
      {/* Icon energy plasca balaroin */}
      <Flex mb="1" direction="row" alignItems="center">
        <Spacer />
        <Text fontSize="md">Energy</Text>
        <Spacer />
        <Text fontSize="md">Plasca</Text>
        <Spacer />
        <Text fontSize="md">Balaroin</Text>
        <Spacer />
      </Flex>
      <Flex direction="row" alignItems="center" marginBottom="10">
        <Spacer />
        <Image resizeMode="contain" source={energy} />
        <Text mx="2" fontSize="md">
          0
        </Text>
        <Spacer />
        <Image resizeMode="contain" source={plasca} />
        <Text mx="2" fontSize="md">
          0
        </Text>
        <Spacer />
        <Image resizeMode="contain" source={balaroin} />
        <Text mx="2" fontSize="md">
          0
        </Text>
        <Spacer />
      </Flex>
      {/* <Text>Email : {this.props.route.params.email}</Text> */}
    </Flex>
  );
};

export default Header;
