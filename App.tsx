import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MyStack from './navigation';
import { BackHandler } from 'react-native';



const App = () => {

  useEffect(() => {
    const backAction = () => {
      return true; // Returning true will disable the hardware back button
    };

    const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);

    return () => backHandler.remove(); // Cleanup the event listener on component unmount
  }, []);

  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    // paddingTop: 40,
    paddingHorizontal: 16,
  },
});
