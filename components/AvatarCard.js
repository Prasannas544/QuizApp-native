import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useWindowDimensions } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ThemedButton } from 'react-native-really-awesome-button';
import { playSound } from './utils'
import { ProgressBar } from '@react-native-community/progress-bar-android'
import axios from 'axios';


const AvatarCard = ({ navigation }) => {
    const [Avatardata, setAvatardata] = useState([{
        img: "https://drive.google.com/uc?export=view&id=11-1sPBd_cbab9IMbrHd23d-hBm9QedCZ",
        info: "verudasfhasf sffjlaskhfkasf asfhjashfas hfas asf",
        name: "Betty",
        stats: {
            IQ: '65',
            power: '55',
            speed: '22'

        }
    }])
    const [avatar, setAvatar] = useState(0);
    const [isdisabled, setisButtonDisabled] = useState(false);
    const [name, setName] = useState(null)
    const windowWidth = useWindowDimensions().width;
    const windowHeight = useWindowDimensions().height;



    const getAvatarData = async () => {


        let endpointUrl =
            'https://m42voquwh7.execute-api.ap-south-1.amazonaws.com/get-avatar-data';

        try {
            const response = await axios.post(endpointUrl);
            if (response.status === 200) {
                const data = response.data;
                console.log('Avatar data received:', data.avatar_data);
                setAvatardata(data.avatar_data)
            } else {
                console.log('Error: Unexpected response status:', response.status);
            }
        } catch (error) {
            console.log('Error:', error.message);
        }
    };

    useEffect(() => {
        route()

    }, [])

    const route = async () => {
        let user_name = await AsyncStorage.getItem('userName');
        if (user_name !== null && user_name !== undefined) {
            navigation.replace('Home', { userName: user_name });
        } else {
            getAvatarData();

        }
    }


    const handleSubmit = async () => {
        if (name) {
            await AsyncStorage.setItem('userName', name);
            let user_name = await AsyncStorage.getItem('userName');
            navigation.replace('Home', { userName: user_name });
        } else {
            alert('Plese Enter Your Name');

        }

    }
    return (
        <View style={{ flex: 1 }}>
            <View style={{ height: 350, width: 300, padding: 20, alignSelf: 'center', marginRight: 5 }}>
                <View style={{
                    backgroundColor: 'red',
                    borderWidth: 5,
                    borderRightWidth: 12,
                    borderBottomWidth: 12,
                    borderColor: '#000000',
                    shadowOffset: {
                        width: 0,
                        height: 5,
                    },
                    shadowColor: '#000000',
                    shadowOpacity: 1,
                    shadowRadius: 0,
                    elevation: 5,
                    borderRadius: 10,
                    padding: '4%'
                }}>

                    <View style={styles.top}>
                        <View style={{ width: '40%' }}>
                            <Text style={[styles.topText, { fontSize: 16 }]}>{Avatardata[avatar].name}</Text>
                            <Text style={[styles.topText,]} >{Avatardata[avatar].info}</Text>
                        </View>
                        <Image source={{
                            uri: Avatardata[avatar].img,
                        }} style={styles.topImage} resizeMode='cover' />
                    </View>
                    <View style={styles.middle}>

                        <Text style={[styles.topText, { fontSize: 16 }]}>a.k.a. </Text>

                        <TextInput
                            style={{
                                fontFamily: 'CabinetGrotesk-Black',
                                color: '#000',
                                backgroundColor: '#fff',
                                height: 25,
                                padding: 2,
                                width: '75%',
                                marginLeft: 5,
                            }}
                            onChangeText={(e) => setName(e)}
                            placeholder="Your Name Here..."
                        />

                    </View>
                    <View style={styles.bottom}>
                        <View style={styles.bottomItem}>
                            <Text style={styles.bottomText}>PWR</Text>
                            <Text style={styles.bottomText}>{Avatardata[avatar].stats.power}</Text>
                            <ProgressBar

                                styleAttr="Horizontal"
                                indeterminate={false}
                                color={Avatardata[avatar].stats.power / 100 < 0.5 ? 'orange' : Avatardata[avatar].stats.power / 100 < 0.75 ? '#9ACD32' : 'green'}
                                progress={Avatardata[avatar].stats.power / 100}
                            />
                        </View>
                        <View style={styles.bottomItem}>
                            <Text style={styles.bottomText}>SPD</Text>
                            <Text style={styles.bottomText}>{Avatardata[avatar].stats.speed}</Text>
                            <ProgressBar
                                styleAttr="Horizontal"
                                indeterminate={false}
                                color={Avatardata[avatar].stats.speed / 100 < 0.5 ? 'orange' : Avatardata[avatar].stats.speed / 100 < 0.75 ? '#9ACD32' : 'green'}

                                progress={Avatardata[avatar].stats.speed / 100}
                            />
                        </View>
                        <View style={styles.bottomItem}>
                            <Text style={styles.bottomText}>IQ</Text>
                            <Text style={styles.bottomText}>{Avatardata[avatar].stats.IQ}</Text>
                            <ProgressBar
                                styleAttr="Horizontal"
                                indeterminate={false}
                                color={Avatardata[avatar].stats.IQ / 200 < 0.5 ? 'orange' : Avatardata[avatar].stats.IQ / 200 < 0.75 ? '#9ACD32' : 'green'}
                                progress={Avatardata[avatar].stats.IQ / 200}
                            />
                        </View>
                    </View>
                </View>
            </View>

            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: 10 }}>
                <View style={{ width: '20%' }}>
                    <ThemedButton
                        width={'95%'}
                        borderColor='#000'
                        borderWidth={4}
                        raiseLevel={5}
                        backgroundColor='#fff'
                        style={styles.optButton}
                        name="bruce"
                        disabled={isdisabled}

                        onPress={() => {
                            setisButtonDisabled(true)
                            playSound()
                            setTimeout(function () {
                                setAvatar((avatar + (Avatardata.length - 1)) % Avatardata.length);
                                setisButtonDisabled(false)
                            }, 500);
                        }}
                        backgroundDarker='#000'
                        type="anchor">
                        <Image source={require('../components/lt_arrow.png')} resizeMode='contain' style={{ width: '100%' }} />
                    </ThemedButton>
                </View>
                <View style={{ width: '26%' }}>
                    <ThemedButton
                        width={'95%'}
                        borderColor='#000'
                        borderWidth={4}
                        raiseLevel={5}
                        backgroundColor='lightgreen'
                        style={styles.optButton}
                        name="bruce"
                        backgroundDarker='#000'
                        disabled={isdisabled}
                        onPress={() => {
                            setisButtonDisabled(true)
                            playSound()
                            setTimeout(function () {
                                handleSubmit()
                                setisButtonDisabled(false)
                            }, 500);
                        }}

                        type="anchor">
                        <Text style={[styles.bottomText, { fontSize: 20 }]}>
                            Done
                        </Text>
                    </ThemedButton>
                </View>
                <View style={{ width: '20%' }}>
                    <ThemedButton
                        width={'95%'}
                        borderColor='#000'
                        borderWidth={4}
                        raiseLevel={5}
                        backgroundColor='#fff'
                        style={styles.optButton}
                        name="bruce"
                        disabled={isdisabled}
                        onPress={() => {
                            setisButtonDisabled(true)
                            playSound()
                            setTimeout(function () {
                                setAvatar((avatar + 1) % Avatardata.length);
                                setisButtonDisabled(false)
                            }, 500);
                        }}
                        backgroundDarker='#000'
                        type="anchor">
                        <Image source={require('../components/rt_arrow.png')} resizeMode='contain' style={{ width: '100%' }} />

                    </ThemedButton>
                </View>

            </View>
        </View >
    )
}

