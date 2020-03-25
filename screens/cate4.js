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

export default class cate1 extends React.Component {
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
        var datas = this.props.navigation.getParam('data')
        this.state = {
            rawData: datas,
            index: 0,
            length: datas.length,
            dataSource: [
                { manual: datas[0].manual },
                { submanual: datas[0].submanual },
            ],
            uri: datas[0].uri,
            item: datas[0].item,
            rectxt: datas[0].rectxt
        }
    }

    renderItem = data => {
        if (this.state.length != 1 && this.state.index == 0) {
            return (
                <View style={styles.txtDesign}>
                    <View>
                        <Text style={styles.manualTxt}>{data.item[0].manual}</Text>
                    </View>
                    <View style={styles.manualBorder}>
                        <Text style={styles.manualBorderTxt}>SOLUTION</Text>
                    </View>
                    <View>
                        <Text style={styles.submanualTxt}>{data.item[1].submanual}</Text>
                    </View>
                </View>
            )
        } else if (this.state.length != 1 && this.state.index == 1) {
            return (
                <View style={styles.txtDesign}>
                    <View>
                        <Text style={styles.manualTxt}>{data.item[0].manual}</Text>
                    </View>
                    <View style={styles.manualBorder}>
                        <Text style={styles.manualBorderTxt}>SOLUTION</Text>
                    </View>
                    <View>
                        <Text style={styles.submanualTxt}>{data.item[1].submanual}</Text>
                    </View>
                </View>
            )
        } else {
            return (
                <View style={styles.txtDesign}>
                    <View>
                        <Text style={styles.manualTxt}>{data.item[0].manual}</Text>
                    </View>
                    <View style={styles.manualBorder}>
                        <Text style={styles.manualBorderTxt}>SOLUTION</Text>
                    </View>
                    <View>
                        <Text style={styles.submanualTxt}>{data.item[1].submanual}</Text>
                    </View>
                </View>
            )
        }
    }
    nextButton = data => {
        this.setState({
            index: 1,
            length: data.length,
            dataSource: [
                { manual: data[1].manual },
                { submanual: data[1].submanual },
                { rectxt: data[1].rectxt },

            ],
            uri: data[1].uri,
            item: data[1].item,
            rectxt: data[1].rectxt
        })
    }
    goBack(data) {
        this.setState({
            index: 0,
            length: data.length,
            dataSource: [
                { manual: data[0].manual },
                { submanual: data[0].submanual },
            ],
            uri: data[0].uri,
            item: data[0].item,
            rectxt: data[0].rectxt
        })
    }
    componentJSX() {
        if (this.state.length != 1 && this.state.index == 0) {
            return (
                <View style={styles.buttonContainer}>
                    <TouchableOpacity onPress={() => this.nextButton(this.state.rawData)} style={styles.buttonStyle}>
                        <Text style={styles.buttonTxtStyle}>다음</Text>
                    </TouchableOpacity>
                </View>
            )
        } else if (this.state.length != 1 && this.state.index == 1) {
            return (
                <View style={styles.buttonContainer}>
                    <TouchableOpacity onPress={() => this.goBack(this.state.rawData)} style={styles.buttonStyle}>
                        <Text style={styles.buttonTxtStyle}>이전</Text>
                    </TouchableOpacity>
                </View>
            )
        } else {
            return (
                <View style={styles.buttonContainer}>

                </View>
            )
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
                <View style={styles.topContainer} >
                    <View style={styles.imageContainer}>
                        <Image source={this.state.uri} style={{ flex: 1, aspectRatio: 1.2, resizeMode: 'contain' }} />
                    </View>
                </View>
                <View style={styles.bottomContainer} >
                    <View style={styles.titleContainer}>
                        <Text style={styles.titleTxt}>{this.state.item}</Text>
                        <Text style={styles.recTxt}>{this.state.rectxt}</Text>

                    </View>
                    <View style={{ borderWidth: 0.8, borderColor: '#BFBFBF', width: width * 0.9, alignSelf: 'center' }} />
                    <View style={styles.flatlistContainer}>
                        <FlatList
                            data={[this.state.dataSource]}
                            renderItem={item => this.renderItem(item)}
                            keyExtractor={item => item.manual}
                        />
                    </View>
                    {this.componentJSX()}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    topContainer: {
        flex: 2,
    },
    imageContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F4F4F4'
    },
    bottomContainer: {
        flex: 3,
    },
    titleContainer: {
        flex: 1,
        padding: 20,
    },
    titleTxt: {
        fontSize: width * 0.05,
        fontFamily: 'NanumSquareRoundEB',
        color: '#444444'
    },
    recTxt : {
        fontFamily : 'NanumSquareRoundB',
        fontSize: width * 0.03,
        color: '#737373'
    },
    flatlistContainer : {
        flex : 10,
    },
    buttonContainer : {
        flex : 2
    },
    buttonStyle : {
        flex : 1,
        backgroundColor : '#FF7BAC',
        justifyContent : 'center',
        alignItems : 'center'
    },
    buttonTxtStyle : {
        textAlign : 'center',
        fontFamily: 'NanumSquareRoundEB',
        fontSize : width * 0.04,
        color : '#FFFFFF'
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
        color: '#FE7CAD',
    },
    submanualTxt: {
        fontSize: width * 0.04,
        lineHeight: 20,
        textAlign: 'justify'
    },
});