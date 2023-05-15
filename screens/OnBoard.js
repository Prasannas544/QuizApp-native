import { StyleSheet, Text, View, ImageBackground, TextInput } from 'react-native'
import React, { useState } from 'react'
import AvatarCard from '../components/AvatarCard';

const OnBoard = ({navigation}) => {



  return (
    <ImageBackground
      style={{ position: 'relative', flex: 1 }}
      source={require('../components/onboard-bg.jpg')}
      resizeMode="cover">

      <AvatarCard navigation={navigation} />

    </ImageBackground>
  )
}

export default OnBoard

const styles = StyleSheet.create({})

