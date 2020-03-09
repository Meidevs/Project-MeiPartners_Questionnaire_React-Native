import React, { Children } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Image,
    FlatList,
    Dimensions,
} from 'react-native';
import { ProgressBar, Colors } from 'react-native-paper';

const { width, height } = Dimensions.get('window');

export default class QuestionContent extends React.Component {

    constructor(props) {
        super(props)
        this.props.navigation.setParams({ increaseCount: 1 });
        var dataPackage = {
            package: [
                {
                    skinCode: 'skin1',
                    skinType: '건성 타입',
                    questions:
                        [
                            { type: "skin1", subtxt: '항목을 선택하세요.', maintxt: '세안 후 피부 당김 정도는?', question1: '심하게 당긴다', question2: '약간 당긴다', question3: '안 당긴다' },
                            { type: "skin1", subtxt: '항목을 선택하세요.', maintxt: '보습제를 바르고 2~3시간 이후 양 볼의 피부결은?', question1: '매우 거칠다', question2: '매끄럽다', question3: '윤기가 흐른다' },
                            { type: "skin1", subtxt: '항목을 선택하세요.', maintxt: '오후의 피부 상태는 어떤가요?', question1: '각질이 들떠있다', question2: '그대로다', question3: '번들거린다' },
                            { type: "skin1", subtxt: '항목을 선택하세요.', maintxt: '화장을 했을 때 피부 상태는?', question1: '항상 각질이 들뜬다', question2: '그대로다', question3: '화장이 촉촉하게 잘 먹는다' },
                            { type: "skin1", subtxt: '항목을 선택하세요.', maintxt: '얼굴에 주름이 있나요?', question1: '주름이 있다', question2: '약간 있다', question3: '없다' },

                        ]
                },
                {
                    skinCode: 'skin2',
                    skinType: '민감성 타입',
                    questions:
                        [
                            { type: "skin2", subtxt: '항목을 선택하세요.', maintxt: '얼굴이 쉽게 붉어지나요?', question1: '자주 붉어진다', question2: '약간 붉어진다', question3: '거의 안 붉어진다' },
                            { type: "skin2", subtxt: '항목을 선택하세요.', maintxt: '금속이나 악세서리를 착용할 경우 피부 발진이 자주 발생하나요?', question1: '항상 나타난다', question2: '거의 안 나타난다', question3: '전혀 안 나타난다' },
                            { type: "skin2", subtxt: '항목을 선택하세요.', maintxt: '조금만 자극이 있어도 트러블이 나나요?', question1: '항상 난다', question2: '거의 안 난다', question3: '전혀 안 난다' },
                            { type: "skin2", subtxt: '항목을 선택하세요.', maintxt: '자외선을 받으면 가려운가요?', question1: '항상 가렵다', question2: '때때로 가려울 때도 있다', question3: '가렵지 않다' },
                            { type: "skin2", subtxt: '항목을 선택하세요.', maintxt: '상처가 나면 흉터가 오래 가나요?', question1: '재생이 느리다', question2: '보통이다', question3: '재생이 남들보다 빠르다' },
                            { type: "skin2", subtxt: '항목을 선택하세요.', maintxt: '스크럽이나 딥 클렌징을 하고 나면 피부 상태는?', question1: '많이 따갑다', question2: '약간 따가울 때도 있다', question3: '피부가 좋아진다' },
                            { type: "skin2", subtxt: '항목을 선택하세요.', maintxt: '자외선 차단제를 바르면 피부에 발진이나 눈 따가움이 있나요?', question1: '심하다', question2: '한번씩 있다', question3: '없다' },

                        ]
                },
                {
                    skinCode: 'skin3',
                    skinType: '트러블 지성 타입',
                    questions:
                        [
                            { type: "skin3", subtxt: '항목을 선택하세요.', maintxt: '아침에 일어나면 피부 상태는 어떠한가요?', question1: '번들거린다', question2: '보통이다', question3: '당긴다' },
                            { type: "skin3", subtxt: '항목을 선택하세요.', maintxt: '오후의 피부 상태는?', question1: '번들거린다', question2: '그대로다', question3: '당긴다' },
                            { type: "skin3", subtxt: '항목을 선택하세요.', maintxt: '얼굴에 붉은 여드름이 발생한 경험이 있나요?', question1: '지금도 있다', question2: '지금도 한번씩 생긴다', question3: '없다' },
                            { type: "skin3", subtxt: '항목을 선택하세요.', maintxt: '저녁에 세안은 어떻게 하시나요?', question1: '클렌징과 폼 클렌징', question2: '폼 클렌징', question3: '기타' },
                            { type: "skin3", subtxt: '항목을 선택하세요.', maintxt: '모공의 크기는?', question1: '큰 편이다', question2: '보통이다', question3: '작다' },
                            { type: "skin3", subtxt: '항목을 선택하세요.', maintxt: '얼굴 피부톤은?', question1: '어두운 편이다', question2: '붉은 편이다', question3: '밝은 편이다' },

                        ]
                },
                {
                    skinCode: 'skin4',
                    skinType: '색소 성 타입',
                    questions:
                        [
                            { type: "skin4", subtxt: '항목을 선택하세요.', maintxt: '얼굴에 색소 침착이 있나요?', question1: '많다', question2: '약간 생긴다', question3: '없다' },
                            { type: "skin4", subtxt: '항목을 선택하세요.', maintxt: '원래 피부 색깔은?', question1: '태닝된 피부', question2: ' 약간 태닝된 피부', question3: '희고 핑크색 피부' },
                            { type: "skin4", subtxt: '항목을 선택하세요.', maintxt: '얼굴의 점이 햇빛에 의해 짙어지나요?', question1: '많이 짙어진다', question2: '약간 짙어진다', question3: '짙은 점이 없다' },
                            { type: "skin4", subtxt: '항목을 선택하세요.', maintxt: '자외선에 노출이 많이 되었을 때 피부의 변화가 있나요?', question1: '피부색이 짙어졌다', question2: '약간 짙어졌다', question3: '약간 붉어졌다' },
                            { type: "skin4", subtxt: '항목을 선택하세요.', maintxt: '과거에 얼굴 기미로 진단 받은 적이 있나요?', question1: '있다', question2: '한번 있었지만 소멸되었다', question3: '없다' },
                            { type: "skin4", subtxt: '항목을 선택하세요.', maintxt: '상처나 여드름이 없어지지 않고 색소침착이 되는 편인가요?', question1: '항상 그렇다', question2: '때때로 그렇다', question3: '전혀 아니다' },

                        ]
                },
                {
                    skinCode: 'skin5',
                    skinType: '탄력 주름 타입',
                    questions:
                        [
                            { type: "skin5", subtxt: '항목을 선택하세요.', maintxt: '얼굴을 손가락으로 눌렀을 때 피부 상태는 어떠한가요?', question1: '말랑말랑하다', question2: '탱탱하다', question3: '모르겠다' },
                            { type: "skin5", subtxt: '항목을 선택하세요.', maintxt: '나이에 비해 어떻게 보이는 편인가요?', question1: '나이가 많아 보인다', question2: '나이대로 보인다', question3: '젊어 보인다' },
                            { type: "skin5", subtxt: '항목을 선택하세요.', maintxt: '하루의 자외선 노출 시간이 얼마나 되나요?', question1: '5시간 이상', question2: '3시간 이상', question3: '거의 안 한다' },
                            { type: "skin5", subtxt: '항목을 선택하세요.', maintxt: '눈가 혹은 팔자 주름의 깊이는 어떤가요?', question1: '둘 다 깊다', question2: '하나만 깊다', question3: '주름이 거의 없다' },
                            { type: "skin5", subtxt: '항목을 선택하세요.', maintxt: '예전과 비교해서 얼굴 라인이 변한 것 같나요?', question1: '많이 변했다', question2: '조금 변한 것 같다', question3: '거의 그대로다' },
                            { type: "skin5", subtxt: '항목을 선택하세요.', maintxt: '화장품을 바르면 흡수가 잘 되나요?', question1: '잘 안 된다', question2: '되는 것 같다', question3: '잘 된다' },
                            { type: "skin5", subtxt: '항목을 선택하세요.', maintxt: '예전과 비교해 피부가 얇아졌나요?', question1: '점점 더 얇아지는 것 같다', question2: '원래 얇다', question3: '거의 그대로다' },

                        ]
                }
            ]
        };

        var array = [];
        temp = [];
        var data = dataPackage.package;
        //Select Question List, Questions In The Package which was defined at Constructor
        for (var i = 0; i < data.length; i++) {
            var count = data[i].questions.length;
            var rNum1 = Math.floor(Math.random() * count);
            var rNum2 = Math.floor(Math.random() * count);
            do {
                rNum2 = Math.floor((Math.random() * count));
            }
            while (rNum1 == rNum2);

            array.push(data[i].questions[rNum1])
            array.push(data[i].questions[rNum2])
        }
        //Shuffle The Questions
        for (var i = 0; i < 10; i++) {
            rNum1 = Math.floor((Math.random() * 10));
            rNum2 = Math.floor((Math.random() * 10));
            temp = array[rNum1];
            array[rNum1] = array[rNum2];
            array[rNum2] = temp;
        }

        //Define All Question List & Initial Question
        this.state = {
            itemCate: this.props.navigation.state.params.codes,
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

                if (arrayData[curCount].type == 'skin1') {
                    this.state.skin1 = this.state.skin1 + j;
                } else if (arrayData[curCount].type == 'skin2') {
                    this.state.skin2 = this.state.skin2 + j;
                } else if (arrayData[curCount].type == 'skin3') {
                    this.state.skin3 = this.state.skin3 + j;
                } else if (arrayData[curCount].type == 'skin4') {
                    this.state.skin4 = this.state.skin4 + j;
                } else if (arrayData[curCount].type == 'skin5') {
                    this.state.skin5 = this.state.skin5 + j;
                }
            }
        }
        let data = {
            skinCode: [
                { code: 'skin1', skin: this.state.skin1 },
                { code: 'skin2', skin: this.state.skin2 },
                { code: 'skin3', skin: this.state.skin3 },
                { code: 'skin4', skin: this.state.skin4 },
                { code: 'skin5', skin: this.state.skin5 },
            ]
        }

