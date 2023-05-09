import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Title from '../components/title';
import {ThemedButton} from 'react-native-really-awesome-button';

const staticImage = require('../components/App.png');

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      {/* <Title /> */}
      <View style={styles.bannerContainer}>
        <Image
          source={staticImage}
          style={styles.banner}
          resizeMode="center"
          resizeMethod="scale"
        />
      </View>
      <View>
      <Image
          source={require('../components/logo.png')}
          style={{width:300,height:350,margin:50,alignSelf:'center'}}
          resizeMode="cover"
        />
      </View>

      <ThemedButton
        width={250}
        style={{display: 'flex', alignSelf: 'center', marginBottom: 20}}
        name="bruce"
        onPress={() => navigation.navigate('Quiz')}
        type="anchor">
        <Text style={{fontSize: 20, fontWeight: 700}}>Start</Text>
      </ThemedButton>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  banner: {
    marginTop: 100,
    height: 125,
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
