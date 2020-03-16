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
    FlatList,
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

    constructor(props) {
        super(props)
        console.log(this.props.navigation.getParam('data'))
        var datas = this.props.navigation.getParam('data')
        this.state = {
            index: 0,
            length: datas.length,
            dataSource: [
                { manual: datas[0].manual },
                { submanual: datas[0].submanual },
            ],
            uri: datas[0].uri,
            item: datas[0].item,
        }
    }

    renderItem = data => {
        return (
            <View style={styles.txtDesign}>
                <Text style={styles.manualTxt}>{data.item.manual}</Text>
                <View style={styles.manualBorder}>
                    <Text style={styles.manualBorderTxt}>SOLUTION</Text>
                </View>
                <Text style={styles.submanualTxt}>{data.item.submanual}</Text>
                {this.componentJSX()}
            </View>
        )
    }
    nextButton() {

    }
    goBack() {

    }
    componentJSX() {
        if (this.state.length != 1 && this.state.index == 0) {
            return (
                <View>
                    <TouchableOpacity onPress={this.nextButton}>
                        <Text>다음</Text>
                    </TouchableOpacity>
                </View>
            )
        } else if (this.state.length != 1 && this.state.index == 1) {
            <View>
                <TouchableOpacity onPress={this.goBack}>
                    <Text>이전</Text>
                </TouchableOpacity>
            </View>
        } else {
            <View>

            </View>
        }
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
                <View style={styles.container} >
                    <View style={styles.sliderContent}>
                        <View style={styles.sliderTop}>
                            <View style={styles.sliderImage}>
                                <View style={styles.itemImages}>
                                    <Image source={this.state.uri} style={{ flex: 1, aspectRatio: 1.2, resizeMode: 'contain' }} />
                                </View>
                            </View>
                        </View>
                        <View style={styles.sliderBottom}>
                            <View style={styles.sliderName}>
                                <View style={styles.members}>
                                </View>
                                <Text style={styles.text}>{this.state.item}</Text>
                            </View>
                            <View style={{ borderWidth: 0.8, borderColor: '#BFBFBF', width: width * 0.9, alignSelf: 'center' }} />
                            <View>
                                <FlatList
                                    data={this.state.dataSource}
                                    renderItem={item => this.renderItem(item)}
                                    keyExtractor={item => item.code}
                                />
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        marginTop: StatusBar.currentHeight,
    },
    sliderContent: {
        flex: 1,
    },
    slide: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'transparent'
    },
    sliderTop: {
        backgroundColor: '#F4F4F4',
        flex: 1,
    },
    sliderBottom: {
        backgroundColor: '#FFFFFF',
        flex: 2,
    },
    members: {
        flexDirection: 'row'
    },
    mb: {
        fontFamily: 'NanumSquareRoundB',
        color: '#737373'
    },
    dc: {
        fontFamily: 'NanumSquareRoundB',
        color: '#FE7CAD'
    },
    sliderImage: {
        flex: 8,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    itemImages: {
        width: width * 0.8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    sliderName: {
        padding: 20,
    },
    image: {
        width,
        flex: 1
    },
    txtDesign: {
        padding: 20,
    },
    manualTxt: {
        fontSize: width * 0.04,
        lineHeight: 20,
        color: '#737373'
    },
    manualBorder: {
        paddingTop: 10,
        paddingBottom: 10,
        flexDirection: 'row',
        alignItems: 'flex-start'
    },
    manualBorderTxt: {
        fontFamily: 'NanumSquareRoundB',
        color: '#FE7CAD'
    },
    submanualTxt: {
        fontSize: width * 0.04,
        lineHeight: 20
    },
    text: {
        fontSize: width * 0.05,
        fontFamily: 'NanumSquareRoundEB',
        color: '#444444'
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
});