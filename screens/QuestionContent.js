import React, { Children } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Image,
    Dimensions,
} from 'react-native';
import * as Font from 'expo-font';
import { LinearGradient } from 'expo-linear-gradient';

const { width, height } = Dimensions.get('window');

export default class QuestionContent extends React.Component {

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
        const response = await fetch('http://localhost:3000', {
            method: 'GET',
            credentials : 'include',
            headers : {
                'Content-Type' : 'application/json',
            },
        })

        const json = await response.json();
        if (response.ok) {
            console.log(json)
        }
        this.setState({ fontLoaded: true })
    }
    constructor(props) {
        super(props)
        this.props.navigation.setParams({ increaseCount: 1 });
        this.props.navigation.setParams({ progressBar: 0 });

        var dataPackage = {
            package: [
                {
                    skinCode: 'skin1',
                    skinType: '건성 타입',
                    questions:
                        [
                            { type: "skin1", subtxt: '항목을 선택하세요.', maintxt: 'Q. 세안 후 피부 당김 정도는?', question1: '심하게 당긴다', question2: '약간 당긴다', question3: '안 당긴다' },
                            { type: "skin1", subtxt: '항목을 선택하세요.', maintxt: 'Q. 로션이나 크림을 바른 후에 피부 상태는?', question1: '당긴다', question2: '보통이다', question3: '촉촉하다' },
                            { type: "skin1", subtxt: '항목을 선택하세요.', maintxt: 'Q. 모공의 크기는?', question1: '작다', question2: '보통이다', question3: '크다' },
                            { type: "skin1", subtxt: '항목을 선택하세요.', maintxt: 'Q. 얼굴에 주름이 있나요?', question1: '주름이 있다', question2: '약간 있다', question3: '없다' },
                            { type: "skin1", subtxt: '항목을 선택하세요.', maintxt: 'Q. 오후의 피부 상태는 어떠한가요?', question1: '각질이 떠있다', question2: '그대로다', question3: '번들거린다' },
                        ]
                },
                {
                    skinCode: 'skin2',
                    skinType: '민감성 타입',
                    questions:
                        [
                            { type: "skin2", subtxt: '항목을 선택하세요.', maintxt: 'Q. 조금만 자극이 있어도 트러블이 나나요?', question1: '항상 난다', question2: '거의 안 난다', question3: '전혀 안 난다' },
                            { type: "skin2", subtxt: '항목을 선택하세요.', maintxt: 'Q. 얼굴이 쉽게 붉어지나요?', question1: '자주 붉어진다', question2: '약간 붉어진다', question3: '거의 안 붉어진다' },
                            { type: "skin2", subtxt: '항목을 선택하세요.', maintxt: 'Q. 자외선을 받으면 가려운가요?', question1: '항상 가렵다', question2: '때때로 가려울 때도 있다', question3: '가렵지 않다' },
                            { type: "skin2", subtxt: '항목을 선택하세요.', maintxt: 'Q. 상처가 나면 흉터가 오래 가나요?', question1: '재생이 느리다', question2: '보통이다', question3: '재생이 남들보다 빠르다' },
                            { type: "skin2", subtxt: '항목을 선택하세요.', maintxt: 'Q. 자외선 차단제를 바르면 피부에 발진이나 눈 따가움이 있나요?', question1: '심하다', question2: '한번씩 있다', question3: '없다' },
                        ]
                },
                {
                    skinCode: 'skin3',
                    skinType: '색소 성 타입',
                    questions:
                        [
                            { type: "skin3", subtxt: '항목을 선택하세요.', maintxt: 'Q. 얼굴에 색소 침착이 있나요?', question1: '많다', question2: '약간 생긴다', question3: '없다' },
                            { type: "skin3", subtxt: '항목을 선택하세요.', maintxt: 'Q. 자외선에 노출이 많이 되었을 때 피부의 변화가 있나요?', question1: '피부색이 짙어졌다', question2: '약간 짙어졌다', question3: '약간 붉어졌다' },
                            { type: "skin3", subtxt: '항목을 선택하세요.', maintxt: 'Q. 과거에 얼굴 기미로 진단 받은 적이 있나요?', question1: '있다', question2: '한번 있었지만 소멸되었다', question3: '없다' },
                            { type: "skin3", subtxt: '항목을 선택하세요.', maintxt: 'Q. 상처나 여드름이 없어지지 않고 색소침착이 되는 편인가요?', question1: '항상 그렇다', question2: '때때로 그렇다', question3: '전혀 아니다' },
                            { type: "skin3", subtxt: '항목을 선택하세요.', maintxt: 'Q. 지속적으로 자신의 피부를 태운 경험이 있었나요? (야외 활동 포함)', question1: '5 - 10년 초과', question2: '1 - 5년', question3: '없다' },
                        ]
                },
                {
                    skinCode: 'skin4',
                    skinType: '탄력 주름 타입',
                    questions:
                        [
                            { type: "skin4", subtxt: '항목을 선택하세요.', maintxt: 'Q. 자신은 얼마나 나이 들어 보인다고 생각하나요??', question1: '5년 이상 늙어보인다', question2: '나이대로 보인다', question3: '1 - 5년 젊어보인다' },
                            { type: "skin4", subtxt: '항목을 선택하세요.', maintxt: 'Q. 예전과 비교해 피부가 얇아졌나요?', question1: '점점 더 얇아지는 것 같다', question2: '원래 얇다', question3: '거의 그대로다' },
                            { type: "skin4", subtxt: '항목을 선택하세요.', maintxt: 'Q. 얼굴을 손가락으로 눌렀을 때 피부 상태는 어떠한가요?', question1: '말랑말랑하다', question2: '보통이다', question3: '탱탱하다' },
                            { type: "skin4", subtxt: '항목을 선택하세요.', maintxt: 'Q. 눈가 혹은 팔자 주름의 깊이는 어떤가요?', question1: '둘 다 깊다', question2: '하나만 깊다', question3: '주름이 거의 없다' },
                            { type: "skin4", subtxt: '항목을 선택하세요.', maintxt: 'Q. 예전과 비교해서 얼굴 라인이 변한 것 같나요?', question1: '많이 변했다', question2: '조금 변한 것 같다', question3: '거의 그대로다' },
                        ]
                }
            ]
        };

        var array = [];
        var data = dataPackage.package;
        //Put Question List to Array, Questions In The Package which was defined at Constructor
        for (var i = 0; i < data.length; i++) {
            for (var j = 0; j < data[i].questions.length; j++) {
                array.push(data[i].questions[j])
            }
        }
        //Define All Question List & Initial Question
        this.state = {
            skin1: 0,
            skin2: 0,
            skin3: 0,
            skin4: 0,
            skin5: 0,
            subTxt: array[0].subtxt,
            mainTxt: array[0].maintxt,
            dataSource: [
                { id: array[0].question1, selectedBackground: styles.contentBorder, selectedTxt: styles.contentItem },
                { id: array[0].question2, selectedBackground: styles.contentBorder, selectedTxt: styles.contentItem },
                { id: array[0].question3, selectedBackground: styles.contentBorder, selectedTxt: styles.contentItem },
            ],
            type: array[0].type,
            contents: array
        }
    }

    onPress = index => {
        //Element Design Change Based On isSelect value
        let curData = this.state.dataSource;
        curData[index].isSelect = !curData[index].isSelect;
        curData[index].selectedBackground = curData[index].isSelect ?
            styles.contentBorderPress : styles.contentBorder;
        curData[index].selectedTxt = curData[index].isSelect ?
            styles.contentItemPress : styles.contentItem;

        //If There are Duplicates, then Turn the Light off the Previous One
        for (var i = 0; i < index; i++) {
            if (curData[i].isSelect == true) {
                curData[i].isSelect = !curData[i].isSelect;
                curData[i].selectedBackground = curData[i].isSelect ? styles.contentBorderPress : styles.contentBorder;
                curData[i].selectedTxt = curData[i].isSelect ? styles.contentItemPress : styles.contentItem;
            }
        }
        for (var i = index + 1; i < curData.length; i++) {
            if (curData[i].isSelect == true) {
                curData[i].isSelect = !curData[i].isSelect;
                curData[i].selectedBackground = curData[i].isSelect ? styles.contentBorderPress : styles.contentBorder;
                curData[i].selectedTxt = curData[i].isSelect ? styles.contentItemPress : styles.contentItem;
            }
        }

        //Define Changes
        this.setState({
            dataSource: curData,
        });
    }

    nextPress = () => {
        let j;
        let arrayData = this.state.contents;
        let nextCount = this.props.navigation.getParam('increaseCount');
        let curCount = nextCount - 1;
        let nextData = nextCount + 1;

        //Add Score To Skin Code About the Selected One
        for (let i = 0; i < this.state.dataSource.length; i++) {
            if (this.state.dataSource[i].isSelect == true) {
                j = 2 - i;
                if (i == 0) {
                    j = 20;
                } else if (i == 1) {
                    j = 5;
                } else if (i == 2) {
                    j = 2;
                }

                if (arrayData[curCount].type == 'skin1') {
                    this.state.skin1 = this.state.skin1 + j;
                } else if (arrayData[curCount].type == 'skin2') {
                    this.state.skin2 = this.state.skin2 + j;
                } else if (arrayData[curCount].type == 'skin3') {
                    this.state.skin3 = this.state.skin3 + j;
                } else if (arrayData[curCount].type == 'skin4') {
                    this.state.skin4 = this.state.skin4 + j;
                }
            }
        }
        let data = {
            skinCode: [
                { code: 'skin1', skin: this.state.skin1 },
                { code: 'skin2', skin: this.state.skin2 },
                { code: 'skin3', skin: this.state.skin3 },
                { code: 'skin4', skin: this.state.skin4 },
            ]
        }

        if (nextData == 21) {
            this.final(data);
            this.props.navigation.setParams({ increaseCount: 20 });
        } else {
            //Define Changes
            this.props.navigation.setParams({ increaseCount: nextData });
            var progressBarLength = (width * 0.40 * nextCount) / (20);
            this.props.navigation.setParams({ progressBar: progressBarLength })
            this.setState({
                subTxt: arrayData[nextCount].subtxt,
                mainTxt: arrayData[nextCount].maintxt,
                dataSource: [
                    { id: arrayData[nextCount].question1, selectedBackground: styles.contentBorder, selectedTxt: styles.contentItem },
                    { id: arrayData[nextCount].question2, selectedBackground: styles.contentBorder, selectedTxt: styles.contentItem },
                    { id: arrayData[nextCount].question3, selectedBackground: styles.contentBorder, selectedTxt: styles.contentItem },
                ]
            });
        }
    }

    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: () => null,
            headerRight: () =>
                <View style={styles.headerStyle}>
                    <LinearGradient colors={['#FFADAC', '#FF7BAC']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={{ width: navigation.getParam('progressBar'), height: 23, borderRadius: 10, backgroundColor: '#000000' }} />
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end' }}>
                        <Text style={{ fontSize: width * 0.03, color: '#707070', fontFamily: 'NanumSquareRoundB', marginRight : 7 }}>{navigation.getParam('increaseCount')} / 20 응답진행률</Text>
                    </View>
                </View>,
        }
    }
    componentJSX() {
        var data = this.props.navigation.getParam('increaseCount');
        if (data <= 3) {
            return (
                <View style={styles.topContainer}>
                    <Image source={require('../public/images/backimage/1.png')} style={styles.backgroundImages} />
                </View>
            )
        } else if (data > 3 && data <= 5) {
            return (
                <View style={styles.topContainer}>
                    <Image source={require('../public/images/backimage/2.png')} style={styles.backgroundImages} />
                </View>
            )
        } else if (data > 5 && data <= 8) {
            return (
                <View style={styles.topContainer}>
                    <Image source={require('../public/images/backimage/3.png')} style={styles.backgroundImages} />
                </View>
            )
        } else if (data > 8 && data <= 10) {
            return (
                <View style={styles.topContainer}>
                    <Image source={require('../public/images/backimage/4.png')} style={styles.backgroundImages} />
                </View>
            )
        } else if (data > 10 && data <= 12) {
            return (
                <View style={styles.topContainer}>
                    <Image source={require('../public/images/backimage/5.png')} style={styles.backgroundImages} />
                </View>
            )
        } else if (data > 12 && data <= 14) {
            return (
                <View style={styles.topContainer}>
                    <Image source={require('../public/images/backimage/6.png')} style={styles.backgroundImages} />
                </View>
            )
        } else if (data > 14 && data <= 16) {
            return (
                <View style={styles.topContainer}>
                    <Image source={require('../public/images/backimage/7.png')} style={styles.backgroundImages} />
                </View>
            )
        } else if (data > 16 && data <= 18) {
            return (
                <View style={styles.topContainer}>
                    <Image source={require('../public/images/backimage/8.png')} style={styles.backgroundImages} />
                </View>
            )
        } else {
            return (
                <View style={styles.topContainer}>
                    <Image source={require('../public/images/backimage/9.png')} style={styles.backgroundImages} />
                </View>
            )
        }
    }
    render() {
        const mapToQuestions = data => {
            return data.map((data, i) => {
                return (
                    <TouchableOpacity style={data.selectedBackground} key={i} onPress={() => this.onPress(i)}>
                        <Text style={data.selectedTxt}>
                            {data.id}
                        </Text>
                    </TouchableOpacity>
                )
            })
        }
        return (
            <View style={styles.container}>

                {this.componentJSX()}
                {
                    this.state.fontLoaded ? (
                        <View style={styles.questionContainer}>

                            <View style={styles.subQuestion}>
                                <Text style={styles.subTxt}>{this.state.subTxt}</Text>
                            </View>
                            <View style={styles.mainQuestion}>
                                <Text style={styles.mainTxt}>{this.state.mainTxt}</Text>
                            </View>
                        </View>

                    ) : (
                            <View style={styles.questionContainer}>

                                <View style={styles.subQuestion}>
                                    <Text style={styles.subTxtB}>{this.state.subTxt}</Text>
                                </View>
                                <View style={styles.mainQuestion}>
                                    <Text style={styles.mainTxtB}>{this.state.mainTxt}</Text>
                                </View>
                            </View>

                        )
                }
                <View style={styles.selectionContainer}>
                    {mapToQuestions(this.state.dataSource)}

                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button} onPress={this.nextPress}>
                        <Image source={require('../public/images/nextbt.png')} style={styles.nextButton} />
                    </TouchableOpacity>
                </View>
            </View >
        );
    }

    final = data => {
        var scoreArray = [];
        data.skinCode.map((data) => {
            scoreArray.push(data.skin)
        })
        this.props.navigation.navigate('Question', {
            data: {
                skinCode: scoreArray
            }
        })
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    topContainer: {
        flex: 2,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center'
    },
    backgroundImages: {
        flex: 1,
        width : width,
        justifyContent: 'center',
        alignItems: 'center',
    },
    questionContainer: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center'

    },
    subQuestion: {
        width: width * 0.8,
    },
    mainQuestion: {
        width: width * 0.8,
    },
    selectionContainer: {
        flex: 3,
    },
    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    contentBorder: {
        backgroundColor: '#FFF9FB',
        borderTopWidth: 0.5,
        borderColor: '#F4F4F4',
        width: width,
        height: height * 0.10,
        justifyContent: 'center'
    },
    contentBorderPress: {
        backgroundColor: '#FBE6EF',
        borderTopWidth: 0.5,
        borderColor: '#F4F4F4',
        width: width,
        height: height * 0.10,
        justifyContent: 'center'
    },
    subTxt: {
        color: '#E2417B',
        fontSize: width * 0.04,
        fontFamily: 'NanumSquareRoundB'

    },
    mainTxt: {
        fontSize: width * 0.04,
        color: '#044B77',
        fontFamily: 'NanumSquareRoundB'
    },
    subTxtB: {
        color: '#E2417B',
        fontSize: width * 0.04,
    },
    mainTxtB: {
        fontSize: width * 0.04,
        color: '#044B77',
    },
    contentItem: {
        padding: 20,
        color: '#707070',
        fontSize: width * 0.05,
        fontFamily: 'NanumSquareRoundB'
    },
    contentItemPress: {
        padding: 20,
        color: '#044B77',
        fontSize: width * 0.05,
        fontFamily: 'NanumSquareRoundB'
    },
    headerStyle: {
        backgroundColor: '#ffffff',
        width: width * 0.4,
        marginRight: 10,
        height: '65%',
    },
    button: {
        flex : 1,
        alignItems: 'center',
        backgroundColor: '#FF7BAC',
    },
    nextButton: {
        height: width * 0.15,
        aspectRatio: 6.252,
        
    }
});
