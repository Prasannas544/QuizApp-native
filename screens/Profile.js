import { View, Text, Image, ImageBackground, TouchableWithoutFeedback, TouchableHighlight } from 'react-native'
import React, { useState, useEffect } from 'react'
import { ThemedButton } from 'react-native-really-awesome-button'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { encodeImage, playClick, playResConvo, pauseResConvo, encodeBadge } from '../components/utils';
import Modal from 'react-native-modal'; import { useWindowDimensions } from 'react-native';





const Profile = ({ navigation, route }) => {
    const params = route.params;
    // const params = {
    //     user_name: 'Pessi'
    // }
    const toggleModal = () => {
        setShowModal(!showModal);
    };
    const windowWidth = useWindowDimensions().width;
    const windowHeight = useWindowDimensions().height;
    const [showModal, setShowModal] = useState(false);
    const [modalImg, setModalImg] = useState("1");
    const [avatar, setAvatar] = useState('DeadPool')
    const [userDetails, setuserDetails] = useState({
        _id: "DemoUser", totalScore: 0, highestScore: 0,
        totalGames: 0, avgScore: 0, eloRating: 1200, badges: ["1"], rank: 69
    })

    const [badges, setBadges] = useState(["1"])



    async function Avatar() {
        let av = await AsyncStorage.getItem('avatarName');
        setAvatar(av)
    }
    const getLeaderboard = async () => {
        let endpointUrl =
            'https://m42voquwh7.execute-api.ap-south-1.amazonaws.com/get-profile-data';


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
                    console.log('user data received:', data);
                    setuserDetails(data.profData)
                    setBadges(data.profData.badges)
                } else {
                    console.log('Error:user data: Unexpected response status:', data.status);
                }
            })
            .catch(error => console.error(error));
    };


    useEffect(() => {
        getLeaderboard()
        Avatar()
        playResConvo()

        return () =>
            pauseResConvo()

    }, [])

    return (
        <ImageBackground source={require('../components/card-bg4.jpg')} style={{
            paddingHorizontal: 20, height: '100%',
            flex: 1, position: 'relative'
        }}>
            <ThemedButton
                width={50}
                height={40}
                backgroundColor='green'
                raiseLevel={5}
                style={{ display: 'flex', alignSelf: 'flex-end', borderRadius: 3, marginTop: 20, padding: 0 }}
                name="bruce"
                type="anchor"
                onPress={() => {
                    playClick();

                    navigation.replace('Home')
                }}>
                <View>
                    <Image source={require('../components/home.png')} resizeMode='contain' style={{ width: 25, marginLeft: 10 }} />
                </View>


            </ThemedButton>
            <View style={{ display: 'flex', flexDirection: 'row', height: '30%', }}>
                <View style={{ width: '60%', padding: 10, borderRadius: 8, height: '120%', marginTop: -40 }}>


                    <ImageBackground source={encodeImage(avatar)} style={{ width: '100%', height: '100%', margin: 0, padding: 0 }} resizeMode='contain' >
                        <Text style={{
                            position: 'absolute', fontFamily: 'CabinetGrotesk-Black', color: '#000',
                            alignSelf: 'center', fontSize: 36, left: 10, top: 20, margin: 0
                        }}>#{userDetails.rank}</Text>
                        <Text
                            style={{
                                position: 'absolute', bottom: 0,
                                fontFamily: 'CabinetGrotesk-Black', color: '#000', alignSelf: 'center', marginBottom: 10, backgroundColor: 'pink',
                                paddingVertical: 0, paddingHorizontal: 10, fontSize: 16, elevation: 5, borderRadius: 50
                            }}>
                            {params.user_name}
                        </Text>
                    </ImageBackground>

                </View>
                <View style={{ width: '40%', height: '84%', padding: 10, backgroundColor: '#fff9c0', opacity: 0.8, borderWidth: 3, elevation: 5, marginTop: 10 }}>
                    <Image source={require('../components/seal.png')} style={{ position: 'absolute', top: 3, right: 3, height: 20, width: 20 }} />
                    <View style={{ marginBottom: 10 }}>
                        <Text style={{ fontFamily: 'CabinetGrotesk-Black', color: '#000', alignSelf: 'center', fontSize: 12, }}>Highest Score</Text>
                        <Text style={{ fontFamily: 'CabinetGrotesk-Black', color: '#000', alignSelf: 'center', fontSize: 16, }}>{userDetails.highestScore}</Text>
                    </View>
                    <View style={{ marginBottom: 10 }}>
                        <Text style={{ fontFamily: 'CabinetGrotesk-Black', color: '#000', alignSelf: 'center', fontSize: 12, }}>Total Points</Text>
                        <Text style={{ fontFamily: 'CabinetGrotesk-Black', color: '#000', alignSelf: 'center', fontSize: 16, }}>{userDetails.totalScore}</Text>
                    </View>
                    <View style={{ marginBottom: 10 }}>
                        <Text style={{ fontFamily: 'CabinetGrotesk-Black', color: '#000', alignSelf: 'center', fontSize: 12, }}>Average Score</Text>
                        <Text style={{ fontFamily: 'CabinetGrotesk-Black', color: '#000', alignSelf: 'center', fontSize: 16, }}>{userDetails.avgScore.toFixed(2)}</Text>
                    </View>
                    <View style={{ marginBottom: 10 }}>
                        <Text style={{ fontFamily: 'CabinetGrotesk-Black', color: '#000', alignSelf: 'center', fontSize: 12, }}>ELO Rating</Text>
                        <Text style={{ fontFamily: 'CabinetGrotesk-Black', color: '#000', alignSelf: 'center', fontSize: 16, }}>{userDetails.eloRating}</Text>
                    </View>

                </View>
            </View>
            <View style={{ width: '120%', height: 4, backgroundColor: '#000', marginTop: 5, marginLeft: -20 }}></View>
            <View style={{ height: '60%', margin: 0, borderRadius: 8, padding: 10, paddingTop: 5 }}>
                <Text style={{ fontFamily: 'CabinetGrotesk-Black', color: '#000', alignSelf: 'center', fontSize: 24, }}>Hall of Fame</Text>

                {badges.length > 0 ? <View style={{ display: 'flex', flexDirection: 'row', gap: 10, flexWrap: 'wrap', justifyContent: 'center' }}>
                    {badges.map((item, i) => {
                        return (<TouchableWithoutFeedback onPress={() => { setModalImg(item); toggleModal() }} key={i}>
                            <Image source={encodeBadge(item)} style={{ width: 70, height: 130 }} />
                        </TouchableWithoutFeedback>)
                    })}
                </View> : <View>
                    <Text style={{ fontFamily: 'CabinetGrotesk-Bold', color: '#000', alignSelf: 'center', fontSize: 24, }}>Nothing to show !</Text>
                </View>}
            </View>


            <Modal
                isVisible={showModal}
                onBackdropPress={toggleModal}
                animationIn='zoomIn'
                animationOut="zoomOut"
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
                <Image source={encodeBadge(modalImg)} style={{ width: '100%', height: '100%' }} />
            </Modal>
        </ImageBackground>
    )
}

export default Profile