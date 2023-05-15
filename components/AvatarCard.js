import { View, Text, ImageBackground, TextInput, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useWindowDimensions } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Avatardata = [{
    bg: require('./card-bg1.jpg'),
    img: require('./pg1.png'),
    stats: {
        IQ: '88',
        power: '66',
        speed: '22'
    }
}, {
    bg: require('./card-bg2.jpg'),
    img: require('./pg2.png'),
    stats: {
        IQ: '48',
        power: '76',
        speed: '22'
    }
}, {
    bg: require('./card-bg3.jpg'),
    img: require('./pg2.png'),
    stats: {
        IQ: '25',
        power: '46',
        speed: '92'
    }
},

]
const AvatarCard = ({ navigation }) => {
    const [text, onChangeText] = useState('user');
    const windowWidth = useWindowDimensions().width;
    const windowHeight = useWindowDimensions().height;

    useEffect(() => {
        route()
    }, [])

    const route = async () => {
        let user_name = await AsyncStorage.getItem('userName');
        if (user_name !== null && user_name !== undefined) {

            navigation.replace('Home', { userName: user_name });
        }
    }
    const handleSubmit = async () => {
        await AsyncStorage.setItem('userName', text);
        let user_name = await AsyncStorage.getItem('userName');
        navigation.replace('Home', { userName: user_name });
    }
    return (
        <View>
            <ImageBackground source={Avatardata[0].bg} style={{ position: 'relative', padding: 5, borderColor: '#fff', alignSelf: 'center', width: windowWidth * 0.8, height: windowHeight * 0.5 }} >
                <View style={{ borderColor: '#fff', position: 'absolute', top: 0 }}>
                    <TextInput
                        style={{
                            height: 40,
                            fontFamily: 'CabinetGrotesk-Bold',
                            color: '#fff',
                            borderColor: '#fff'
                        }}
                        onChangeText={onChangeText}
                        value={text}
                        placeholder="Enter Name Q"
                        placeholderTextColor='#fff'
                    />
                </View>
                <View style={{ width: '90%', height: '65%', backgroundColor: '#000', alignSelf: 'center', position: 'absolute', top: 30 }}>

                </View>
                <View style={{ flexDirection: 'column', position: 'absolute', bottom: 40, }}>
                    <View >
                        <Text style={{ fontFamily: 'CabinetGrotesk-Bold', fontSize: 16, color: '#fff' }}>IQ:{Avatardata[0].stats.IQ}</Text>
                    </View>
                    <View >
                        <Text style={{ fontFamily: 'CabinetGrotesk-Bold', fontSize: 16 }}>Power:{Avatardata[0].stats.power}</Text>
                    </View>
                    <View >
                        <Text style={{ fontFamily: 'CabinetGrotesk-Bold', fontSize: 16 }}>Speed:{Avatardata[0].stats.speed}</Text>
                    </View>
                </View>

                <View style={{ position: 'absolute', bottom: 0, backgroundColor: 'yellow' }}>
                    <TouchableOpacity onPress={handleSubmit}>
                        <Text>Submit</Text>
                    </TouchableOpacity>
                </View>

            </ImageBackground>
        </View>

    )
}

export default AvatarCard