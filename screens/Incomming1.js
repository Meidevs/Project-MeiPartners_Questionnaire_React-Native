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
const { 
    width,
    height 
} = Dimensions.get('window');

// const scale = width / 320;

// console.log(width)


export default class Incomming1 extends React.Component {
    // While every element in the view is rendered, fontLoaded is false;
    // After rendering is over, new font is applied to text element in the view;
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
                    <Image source={require('../public/images/lovu_icon.png')} style={styles.icon} />
                </View>
                <View style={styles.middleContainer}>
                    <View style={styles.imageBox}>
                        <Image source={require('../public/images/pop1_BG_1.png')} style={styles.pop1_BG} />
                    </View>
                </View>
                <View style={styles.bottomContainer}>
                    {
                        this.state.fontLoaded ? (
                            <View style={styles.txtContent}>
                                <Text style={styles.mainTxt}>환영합니다!</Text>
                                <Text style={styles.subTxt}>소중한 피부, 당신만의 솔루션으로</Text>
                                <Text style={styles.subTxt}>소중하게 관리해주세요</Text>
                            </View>
                        ) : (
                                <View style={styles.txtContent}>
                                    <Text style={styles.mainTxtB}>환영합니다!</Text>
                                    <Text style={styles.subTxtB}>소중한 피부, 당신만의 솔루션으로</Text>
                                    <Text style={styles.subTxtB}>소중하게 관리해주세요</Text>
                                </View>
                            )
                    }
                    <View style={styles.buttonContent}>
                        <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Incomming2')}>
                            <Image source={require('../public/images/skipbt.png')} style={styles.buttonImage} />
                        </TouchableOpacity>
                        <Image source={require('../public/images/pg_1.png')} style={styles.pgLink} />
                    </View>
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
        alignItems: 'center'
    },
    middleContainer: {
        flex: 3,
        width: width,
        flexDirection: 'column',
        alignItems: 'center',
    },
    imageBox: {
        flex: 1,
        width: width * 0.8,
        height: width * 0.7,
        flexDirection: 'column',
        alignItems: 'center',
    },
    bottomContainer: {
        flex: 2,
        width: width,
        alignItems: 'center',
    },
    icon: {
        flex: 1,
        resizeMode: 'contain',
        width: width * 0.4,
    },
    pop1_BG: {
        flex: 1,
        resizeMode: 'contain',
        width: width * 0.5
    },
    txtContent: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    mainTxt: {
        color: '#044B77',
        fontSize: width * 0.07,
        // fontSize : scale * 20,
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
    buttonContent: {
        flex: 2,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    button: {
        width: width * 0.4,
        height: width * 0.2,
        justifyContent: 'center',
        alignItems: 'center',

    },
    buttonImage: {
        width: width * 0.4,
        resizeMode: 'contain',
    },
    pgLink: {
        width: width * 0.1,
        height : width  * 0.1,
        resizeMode: 'contain',
    }
});