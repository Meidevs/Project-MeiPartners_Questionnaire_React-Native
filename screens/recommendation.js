import React, { Component } from 'react'
import {
    Text,
    View,
    Dimensions,
    StyleSheet,
    FlatList,
    StatusBar,
    Image,
    ImageBackground,
} from 'react-native'
import * as Font from 'expo-font';
import Swiper from 'react-native-swiper'

const { width, height } = Dimensions.get('window');

class CustomHeader extends React.Component {
    render() {
        return (
            <View style={{
                backgroundColor: '#FFFFFF', height: 50, alignItems: 'center', justifyContent: 'center', shadowColor: "#000",
                shadowOffset: { width: 0, height: 2, }, shadowOpacity: 0.23, shadowRadius: 2.62, elevation: 4,
            }}>
                <Text style={{ fontSize: 18, color: '#000000', fontWeight: '900', }}>추천 제품</Text>
            </View>
        )
    }
}

export default class Recommendation extends React.Component {
    state = {
        fontLoaded: false,
    }
    async componentDidMount() {
        await Font.loadAsync({
            'NanumSquareRoundEB': require('../assets/fonts/NanumSquareRoundEB.ttf'),
            'NanumSquareRoundB': require('../assets/fonts/NanumSquareRoundB.ttf'),
            'NanumSquareRoundR': require('../assets/fonts/NanumSquareRoundR.ttf'),
            'NanumSquareRoundL': require('../assets/fonts/NanumSquareRoundL.ttf'),
        })

        this.setState({ fontLoaded: true })
    }
    constructor(props) {
        super(props)
        var cateData = this.props.navigation.state.params.cateCodes;
        var preData = this.props.navigation.state.params.resultsCodes;
        this.state = {
            cates: cateData,
            listsNum: preData,
            itemList : [
                {
                    itemCode : 'a', code : 'cate1', item: '5.8 마일드 클렌저', manual: "피부가 가장 건강한 pH 5.3의 약산성 클렌저로 강한회복력을 지니고 있고 피부 진정에 뛰어난 효과를 지닌각종 천연 추출물과 세포재생인자에 있는 다수의 펩타이드 성분이 클렌징 시 노폐물을 확실하게 제거함과동시에 피부에 강한 활력을 주어 턴오버 주기를 당겨줍니다.", submanual: '적당량을 덜어 충분히 거품을 낸 뒤 마사지하듯이문질러주며 미온수로 충분히 헹군 후 찬물로 마무리해줍니다.', uri: require('../public/itemimages/58mc.png')
                },
                {
                    itemCode : 'b', code : 'cate1', item: '펩타 버블 클렌저', manual: "", submanual: '', uri: require('../public/itemimages/58mc.png')
                },
                {
                    itemCode : 'c', code : 'cate1', item: '화이트 폼 클렌징', manual: '크리미한 질감과 부드럽고 미세한 거품이 모공 속 노폐물까지 청결하게 해줍니다. EGF와 쌀 추출물 성분이 피부를 촉촉하고 탄력있게 가꿔줍니다.', submanual: '적당량을 덜어 충분히 거품을 낸 뒤 마사지하듯이 문질러주고 미온수로 충분히 헹군 후 찬물로 마무리 해줍니다.', uri: require('../public/itemimages/hfc.png')
                },
                {
                    itemCode : 'd', code : 'cate2', item: '쥬얼리 에센스', manual: '달팽이 점액 추출물과 바디의 보석 진주 추출물의 농축된 유효성분들이수분과 영양이 필요한 피부에 작용하여 탄력적이고 건강한 피부로 가꾸어줍니다.', submanual: '적당량을 덜어 원하는 부위에 두드리듯 흡수 시킵니다.', uri: require('../public/itemimages/je.png')
                },
                {
                    itemCode : 'e', code : 'cate2', item: '377 화이트닝 에센스', manual: '천연의 지질성분과 유사한 스쿠알란을 사용하여 피부세포의 노폐물을 제거하고 정화시켜 맑고 깨끗한 피부를 유지시켜주며, 알부틴이 함유되어 피부를 더욱 밝고 환하게 가꾸어주는 데 도움을 줍니다.', submanual: '적당량을 덜어 원하는 부위에 두드리듯 흡수시킵니다.', uri: require('../public/itemimages/377we.png')
                },
                {
                    itemCode : 'f', code : 'cate3', item: 'R 앰플', manual: '순도 99% 이상의 카퍼트라이펩타이드-1와 두가지펩타이드 성분이 더 함유되어 진하고 풍부한 영양성분이 피부 속부터 탄력을 채워주고, 피부를 진정시켜주는 천연 추출물이 함유되어 피부 활력을되찾아 줍니다. 식약처에서 인증받은 주름개선기능성 성분인 아데노신이 함유되어 건강하고 탱탱한 피부로 가꿔줍니다.일회용 포장 제품은 위생적으로 사용할 수 있으며,샘플용으로 활용하기에 매우 용이합니다.', submanual: '적당량을 덜어 얼굴 전체에 충분히 펴 발라 충분히흡수시켜 줍니다.', uri: require('../public/itemimages/ra.png')
                },
                {
                    itemCode : 'g', code : 'cate3', item: '더 리프팅 R 프리미엄 앰플', manual: '순도 99% 이상의 카퍼트라이펩타이드-1과 아세틸헥사펩타이드-8이 2000ppm함유된 프리미엄 앰플로, 피부 탄력과 주름개선 및 안티에이징에 도움을 주며 에어 클라우드를 통해 앰플을 사용하는 순간 리프팅 효과와 놀라운 탄력감을 경험할 수 있습니다.', submanual: '스킨(토너) 후 앰플 단계에서 사용하며, 에어 Tip 메이크 업 후 분사 시 메이크업 고정 효과', uri: require('../public/itemimages/rrpa.png')
                },
                {
                    itemCode : 'h', code : 'cate4', item: '리바이탈라이즈 세럼', manual: '외부 자극에 의해 손상받거나 민감해진 피부에 EGF와 폴리페놀 성분이 풍부한 영양과 활력을 제공하여 손상된 피부를 현저히 개선시키며 피부의 유연성을 증가시켜 건강하고 탄력적인 피부로 가꾸어 줍니다.', submanual: '적당량을 도포하여 발라주십시오.', uri: require('../public/itemimages/rvs.png')
                },
                {
                    itemCode : 'i', code : 'cate5', item: '쥬얼리 크림', manual: "", submanual: '', uri: require('../public/itemimages/58mc.png')
                },
                {
                    itemCode : 'j', code : 'cate5', item: 'R 크림', manual: '순도 99% 이상의 카퍼트라이펩타이드-1과 아세틸헥사펩타이드-8이 함유된 기능성 크림입니다. 강력한 이중 보습 성분들과 식약처에서 인증받은 주름개선기능성 성분인 아데노신이 함유되어있고, 부드러운 발림성으로 피부에 영양과 수분을 빠르게 공급하여 피부 속부터 채워지는 깊은 보습감과 탄력감을 느낄 수 있습니다. 일회용 포장제품은 위생적으로 사용할 수 있으며, 샘플용으로 활용하기에 매우 용이합니다.', submanual: '적당량을 덜어 얼굴 전체에 충분히 펴 발라 충분히 흡수시켜 줍니다.', uri: require('../public/itemimages/rc.png')
                },
                {
                    itemCode : 'k', code : 'cate5', item: '네오 아이 블러썸', manual: "", submanual: '', uri: require('../public/itemimages/58mc.png')
                },
                {
                    itemCode : 'l', code : 'cate5', item: '377 화이트닝 크림', manual: "", submanual: '', uri: require('../public/itemimages/58mc.png')
                },
                {
                    itemCode : 'm', code : 'cate5', item: '콤플렉스 크림', manual: 'EGF와 폴리페놀성분이 수분과 영양이 필요한 피부에 충분한 활력 에너지를 제공하여 촉촉하고 탄력적인 피부로 가꾸어 줍니다. 알부틴의 기능성 성분이 피부미백에 더욱 증가된 효과를 더하여 줍니다.', submanual: '적당량을 펴 바른 후 충분히 두드려 흡수시켜줍니다.', uri: require('../public/itemimages/rcc.png')
                },
                {
                    itemCode : 'n', code : 'cate6', item: '이오 마스크', manual: "", submanual: '', uri: require('../public/itemimages/58mc.png')
                },
                {
                    itemCode : 'o', code : 'cate6', item: '377 나노셀 페이스 마스크', manual: "", submanual: '', uri: require('../public/itemimages/58mc.png')
                },
                {
                    itemCode : 'p', code : 'cate6', item: 'DX에센스 & 파우더', manual: "", submanual: '', uri: require('../public/itemimages/58mc.png')
                },
                {
                    itemCode : 'q', code : 'cate7', item: '미라클 펩타 볼륨', manual: '미백,탄력,주름,보습 개선을 한번에 해결하는 집중케어 올인원 미스트형 앰플 펩타이드 6종이 다량 함유되어 피부에 깊은 영양감을 선사해주고 언제 어디서나 피부에 수분과 영양을 빠르고 간편하게 공급해줄 수 있습니다. 강력한 이중 기능성으로 거칠어지고 지친 피부를 케어하고 건강한 피부로 가꿔줍니다.', submanual: '세안 후 또는 건조함이 느껴질 때 눈을 감고 얼굴에서 20~30cm 거리를 두고 골고루 분사시켜 줍니다.', uri: require('../public/itemimages/mpv.png')
                },
                {
                    itemCode : 'r', code : 'cate8', item: '필링 겔', manual: '천연 셀룰로오스 성분이 모공에 남아있는 노폐물까지 자극없이 부드럽게 제거해주어 맑고 깨끗한 피부로 만들어 줍니다. 병풀 추출물이 피부를 진정시키고 EGF성분이 영양을 공급해줍니다.', submanual: '세안 후 물기를 깨끗이 닦아낸 후 적당량을 원하는 부위에 펴 바른 다음, 부드럽게 마사지하듯 문질러줍니다. 필링 겔과 함께 각질이 밀려나오면 물로 충분히 씻어냅니다.', uri: require('../public/itemimages/rfg.png')
                },
            ],
            result: [
                {
                    resultssCode: '1',
                    cates : [
                        {
                            cate : 'cate0',
                            item : [
                                'a'
                            ]
                        },
                        {
                            cate : 'cate2',
                            item : [
                                'g'
                            ]
                        },
                        {
                            cate : 'cate4',
                            item : [
                                'j'
                            ]
                        },
                        {
                            cate : 'cate5',
                            item : [
                                'n'
                            ]
                        },
                    ]
                },
                {
                    resultssCode: '2',
                    cates : [
                        {
                            cate : 'cate0',
                            item : [
                                'a'
                            ]
                        },
                        {
                            cate : 'cate2',
                            item : [
                                'g'
                            ]
                        },
                        {
                            cate : 'cate6',
                            item : [
                                'q'
                            ]
                        },
                    ]
                },
                {
                    resultssCode: '3',
                    cates : [
                        {
                            cate : 'cate0',
                            item : [
                                'a'
                            ]
                        },
                        {
                            cate : 'cate1',
                            item : [
                                'd'
                            ]
                        },
                        {
                            cate : 'cate4',
                            item : [
                                'i'
                            ]
                        },
                        {
                            cate : 'cate5',
                            item : [
                                'n'
                            ]
                        },
                    ]
                },
                {
                    resultssCode: '4',
                    cates : [
                        {
                            cate : 'cate0',
                            item : [
                                'a'
                            ]
                        },
                        {
                            cate : 'cate1',
                            item : [
                                'd'
                            ]
                        },
                        {
                            cate : 'cate4',
                            item : [
                                'i'
                            ]
                        },
                        {
                            cate : 'cate6',
                            item : [
                                'q'
                            ]
                        },
                    ]
                },
                {
                    resultssCode: '5',
                    cates : [
                        {
                            cate : 'cate0',
                            item : [
                                'a'
                            ]
                        },
                        {
                            cate : 'cate1',
                            item : [
                                'e'
                            ]
                        },
                        {
                            cate : 'cate4',
                            item : [
                                'k',
                                'l'
                            ]
                        },
                        {
                            cate : 'cate5',
                            item : [
                                'o'
                            ]
                        },
                    ]
                },
                {
                    resultssCode: '6',
                    cates : [
                        {
                            cate : 'cate0',
                            item : [
                                'a'
                            ]
                        },
                        {
                            cate : 'cate1',
                            item : [
                                'e'
                            ]
                        },
                        {
                            cate : 'cate4',
                            item : [
                                'l'
                            ]
                        },
                        {
                            cate : 'cate5',
                            item : [
                                'o'
                            ]
                        },
                    ]
                },
                {
                    resultssCode: '7',
                    cates : [
                        {
                            cate : 'cate0',
                            item : [
                                'a'
                            ]
                        },
                        {
                            cate : 'cate2',
                            item : [
                                'f'
                            ]
                        },
                        {
                            cate : 'cate4',
                            item : [
                                'l',
                                'k'
                            ]
                        },
                    ]
                },
                {
                    resultssCode: '8',
                    cates : [
                        {
                            cate : 'cate0',
                            item : [
                                'a'
                            ]
                        },
                        {
                            cate : 'cate1',
                            item : [
                                'd'
                            ]
                        },
                        {
                            cate : 'cate4',
                            item : [
                                'i',
                            ]
                        },
                        {
                            cate : 'cate6',
                            item : [
                                'q',
                            ]
                        },
                    ]
                },
                {
                    resultssCode: '9',
                    cates : [
                        {
                            cate : 'cate0',
                            item : [
                                'a',
                                'b'
                            ]
                        },
                        {
                            cate : 'cate2',
                            item : [
                                'g'
                            ]
                        },
                        {
                            cate : 'cate4',
                            item : [
                                'm',
                            ]
                        },
                        {
                            cate : 'cate5',
                            item : [
                                'p',
                            ]
                        },
                    ]
                },
                {
                    resultssCode: '10',
                    cates : [
                        {
                            cate : 'cate0',
                            item : [
                                'a',
                                'b'
                            ]
                        },
                        {
                            cate : 'cate2',
                            item : [
                                'g'
                            ]
                        },
                        {
                            cate : 'cate3',
                            item : [
                                'h',
                            ]
                        },
                        {
                            cate : 'cate5',
                            item : [
                                'p',
                            ]
                        },
                    ]
                },
                {
                    resultssCode: '11',
                    cates : [
                        {
                            cate : 'cate0',
                            item : [
                                'a',
                                'b'
                            ]
                        },
                        {
                            cate : 'cate2',
                            item : [
                                'g'
                            ]
                        },
                        {
                            cate : 'cate4',
                            item : [
                                'i',
                            ]
                        },
                        {
                            cate : 'cate5',
                            item : [
                                'p',
                            ]
                        },
                    ]
                },
                {
                    resultssCode: '12',
                    cates : [
                        {
                            cate : 'cate0',
                            item : [
                                'a',
                                'b'
                            ]
                        },
                        {
                            cate : 'cate3',
                            item : [
                                'h'
                            ]
                        },
                        {
                            cate : 'cate4',
                            item : [
                                'm',
                            ]
                        },
                        {
                            cate : 'cate5',
                            item : [
                                'p',
                            ]
                        },
                    ]
                },
                {
                    resultssCode: '13',
                    cates : [
                        {
                            cate : 'cate0',
                            item : [
                                'c',
                            ]
                        },
                        {
                            cate : 'cate2',
                            item : [
                                'f'
                            ]
                        },
                        {
                            cate : 'cate4',
                            item : [
                                'm',
                            ]
                        },
                        {
                            cate : 'cate5',
                            item : [
                                'p',
                            ]
                        },
                        {
                            cate : 'cate7',
                            item : [
                                'r',
                            ]
                        },
                    ]
                },
                {
                    resultssCode: '14',
                    cates : [
                        {
                            cate : 'cate0',
                            item : [
                                'c',
                            ]
                        },
                        {
                            cate : 'cate3',
                            item : [
                                'h'
                            ]
                        },
                        {
                            cate : 'cate4',
                            item : [
                                'm',
                            ]
                        },
                        {
                            cate : 'cate5',
                            item : [
                                'p',
                            ]
                        },
                        {
                            cate : 'cate7',
                            item : [
                                'r',
                            ]
                        },
                    ]
                },
                {
                    resultssCode: '15',
                    cates : [
                        {
                            cate : 'cate0',
                            item : [
                                'c',
                            ]
                        },
                        {
                            cate : 'cate2',
                            item : [
                                'f'
                            ]
                        },
                        {
                            cate : 'cate5',
                            item : [
                                'p',

                            ]
                        },
                        {
                            cate : 'cate7',
                            item : [
                                'r'
                            ]
                        },
                    ]
                },
                {
                    resultssCode: '16',
                    cates : [
                        {
                            cate : 'cate0',
                            item : [
                                'c',
                            ]
                        },
                        {
                            cate : 'cate5',
                            item : [
                                'p',
                            ]
                        },
                        {
                            cate : 'cate7',
                            item : [
                                'r'
                            ]
                        },
                    ]
                },
            ],
            
        }
        console.log('listnumber', this.state.listsNum)
        //Item Matches
        var rawArray = [];
        for (var x = 0; x < this.state.skins.length; x++) {
            for (var y = 0; y < this.state.descriptions.length; y++) {
                if (this.state.skins[x] == this.state.descriptions[y].skinCode) {
                    rawArray.push(this.state.descriptions[y].items)
                }
            }
        }
        var exArray = [];
        this.state.cates.map((data) => {
            for (var x = 0; x < rawArray.length; x++) {
                for (var y = 0; y < rawArray[x].length; y++) {
                    if (data == rawArray[x][y].cate) {
                        exArray.push(rawArray[x][y])
                    }
                }
            }
        })
        if (exArray == "") {
            exArray.push(undefined)
        }
        exArray.push({
            context: 'Last Page'
        })
        this.state = {
            dataSource: exArray
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
            </View>
        )
    }

