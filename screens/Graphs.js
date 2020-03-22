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
    ImageBackground,
    BackHandler,
} from 'react-native';
import * as Font from 'expo-font';
import Animated from 'react-native-reanimated';
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
        // cateData -> Category Code that I selected
        // allCate -> After Answer the Questions, Response is Category Code & Category Name
        // preData -> After Answer the Questions, Code of Category Code & Category Name Set
        // skinScore -> Score of the Answer
        var preData = this.props.navigation.getParam('resultsCodes');
        var allCate = this.props.navigation.getParam('codeAllCateArray');
        var cateData = this.props.navigation.getParam('cateSelectedCodes');
        var skinScore = this.props.navigation.getParam('skinTypeScore');
        var itemList = [
            {
                itemCode: 'a', code: 'cate0', item: '5.8 마일드 클렌저', manual: "피부가 가장 건강한 pH 5.3의 약산성 클렌저로 강한회복력을 지니고 있고 피부 진정에 뛰어난 효과를 지닌각종 천연 추출물과 세포재생인자에 있는 다수의 펩타이드 성분이 클렌징 시 노폐물을 확실하게 제거함과동시에 피부에 강한 활력을 주어 턴오버 주기를 당겨줍니다.", submanual: '적당량을 덜어 충분히 거품을 낸 뒤 마사지하듯이 문질러주며 미온수로 충분히 헹군 후 찬물로 마무리해줍니다.', uri: require('../public/itemimages/58mc.png')
            },
            {
                itemCode: 'b', code: 'cate0', item: '펩타 버블 클렌저', manual: "천연추출물 약산성 클렌저로 피부 진정작용이 뛰어난 티트리 성분과 녹차추출물이 피부 장벽을 튼튼하게 보호하고 청량한 피부로 가꾸어 줍니다. 쿠퍼 트리펩타이드와 아세틸 헥사 펩타이드를 함유하여 피부의 탄력 및 피부 톤 개선에 도움을 줍니다.", submanual: '세안 후 얼굴에 적당량을 발라 10분 후 제품이 마르면 미온수로 세안하여 깨끗하게 닦아내어줍니다.', uri: require('../public/itemimages/pbc.png')
            },
            {
                itemCode: 'c', code: 'cate0', item: '화이트 폼 클렌징', manual: '크리미한 질감과 부드럽고 미세한 거품이 모공 속 노폐물까지 청결하게 해줍니다. EGF와 쌀 추출물 성분이 피부를 촉촉하고 탄력있게 가꿔줍니다.', submanual: '적당량을 덜어 충분히 거품을 낸 뒤 마사지하듯이 문질러주고 미온수로 충분히 헹군 후 찬물로 마무리 해줍니다.', uri: require('../public/itemimages/hfc.png')
            },
            {
                itemCode: 'd', code: 'cate1', item: '쥬얼리 에센스', manual: '달팽이 점액 추출물과 바디의 보석 진주 추출물의 농축된 유효성분들이수분과 영양이 필요한 피부에 작용하여 탄력적이고 건강한 피부로 가꾸어줍니다.', submanual: '적당량을 덜어 원하는 부위에 두드리듯 흡수 시킵니다.', uri: require('../public/itemimages/je.png')
            },
            {
                itemCode: 'e', code: 'cate1', item: '377 화이트닝 에센스', manual: '천연의 지질성분과 유사한 스쿠알란을 사용하여 피부세포의 노폐물을 제거하고 정화시켜 맑고 깨끗한 피부를 유지시켜주며, 알부틴이 함유되어 피부를 더욱 밝고 환하게 가꾸어주는 데 도움을 줍니다.', submanual: '적당량을 덜어 원하는 부위에 두드리듯 흡수시킵니다.', uri: require('../public/itemimages/377we.png')
            },
            {
                itemCode: 'f', code: 'cate2', item: 'R 앰플', manual: '순도 99% 이상의 카퍼트라이펩타이드-1와 두가지펩타이드 성분이 더 함유되어 진하고 풍부한 영양성분이 피부 속부터 탄력을 채워주고, 피부를 진정시켜주는 천연 추출물이 함유되어 피부 활력을되찾아 줍니다. 식약처에서 인증받은 주름개선기능성 성분인 아데노신이 함유되어 건강하고 탱탱한 피부로 가꿔줍니다.일회용 포장 제품은 위생적으로 사용할 수 있으며,샘플용으로 활용하기에 매우 용이합니다.', submanual: '적당량을 덜어 얼굴 전체에 충분히 펴 발라 충분히흡수시켜 줍니다.', uri: require('../public/itemimages/ra.png')
            },
            {
                itemCode: 'g', code: 'cate2', item: '더 리프팅 R 프리미엄 앰플', manual: '순도 99% 이상의 카퍼트라이펩타이드-1과 아세틸헥사펩타이드-8이 2000ppm함유된 프리미엄 앰플로, 피부 탄력과 주름개선 및 안티에이징에 도움을 주며 에어 클라우드를 통해 앰플을 사용하는 순간 리프팅 효과와 놀라운 탄력감을 경험할 수 있습니다.', submanual: '스킨(토너) 후 앰플 단계에서 사용하며, 에어 Tip 메이크 업 후 분사 시 메이크업 고정 효과', uri: require('../public/itemimages/rrpa.png')
            },
            {
                itemCode: 'h', code: 'cate3', item: '리바이탈라이즈 세럼', manual: '외부 자극에 의해 손상받거나 민감해진 피부에 EGF와 폴리페놀 성분이 풍부한 영양과 활력을 제공하여 손상된 피부를 현저히 개선시키며 피부의 유연성을 증가시켜 건강하고 탄력적인 피부로 가꾸어 줍니다.', submanual: '적당량을 도포하여 발라주십시오.', uri: require('../public/itemimages/rvs.png')
            },
            {
                itemCode: 'i', code: 'cate4', item: '쥬얼리 리뉴얼 크림', manual: "복합 영양성분 및 뛰어난 보습 성분들이 피부를 탄력적이고 촉촉하게 만들어주며 피부 유연성과 장벽기능 강화에도 도움을 줍니다.", submanual: '스킨 케어 마지막 단계에서 적당량을 덜어 골고루 펴 발라줍니다.', uri: require('../public/itemimages/jc.png')
            },
            {
                itemCode: 'j', code: 'cate4', item: 'R 크림', manual: '순도 99% 이상의 카퍼트라이펩타이드-1과 아세틸헥사펩타이드-8이 함유된 기능성 크림입니다. 강력한 이중 보습 성분들과 식약처에서 인증받은 주름개선기능성 성분인 아데노신이 함유되어있고, 부드러운 발림성으로 피부에 영양과 수분을 빠르게 공급하여 피부 속부터 채워지는 깊은 보습감과 탄력감을 느낄 수 있습니다. 일회용 포장제품은 위생적으로 사용할 수 있으며, 샘플용으로 활용하기에 매우 용이합니다.', submanual: '적당량을 덜어 얼굴 전체에 충분히 펴 발라 충분히 흡수시켜 줍니다.', uri: require('../public/itemimages/rc.png')
            },
            {
                itemCode: 'k', code: 'cate4', item: '네오 아이 블러썸', manual: "c", submanual: 'c', uri: require('../public/itemimages/neb.png')
            },
            {
                itemCode: 'l', code: 'cate4', item: '377 화이트닝 크림', manual: "피부표면으로부터 수분의 증발을 지연시켜 빠른 속도로 깊숙히 침투해 유연함과 촉촉함을 주며, 피부에 수분 보유력을 증강시켜 줍니다. 또, 지친피부를 맑고 투명하게 개선해주며 더욱 생기있는 피부결로 가꾸어 드립니다.", submanual: '스킨케어의 마지막 단계에서 적당량을 취해 얼굴과 목부위에 골고루 펴 발라 줍니다.', uri: require('../public/itemimages/377wc.png')
            },
            {
                itemCode: 'm', code: 'cate4', item: '리뉴얼 콤플렉스 크림', manual: 'EGF와 폴리페놀성분이 수분과 영양이 필요한 피부에 충분한 활력 에너지를 제공하여 촉촉하고 탄력적인 피부로 가꾸어 줍니다. 알부틴의 기능성 성분이 피부미백에 더욱 증가된 효과를 더하여 줍니다.', submanual: '적당량을 펴 바른 후 충분히 두드려 흡수시켜줍니다.', uri: require('../public/itemimages/rcc.png')
            },
            {
                itemCode: 'n', code: 'cate5', item: '이오 마스크', manual: "e", submanual: 'e', uri: require('../public/itemimages/58mc.png')
            },
            {
                itemCode: 'o', code: 'cate5', item: '377 나노셀 페이스 마스크', manual: "고순도의 친환경 소재로 셀룰로오스 원단자체의 쿨링, 미백 효과가 탁월하며 보습성이 일반 부직포 마스크에 비해 20배 이상이므로 고농축 에센스를 피부에 충분히 공급합니다.", submanual: '1) 세안 후 스킨으로 피부를 정돈합니다. 2) 패치 양쪽의 부직포를 제거한 후 눈밑에 맞춰 고르게 밀착시킵니다. 3) 20~30분 후 패치를 데어내고 남은 내용물을 그대로 흡수시킵니다. 4) 가볍게 패팅하고, 에센스 및 평소에 사용하던 제품을 덧발라 마무리해 줍니다.', uri: require('../public/itemimages/377wm.png')
            },
            {
                itemCode: 'p', code: 'cate5', item: 'DX에센스 & 파우더', manual: "다양한 천연 가루와 천연 추출물 성분을 함유하여 피부진정 및 쿨링, 피부결 개선, 피부 보습에 도움을 줍니다. 디엑스 파우더가 1회분씩 개별 포장되어 내용물의 변질을 막아주고 위생적이고 간편 하게 관리할 수 있는 One Day Use 제품입니다.", submanual: '에센스 10ml와 파우더 1개입을 용기에 부어 골고루 섞어줍니다. 눈가와 입가를 제외한 얼굴에 고르게 도포 해주고 10~20분 경과 후 물 세안으로 마무리해줍니다.', uri: require('../public/itemimages/dx.png')
            },
            {
                itemCode: 'q', code: 'cate6', item: '미라클 펩타 볼륨', manual: '미백,탄력,주름,보습 개선을 한번에 해결하는 집중케어 올인원 미스트형 앰플 펩타이드 6종이 다량 함유되어 피부에 깊은 영양감을 선사해주고 언제 어디서나 피부에 수분과 영양을 빠르고 간편하게 공급해줄 수 있습니다. 강력한 이중 기능성으로 거칠어지고 지친 피부를 케어하고 건강한 피부로 가꿔줍니다.', submanual: '세안 후 또는 건조함이 느껴질 때 눈을 감고 얼굴에서 20~30cm 거리를 두고 골고루 분사시켜 줍니다.', uri: require('../public/itemimages/mpv.png')
            },
            {
                itemCode: 'r', code: 'cate7', item: '리페어 필링 겔', manual: '천연 셀룰로오스 성분이 모공에 남아있는 노폐물까지 자극없이 부드럽게 제거해주어 맑고 깨끗한 피부로 만들어 줍니다. 병풀 추출물이 피부를 진정시키고 EGF성분이 영양을 공급해줍니다.', submanual: '세안 후 물기를 깨끗이 닦아낸 후 적당량을 원하는 부위에 펴 바른 다음, 부드럽게 마사지하듯 문질러줍니다. 필링 겔과 함께 각질이 밀려나오면 물로 충분히 씻어냅니다.', uri: require('../public/itemimages/rfg.png')
            },
        ];
        var result = [
            {
                resultsCode: '1',
                cates: [
                    {
                        cate: 'cate0',
                        item: [
                            'a'
                        ]
                    },
                    {
                        cate: 'cate2',
                        item: [
                            'g'
                        ]
                    },
                    {
                        cate: 'cate4',
                        item: [
                            'j'
                        ]
                    },
                    {
                        cate: 'cate5',
                        item: [
                            'n'
                        ]
                    },
                ]
            },
            {
                resultsCode: '2',
                cates: [
                    {
                        cate: 'cate0',
                        item: [
                            'a'
                        ]
                    },
                    {
                        cate: 'cate2',
                        item: [
                            'g'
                        ]
                    },
                    {
                        cate: 'cate6',
                        item: [
                            'q'
                        ]
                    },
                ]
            },
            {
                resultsCode: '3',
                cates: [
                    {
                        cate: 'cate0',
                        item: [
                            'a'
                        ]
                    },
                    {
                        cate: 'cate1',
                        item: [
                            'd'
                        ]
                    },
                    {
                        cate: 'cate4',
                        item: [
                            'i'
                        ]
                    },
                    {
                        cate: 'cate5',
                        item: [
                            'n'
                        ]
                    },
                ]
            },
            {
                resultsCode: '4',
                cates: [
                    {
                        cate: 'cate0',
                        item: [
                            'a'
                        ]
                    },
                    {
                        cate: 'cate1',
                        item: [
                            'd'
                        ]
                    },
                    {
                        cate: 'cate4',
                        item: [
                            'i'
                        ]
                    },
                    {
                        cate: 'cate6',
                        item: [
                            'q'
                        ]
                    },
                ]
            },
            {
                resultsCode: '5',
                cates: [
                    {
                        cate: 'cate0',
                        item: [
                            'a'
                        ]
                    },
                    {
                        cate: 'cate1',
                        item: [
                            'e'
                        ]
                    },
                    {
                        cate: 'cate4',
                        item: [
                            'k',
                            'l'
                        ]
                    },
                    {
                        cate: 'cate5',
                        item: [
                            'o'
                        ]
                    },
                ]
            },
            {
                resultsCode: '6',
                cates: [
                    {
                        cate: 'cate0',
                        item: [
                            'a'
                        ]
                    },
                    {
                        cate: 'cate1',
                        item: [
                            'e'
                        ]
                    },
                    {
                        cate: 'cate4',
                        item: [
                            'l'
                        ]
                    },
                    {
                        cate: 'cate5',
                        item: [
                            'o'
                        ]
                    },
                ]
            },
            {
                resultsCode: '7',
                cates: [
                    {
                        cate: 'cate0',
                        item: [
                            'a'
                        ]
                    },
                    {
                        cate: 'cate2',
                        item: [
                            'f'
                        ]
                    },
                    {
                        cate: 'cate4',
                        item: [
                            'j',
                            'k'
                        ]
                    },
                ]
            },
            {
                resultsCode: '8',
                cates: [
                    {
                        cate: 'cate0',
                        item: [
                            'a'
                        ]
                    },
                    {
                        cate: 'cate1',
                        item: [
                            'd'
                        ]
                    },
                    {
                        cate: 'cate4',
                        item: [
                            'i',
                        ]
                    },
                    {
                        cate: 'cate6',
                        item: [
                            'q',
                        ]
                    },
                ]
            },
            {
                resultsCode: '9',
                cates: [
                    {
                        cate: 'cate0',
                        item: [
                            'a',
                            'b'
                        ]
                    },
                    {
                        cate: 'cate2',
                        item: [
                            'g'
                        ]
                    },
                    {
                        cate: 'cate4',
                        item: [
                            'm',
                        ]
                    },
                    {
                        cate: 'cate5',
                        item: [
                            'p',
                        ]
                    },
                ]
            },
            {
                resultsCode: '10',
                cates: [
                    {
                        cate: 'cate0',
                        item: [
                            'a',
                            'b'
                        ]
                    },
                    {
                        cate: 'cate2',
                        item: [
                            'g'
                        ]
                    },
                    {
                        cate: 'cate3',
                        item: [
                            'h',
                        ]
                    },
                    {
                        cate: 'cate5',
                        item: [
                            'p',
                        ]
                    },
                ]
            },
            {
                resultsCode: '11',
                cates: [
                    {
                        cate: 'cate0',
                        item: [
                            'a',
                            'b'
                        ]
                    },
                    {
                        cate: 'cate2',
                        item: [
                            'g'
                        ]
                    },
                    {
                        cate: 'cate4',
                        item: [
                            'i',
                        ]
                    },
                    {
                        cate: 'cate5',
                        item: [
                            'p',
                        ]
                    },
                ]
            },
            {
                resultsCode: '12',
                cates: [
                    {
                        cate: 'cate0',
                        item: [
                            'a',
                            'b'
                        ]
                    },
                    {
                        cate: 'cate3',
                        item: [
                            'h'
                        ]
                    },
                    {
                        cate: 'cate4',
                        item: [
                            'm',
                        ]
                    },
                    {
                        cate: 'cate5',
                        item: [
                            'p',
                        ]
                    },
                ]
            },
            {
                resultsCode: '13',
                cates: [
                    {
                        cate: 'cate0',
                        item: [
                            'c',
                        ]
                    },
                    {
                        cate: 'cate2',
                        item: [
                            'f'
                        ]
                    },
                    {
                        cate: 'cate4',
                        item: [
                            'm',
                        ]
                    },
                    {
                        cate: 'cate5',
                        item: [
                            'p',
                        ]
                    },
                    {
                        cate: 'cate7',
                        item: [
                            'r',
                        ]
                    },
                ]
            },
            {
                resultsCode: '14',
                cates: [
                    {
                        cate: 'cate0',
                        item: [
                            'c',
                        ]
                    },
                    {
                        cate: 'cate3',
                        item: [
                            'h'
                        ]
                    },
                    {
                        cate: 'cate4',
                        item: [
                            'm',
                        ]
                    },
                    {
                        cate: 'cate5',
                        item: [
                            'p',
                        ]
                    },
                    {
                        cate: 'cate7',
                        item: [
                            'r',
                        ]
                    },
                ]
            },
            {
                resultsCode: '15',
                cates: [
                    {
                        cate: 'cate0',
                        item: [
                            'c',
                        ]
                    },
                    {
                        cate: 'cate2',
                        item: [
                            'f'
                        ]
                    },
                    {
                        cate: 'cate5',
                        item: [
                            'p',

                        ]
                    },
                    {
                        cate: 'cate7',
                        item: [
                            'r'
                        ]
                    },
                ]
            },
            {
                resultsCode: '16',
                cates: [
                    {
                        cate: 'cate0',
                        item: [
                            'c',
                        ]
                    },
                    {
                        cate: 'cate5',
                        item: [
                            'p',
                        ]
                    },
                    {
                        cate: 'cate7',
                        item: [
                            'r'
                        ]
                    },
                ]
            },
        ];
        var recommend = [
            {resultsCode : '1', recommendTxt : '펩타이드 성분과 달팽이 점액추출물과 병풀추출물이 피부의 촉촉함을 유지하고 외부 자극으로부터 보호하여 피부 장벽을 강화시켜 수분의 증발을 억제하고 진정 효과와 탄력을 주고 손상된 조직의 빠른 재생을 유도하여 피부를 맑고 건강하게 해준다.'},
            {resultsCode : '2', recommendTxt : '펩타이드 성분과 달팽이 점액추출물과 병풀추출물이 피부의 촉촉함을 유지하고 외부 자극으로부터 보호하여 피부 장벽을 강화시켜 수분의 증발을 억제하고 미백기능성 성분으로 피부를 맑고 건강하게 해준다.'},
            {resultsCode : '3', recommendTxt : '펩타이드 성분과 달팽이 점액추출물과 병풀추출물이 피부의 촉촉함을 유지하고 외부 자극으로부터 보호하여 피부 장벽을 강화시켜 수분의 증발을 억제하고 안티에이징 효과로 피부재생 촉진과 진정, 탄력 효과를 준다.'},
            {resultsCode : '4', recommendTxt : '펩타이드 성분과 달팽이 점액추출물과 병풀추출물이 피부의 촉촉함을 유지하고 외부 자극으로부터 보호하여 피부 장벽을 강화시켜 수분의 증발을 억제하고 피부 탄력과 진정 효과를 준다.'},
            {resultsCode : '5', recommendTxt : '펩타이드 성분과 달팽이 점액추출물과 병풀추출물이 충분한 수분공급과 적당한 유분공급으로 피부가 촉촉하고 매끄러우며, 피부 보호막을 지켜 잔주름 예방 효과적이다.'},
            {resultsCode : '6', recommendTxt : '펩타이드 성분과 달팽이 점액추출물과 병풀추출물이 충분한 수분공급과 적당한 유분공급으로 피부가 촉촉하고 매끄러우며, 피부 보호막을 지켜 잔주름 예방 효과적이며, 미백기능성 성분으로 피부를 맑고 환하게 만들어 준다.'},
            {resultsCode : '7', recommendTxt : '펩타이드 성분과 달팽이 점액추출물과 병풀추출물이 충분한 수분공급과 적당한 유분공급으로 피부가 촉촉하고 매끄러우며, 주름 개선 기능성 성분으로 잔주름 예방 효과적이다.'},
            {resultsCode : '8', recommendTxt : '펩타이드 성분과 달팽이 점액추출물과 병풀추출물이 충분한 수분공급과 적당한 유분공급으로 피부가 촉촉하고 매끄러우며, 피부 보호막을 지켜 잔주름 예방 효과적이다.'},
            {resultsCode : '9', recommendTxt : '피지 막을 손상시키지 않고 천연 성분이 외부환경으로부터 피부를 보호, 진정, 트러블 완화에 도움을 주고, E.G.F 함유로 손상된 피부를 개선시켜준다.'},
            {resultsCode : '10', recommendTxt : '피지 막을 손상시키지 않고 천연 성분이 외부환경으로부터 피부를 보호, 진정, 트러블 완화에 도움을 주고, E.G.F 함유로 손상된 피부를 개선시켜준다.'},
            {resultsCode : '11', recommendTxt : '피지 막을 손상시키지 않고 천연 성분이 외부환경으로부터 피부를 보호, 진정, 트러블 완화에 도움을 주고, E.G.F 함유로 손상된 피부를 개선시켜'},
            {resultsCode : '12', recommendTxt : '피지 막을 손상시키지 않고 천연 성분이 외부환경으로부터 피부를 보호, 진정, 트러블 완화에 도움을 주고, E.G.F 함유로 손상된 피부를 개선시켜준다.'},
            {resultsCode : '13', recommendTxt : '피지 막을 손상시키지 않고 천연 성분이 외부환경으로부터 피부를 보호, 진정, 트러블 완화에 도움을 주고, E.G.F 함유로 손상된 피부를 개선시켜준다.'},
            {resultsCode : '14', recommendTxt : '피지 막을 손상시키지 않고 천연 성분이 외부환경으로부터 피부를 보호, 진정, 트러블 완화에 도움을 주고, E.G.F 함유로 손상된 피부를 개선시켜준다.'},
            {resultsCode : '15', recommendTxt : '피지 막을 손상시키지 않고 천연 성분이 외부환경으로부터 피부를 보호, 진정, 트러블 완화에 도움을 주고, E.G.F 함유로 손상된 피부를 개선시켜준다.'},
            {resultsCode : '16', recommendTxt : '피지 막을 손상시키지 않고 천연 성분이 외부환경으로부터 피부를 보호, 진정, 트러블 완화에 도움을 주고, E.G.F 함유로 손상된 피부를 개선시켜준다.'},

        ]
        var catArray = [];
        for (var i = 0; i < result.length; i++) {
            if (preData == result[i].resultsCode) {
                catArray.push(result[i].cates)
            }
        }
        //catArray : cates: [{cate: 'cate0',item: ['a']}, 
        var exArray = [];
        itemList.map((data) => {
            for (var i = 0; i < catArray[0].length; i++) {
                for (var j = 0; j < catArray[0][i].item.length; j++) {
                    if (data.code === catArray[0][i].cate && data.itemCode == catArray[0][i].item[j]) {
                        exArray.push(data)
                    }
                }
            }
        })
        //exArray : {itemCode: 'a', code: 'cate0', item: '5.8 마일드 클렌저', manual: "피부가 가장 건강한 pH 5.3의 약산성 클렌저로 강한회복력을 지니고 있고 피부 진정에 뛰어난 효과를 지닌각종 천연 추출물과 세포재생인자에 있는 다수의 펩타이드 성분이 클렌징 시 노폐물을 확실하게 제거함과동시에 피부에 강한 활력을 주어 턴오버 주기를 당겨줍니다.", submanual: '적당량을 덜어 충분히 거품을 낸 뒤 마사지하듯이 문질러주며 미온수로 충분히 헹군 후 찬물로 마무리해줍니다.', uri: require('../public/itemimages/58mc.png')}, 
        var resultsArray = [];
        for (var j = 0; j < exArray.length; j++) {
            if (cateData[0] == exArray[j].code) {
                resultsArray.push({ code: cateData[0], item: exArray[j].item, manual: exArray[j].manual, submanual: exArray[j].submanual, uri: exArray[j].uri });
            }
        }
        var txtArray = [];
        recommend.map((data) => {
            if(preData == data.resultsCode) {
                txtArray.push(data.recommendTxt)
            }
        })
        this.state = {
            skinTypeScore: skinScore,
            txtArray : txtArray[0],
        }
        this.props.navigation.setParams({ code: cateData[0], data: resultsArray, preData: preData, cateData: cateData, allCate: allCate })
    }

    functions = () => {
        var sendData = this.props.navigation.getParam('data');
        var sendRoute = this.props.navigation.getParam('code');
        var preData = this.props.navigation.getParam('preData');
        var cateData = this.props.navigation.getParam('cateData');
        var allCate = this.props.navigation.getParam('allCate');

        this.props.navigation.navigate(sendRoute, { data: sendData, resultsCode: preData, cateSelectedCodes: cateData, codeAllCateArray: allCate })
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
                    <View style={styles.topTitle}>
                        <Text style={styles.subTxt}>유형별</Text>
                        <Text style={styles.mainTxt}>나의 피부타입</Text>
                    </View>
                    <View style={styles.statusBarGroup}>
                        <View style={styles.statusBar}>
                            <Text style={{ fontFamily: 'NanumSquareRoundB' }}>건조도</Text>
                            <ImageBackground source={require('../public/images/watery.png')} style={{ height: 30, aspectRatio: 7.482 }}>
                                <View style={styles.progressBar}>
                                    <Animated.View style={[StyleSheet.absoluteFill], { borderTopLeftRadius: 20, borderBottomLeftRadius: 20, backgroundColor: "#BDE0FE", width: width * 0.7 * 0.7 * this.state.skinTypeScore[0] / 100, justifyContent: 'center', alignItems: 'flex-start' }}><Text style={{ fontFamily: 'NanumSquareRoundB', color: '#FFFFFF', padding: 10, textAlign: 'center' }}>{this.state.skinTypeScore[0]} %</Text></Animated.View>
                                </View>
                            </ImageBackground>
                        </View>
                        <View style={styles.statusBar}>
                            <Text style={{ fontFamily: 'NanumSquareRoundB' }}>민감도</Text>
                            <ImageBackground source={require('../public/images/sensitivity.png')} style={{ height: 30, aspectRatio: 7.482 }}>
                                <View style={styles.progressBar}>
                                    <Animated.View style={[StyleSheet.absoluteFill], { borderTopLeftRadius: 20, borderBottomLeftRadius: 20, backgroundColor: "#FFA2B4", width: width * 0.7 * 0.7 * this.state.skinTypeScore[1] / 100, justifyContent: 'center', alignItems: 'flex-start' }}><Text style={{ fontFamily: 'NanumSquareRoundB', color: '#FFFFFF', padding: 10, textAlign: 'center' }}>{this.state.skinTypeScore[1]} %</Text>
                                    </Animated.View>
                                </View>
                            </ImageBackground>
                        </View>
                        <View style={styles.statusBar}>
                            <Text style={{ fontFamily: 'NanumSquareRoundB' }}>색   소</Text>
                            <ImageBackground source={require('../public/images/coloring.png')} style={{ height: 30, aspectRatio: 7.482 }}>
                                <View style={styles.progressBar}>
                                    <Animated.View style={[StyleSheet.absoluteFill], { borderTopLeftRadius: 20, borderBottomLeftRadius: 20, backgroundColor: "#ACF0CB", width: width * 0.7 * 0.7 * this.state.skinTypeScore[2] / 100, justifyContent: 'center', alignItems: 'flex-start' }}><Text style={{ fontFamily: 'NanumSquareRoundB', color: '#FFFFFF', padding: 10, textAlign: 'center' }}>{this.state.skinTypeScore[2]} %</Text>
                                    </Animated.View>
                                </View>
                            </ImageBackground>
                        </View>
                        <View style={styles.statusBar}>
                            <Text style={{ fontFamily: 'NanumSquareRoundB' }}>탄   력</Text>
                            <ImageBackground source={require('../public/images/elasticity.png')} style={{ height: 30, aspectRatio: 7.482 }}>
                                <View style={styles.progressBar}>
                                    <Animated.View style={[StyleSheet.absoluteFill], { borderTopLeftRadius: 20, borderBottomLeftRadius: 20, backgroundColor: "#D27DFF", width: width * 0.7 * 0.7 * this.state.skinTypeScore[3] / 100, justifyContent: 'center', alignItems: 'flex-start' }}><Text style={{ fontFamily: 'NanumSquareRoundB', color: '#FFFFFF', padding: 10, textAlign: 'center' }}>{this.state.skinTypeScore[3]} %</Text>
                                    </Animated.View>
                                </View>
                            </ImageBackground>
                        </View>
                    </View>
                </View>
                <View style={styles.bottomContainer}>
                    <View style={styles.bottomLine}>
                        <View style={{ borderWidth: 0.5, width: width * 0.9, borderColor: '#B5B5B5', }} />
                    </View>
                    <View style={styles.bottomTitle}>
                        <Text style={styles.subTxt}>결과로 본</Text>
                        <Text style={styles.mainTxt}>내 피부상태</Text>
                    </View>
                    <View style={styles.statusBarGroup}>
                        <Text>{this.state.txtArray}</Text>
                    </View>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity onPress={() => this.functions()} style={styles.button}>
                        <Image source={require('../public/images/nxtsbt.png')} style={{
                            height: width * 0.15,
                            aspectRatio: 6.252,
                        }} />
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
        alignItems: 'center'
    },
    topTitle: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        width: width * 0.90,
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
        flex: 4,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    statusBar: {
        paddingBottom: 15,
        width: width * 0.9,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    progressBar: {
        flexDirection: 'row',
        height: 30,
        width: '100%',
        borderRadius: 20,
    },
    bottomContainer: {
        flex: 6,
        alignItems: 'center',
        justifyContent: 'center'
    },
    bottomTitle: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        width: width * 0.9,
    },
    bottomLine: {
        height: height * 0.04,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonContainer: {
        flex: 1,
    },
    button: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#FF7BAC',
    }
});