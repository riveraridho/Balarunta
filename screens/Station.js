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
import Card from '../components/Card';
import database from '@react-native-firebase/database';

class Station extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const profile_inactive = require('../assets/icon_profile_inactive.png');
    const station_inactive = require('../assets/icon_station_inactive.png');
    const qrscan = require('../assets/icon_qrcode.png');

    database()
      .ref('/Station/Location')
      .on('value', snapshot => {
        console.log('User data: ', snapshot.val());
      });
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
          <ScrollView
            h="80"
            _contentContainerStyle={{
              px: '20px',
              mb: '4',
              minW: '72',
            }}>
            <Flex direction="row" flexWrap="wrap">
              <Flex w="50%">
                <Card
                  title="tset"
                  size="full"
                  link="https://firebasestorage.googleapis.com/v0/b/balarunta-v2.appspot.com/o/beehub.png?alt=media&token=40dcb24f-bbf8-4c69-9b55-c29605bd2b66"
                />
              </Flex>
              <Flex w="50%">
                <Card
                  title="gaga"
                  size="full"
                  link="https://firebasestorage.googleapis.com/v0/b/balarunta-v2.appspot.com/o/beehub.png?alt=media&token=40dcb24f-bbf8-4c69-9b55-c29605bd2b66"
                />
              </Flex>
            </Flex>
          </ScrollView>
        </Box>
      </NativeBaseProvider>
    );
  }
}

export default Station;
