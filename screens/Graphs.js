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
                itemCode: 'n', code: 'cate5', item: '이오 마스크', manual: "아데노신이 함유되어 주름개선에 도움을 주며, 금사연둥지추출물과 울릉도에서 채취한 대황을 이오코리아만의 공법으로 농축하여 만들어 풍성한 보습력으로 피부를 촉촉하고 탱탱하게 가꾸는데 도움을 주는 마스크 시트입니다.", submanual: '세안 후 토너로 피부결을 정돈한 뒤 파우치에 든 마스크를 꺼내어 얼굴에 밀착되도록 부착시킵니다. 약 10~20분 휴식을 취한 뒤 마스크를 떼어 낸 후 피부에 남아있는 에센스를 가볍게 두드려 흡수시켜줍니다.', uri: require('../public/itemimages/em.png')
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
            {resultsCode : '1', recommendTxt : '날씨, 자극적인 음료, 음식, 스트레스에 따라 피부가 민감한 반응을 보이며 피부 장벽이 약해지고 피부의 유.수분 밸런스가 깨져 피부가 건조해지므로 잔주름이 잘생기고 자외선 노출에 의해 피부가 칙칙해지며 색소 침착 등 피부 변화가 생기는 피부타입이다.'},
            {resultsCode : '2', recommendTxt : '날씨, 자극적인 음료, 음식, 스트레스에 따라 피부가 민감한 반응을 보이며 피부 장벽이 약해지고 피부의 유.수분 밸런스가 깨져 화장 후에도 피부 당김이 심해 각질이 일어나고 피부가 칙칙하고 어두운 피부타입이다.'},
            {resultsCode : '3', recommendTxt : '날씨, 자극적인 음료, 음식, 스트레스에 따라 피부가 민감한 반응을 보이며 피부 장벽이 약해지고 피부의 유.수분 밸런스가 깨져 피부가 건조해지므로 잔주름이 잘생기기 쉬운 피부 타입이다.'},
            {resultsCode : '4', recommendTxt : '날씨, 자극적인 음료, 음식, 스트레스에 따라 피부가 민감한 반응을 보이며 피부 장벽이 약해지고 피부의 유.수분 밸런스가 깨져 화장 후에도 피부 당김이 심해 각질이 일어나고 들뜨는 피부타입이다.'},
            {resultsCode : '5', recommendTxt : '피부의 유분과 수분이 모두 부족한 상태이므로 잔주름이 잘생기고 모공이 작고 피부가 얇아 자외선 노출에 의해 피부가 칙칙해지면서 색소 침착 등 피부 변화가 생기는 피부타입이다.'},
            {resultsCode : '6', recommendTxt : '피부가 얇고 유 수분이 부족하여 피부 결은 좋지만 윤기가 없으며, 피부 장벽의 보습 기능이 약해져 건조함이 심해 피부가 칙칙하고 어두우며, 자외선 노출로 색소침착이 잘 되는 피부 타입입니다.'},
            {resultsCode : '7', recommendTxt : '세안 후 피부 당김이 있고 피부가 얇으며 모공이 작다. 피부에 유 수분이 부족하여 각질이 일어나 푸석해 보이고, 잔주름이 잘생기므로 눈가나 팔자에 깊은 주름이 잘 생기는 피부타입이다.'},
            {resultsCode : '8', recommendTxt : '세안 후 피부 당김이 있고 피부가 얇으며 모공이 작다. 피부에 유 수분이 부족하여 각질이 일어나 푸 석해 보이고, 화장을 했을 때 화장이 들뜨고 일어나며 윤기가 없는 피부타입이다.'},
            {resultsCode : '9', recommendTxt : '피부 결이 거칠고 두꺼우며 모공이 눈에 띄게 크고 피지선 활동이 활발하여 과다한 피지 분비로 피부가 번들거리고, 조금만 자극에도 트러블이 나며, 자외선을 받으면 붉어지고, 색소 침착이 잘되며 상처가 나면 아물지 않고 오래가고  피부가 칙칙하고 어두우며 피부가 말랑말랑하여 탄력 도가 떨어지는 피부 타입입니다.'},
            {resultsCode : '10', recommendTxt : '피부 결이 거칠고 두꺼우며 모공이 눈에 띄게 크고 피지선 활동이 활발하여 과다한 피지 분비로 피부가 번들거리고, 조금만 자극에도 트러블이 나며, 자외선을 받으면 붉어지고, 피부 변화가 있으며 상처가 나면 없어지지 않고 색소침착이 잘되는 피부 타입입니다.'},
            {resultsCode : '11', recommendTxt : '피부 결이 거칠고 두꺼우며 모공이 눈에 띄게 크고 피지선 활동이 활발하여 과다한 피지 분비로 피부가 번들거리고, 조금만 자극에도 트러블이 나며, 자외선을 받으면 붉어지고, 상처가 나면 아물지 않고 오래가며  피부가 말랑말랑하여 탄력도가 떨어지는 피부 타입입니다.'},
            {resultsCode : '12', recommendTxt : '피부 결이 거칠고 두꺼우며 모공이 눈에 띄게 크고 피지선 활동이 활발하여 과다한 피지 분비로 피부가 번들거리고, 조금만 자극에도 트러블이 나며, 자외선을 받으면 붉어지고, 상처가 나면 아물지 않고 오래가는 피부 타입니다.'},
            {resultsCode : '13', recommendTxt : '유분이 많고, 피지와 노폐물이 모공을 막아 트러블이 생기기 쉽고, 피부가 칙칙하고 어두우며 얼굴의 짙은 점은 햇볕에 의해 악화가 되고, 눈 밑 지방과 다크 서클이 심하며, 외부적인 요인으로 자외선 노출로 콜라겐과 엘라스틴 파괴로 피부 처짐과 주름을 유발하는 피부 타입입니다.'},
            {resultsCode : '14', recommendTxt : '피지 분비 기능이 활발하여 전체적으로 피부가 번들거리고 피부가 두껍고 모공이 크며 피지나 피부 노폐물이 쌓여 모공이 막히기 쉬워 여드름이나 뾰루지가 잘 생기는 피부 타입입니다.'},
            {resultsCode : '15', recommendTxt : '피지 분비 기능이 활발하여 전체적으로 피부가 번들거리고 피부가 두꺼우며 피지나 피부 노폐물이 쌓여 모공이 막히기 쉬워 여드름이나 뾰루지가 잘 생기고 외부적인 요인으로 자외선 노출로 콜라겐과 엘라스틴 파괴로 피부 처짐과 주름을 유발하는 피부 타입입니다.'},
            {resultsCode : '16', recommendTxt : '피지 분비 기능이 활발하여 전체적으로 피부가 번들거리고 피부가 두껍고 모공이 크며 피지나 피부 노폐물이 쌓여 모공이 막히기 쉬워 여드름이나 뾰루지가 잘 생기는 피부 타입입니다.'},

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
                            <ImageBackground source={require('../public/images/watery.png')} style={{ height: height * 0.050, aspectRatio: 7.482 }}>
                                <View style={styles.progressBar}>
                                    <Animated.View style={[StyleSheet.absoluteFill], { borderTopLeftRadius: 20, borderBottomLeftRadius: 20, backgroundColor: "#BDE0FE", width: width * 0.7 * 0.7 * this.state.skinTypeScore[0] / 100, justifyContent: 'center', alignItems: 'flex-start' }}><Text style={{width : width * 0.20, fontFamily: 'NanumSquareRoundEB', color: '#FFFFFF', padding: 10, textAlign: 'center' }}>{this.state.skinTypeScore[0]} %</Text></Animated.View>
                                </View>
                            </ImageBackground>
                        </View>
                        <View style={styles.statusBar}>
                            <Text style={{ fontFamily: 'NanumSquareRoundB' }}>민감도</Text>
                            <ImageBackground source={require('../public/images/sensitivity.png')} style={{ height: height * 0.050, aspectRatio: 7.482 }}>
                                <View style={styles.progressBar}>
                                    <Animated.View style={[StyleSheet.absoluteFill], { borderTopLeftRadius: 20, borderBottomLeftRadius: 20, backgroundColor: "#FFA2B4", width: width * 0.7 * 0.7 * this.state.skinTypeScore[1] / 100, justifyContent: 'center', alignItems: 'flex-start' }}><Text style={{width : width * 0.20, fontFamily: 'NanumSquareRoundEB', color: '#FFFFFF', padding: 10, textAlign: 'center' }}>{this.state.skinTypeScore[1]} %</Text>
                                    </Animated.View>
                                </View>
                            </ImageBackground>
                        </View>
                        <View style={styles.statusBar}>
                            <Text style={{ fontFamily: 'NanumSquareRoundB' }}>색   소</Text>
                            <ImageBackground source={require('../public/images/coloring.png')} style={{ height: height * 0.050, aspectRatio: 7.482 }}>
                                <View style={styles.progressBar}>
                                    <Animated.View style={[StyleSheet.absoluteFill], { borderTopLeftRadius: 20, borderBottomLeftRadius: 20, backgroundColor: "#ACF0CB", width: width * 0.7 * 0.7 * this.state.skinTypeScore[2] / 100, justifyContent: 'center', alignItems: 'flex-start' }}><Text style={{width : width * 0.20, fontFamily: 'NanumSquareRoundEB', color: '#FFFFFF', padding: 10, textAlign: 'center' }}>{this.state.skinTypeScore[2]} %</Text>
                                    </Animated.View>
                                </View>
                            </ImageBackground>
                        </View>
                        <View style={styles.statusBar}>
                            <Text style={{ fontFamily: 'NanumSquareRoundB' }}>탄   력</Text>
                            <ImageBackground source={require('../public/images/elasticity.png')} style={{ height: height * 0.050, aspectRatio: 7.482 }}>
                                <View style={styles.progressBar}>
                                    <Animated.View style={[StyleSheet.absoluteFill], { borderTopLeftRadius: 20, borderBottomLeftRadius: 20, backgroundColor: "#D27DFF", width: width * 0.7 * 0.7 * this.state.skinTypeScore[3] / 100, justifyContent: 'center', alignItems: 'flex-start' }}><Text style={{width : width * 0.20, fontFamily: 'NanumSquareRoundEB', color: '#FFFFFF', padding: 10, textAlign: 'center' }}>{this.state.skinTypeScore[3]} %</Text>
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
                    <View style={styles.bottomTxt}>
                        <Text style={styles.bottomRTxt}>{this.state.txtArray}</Text>
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
        width : width * 0.9,
    },
    statusBar: {
        paddingBottom: height * 0.02,
        width: width * 0.9,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    progressBar: {
        flexDirection: 'row',
        height: height * 0.050,
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
    bottomTxt : {
        flex: 4,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width : width * 0.9,
    },
    bottomRTxt : {
        color : '#676767',
        fontFamily : 'NanumSquareRoundR',
        lineHeight : 20,
    },
    button: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#FF7BAC',
    }
});