    render() {
        const mapToExplanation = data => {
            if (this.state.dataSource[0] != undefined) {
                return data.map((data, i) => {
                    if (i != Math.max(this.state.dataSource.length - 1)) {
                        return (
                            <View style={styles.sliderContent}>
                                <CustomHeader />
                                <View style={styles.sliderTop}>
                                    <View style={styles.sliderImage}>
                                        <View style={styles.itemImages}>
                                            <Image source={data.uri} style={{ flex: 1, aspectRatio: 1.2, resizeMode: 'contain' }} />
                                        </View>
                                    </View>
                                </View>
                                <View style={styles.sliderBottom}>
                                    <View style={styles.sliderName}>
                                        <View style={styles.members}>
                                            {/* <Text style={styles.mb}>멤버십 </Text><Text style={styles.dc}>10%</Text> */}
                                        </View>

                                        <Text style={styles.text}>{data.item}</Text>
                                    </View>
                                    <View style={{ borderWidth: 0.8, borderColor: '#BFBFBF', width: width * 0.9, alignSelf: 'center' }} />
                                    <View>
                                        <FlatList
                                            data={[data]}
                                            renderItem={item => this.renderItem(item)}
                                            keyExtractor={item => item.cate}
                                        />
                                    </View>
                                </View>
                            </View>
                        )
                    } else {
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
                                    <View style={styles.imageBox}>
                                        <Image source={require('../public/images/pop3_BG.png')} style={styles.pop1_BG} />
                                    </View>
                                </View>
                                <View style={styles.bottomContainer}>
                                    {
                                        this.state.fontLoaded ? (
                                            <View style={styles.txtContent}>
                                                <Text style={styles.mainTxt}>LOV.U를 기다려 주세요!</Text>
                                                <Text style={styles.subTxt}>당신만의 솔루션을 통해 변화되어가는</Text>
                                                <Text style={styles.subTxt}>당신의 피부가 궁금하지 않나요?</Text>
                                                <Text></Text>
                                                <Text style={styles.subTxt}>새롭게 만들어질 뷰티앱 LOV.U가</Text>
                                                <Text style={styles.subTxt}>더 많은 솔루션들과 더 상세한 컨텐츠들로</Text>
                                                <Text style={styles.subTxt}>당신의 피부를 함께 관리해드리겠습니다.</Text>
                                            </View>
                                        ) : (
                                                <View style={styles.txtContent}>
                                                    <Text style={styles.mainTxtB}>LOV.U를 기다려 주세요!</Text>
                                                    <Text style={styles.subTxtB}>당신만의 솔루션을 통해 변화되어가는</Text>
                                                    <Text style={styles.subTxtB}>당신의 피부가 궁금하지 않나요?</Text>
                                                    <Text></Text>
                                                    <Text style={styles.subTxtB}>새롭게 만들어질 뷰티앱 LOV.U가</Text>
                                                    <Text style={styles.subTxtB}>더 많은 솔루션들과 더 상세한 컨텐츠들로</Text>
                                                    <Text style={styles.subTxtB}>당신의 피부를 함께 관리해드리겠습니다.</Text>
                                                </View>
                                            )
                                    }
                                </View>
                            </View>
                        )
                    }
                })
            } else {
                return (
                    <View>
                        <CustomHeader />
                        <Text>
                            추천 제품이 없습니다
                        </Text>
                    </View>
                )
            }
        }

        return (
            <View style={styles.container} >
                <Swiper style={styles.wrapper} vertical={false} showsPagination={false} buttonWrapperStyle={{ backgroundColor: 'transparent', flexDirection: 'row', position: 'absolute', top: -80, left: 0, flex: 1, paddingHorizontal: 10, paddingVertical: 10, justifyContent: 'space-between', alignItems: 'center' }} showsButtons>
                    {mapToExplanation(this.state.dataSource)}
                </Swiper>
            </View>
        )
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