import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {ThemedButton} from 'react-native-really-awesome-button';

const staticImage = require('../components/winner.png');

const Result = ({navigation, route}) => {
  //   const params = route.params;
  params = {score: 69};
  return (
    <View style={{position:'relative',flex:1}}>
      <View>
        <Text style={{fontSize: 40, alignSelf: 'center'}}>Result</Text>
        <Text style={{fontSize: 16, alignSelf: 'center'}}>
          Score : {params.score}
        </Text>
      </View>

      <View style={styles.bannerContainer}>
        <Image
          source={staticImage}
          style={styles.banner}
          resizeMode="contain"
        />
      </View>
      <View style={{alignSelf: 'center',bottom:20,position:'absolute'}}>
        <ThemedButton
          width={112}
          height={49}
          raiseLevel={4}
          backgroundColor="#3C9BF2"
          borderColor='#102940'
          backgroundDarker='#102940'
          name="bruce"
          type="anchor"
          //   onPress={() => navigation.navigate('Home')}>
        >
          <Text style={styles.buttonText}>Home</Text>
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
    height: 300,
    width: 300,
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
    fontWeight: '700',
    color: 'black',
  },
});
