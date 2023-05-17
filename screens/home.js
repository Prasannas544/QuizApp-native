import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { ThemedButton } from 'react-native-really-awesome-button';
import { playSound } from '../components/utils';
import { NotificationListner, requestUserPermission } from '../src/utils/pushnotification_helper';
import AsyncStorage from '@react-native-async-storage/async-storage';


const staticImage = require('../components/App.png');

const Home = ({ navigation, route }) => {

  const [name, setname] = useState('')

  useEffect(() => {
    getUsername()
    requestUserPermission();
    NotificationListner();
  }, [])
  const getUsername = async () => {
    let user_name = await AsyncStorage.getItem('userName');
    setname(user_name)
  }

  return (
    <View style={[styles.container, { flex: 1, position: 'relative' }]}>
      {/* <Title /> */}

      <View>
        <Image
          source={require('../components/Group.png')}
          style={{ width: 300, height: 250, margin: 20, alignSelf: 'center' }}
          resizeMode="contain"
        />
      </View>

      <View
        style={{ alignSelf: 'center', paddingTop: 20, paddingHorizontal: '5%' }}>
        <Text
          style={{
            fontSize: 20,
            textAlign: 'center',
            fontFamily: 'CabinetGrotesk-Black',
            color: '#000',
            paddingBottom: 10
          }}>{name}...
        </Text>
        <Text
          style={{
            fontSize: 20,
            textAlign: 'center',
            fontFamily: 'CabinetGrotesk-Black',
            color: '#000',
          }}>
          Are you worthy to onboard the team of Penguins of Madagascar ?
        </Text>
      </View>
      <View style={{ position: 'absolute', bottom: 150, alignSelf: 'center' }}>
        <ThemedButton
          width={300}
          height={130}
          raiseLevel={3}
          style={{ display: 'flex', alignSelf: 'center' }}
          name="bruce"
          type="primary">

          <View style={styles.bannerContainer}>
            <Image
              source={staticImage}
              style={styles.banner}
              resizeMode="center"
              resizeMethod="scale"
            />
          </View>
        </ThemedButton>
      </View>
      <View style={{ position: 'absolute', bottom: 30, alignSelf: 'center' }}>
        <ThemedButton
          width={250}
          backgroundColor="#ff8400"
          style={{ display: 'flex', alignSelf: 'center' }}
          name="bruce"
          onPress={() => {
            playSound();
            setTimeout(function () {
              navigation.replace('Quiz');
            }, 500)
          }
          }
          type="anchor">
          <Text
            style={{
              fontSize: 24,
              fontFamily: 'CabinetGrotesk-Black',
              color: '#000',
            }}>
            Start
          </Text>
        </ThemedButton>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  banner: {
    // marginBottom: 80,
    height: 130,
    width: 300,
  },
  bannerContainer: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    flex: 1,
  },
  container: {
    paddingHorizontal: 20,
    height: '100%',
    backgroundColor: '#fff9e4',
  },
  button: {
    width: '100%',
    padding: 16,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
  },
  buttonText: {
    fontSize: 24,
    fontWeight: '600',
    color: 'white',
  },
});
