import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Title from '../components/title';
import {ThemedButton} from 'react-native-really-awesome-button';

const staticImage = require('../components/quzz.jpg');

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Title />
      <View style={styles.bannerContainer}>
        <Image
          source={staticImage}
          style={styles.banner}
          resizeMode="contain"
        />
      </View>
      <ThemedButton
        name="bruce"
        onPress={() => navigation.navigate('Quiz')}
        type="anchor">
        Start
      </ThemedButton>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  banner: {
    height: 300,
    width: 300,
    borderRadius: 16,
  },
  bannerContainer: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    flex: 1,
  },
  container: {
    // paddingTop:40,
    paddingHorizontal: 20,
    height: '100%',
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