const styles = StyleSheet.create({

    card: {
        display: 'flex',
        flexDirection: 'row',
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
    topText: {
        fontSize: 12,
        fontFamily: 'CabinetGrotesk-Black',
        color: '#000',
    },
    color: {
        height: 20,
        width: 20,
        marginLeft: 5,
        marginRight: 10,
        borderRadius: 50,
        backgroundColor: 'orange',
    },
    top: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '65%',
        backgroundColor: '#f9bc61',
        paddingVertical: 15,
        paddingHorizontal: 15,
        borderWidth: 4,
        borderRadius: 4,
    },
    topImage: {
        width: '60%',
        height: '100%',
    },
    topText: {
        marginBottom: 5,
        fontSize: 12,
        fontFamily: 'CabinetGrotesk-Black',
        color: '#000',
    },
    middle: {
        display: 'flex',
        flexDirection: 'row',
        height: '10%',
        padding: 5,
        marginTop: 10,
        alignItems: 'center'
    },

    bottom: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '30%',
        paddingHorizontal: 20,
    },
    bottomItem: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    bottomText: {
        fontFamily: 'CabinetGrotesk-Black',
        color: '#000',
    },
    optButton: {
        paddingVertical: 12,
        marginVertical: 6,
    },
});


export default AvatarCard