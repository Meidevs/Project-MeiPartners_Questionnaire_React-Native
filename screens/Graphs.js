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

    constructor(props) {
        super(props)

        var preData = this.props.navigation.getParam('resultsCodes');
        var allCate = this.props.navigation.getParam('codeAllCateArray');
        var cateData = this.props.navigation.getParam('cateSelectedCodes');
        var skinScore = this.props.navigation.getParam('skinTypeScore');

        this.state = {
            skinTypeScore: skinScore,
            listsNum: preData,
            cateArray: allCate,
            cates: cateData,
            itemCategories: [
                { code: 'cate0', name: '클렌징', txtSelection: styles.itemCategoriesTxt, uri: require('../public/itemimages/cleansing.png'), uriSelected: require('../public/itemimages/cleansing_s.png') },
                { code: 'cate1', name: '에센스', txtSelection: styles.itemCategoriesTxt, uri: require('../public/itemimages/skin.png'), uriSelected: require('../public/itemimages/skin_s.png') },
                { code: 'cate2', name: '앰플', txtSelection: styles.itemCategoriesTxt, uri: require('../public/itemimages/ample.png'), uriSelected: require('../public/itemimages/ample_s.png') },
                { code: 'cate3', name: '세럼', txtSelection: styles.itemCategoriesTxt, uri: require('../public/itemimages/serum.png'), uriSelected: require('../public/itemimages/serum_s.png') },
                { code: 'cate4', name: '크림', txtSelection: styles.itemCategoriesTxt, uri: require('../public/itemimages/cream.png'), uriSelected: require('../public/itemimages/cream_s.png') },
                { code: 'cate5', name: '마스크', txtSelection: styles.itemCategoriesTxt, uri: require('../public/itemimages/mask.png'), uriSelected: require('../public/itemimages/mask_s.png') },
                { code: 'cate6', name: '미스트', txtSelection: styles.itemCategoriesTxt, uri: require('../public/itemimages/mist.png'), uriSelected: require('../public/itemimages/mist_s.png') },
                { code: 'cate7', name: '필링 겔', txtSelection: styles.itemCategoriesTxt, uri: require('../public/itemimages/bb.png'), uriSelected: require('../public/itemimages/bb_s.png') },
            ],
        }
        var rawArray = [];
        for (var i = 0; i < this.state.cateArray.length; i++) {
            for (var j = 0; j < this.state.itemCategories.length; j++) {
                if (this.state.cateArray[i].code == this.state.itemCategories[j].code) {
                    rawArray.push(this.state.itemCategories[j])
                }
            }
        }
        this.state = {
            dataSource: rawArray
        }
        this.props.navigation.setParams({ cateData: cateData, preData: preData })
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
                    <View style={styles.skinTypeTitle}>
                        <Text style={styles.subTxt}>유형별</Text>
                        <Text style={styles.mainTxt}>나의 피부타입</Text>
                    </View>
                    <View style={styles.statusBarGroup}>
                        <View style={styles.statusBar}>
                            <Text>건조도</Text><View style={{ height: 35, width: width * 0.7, backgroundColor: '#B5E0FE', borderRadius: 20, }} />
                        </View>
                        <View style={styles.statusBar}>
                            <Text>민감도</Text><View style={{ height: 35, width: width * 0.7, backgroundColor: '#FFA2B4', borderRadius: 20, }} />
                        </View>
                        <View style={styles.statusBar}>
                            <Text>색   소</Text><View style={{ height: 35, width: width * 0.7, backgroundColor: '#ACF0CB', borderRadius: 20, }} />
                        </View>
                        <View style={styles.statusBar}>
                            <Text>탄   력</Text><View style={{ height: 35, width: width * 0.7, backgroundColor: '#D27DFF', borderRadius: 20, }} />
                        </View>
                    </View>
                </View>
                <View style={styles.bottomContainer}>

                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate(this.state.cates[0], { cateSelectedCodes: this.state.cateSelectedCodes, resultsCodes: this.state.resultsCodes, codeAllCateArray: this.state.codeAllCateArray })}>
                        <Text>다음</Text>
                    </TouchableOpacity>
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
        flex: 5,
    },
    skinTypeTitle: {
        flex: 1,
        flexDirection: 'column',
        paddingLeft: 20,
        paddingTop: 30,
    },
    subTxt: {
        color: '#B5B5B5',
        fontFamily: 'NanumSquareRoundB'
    },
    mainTxt: {
        color: '#FF7BAC',
        fontFamily: 'NanumSquareRoundB'
    },
    statusBarGroup: {
        flex: 3,
        flexDirection : 'column',
        alignItems : 'center'
    },
    statusBar : {
        paddingBottom : 15,
        paddingRight : 10,
        paddingLeft : 10,
        width : width * 0.95,
        flexDirection : 'row',
        justifyContent : 'space-between',
        alignItems : 'center'
    },
    bottomContainer: {
        flex: 5,

    },
    buttonContainer: {
        flex: 1,

    },
});