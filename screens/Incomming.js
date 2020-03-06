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
                    <Image source={require('../public/images/Incomming_1_flower.png')} style={styles.flowerImage} />
                </View>
                <View style={styles.middleContainer}>
                    <Image source={require('../public/images/Incomming_1_girl.png')} style={styles.girlImage} />
                </View>
                <View style={styles.bottomContainer}>
                    <View style={styles.mainTxtContent}>
                        <Text style={styles.mainTxt}>소중한 피부, 당신만의 솔루션으로</Text>
                        <Text style={styles.mainTxt}>소중하게 관리해주세요</Text>
                    </View>
                    <View style={styles.subTxtContent}>
                        <Text style={styles.subTxt}>나도 몰랐던 나의 피부를 알려드리겠습니다!</Text>
                    </View>
                    <View style={styles.buttonContent}>
                        <TouchableOpacity style={styles.button} onPress={()=>this.props.navigation.navigate('Start')}>
                            <Text>다음</Text>
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
        backgroundColor: '#E6B8B8',
    },
    topContainer: {
        flex: 3,
        width: width,
    },
    middleContainer: {
        flex: 3,
        width: width,
        flexDirection: 'column',
        alignItems: 'flex-end',
    },
    bottomContainer: {
        flex: 3,
        width: width,
    },
    flowerImage: {
        width: width * 1,
        height: width * 0.496,
    },
    girlImage: {
        marginRight: 10,
        width: width * 0.7,
        height: width * 0.59,
    },
    mainTxtContent: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    mainTxt: {
        color: '#025158',
        fontSize: 20,
        fontWeight: '900',
    },
    subTxtContent: {
        flex: 1,
        marginTop: 15,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    buttonContent: {
        flex: 2,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    subTxt: {
        color: '#ffffff',
    },
    button: {
        backgroundColor: '#ffffff',
        width: width * 0.4,
        height: 30,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
    }
});