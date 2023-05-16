import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
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
        // route()
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
        <View style={styles.card}>
            <View style={styles.content}>
                <View style={styles.top}>
                    <Text style={styles.topText}>Orange</Text>
                    <View style={styles.color}></View>
                </View>
                <View style={styles.middle}>
                    <View>
                        <Text style={styles.middleText}>#F9BC61</Text>
                        <Text style={[styles.middleText, {fontSize:16}]}>Charizard</Text>
                    </View>
                    <Image source={require('../components/pg1.png')} style={styles.middleImage} resizeMode='contain' />
                </View>
                <View style={styles.bottom}>
                    <View style={styles.bottomItem}>
                        <Text style={styles.bottomText}>Hue</Text>
                        <Text style={styles.bottomText}>36</Text>
                    </View>
                    <View style={styles.bottomItem}>
                        <Text style={styles.bottomText}>Sat</Text>
                        <Text style={styles.bottomText}>93</Text>
                    </View>
                    <View style={styles.bottomItem}>
                        <Text style={styles.bottomText}>Lum</Text>
                        <Text style={styles.bottomText}>68</Text>
                    </View>
                </View>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({

    card: {
        display: 'flex',
        flexDirection:'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 300,
        width: 250,
        backgroundColor: '#f9bc61',
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 10,
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        height: '88%',
        width: '88%',
        backgroundColor: 'white',
        borderRadius: 8,
    },
    top: {
        display: 'flex',
        flexDirection:'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        height: '20%',
        backgroundColor: 'white',
    },
    topText: {
        fontSize: 12,
        fontFamily: 'CabinetGrotesk-Black',
    },
    color: {
        height: 20,
        width: 20,
        marginLeft: 5,
        marginRight: 10,
        borderRadius: 50,
        backgroundColor: 'orange',
    },
    middle: {
        display: 'flex',
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '40%',
        backgroundColor: '#f9bc61',
        paddingVertical: 15,
        paddingHorizontal: 15,
    },
    middleImage: {
        width: '60%',
        height:'100%',
    },
    middleText: {
        marginBottom: 5,
        fontSize: 12,
        fontFamily: 'CabinetGrotesk-Black',
    },
 
    bottom: {
        display: 'flex',
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '40%',
        paddingHorizontal: 30,
    },
    bottomItem: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    bottomText: {
        fontFamily: 'CabinetGrotesk-Black',
    },
});


export default AvatarCard