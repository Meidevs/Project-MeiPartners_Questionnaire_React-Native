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
import { ProgressBar, Colors } from 'react-native-paper';
const { width, height } = Dimensions.get('window');

export default class Incomming extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            timer: 3,
            data: this.props.navigation.state.params.data
        }
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            const { timer } = this.state
            if (timer > 0) {
                this.setState(({ timer }) => ({
                    timer: timer - 1
                }))
            }

            if (timer === 0) {
                clearInterval(this.interval)
                this.props.navigation.navigate('Recommendation', this.state.data)
            }
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.interval)
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
                    <View style={styles.firstContent}>
                        <Image source={require('../public/images/moving_image.png')} style={styles.movingImage} />
                    </View>
                    <View style={styles.secondContent}>
                        <View>
                            <ProgressBar progress={(3 - this.state.timer) / 3} color={Colors.pink600} style={{ height: 12, borderWidth: 0.5, borderColor: '#707070', borderRadius: 10 }} />
                        </View>
                    </View>
                    <View style={styles.thirdContent}>

                    </View>
                </View>
                <View style={styles.bottomContainer}>
                    <View style={styles.iconContent}>
                        <View style={styles.iconBox}>
                            <Image source={require('../public/images/lovu_icon.png')} style={styles.lovuIcon} />
                        </View>
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
        backgroundColor: '#F2F2F2',
    },
    topContainer: {
        flex: 0.75,
        width: width,
    },
    middleContainer: {
        flex: 1,
        width: width,
        flexDirection: 'column'
    },
    firstContent: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    secondContent: {
        flex: 1,

    },
    bottomContainer: {
        flex: 1,
        width: width,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconContent: {
        flex: 1,
        width: '33%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
    },
    iconBox: {
        width: '100%',
        height: '34%',
    },
    lovuIcon: {
        flex: 1,
        resizeMode: 'cover',
        aspectRatio: 2.11,
    },
    movingImage: {
        flex: 1,
        resizeMode: 'cover',
        aspectRatio: 1.52,
    }
});