import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Lottie from 'lottie-react-native';

import React from 'react';
import {ThemedButton} from 'react-native-really-awesome-button';

const staticImage = require('../components/resul-bg.png');

const Result = ({navigation, route}) => {
  // const params = route.params;
  params = {score: 69};
  return (
    <View style={{position: 'relative', flex: 1, backgroundColor: '#fff9e4'}}>
      <View style={[styles.bannerContainer, {paddingTop: 50}]}>
        <ImageBackground
          source={staticImage}
          style={styles.banner}
          resizeMode="contain">
          <View style={{paddingTop: 10}}>
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
      <Lottie
        style={{marginTop: 85}}
        source={require('../components/penguin.json')}
        autoPlay
        loop
      />
      <View style={{alignSelf: 'center', bottom: 20, position: 'absolute'}}>
        <ThemedButton
          width={250}
          raiseLevel={4}
          backgroundColor="#3C9BF2"
          borderColor="#102940"
          backgroundDarker="#102940"
          name="bruce"
          type="anchor"
          onPress={() => navigation.navigate('Home')}>
          <Text
            style={[styles.buttonText, {fontFamily: 'CabinetGrotesk-Black'}]}>
            Home
          </Text>
        </ThemedButton>
      </View>
    </View>
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