        if (nextData == 11) {
            this.final(data);
            this.props.navigation.setParams({ increaseCount: 10 });
        } else {
            //Define Changes
            this.props.navigation.setParams({ increaseCount: nextData });
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
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end' }}>
                        <Text style={{ fontSize: 20, color: '#707070', fontWeight: '400' }}>{navigation.getParam('increaseCount')} / 10</Text>
                    </View>
                    <View>
                        <ProgressBar progress={navigation.getParam('increaseCount') / 10} color={Colors.pink600} style={{ height: 8, borderWidth: 0.5, borderColor: '#707070', borderRadius: 10 }} />
                    </View>
                </View>,
        }
    }

    componentJSX() {
        if (this.props.navigation.getParam('increaseCount') != 10) {
            return (
                <TouchableOpacity onPress={this.nextPress} style={{ height: height * 0.06, width: width * 0.55, backgroundColor: '#FFC9DD', borderRadius: 10, justifyContent: 'center', borderColor: '#707070', borderWidth: 1 }}>
                    <Text style={{ color: '#ffffff', fontWeight: 'bold', fontSize: 20, textAlign: 'center' }
                    }> 확인</Text >
                </TouchableOpacity>
            )
        } else {
            return (
                <TouchableOpacity onPress={this.nextPress} style={{ height: height * 0.06, width: width * 0.55, backgroundColor: '#FFC9DD', borderRadius: 10, justifyContent: 'center', borderColor: '#707070', borderWidth: 1 }}>
                    <Text style={{ color: '#ffffff', fontWeight: 'bold', fontSize: 20, textAlign: 'center' }
                    }>제출</Text >
                </TouchableOpacity>
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
                <View style={styles.top_container}>
                    <Image source={require('../public/images/topback.png')} style={{ width: '100%', height: '100%' }} />
                </View>
                <View style={styles.rectangle}>
                    <View style={styles.rectagleContent}>
                        <View style={styles.rectagleContentUpper}>
                            <Text style={styles.subTxt}>{this.state.subTxt}</Text>
                            <Text style={styles.mainTxt}>{this.props.navigation.getParam('increaseCount')}. {this.state.mainTxt}</Text>
                        </View>
                        <View style={styles.rectagleContentMiddle}>
                            {mapToQuestions(this.state.dataSource)}
                        </View>
                        <View style={styles.rectangleContentDowner}>
                            {this.componentJSX()}
                        </View>
                    </View>
                </View>
            </View>


        );
    }

    final = data => {
        var scoreArray = [];
        var returnArray = [];
        data.skinCode.map((data) => {
            scoreArray.push(data.skin)
        })
        var maxNum = Math.max(...scoreArray);
        for (var i = 0; i < data.skinCode.length; i++) {
            if (data.skinCode[i].skin == maxNum) {
                returnArray.push(data.skinCode[i].code)
            }
        }

        this.props.navigation.navigate('Loading', {
            data : {
                itemCate : this.state.itemCate,
                skinCode : returnArray
            }
        })
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    top_container: {
        height: height * 0.23,
        backgroundColor: '#FD7777'
    },
    rectangle: {
        position: 'absolute',
        top: height * 0.10,
        width: '80%',
        flexDirection: 'row',
        alignSelf: 'center',
        justifyContent: 'center',
    },
    rectagleContent: {
        flex: 1,
        width: '80%',
        height: height * 0.7,
        alignItems: 'center',
        backgroundColor: '#ffffff',
        borderColor: '#707070',
        borderWidth: 1,
        borderRadius: 10,
    },
    rectagleContentUpper: {
        flex: 1,
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        padding: 20,
    },
    rectagleContentMiddle: {
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flex: 2,
    },
    rectangleContentDowner: {
        flex: 1,
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    contentBorder: {
        backgroundColor: '#ffffff',
        borderWidth: 1,
        borderColor: '#707070',
        borderRadius: 10,
        width: width * 0.7,
        height: height * 0.06,
        margin: 8,
        justifyContent: 'center'
    },
    contentBorderPress: {
        backgroundColor: '#FFC9DD',
        borderWidth: 1,
        borderColor: '#707070',
        borderRadius: 10,
        width: width * 0.7,
        height: height * 0.06,
        margin: 8,
        justifyContent: 'center'
    },
    subTxt: {
        color: '#E2417B',
        fontSize: 20,
        fontWeight: '400',
    },
    mainTxt: {
        fontSize: 20,
        fontWeight: '400',
    },
    contentItem: {
        padding: 10,
        color: '#707070',
        fontWeight: '400',
        fontSize: 20,

    },
    contentItemPress: {
        padding: 10,
        color: '#ffffff',
        fontWeight: '400',
        fontSize: 20,

    },
    headerStyle: {
        backgroundColor: '#ffffff',
        width: 150,
        marginRight: 10,
        height: '65%',
    }
});
