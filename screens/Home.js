import React, {Component} from 'react';
import {TouchableOpacity} from 'react-native';
import {
  Image,
  Center,
  ZStack,
  Box,
  NativeBaseProvider,
  Input,
  FormControl,
  Flex,
  Button,
  Text,
  Spacer,
  Modal,
  Divider,
} from 'native-base';
import Header from '../components/Header';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };
  }
  render() {
    const logo = require('../assets/logo_balarunta.png');
    const notif = require('../assets/icon_notif.png');
    const energy = require('../assets/icon_energy.png');
    const plasca = require('../assets/icon_plasca.png');
    const balaroin = require('../assets/icon_balaroin.png');
    const newsboard = require('../assets/icon_newsboard.png');
    const leaderboard = require('../assets/icon_leaderboard.png');
    const craft = require('../assets/icon_craft.png');
    const profile_inactive = require('../assets/icon_profile_inactive.png');
    const station_inactive = require('../assets/icon_station_inactive.png');

    console.log(this.props.route.params);
    return (
      <NativeBaseProvider>
        <Box flex="1" safeArea bg="#f6f6f6">
          <ZStack>
            <Flex
              direction="column"
              bg="#FFFFFF"
              w="full"
              h={421}
              alignItems="center">
              <Flex bg="#CCCCCC" w={330} h={160} mt="215" rounded="12">
                <Text>Images</Text>
              </Flex>
            </Flex>
            <Flex
              mt="430"
              direction="column"
              bg="#FFFFFF"
              w="full"
              h="235"
              alignItems="center">
              <Text mt="4">Track Progress</Text>
              <Flex
                direction="row"
                w="330"
                h="150"
                bg="#24CCAD"
                roundedTop="15">
                <Text fontSize="8xl">1</Text>
                <Spacer />
                <Text fontSize="8xl">500</Text>
              </Flex>
              <TouchableOpacity
                onPress={() => this.setState({showModal: true})}>
                <Flex
                  w="330"
                  h="34"
                  bg="#247B7B"
                  alignItems="flex-end"
                  justifyContent="center"
                  roundedBottom="15">
                  <Text color="FFFFFF" alignSelf="center">
                    More Info
                  </Text>
                </Flex>
              </TouchableOpacity>
              <Modal
                isOpen={this.state.showModal}
                onClose={() => this.setState({showModal: false})}>
                <Modal.Content maxWidth="400px">
                  <Modal.Header>Contact Us</Modal.Header>
                  <Modal.Body>
                    <FormControl>
                      <FormControl.Label>Name</FormControl.Label>
                      <Input />
                    </FormControl>
                    <FormControl mt="3">
                      <FormControl.Label>Email</FormControl.Label>
                      <Input />
                    </FormControl>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button.Group space={2}>
                      <Button
                        variant="ghost"
                        colorScheme="blueGray"
                        onPress={() => {
                          this.setState({showModal: false});
                        }}>
                        Cancel
                      </Button>
                      <Button
                        onPress={() => {
                          this.setState({showModal: false});
                        }}>
                        Save
                      </Button>
                    </Button.Group>
                  </Modal.Footer>
                </Modal.Content>
              </Modal>
            </Flex>
            <Header />
            {/* Component between header and modal */}
            <Flex
              mx="100"
              mt="120"
              position="absolute"
              w="216"
              h="66"
              bg="#247b7b"
              rounded="12"
              alignItems="center">
              <Flex mt="2.5" flexDirection="row">
                <Spacer />
                <Image ml="5" resizeMode="contain" source={newsboard} />
                <Spacer />
                <Image ml="8" resizeMode="contain" source={leaderboard} />
                <Spacer />
                <Image ml="2.5" resizeMode="contain" source={craft} />
                <Spacer />
              </Flex>
              <Flex flexDirection="row">
                <Spacer />
                <Text fontSize="10">Newsboard</Text>
                <Spacer />
                <Text fontSize="10">Leaderboard</Text>
                <Spacer />
                <Text fontSize="10">Craft</Text>
                <Spacer />
              </Flex>
            </Flex>
          </ZStack>
        </Box>
      </NativeBaseProvider>
    );
  }
}

export default Home;
