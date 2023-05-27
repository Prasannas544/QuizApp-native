import { View, Text, Image, ImageBackground, TouchableWithoutFeedback, TouchableHighlight } from 'react-native'
import React, { useState, useEffect } from 'react'
import { ThemedButton } from 'react-native-really-awesome-button'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { encodeImage } from '../components/utils';
import Modal from 'react-native-modal'; import { useWindowDimensions } from 'react-native';





const Profile = ({ navigation, route }) => {
    // const params = route.params;
    const params = {
        user_name: 'Developer'
    }
    const toggleModal = () => {
        setShowModal(!showModal);
    };
    const windowWidth = useWindowDimensions().width;
    const windowHeight = useWindowDimensions().height;

    const [showModal, setShowModal] = useState(true);
    const [avatar, setAvatar] = useState('Kakashi')
    const [Leaderboard, setLeaderboard] = useState([
        {
            "_id": "6464cb0968a298e0cf74ad71",
            "user_name": "Developer",
            "score": 100,
            "time_taken": 120,
            "timestamp": "2023-05-17 18:09:37"
        }])
    const [cummLboard, setCummLboard] = useState([])
    const [userRank, setUserRank] = useState(999)
    const [usercummScore, setUsercummScore] = useState(0)
    const [toggleLeaderboard, settoggleLeaderboard] = useState(false)
    const [badges, setBadges] = useState(["1", "2", "3", "4", "5", "1", "2", "3", "4", "5"])



    async function Avatar() {
        let av = await AsyncStorage.getItem('avatarName');
        // setAvatar(av)
    }
    const getLeaderboard = async () => {
        let endpointUrl =
            'https://m42voquwh7.execute-api.ap-south-1.amazonaws.com/get-leaderboard';


        let payload = {
            user_name: params.user_name,
        }

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
        };

        fetch(endpointUrl, requestOptions)
            .then(response => response.json())
            .then(data => {
                if (data.status == 200) {
                    console.log('Leaderboard data received:', data);
                    setLeaderboard(data.leaderboard)
                    setCummLboard(data.leaderboard_tot)
                    setUserRank(data.userRank)
                    setUsercummScore(data.userScores)
                } else {
                    console.log('Error:Leaderboard: Unexpected response status:', data.status);
                }
            })
            .catch(error => console.error(error));
    };

    useEffect(() => {
        getLeaderboard()
        Avatar()
    }, [])




    return (
        <View style={{
            paddingHorizontal: 20, height: '100%',
            backgroundColor: '#fff9e4', flex: 1, position: 'relative'
        }}>
            <ThemedButton
                width={80}
                height={40}
                backgroundColor='magenta'
                raiseLevel={5}
                style={{ display: 'flex', alignSelf: 'flex-end', borderRadius: 3, marginTop: 20, padding: 0 }}
                name="bruce"
                type="anchor"
                onPress={() => {
                    navigation.replace('Home')
                }}>
                <View>
                    <Text>
                        Home
                    </Text>
                </View>


            </ThemedButton>
            <View style={{ display: 'flex', flexDirection: 'row', height: '30%', }}>
                <View style={{ width: '60%', padding: 10, backgroundColor: '#fff9e4', borderRadius: 8, height: '117%', marginTop: -40 }}>
                    <Text style={{ position: 'absolute', fontFamily: 'CabinetGrotesk-Black', color: '#000', alignSelf: 'center', fontSize: 36, right: 40, top: 20 }}>#4</Text>

                    <Image source={encodeImage(avatar)} style={{ width: '90%', height: '90%' }} />
                    <Text
                        style={{ fontFamily: 'CabinetGrotesk-Black', color: '#000', alignSelf: 'center', margin: 5, paddingVertical: 5, paddingHorizontal: 10, fontSize: 16, backgroundColor: '#fff9e4', elevation: 5, borderRadius: 8 }}>
                        {params.user_name}</Text>
                </View>
                <View style={{ width: '40%', height: '84%', padding: 10, backgroundColor: '#fff9e4', borderWidth: 3, elevation: 5, marginTop: 10 }}>
                    <Image source={require('../components/seal.png')} style={{ position: 'absolute', top: 2, right: 5, height: 12, width: 12 }} />
                    <View style={{ marginBottom: 10 }}>
                        <Text style={{ fontFamily: 'CabinetGrotesk-Black', color: '#000', alignSelf: 'center', fontSize: 12, }}>Highest Score</Text>
                        <Text style={{ fontFamily: 'CabinetGrotesk-Black', color: '#000', alignSelf: 'center', fontSize: 16, }}>65</Text>
                    </View>
                    <View style={{ marginBottom: 10 }}>
                        <Text style={{ fontFamily: 'CabinetGrotesk-Black', color: '#000', alignSelf: 'center', fontSize: 12, }}>Total Points</Text>
                        <Text style={{ fontFamily: 'CabinetGrotesk-Black', color: '#000', alignSelf: 'center', fontSize: 16, }}>6555</Text>
                    </View>
                    <View style={{ marginBottom: 10 }}>
                        <Text style={{ fontFamily: 'CabinetGrotesk-Black', color: '#000', alignSelf: 'center', fontSize: 12, }}>Average Score</Text>
                        <Text style={{ fontFamily: 'CabinetGrotesk-Black', color: '#000', alignSelf: 'center', fontSize: 16, }}>34.5</Text>
                    </View>
                    <View style={{ marginBottom: 10 }}>
                        <Text style={{ fontFamily: 'CabinetGrotesk-Black', color: '#000', alignSelf: 'center', fontSize: 12, }}>ELO Rating</Text>
                        <Text style={{ fontFamily: 'CabinetGrotesk-Black', color: '#000', alignSelf: 'center', fontSize: 16, }}>1600</Text>
                    </View>

                </View>
            </View>
            <View style={{ width: '120%', height: 4, backgroundColor: '#000', marginTop: 5, marginLeft: -20 }}></View>
            <View style={{ height: '60%', margin: 0, backgroundColor: '#fff9e4', borderRadius: 8, padding: 10, paddingTop: 5 }}>
                <Text style={{ fontFamily: 'CabinetGrotesk-Black', color: '#000', alignSelf: 'center', fontSize: 24, }}>Badges</Text>

                <View style={{ display: 'flex', flexDirection: 'row', gap: 10, flexWrap: 'wrap' }}>
                    {badges.map((item, i) => {
                        return (<TouchableWithoutFeedback onPress={toggleModal} key={i}>
                            <Image source={require('../components/badge1.png')} style={{ width: 70, height: 130 }} />
                        </TouchableWithoutFeedback>)
                    })}
                </View>
            </View>


            <Modal
                isVisible={showModal}
                onBackdropPress={toggleModal}
                animationIn="slideInUp"
                animationOut="slideOutDown"
                style={{
                    position: 'absolute',
                    margin: 0,
                    padding: 0,
                    justifyContent: 'center',
                    top: windowHeight * 0.1,
                    alignSelf: 'center',
                    width: windowWidth * 0.8,
                    height: windowHeight * 0.8,
                    borderRadius: 16,
                }}>
                <Image source={require('../components/badge1.png')} style={{ width: '100%', height: '100%' }} />
            </Modal>
        </View>
    )
}

export default Profile