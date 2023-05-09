import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
const staticImage = require('../components/winner.png')


const Result = ({ navigation, route }) => {
    const params = route.params
    return (
        <View>
            <View>
                <Text style={{fontSize:40,alignSelf:"center"}}>Result</Text>
                <Text style={{fontSize:12,alignSelf:"center"}}>Score : {params.score}</Text>
            </View>

            <View style={styles.bannerContainer}>
                <Image source={staticImage}
                    style={styles.banner}
                    resizeMode='contain' />
            </View>
            <View style={{ alignSelf: "center" }}>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Home")}>
                    <Text style={styles.buttonText} >Home</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Result


const styles = StyleSheet.create({
    container: {
        // paddingTop:40,
        paddingHorizontal: 20,
        height: "100%"
    },
    banner: {
        height: 300,
        width: 300,
    },
    bannerContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },

    button: {
        width: "25%",
        backgroundColor: "#1A759F",
        padding: 16,
        borderRadius: 16,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 30

    },
    buttonText: {
        fontSize: 24,
        fontWeight: "600",
        color: "white",
    }
})