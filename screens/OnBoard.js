import { StyleSheet, Text, View, ImageBackground, TextInput } from 'react-native'
import React, { useState } from 'react'

const OnBoard = () => {
  const [text, onChangeText] = useState();

  return (
    <ImageBackground
      style={{ position: 'relative', flex: 1 }}
      source={require('../components/onboard-bg.jpg')}
      resizeMode="cover">
      <View>
        <TextInput
          style={{
            height: 40,
            margin: 12,
            borderWidth: 1,
            borderRadius: 12,
            padding: 10,
            fontFamily: 'CabinetGrotesk-Bold',
            color: '#fff',

          }}
          onChangeText={onChangeText}
          value={text}
          placeholder="Enter Name Q"
          placeholderTextColor='#fff'
        />
      </View>
    </ImageBackground>
  )
}

export default OnBoard

const styles = StyleSheet.create({})