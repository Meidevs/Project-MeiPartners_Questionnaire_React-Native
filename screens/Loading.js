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
import * as Font from 'expo-font';
import { LinearGradient } from 'expo-linear-gradient';

// import { ProgressBar, Colors } from 'react-native-paper';

const { width, height } = Dimensions.get('window');


export default class Incomming extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            timer: 0,
            data: this.props.navigation.state.params,
            progressBar : 0,
        }
    }
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
    componentDidMount() {
        this.interval = setInterval(() => {
            const { timer } = this.state
            if (timer < 3) {
                this.setState(({ timer }) => ({
                    timer: timer + 1
                }))
            }
            var progressBar = (width * 0.60 * this.state.timer) / (3);
            this.setState({progressBar : progressBar });
            if (timer === 3) {
                clearInterval(this.interval)
                
                // this.state.data : 
                // cateSelectedCodes -> Category Code that I selected
                // codeAllCateArray -> After Answer the Questions, Response is Category Code & Category Name
                // resultsCodes -> After Answer the Questions, Code of Category Code & Category Name Set
                // skinTypeScore -> Score of the Answer
                this.props.navigation.setParams({data : '1'})
                this.props.navigation.navigate('Graphs', this.state.data)
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
                    <Image source={require('../public/images/lovu_icon.png')} style={styles.icon} />
                </View>
                <View style={styles.middleContainer}>
                    <View style={styles.movingImage}>
                        <Image source={require('../public/images/loading_anime.gif')} />
                    </View>
                    <View style={styles.progressBar}>
                        <View style={{ width: width * 0.1, alignItems: 'center' }}>
                            <Text style={styles.txt}>0</Text>
                        </View>
                        <View style={{ width: width * 0.6, }}>
                            {/* <ProgressBar progress={(this.state.timer - 3) / 3} color={'red'} style={{ height: 15, borderRadius: 10 }} /> */}
                            <LinearGradient colors={['#FFADAC', '#FF7BAC']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={{ width: this.state.progressBar, height: 15, borderRadius: 10, backgroundColor: '#000000' }} />
                        </View>
                        <View style={{ width: width * 0.1, alignItems: 'center' }}>
                            <Text style={styles.txt}>100</Text>
                        </View>
                    </View>
                    <View style={styles.subTxtContent}>
                        <Text style={styles.subTxt}>과연 당신의 피부 타입은?</Text>
                    </View>
                </View>
                <View style={styles.bottomContainer}>
                    <Text style={styles.txt}>LOADING</Text>
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
        flex: 1,
        width: width,
        flexDirection: 'column',
        alignItems: 'center',
    },
    movingImage: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    progressBar: {
        flexDirection: 'row',
        width: width * 0.6,
        justifyContent: 'center'
    },
    txt: {
        fontFamily: 'NanumSquareRoundB',
        color: '#FE7CAD'
    },
    subTxtContent: {
        margin: 10,
    },
    subTxt: {
        fontFamily: 'NanumSquareRoundB',
        color: '#707070'
    },
    bottomContainer: {
        flex: 1,
        width: width,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-end',
        bottom: 30,

    },
    icon: {
        flex: 1,
        resizeMode: 'contain',
        width: width * 0.4,
    },
});