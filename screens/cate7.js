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

export default class Incomming1 extends React.Component {
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
    constructor (props) {
        super(props)
        console.log(this.props.navigation.getParam('data'))
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
                <Text>Cate7</Text>
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