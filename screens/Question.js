import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    SafeAreaView,
    ScrollView,
    Dimensions,
    Image,
    ImageBackground
} from 'react-native';
import * as Font from 'expo-font';
const { width, height } = Dimensions.get('window');

export default class Question extends React.Component {

    constructor(props) {
        super(props)
        console.log('this.props.navigation.state', this.props.navigation.state)
        this.state = {
            fontLoaded: false,
            itemCategories: [
                { code: 'code1', name: '클렌징', txtSelection: styles.itemCategoriesTxt, uri: require('../public/itemimages/cleansing.png'), uriSelected: require('../public/itemimages/cleansing_s.png') },
                { code: 'code2', name: '토너', txtSelection: styles.itemCategoriesTxt, uri: require('../public/itemimages/skin.png'), uriSelected: require('../public/itemimages/skin_s.png') },
                { code: 'code3', name: '앰플', txtSelection: styles.itemCategoriesTxt, uri: require('../public/itemimages/ample.png'), uriSelected: require('../public/itemimages/ample_s.png') },
                { code: 'code4', name: '세럼 & 에센스', txtSelection: styles.itemCategoriesTxt, uri: require('../public/itemimages/serum.png'), uriSelected: require('../public/itemimages/serum_s.png') },
                { code: 'code5', name: '아이크림', txtSelection: styles.itemCategoriesTxt, uri: require('../public/itemimages/cream.png'), uriSelected: require('../public/itemimages/cream_s.png') },
                { code: 'code6', name: '크림', txtSelection: styles.itemCategoriesTxt, uri: require('../public/itemimages/cream.png'), uriSelected: require('../public/itemimages/cream_s.png') },
                { code: 'code7', name: '마스크', txtSelection: styles.itemCategoriesTxt, uri: require('../public/itemimages/mask.png'), uriSelected: require('../public/itemimages/mask_s.png') },
                { code: 'code8', name: '자외선차단제', txtSelection: styles.itemCategoriesTxt, uri: require('../public/itemimages/sunblock.png'), uriSelected: require('../public/itemimages/sunblock_s.png') },
                { code: 'code9', name: '블레미쉬 밤', txtSelection: styles.itemCategoriesTxt, uri: require('../public/itemimages/mist.png'), uriSelected: require('../public/itemimages/mist_s.png') },
                { code: 'code10', name: '특수 / 영양', txtSelection: styles.itemCategoriesTxt, uri: require('../public/itemimages/bb.png'), uriSelected: require('../public/itemimages/bb_s.png') },
                { code: 'code11', name: '옵션 1', txtSelection: styles.itemCategoriesTxt, uri: require('../public/itemimages/cleansing.png'), uriSelected: require('../public/itemimages/cleansing_s.png') },
                { code: 'code12', name: '옵션 2', txtSelection: styles.itemCategoriesTxt, uri: require('../public/itemimages/cleansing.png'), uriSelected: require('../public/itemimages/cleansing_s.png') },
            ]
        }
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
    categoryItemPress = (index) => {
        var data = this.state.itemCategories;
        data[index].isSelected = !data[index].isSelected;
        data[index].txtSelection = data[index].isSelected ? styles.itemCategoriesTxtPress : styles.itemCategoriesTxt;
        this.setState({
            itemCategories: data,
        });
    }

    nextQuestion = data => {
        var codeArray = new Array();
        data.map((data, i) => {
            if (data.isSelected == true) {
                codeArray.push(data.code)
            }
        })
        this.props.navigation.navigate('Loading', { codes: codeArray });
    }

    render() {
        const mapToCategories = data => {
            return data.map((data, i) => {
                return (
                    <TouchableOpacity style={styles.categoryItems} key={i} onPress={() => this.categoryItemPress(i)}>
                        {
                            data.isSelected ? (
                                <Image source={data.uriSelected} style={styles.cateImages}/>
                            ) : (
                                    <Image source={data.uri} style={styles.cateImages}/>
                                )
                        }
                        <Text style={data.txtSelection}>
                            {data.name}
                        </Text>
                    </TouchableOpacity>)
            })
        }
        return (
            <SafeAreaView style={styles.container}>
                <ScrollView style={styles.scrollView}>
                    <ImageBackground source={require('../public/images/cate_BG.png')} style={styles.cateBGImage}>
                        <View style={styles.topContainer}>
                            {
                                this.state.fontLoaded ? (
                                    <View style={styles.txtContent}>
                                        <Text style={styles.mainTxt}>"추천받고 싶은 유형을 선택해주세요"</Text>
                                        <Text style={styles.subTxt}>설문을 실시하고, 당신에게 맞는</Text>
                                        <Text style={styles.subTxt}>맞춤형 화장품을 준비해 드리겠습니다!</Text>
                                    </View>
                                ) : (
                                        <View style={styles.txtContent}>
                                            <Text style={styles.mainTxtB}>"추천받고 싶은 유형을 선택해주세요"</Text>
                                            <Text style={styles.subTxtB}>설문을 실시하고, 당신에게 맞는</Text>
                                            <Text style={styles.subTxtB}>맞춤형 화장품을 준비해 드리겠습니다!</Text>
                                        </View>
                                    )
                            }
                        </View>
                    </ImageBackground>
                    <View style={styles.bottomContainer}>
                        <View style={styles.categoryList}>
                            {mapToCategories(this.state.itemCategories)}
                        </View>
                        <TouchableOpacity style={styles.button}onPress={() => this.nextQuestion(this.state.itemCategories)}>
                            <Image source={require('../public/images/nextbt.png')} style={styles.nextButton} />
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </SafeAreaView >
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollView: {
        backgroundColor: '#C0C0C0',
    },
    topContainer: {
    },
    cateBGImage: {
        aspectRatio: 1.43,
    },
    bottomContainer: {
        width : width,
        backgroundColor: '#ffffff',
    },
    categoryList: {
        flexWrap : 'wrap',
        flexDirection: 'row',
    },
    categoryItems: {
        padding: 10,
        width: width * 0.25,
        justifyContent : 'center',
        alignItems : 'center'
    },
    itemCategoriesTxt: {
        textAlign: 'center',
        fontFamily: 'NanumSquareRoundEB',
        fontSize: width * 0.03,
        color: '#BFBFBF'
    },
    itemCategoriesTxtPress: {
        textAlign: 'center',
        fontFamily: 'NanumSquareRoundEB',
        fontSize: width * 0.03,
        color: '#044B77'
    },
    
    txtContent: {
        top : width * 0.07,
        flexDirection: 'column',
        alignItems: 'center',
    },
    mainTxt: {
        color: '#FD85B2',
        fontSize: width * 0.05,
        fontFamily: 'NanumSquareRoundEB',
        marginBottom : 10,
    },
    mainTxtB: {
        color: '#FD85B2',
        fontSize: width * 0.05,
        marginBottom : 10,
    },
    subTxt: {
        color: '#727272',
        fontSize: width * 0.04,
        fontFamily: 'NanumSquareRoundEB',
    },
    subTxtB: {
        color: '#727272',
        fontSize: width * 0.04,
        
    },
    cateImages : {
        height : width * 0.25,
        aspectRatio : 0.872
    },
    button: {
        width : width,
        alignItems: 'center',
        backgroundColor: '#FF7BAC',
    },
    nextButton : {
        height : width * 0.15,
        aspectRatio : 6.252,
    }
});