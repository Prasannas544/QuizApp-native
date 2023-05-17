import { View, Text, Image } from 'react-native'
import React from 'react'
import { useWindowDimensions } from 'react-native';
import { ThemedButton } from 'react-native-really-awesome-button';
import { playClick } from './utils';



const TopBar = ({ setShowStats, bgfn}) => {

    const windowWidth = useWindowDimensions().width;
    const windowHeight = useWindowDimensions().height;
    return (
        <View
            class="topBar"
            style={{
                height: windowHeight * 0.1,
                backgroundColor: '#fff',
                borderBottomWidth: 4,
                borderBottomColor: '#000',
                width: windowWidth,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: windowWidth * 0.03,
                paddingVertical: windowHeight * 0.02,
            }}>
            <Image
                source={require('./menu-icon.png')}
                style={{ width: 42, height: 42 }}
            />
            <ThemedButton
                width={112}
                height={42}
                raiseLevel={5}
                backgroundColor={bgfn(2).bg}
                name="bruce"
                onPress={() => {
                    setShowStats(true);
                    playClick()
                }}
                type="anchor">
                <Image
                    source={require('./stats.png')}
                    style={{ width: 17, height: 22 }}
                />
                <Text
                    style={{ fontFamily: 'CabinetGrotesk-Bold', color: '#000' }}>
                    &nbsp;Stats
                </Text>
            </ThemedButton>
        </View>
    )
}

export default TopBar