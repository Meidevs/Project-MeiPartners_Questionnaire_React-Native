import React from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
    Image,
    StatusBar
} from 'react-native';
const { width, height } = Dimensions.get('window');

export default class Incomming extends React.Component {

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
                    <View style={styles.mainTxtContent}>
                        <Text style={styles.mainTxt}>본인의 피부타입,제대로 알고 계신가요?</Text>
                        <Text>

                        </Text>
                        <Text style={styles.mainTxt}>지성? 건성? 복합성? 어떤 피부타입인지</Text>
                        <Text style={styles.mainTxt}>애매모호하진 않으신가요?</Text>
                        <Text>

                        </Text>
                        <Text style={styles.mainTxt}>아주 간단한 테스트를 통해 당신의 피부를</Text>
                        <Text style={styles.mainTxt}>알아보고 피부에 맞는 맞춤형 솔루션도</Text>
                        <Text style={styles.mainTxt}>알려드리도록 할게요</Text>
                    </View>
                </View>
                <View style={styles.middleContainer}>
                    <Image source={require('../public/images/Start_1_Riding.png')} style={styles.ridingImage} />
                </View>
                <View style={styles.bottomContainer}>
                    <View style={styles.startingTxtContent}>
                        <Text style={styles.startingTxt}>자, 그럼 이제 시작해볼까요?</Text>
                    </View>
                    <View style={styles.buttonContent}>
                        <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Main')}>
                            <Text style={{color : '#ffffff'}}>다음</Text>
                        </TouchableOpacity>
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
        backgroundColor: '#FAF3E3',
    },
    topContainer: {
        flex: 1,
        width: width,
    },
    middleContainer: {
        flex: 1,
        width: width,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bottomContainer: {
        flex: 0.75,
        width: width,
    },
    ridingImage: {
        flex: 1,
        resizeMode: 'cover',
        aspectRatio: 1.62,
    },
    mainTxtContent: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    mainTxt: {
        color: '#725B31',
        fontSize: width * 0.05,
        fontWeight: '900',
    },
    startingTxtContent: {
        flex: 1,
        marginTop: 15,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    startingTxt : {
        color : "#E86479",
        fontSize: width * 0.05,
        fontWeight : '900',
    },
    buttonContent: {
        flex: 2,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#FEE543',
        width: width * 0.4,
        height: 30,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
    }
});