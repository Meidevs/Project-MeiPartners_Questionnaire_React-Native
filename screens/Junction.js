import React from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
    Image,
    StatusBar,
} from 'react-native';
import * as Font from 'expo-font';
const { width, height } = Dimensions.get('window');

export default class Incomming2 extends React.Component {

    state = {
        fontLoaded: false,
    }
    async componentDidMount() {
        await Font.loadAsync({
            'NanumSquareRoundEB': require('../assets/fonts/NanumSquareRoundEB.ttf'),
            'NanumSquareRoundB': require('../assets/fonts/NanumSquareRoundB.ttf'),
            'NanumSquareRoundR': require('../assets/fonts/NanumSquareRoundR.ttf'),
            'NanumSquareRoundL': require('../assets/fonts/NanumSquareRoundL.ttf')
        })

        this.setState({ fontLoaded: true })
    }
    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    barStyle="dark-content"
                    // dark-content, light-content and default
                    hidden={false}
                    //To hide statusBar
                    backgroundColor="#00BCD4"
                    //Background color of statusBar
                    translucent={false}
                    //allowing light, but not detailed shapes
                    networkActivityIndicatorVisible={true}
                />
                <View style={styles.topContainer}>

                </View>
                <View style={styles.middleContainer}>
                    <View>
                        <TouchableOpacity>
                            <Text>유전자 검사 시행</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity>
                            <Text>유전자 검사 미시행</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.bottomContainer}>

                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: StatusBar.currentHeight,
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    topContainer: {
        flex: 1,
        flexDirection: 'column',
        width: width,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor : 'black'
    },
    middleContainer: {
        flex: 2,
        width: width,
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor : 'red'
    },
    bottomContainer: {
        flex: 1,
        width: width,
        alignItems: 'center',
        backgroundColor : 'blue'
    },
    mainTxt: {
        color: '#044B77',
        fontSize: width * 0.07,
        fontFamily: 'NanumSquareRoundEB',
    },
    mainTxtB: {
        color: '#044B77',
        fontSize: width * 0.07,
    },
    subTxt: {
        color: '#B7B7B7',
        fontSize: width * 0.04,
        fontFamily: 'NanumSquareRoundEB',
    },
    subTxtB: {
        color: '#B7B7B7',
        fontSize: width * 0.04,
    },
});