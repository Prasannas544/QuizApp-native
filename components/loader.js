import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Lottie from 'lottie-react-native';
import { useWindowDimensions } from 'react-native';


const loader = () => {
  const windowHeight = useWindowDimensions().height;
  return (
    <View
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: windowHeight,
        backgroundColor: '#fff9e4',
      }}>
      <Lottie
        style={{ width: 150 }}
        source={require('./loader-bat.json')}
        autoPlay
        loop
      />
      <Text
        style={{
          fontFamily: 'CabinetGrotesk-Black',
          color: '#000',
          fontSize: 16,
        }}>
        Kowalski Analysis !!
      </Text>
    </View>
  );
};

export default loader;

