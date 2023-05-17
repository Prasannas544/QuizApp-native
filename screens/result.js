import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { playSound } from '../components/utils';
import axios from 'axios';
import React, { useEffect } from 'react';
import { ThemedButton } from 'react-native-really-awesome-button';
import AsyncStorage from '@react-native-async-storage/async-storage';

const staticImage = require('../components/resul-bg.png');



const Result = ({ navigation, route }) => {
  const params = route.params;
  // params = { score: 85 };
  useEffect(() => {
    saveResult()
  }, [])

  const saveResult = async () => {
    let userName = await AsyncStorage.getItem('userName')
    let payload = {
      user_name: userName,
      score: params.score,
      time_taken: 120
    }

    let endpointUrl =
      'https://m42voquwh7.execute-api.ap-south-1.amazonaws.com/save-score';
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    };

    fetch(endpointUrl, requestOptions)
      .then(response => response.json())
      .then(data => {
        if (data.status == 200) {
          console.log("played data sent")
        } else {
          alert('retry after some time');
        }
      })
      .catch(error => console.error(error));
  };


  const resultPrompt = () => {
    let score = parseInt(params.score);
    if (score <= 40) {
      return {
        txt: 'Try harder or die !!',
        img: require('../components/pg2.png'),
      };
    } else if (score <= 60) {
      return {
        txt: 'Could do better, You know !',
        img: require('../components/pg3.png'),
      };
    } else if (score <= 80) {
      return {
        txt: 'Very Good, nearly brilliant !!',
        img: require('../components/pg4.png'),
      };
    } else if (score <= 100) {
      return {
        txt: 'Excellent !!!, Never seen before !',
        img: require('../components/pg1.png'),
      };
    } else {
      return { txt: 'IDK what to say', img: require('../components/pg3.png') };
    }
  };
  const res = resultPrompt();

  return (
    <ImageBackground
      style={{ position: 'relative', flex: 1 }}
      source={require('../components/res-bg.jpg')}
      resizeMode="cover">
      <View style={[styles.bannerContainer, { paddingTop: 10 }]}>
        <ImageBackground
          source={staticImage}
          style={styles.banner}
          resizeMode="contain">
          <View style={{ paddingTop: 10 }}>
            <Text
              style={{
                fontSize: 48,
                alignSelf: 'center',
                fontFamily: 'CabinetGrotesk-Black',
                color: '#000',
              }}>
              Result
            </Text>
            <Text
              style={{
                fontSize: 20,
                alignSelf: 'center',
                fontFamily: 'CabinetGrotesk-Black',
                color: '#000',
              }}>
              Score : {params.score}
            </Text>
          </View>
        </ImageBackground>
      </View>

      <View style={{ flexDirection: 'row' }}>
        <ImageBackground
          source={require('../components/res-dialog.png')}
          resizeMode="contain"
          style={{
            width: 250,
            height: 250,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              marginTop: -30,
              marginLeft: -6,
              width: '40%',
              fontFamily: 'CabinetGrotesk-Black',
              fontSize: 16,
              color: '#102940',
              textAlign: 'center'
            }}>
            {res.txt}
          </Text>
        </ImageBackground>
        <View style={{ width: '50%', height: '50%', position: 'relative' }}>
          <Image
            source={res.img}
            style={{
              position: 'absolute',
              bottom: -180,
              left: -100,
              width: '100%',
              height: '100%',
            }}
            resizeMode="contain"
          />
        </View>
      </View>
      <View style={{ alignSelf: 'center', bottom: 30, position: 'absolute' }}>
        <ThemedButton
          width={250}
          raiseLevel={4}
          backgroundColor="#e30707"
          borderColor="#102940"
          backgroundDarker="#102940"
          name="bruce"
          type="anchor"
          onPress={() => { playSound(); navigation.replace('Home') }}>
          <Text
            style={[
              styles.buttonText,
              {
                fontFamily: 'CabinetGrotesk-Black',
                fontSize: 24,
                color: '#fff',
              },
            ]}>
            Home
          </Text>
        </ThemedButton>
      </View>
    </ImageBackground>
  );
};

export default Result;

const styles = StyleSheet.create({
  container: {
    // paddingTop:40,
    paddingHorizontal: 20,
    height: '100%',
  },
  banner: {
    position: 'relative',
    height: 300,
    width: 300,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bannerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  button: {
    width: '25%',
    backgroundColor: '#1A759F',
    padding: 16,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
  },
  buttonText: {
    fontSize: 20,
    color: 'black',
  },
});
