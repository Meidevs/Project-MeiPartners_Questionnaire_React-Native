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
        var skinTypeScore = this.props.navigation.state.params.data.skinCode;
        this.state = {
            fontLoaded: false,
            itemCategories: [
                { code: 'cate0', name: '클렌징', txtSelection: styles.itemCategoriesTxt, uri: require('../public/itemimages/cleansing.png'), uriSelected: require('../public/itemimages/cleansing_s.png') },
                { code: 'cate1', name: '앰플', txtSelection: styles.itemCategoriesTxt, uri: require('../public/itemimages/ample.png'), uriSelected: require('../public/itemimages/ample_s.png') },
                { code: 'cate2', name: '에센스 & 세럼', txtSelection: styles.itemCategoriesTxt, uri: require('../public/itemimages/serum.png'), uriSelected: require('../public/itemimages/serum_s.png') },
                { code: 'cate3', name: '크림', txtSelection: styles.itemCategoriesTxt, uri: require('../public/itemimages/cream.png'), uriSelected: require('../public/itemimages/cream_s.png') },
                { code: 'cate4', name: '마스크', txtSelection: styles.itemCategoriesTxt, uri: require('../public/itemimages/mask.png'), uriSelected: require('../public/itemimages/mask_s.png') },
                { code: 'cate5', name: '미스트', txtSelection: styles.itemCategoriesTxt, uri: require('../public/itemimages/mist.png'), uriSelected: require('../public/itemimages/mist_s.png') },
                { code: 'cate6', name: '필링 겔', txtSelection: styles.itemCategoriesTxt, uri: require('../public/itemimages/bb.png'), uriSelected: require('../public/itemimages/bb_s.png') },
            ],
        }

        //Select Recommendation List, 16 Case 
        if (skinTypeScore[0] > 50) {
            if (skinTypeScore[1] > 50) {
                if (skinTypeScore[2] > 50) {
                    if (skinTypeScore[3] > 50) {
                        //건유,민유,색유,주유(100,100,100,100)a
                        this.state = {
                            dataSource: [
                                //클렌징
                                this.state.itemCategories[0],
                                //앰플
                                this.state.itemCategories[1],
                                //크림
                                this.state.itemCategories[3],
                                //미스트
                                this.state.itemCategories[5],
                            ],
                            itemsCode: '1',
                            skinTypeScore: skinTypeScore
                        }
                    } else {
                        //건유,민유,색유,주무(100,100,100,0)a
                        this.state = {
                            dataSource: [
                                //클렌징
                                this.state.itemCategories[0],
                                //앰플
                                this.state.itemCategories[1],
                                //크림
                                this.state.itemCategories[3],
                                //미스트
                                this.state.itemCategories[5],
                            ],
                            itemsCode: '2',
                            skinTypeScore: skinTypeScore
                        }
                    }
                } else {
                    if (skinTypeScore[3] > 50) {
                        //건유,민유,색무,주유(100,100,0,100)a
                        this.state = {
                            dataSource: [
                                //클렌징
                                this.state.itemCategories[0],
                                //앰플
                                this.state.itemCategories[1],
                                //크림
                                this.state.itemCategories[3],
                                //미스트
                                this.state.itemCategories[5],
                            ],
                            itemsCode: '3',
                            skinTypeScore: skinTypeScore
                        }
                    } else {
                        //건유,민유,색무,주무(100,100,0,0)  a
                        this.state = {
                            dataSource: [
                                //클렌징
                                this.state.itemCategories[0],
                                //앰플
                                this.state.itemCategories[1],
                                //크림
                                this.state.itemCategories[3],
                                //미스트
                                this.state.itemCategories[5],
                            ],
                            itemsCode: '4',
                            skinTypeScore: skinTypeScore
                        }
                    }
                }
            } else {
                if (skinTypeScore[2] > 50) {
                    if (skinTypeScore[3] > 50) {
                        //건유,민무,색유,주유(100,0,100,100)a
                        this.state = {
                            dataSource: [
                                //클렌징
                                this.state.itemCategories[0],
                                //앰플
                                this.state.itemCategories[1],
                                //크림
                                this.state.itemCategories[3],
                                //미스트
                                this.state.itemCategories[5],
                            ],
                            itemsCode: '5',
                            skinTypeScore: skinTypeScore
                        }
                    } else {
                        //건유,민무,색유,주무(100,0,100,0)a  
                        this.state = {
                            dataSource: [
                                //클렌징
                                this.state.itemCategories[0],
                                //앰플
                                this.state.itemCategories[1],
                                //크림
                                this.state.itemCategories[3],
                                //미스트
                                this.state.itemCategories[5],
                            ],
                            itemsCode: '6',
                            skinTypeScore: skinTypeScore
                        }
                    }
                } else {
                    if (skinTypeScore[3] > 50) {
                        //건유,민무,색무,주유(100,0,0,100)a
                        this.state = {
                            dataSource: [
                                //클렌징
                                this.state.itemCategories[0],
                                //앰플
                                this.state.itemCategories[1],
                                //크림
                                this.state.itemCategories[3],
                                //미스트
                                this.state.itemCategories[5],
                            ],
                            itemsCode: '7',
                            skinTypeScore: skinTypeScore
                        }
                    } else {
                        //건유,민무,색무,주무(100,0,0,0) a
                        this.state = {
                            dataSource: [
                                //클렌징
                                this.state.itemCategories[0],
                                //앰플
                                this.state.itemCategories[1],
                                //크림
                                this.state.itemCategories[3],
                                //미스트
                                this.state.itemCategories[5],
                            ],
                            itemsCode: '8',
                            skinTypeScore: skinTypeScore
                        }
                    }
                }
            }
        } else {
            if (skinTypeScore[1] > 50) {
                if (skinTypeScore[2] > 50) {
                    if (skinTypeScore[3] > 50) {
                        //건무,민유,색유,주유(0,100,100,100)
                        this.state = {
                            dataSource: [
                                //클렌징
                                this.state.itemCategories[0],
                                //앰플
                                this.state.itemCategories[1],
                                //세럼 & 에센스
                                this.state.itemCategories[2],
                                //크림
                                this.state.itemCategories[3],
                                //마스크
                                this.state.itemCategories[4],
                                //미스트
                                this.state.itemCategories[5],
                            ],
                            itemsCode: '9',
                            skinTypeScore: skinTypeScore
                        }
                    } else {
                        //건무,민유,색유,주무(0,100,100,0) a
                        this.state = {
                            dataSource: [
                                //클렌징
                                this.state.itemCategories[0],
                                //앰플
                                this.state.itemCategories[1],
                                //세럼 & 에센스
                                this.state.itemCategories[2],
                                //크림
                                this.state.itemCategories[3],
                                //마스크
                                this.state.itemCategories[4],
                                //미스트
                                this.state.itemCategories[5],
                            ],
                            itemsCode: '10',
                            skinTypeScore: skinTypeScore
                        }
                    }
                } else {
                    if (skinTypeScore[3] > 50) {
                        //건무,민유,색무,주유(0,100,0,100) a
                        this.state = {
                            dataSource: [
                                //클렌징
                                this.state.itemCategories[0],
                                //앰플
                                this.state.itemCategories[1],
                                //세럼 & 에센스
                                this.state.itemCategories[2],
                                //크림
                                this.state.itemCategories[3],
                                //마스크
                                this.state.itemCategories[4],
                                //미스트
                                this.state.itemCategories[5],
                            ],
                            itemsCode: '11',
                            skinTypeScore: skinTypeScore
                        }
                    } else {
                        //건무,민유,색무,주무(0,100,0,0)a
                        this.state = {
                            dataSource: [
                                //클렌징
                                this.state.itemCategories[0],
                                //세럼 & 에센스
                                this.state.itemCategories[2],
                                //크림
                                this.state.itemCategories[3],
                                //마스크
                                this.state.itemCategories[4],
                                //미스트
                                this.state.itemCategories[5],
                            ],
                            itemsCode: '12',
                            skinTypeScore: skinTypeScore
                        }
                    }
                }
            } else {
                if (skinTypeScore[2] > 50) {
                    if (skinTypeScore[3] > 50) {
                        //건무,민무,색유,주유(0,0,100,100)a
                        this.state = {
                            dataSource: [
                                //클렌징
                                this.state.itemCategories[0],
                                //앰플
                                this.state.itemCategories[1],
                                //세럼 & 에센스
                                this.state.itemCategories[2],
                                //크림
                                this.state.itemCategories[3],
                                //미스트
                                this.state.itemCategories[5],
                                //필링 겔
                                this.state.itemCategories[6],
                            ],
                            itemsCode: '13',
                            skinTypeScore: skinTypeScore
                        }
                    } else {
                        //건무,민무,색유,주무(0,0,100,0)a
                        this.state = {
                            dataSource: [
                                //클렌징
                                this.state.itemCategories[0],
                                //앰플
                                this.state.itemCategories[1],
                                //세럼 & 에센스
                                this.state.itemCategories[2],
                                //크림
                                this.state.itemCategories[3],
                                //미스트
                                this.state.itemCategories[5],
                                //필링 겔
                                this.state.itemCategories[6],

                            ],
                            itemsCode: '14',
                            skinTypeScore: skinTypeScore
                        }
                    }
                } else {
                    if (skinTypeScore[3] > 50) {
                        //건무,민무,색무,주유(0,0,0,100)a
                        this.state = {
                            dataSource: [
                                //클렌징
                                this.state.itemCategories[0],
                                //앰플
                                this.state.itemCategories[1],
                                //세럼 & 에센스
                                this.state.itemCategories[2],
                                //크림
                                this.state.itemCategories[3],
                                //미스트
                                this.state.itemCategories[5],
                                //필링 겔
                                this.state.itemCategories[6],
                            ],
                            itemsCode: '15',
                            skinTypeScore: skinTypeScore
                        }
                    } else {
                        //건무,민무,색무,주무(0,0,0,0)
                        this.state = {
                            dataSource: [
                                //클렌징
                                this.state.itemCategories[0],
                                //세럼 & 에센스
                                this.state.itemCategories[2],
                                //크림
                                this.state.itemCategories[3],
                                //미스트
                                this.state.itemCategories[5],
                                //필링 겔
                                this.state.itemCategories[6],
                            ],
                            itemsCode: '16',
                            skinTypeScore: skinTypeScore
                        }
                    }
                }
            }
        }
    }

    categoryItemPress = (index) => {
        var data = this.state.dataSource;
        data[index].isSelected = !data[index].isSelected;
        data[index].txtSelection = data[index].isSelected ? styles.itemCategoriesTxtPress : styles.itemCategoriesTxt;

        for (var i = 0; i < index; i++) {
            if (data[i].isSelected == true) {
                data[i].isSelected = !data[i].isSelected;
                data[i].txtSelection = data[i].isSelected ? styles.itemCategoriesTxtPress : styles.itemCategoriesTxt;

            }
        }
        for (var i = index + 1; i < data.length; i++) {
            if (data[i].isSelected == true) {
                data[i].isSelected = !data[i].isSelected;
                data[i].txtSelection = data[i].isSelected ? styles.itemCategoriesTxtPress : styles.itemCategoriesTxt;
            }
        }
        this.setState({
            dataSource: data,
        });
    }

    nextQuestion = data => {
        var expArray = [];
        for (var x = 0; x < data.length; x++) {
            if (this.state.dataSource[x].isSelected == true) {
                expArray.push(true)
            }
        }
        if (expArray[0] == undefined) {
            alert('카테고리를 선택해주세요')
        } else {
            var codeSelectedArray = new Array();
            var codeAllCateArray = new Array();
            data.map((data, i) => {
                if (data.isSelected == true) {
                    codeSelectedArray.push(data.code)
                }
            })
            data.map((data, i) => {
                codeAllCateArray.push({ name: data.name, code: data.code })
            })
            //codeAllCateArray : Array of Cate Code Based On Questionnaire Result, cateSelectedCodes : Selected Cate Code (One of codeAllCateArray), resultsCodes : Indicate Items List (After Complete the Questionnaire, Getting Items List ), SkinTypeScore : Total Score of Questions
            this.props.navigation.navigate('Loading', { codeAllCateArray: codeAllCateArray, cateSelectedCodes: codeSelectedArray, resultsCodes: this.state.itemsCode, skinTypeScore: this.state.skinTypeScore });
        }
    }

    render() {
        const mapToCategories = data => {
            return data.map((data, i) => {
                return (
                    <TouchableOpacity style={styles.categoryItems} key={i} onPress={() => this.categoryItemPress(i)}>
                        {
                            data.isSelected ? (
                                <Image source={data.uriSelected} style={styles.cateImages} />
                            ) : (
                                    <Image source={data.uri} style={styles.cateImages} />
                                )
                        }
                        <Text style={data.txtSelection}>
                            {data.name}
                        </Text>
                    </TouchableOpacity>
                )
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
                            {mapToCategories(this.state.dataSource)}
                        </View>
                        <TouchableOpacity style={styles.button} onPress={() => this.nextQuestion(this.state.dataSource)}>
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
        width: width,
        backgroundColor: '#ffffff',
    },
    categoryList: {
        flexWrap: 'wrap',
        flexDirection: 'row',
    },
    categoryItems: {
        padding: 10,
        width: width * 0.25,
        justifyContent: 'center',
        alignItems: 'center'
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
        top: width * 0.07,
        flexDirection: 'column',
        alignItems: 'center',
    },
    mainTxt: {
        color: '#FD85B2',
        fontSize: width * 0.05,
        fontFamily: 'NanumSquareRoundEB',
        marginBottom: 10,
    },
    mainTxtB: {
        color: '#FD85B2',
        fontSize: width * 0.05,
        marginBottom: 10,
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
    cateImages: {
        height: width * 0.25,
        aspectRatio: 0.872
    },
    button: {
        width: width,
        alignItems: 'center',
        backgroundColor: '#FF7BAC',
    },
    nextButton: {
        height: width * 0.15,
        aspectRatio: 6.252,
    }
});