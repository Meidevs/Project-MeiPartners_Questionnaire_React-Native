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

    constructor(props) {
        super(props)
        var cateData = this.props.navigation.state.params.itemCate;
        var preData = this.props.navigation.state.params.skinCode;
        this.state = {
            skins: preData,
            cates: cateData,
            descriptions: [
                {
                    skinCode: 'skin1',
                    skinType: '건성 타입',
                    items:
                        [{
                            cate: 'code1', item: '5.8 마일드클렌저', manual: "피부가 가장 건강한 pH 5.3의 약산성 클렌저로 강한회복력을 지니고 있고 피부 진정에 뛰어난 효과를 지닌각종 천연 추출물과 세포재생인자에 있는 다수의 펩타이드 성분이 클렌징 시 노폐물을 확실하게 제거함과동시에 피부에 강한 활력을 주어 턴오버 주기를 당겨줍니다.", submanual: '적당량을 덜어 충분히 거품을 낸 뒤 마사지하듯이문질러주며 미온수로 충분히 헹군 후 찬물로 마무리해줍니다.', uri: require('../public/itemimages/58mc.png')
                        },
                        {
                            cate: 'code4', item: 'R 앰플', manual: '순도 99% 이상의 카퍼트라이펩타이드-1와 두가지펩타이드 성분이 더 함유되어 진하고 풍부한 영양성분이 피부 속부터 탄력을 채워주고, 피부를 진정시켜주는 천연 추출물이 함유되어 피부 활력을되찾아 줍니다. 식약처에서 인증받은 주름개선기능성 성분인 아데노신이 함유되어 건강하고 탱탱한 피부로 가꿔줍니다.일회용 포장 제품은 위생적으로 사용할 수 있으며,샘플용으로 활용하기에 매우 용이합니다.', submanual: '적당량을 덜어 얼굴 전체에 충분히 펴 발라 충분히흡수시켜 줍니다.', uri: require('../public/itemimages/ra.png')
                        },
                        {
                            cate: 'code5', item: '쥬얼리 에센스', manual: '달팽이 점액 추출물과 바디의 보석 진주 추출물의 농축된 유효성분들이수분과 영양이 필요한 피부에 작용하여 탄력적이고 건강한 피부로 가꾸어줍니다.', submanual: '적당량을 덜어 원하는 부위에 두드리듯 흡수 시킵니다.', uri: require('../public/itemimages/je.png')
                        },
                        {
                            cate: 'code11', item: '화산재 크림', manual: '미네랄이 풍부한 화산재 크림은 화산재 특유의 미세하고 고운 입자와 우수한 흡착력으로 모공 속 노폐물을 부드럽게 제거해주고 동시에 탄력있는 피부로 가꿔줍니다.', submanual: '세안 후 물기를 제거하고 모공관리가 필요한 부위에 적당량을 덜어 골고루 펴 발라줍니다. 10~15분 후 미온수로 세안하여 깨끗하게 씻어냅니다.', uri: require('../public/itemimages/vc.png')
                        },
                        {
                            cate: 'code12', item: '워터탱크 모이스춰 마스크', manual: '피부에 바르면 물방울이 솟아나와 이 물방울이 피부에 스며들어 건조해진 피부를 더욱 촉촉하고 부드럽게 만들어 줍니다.', submanual: null, uri: require('../public/itemimages/wtmm.png')
                        },
                        {
                            cate: 'code13', item: '미라클 펩타볼륨', manual: '미백,탄력,주름,보습 개선을 한번에 해결하는 집중케어 올인원 미스트형 앰플 펩타이드 6종이 다량 함유되어 피부에 깊은 영양감을 선사해주고 언제 어디서나 피부에 수분과 영양을 빠르고 간편하게 공급해줄 수 있습니다. 강력한 이중 기능성으로 거칠어지고 지친 피부를 케어하고 건강한 피부로 가꿔줍니다.', submanual: '세안 후 또는 건조함이 느껴질 때 눈을 감고 얼굴에서 20~30cm 거리를 두고 골고루 분사시켜 줍니다.', uri: require('../public/itemimages/mpv.png')
                        }],

                },
                {
                    skinCode: 'skin2',
                    skinType: '민감성 타입',
                    items:
                        [{
                            cate: 'code1', item: '5.8 마일드클렌저', manual: "피부가 가장 건강한 pH 5.3의 약산성 클렌저로 강한 회복력을 지니고 있고 피부 진정에 뛰어난 효과를 지닌각종 천연 추출물과 세포 재생 인자에 있는 다수의 펩타이드 성분이 클렌징 시 노폐물을 확실하게 제거함과 동시에 피부에 강한 활력을 주어 턴오버 주기를 당겨줍니다.", submanual: '적당량을 덜어 충분히 거품을 낸 뒤 마사지하듯이 문질러주며 미온수로 충분히 헹군 후 찬물로 마무리해줍니다.', uri: require('../public/itemimages/58mc.png')
                        },
                        {
                            cate: 'code3', item: '하이드라 리차지 스킨', manual: '풍부한 수분 복합체 성분과 알로에성분이 피부에 빠른 진정 효과를 주며 EGF와 폴리페놀 성분이 피부에 영양과 수분을 공급하여 촉촉하고 건강한 피부로 유지시켜 주는 스킨입니다.', submanual: '세안 후 흡수시켜 줍니다.', uri: require('../public/itemimages/hrs.png')
                        },
                        {
                            cate: 'code4', item: '쥬얼리 콘센트레이트 앰플', manual: '달팽이 점액의 ‘콘드로이친황산’ 및 진주가루에 포함된 ‘콘치올린 아미노산’ 성분이 손상되고 지친 피부에 활력과 생기를 제공하여 피부 탄력을 증진시키고 피부 개선에 현저한 도움을 줍니다. 기능성 성분인 아데노신은 피부의 주름개선에 더욱 증가된 효과를 더하여 줍니다.', submanual: '토너를 바른 후 적당량을 원하는 부위에 도포하여 골고루 펴 발라줍니다.', uri: require('../public/itemimages/jca.png')
                        },
                        {
                            cate: 'code5', item: '리바이탈라이즈 세럼', manual: '외부 자극에 의해 손상받거나 민감해진 피부에 EGF와 폴리페놀 성분이 풍부한 영양과 활력을 제공하여 손상된 피부를 현저히 개선시키며 피부의 유연성을 증가시켜 건강하고 탄력적인 피부로 가꾸어 줍니다.', submanual: '적당량을 도포하여 발라주십시오.', uri: require('../public/itemimages/rvs.png')
                        },
                        {
                            cate: 'code7', item: '리뉴얼 콤플렉스 크림', manual: 'EGF와 폴리페놀성분이 수분과 영양이 필요한 피부에 충분한 활력 에너지를 제공하여 촉촉하고 탄력적인 피부로 가꾸어 줍니다. 알부틴의 기능성 성분이 피부미백에 더욱 증가된 효과를 더하여 줍니다.', submanual: '적당량을 펴 바른 후 충분히 두드려 흡수시켜줍니다.', uri: require('../public/itemimages/rcc.png')
                        },
                        {
                            cate: 'code11', item: '화산재 크림', manual: '미네랄이 풍부한 화산재 크림은 화산재 특유의 미세하고 고운 입자와 우수한 흡착력으로 모공 속 노폐물을 부드럽게 제거해주고 동시에 탄력있는 피부로 가꿔줍니다.', submanual: '세안 후 물기를 제거하고 모공관리가 필요한 부위에 적당량을 덜어 골고루 펴 발라줍니다. 10~15분 후 미온수로 세안하여 깨끗하게 씻어냅니다.', uri: require('../public/itemimages/vc.png')
                        },
                        {
                            cate: 'code12', item: '라벤더 수딩마스크', manual: '은은한 라벤더향이 지친 피부에 활력을 주며 피부진정 효과, 여드름 방지 등의 효능을 줍니다.', submanual: null, uri: require('../public/itemimages/lsm.png')
                        }]
                },
                {
                    skinCode: 'skin3',
                    skinType: '트러블 지성 타입',
                    items:
                        [{
                            cate: 'code1', item: '화이트 폼 클렌징', manual: '크리미한 질감과 부드럽고 미세한 거품이 모공 속 노폐물까지 청결하게 해줍니다. EGF와 쌀 추출물 성분이 피부를 촉촉하고 탄력있게 가꿔줍니다.', submanual: '적당량을 덜어 충분히 거품을 낸 뒤 마사지하듯이 문질러주고 미온수로 충분히 헹군 후 찬물로 마무리 해줍니다.', uri: require('../public/itemimages/hfc.png')
                        },
                        {
                            cate: 'code2', item: '리페어 필링 겔', manual: '천연 셀룰로오스 성분이 모공에 남아있는 노폐물까지 자극없이 부드럽게 제거해주어 맑고 깨끗한 피부로 만들어 줍니다. 병풀 추출물이 피부를 진정시키고 EGF성분이 영양을 공급해줍니다.', submanual: '세안 후 물기를 깨끗이 닦아낸 후 적당량을 원하는 부위에 펴 바른 다음, 부드럽게 마사지하듯 문질러줍니다. 필링 겔과 함께 각질이 밀려나오면 물로 충분히 씻어냅니다.', uri: require('../public/itemimages/rfg.png')
                        },
                        {
                            cate: 'code11', item: '화산재 크림', manual: '미네랄이 풍부한 화산재 크림은 화산재 특유의 미세하고 고운 입자와 우수한 흡착력으로 모공 속 노폐물을 부드럽게 제거해주고 동시에 탄력있는 피부로 가꿔줍니다.', submanual: '세안 후 물기를 제거하고 모공관리가 필요한 부위에 적당량을 덜어 골고루 펴 발라줍니다. 10~15분 후 미온수로 세안하여 깨끗하게 씻어냅니다.', uri: require('../public/itemimages/vc.png')
                        },
                        {
                            cate: 'code12', item: '라벤더 수딩마스크', manual: '은은한 라벤더향이 지친 피부에 활력을 주며 피부진정 효과, 여드름 방지 등의 효능을 줍니다.', submanual: null, uri: require('../public/itemimages/lsm.png')
                        }]
                },
                {
                    skinCode: 'skin4',
                    skinType: '색소 성 타입',
                    items:
                        [{
                            cate: 'code1', item: '화이트 폼 클렌징', manual: '크리미한 질감과 부드럽고 미세한 거품이 모공 속 노폐물까지 청결하게 해줍니다. EGF와 쌀 추출물 성분이 피부를 촉촉하고 탄력있게 가꿔줍니다.', submanual: '적당량을 덜어 충분히 거품을 낸 뒤 마사지하듯이 문질러주고 미온수로 충분히 헹군 후 찬물로 마무리 해줍니다.', uri: require('../public/itemimages/hfc.png')
                        },
                        {
                            cate: 'code3', item: '377 화이트닝 토너', manual: '레몬오일과 알부틴을 함유하여 칙칙한 피부를 밝게하여 생기를 부여해주는 고보습 스킨으로, 피부의 유연성을 높여주고 피부를 한 단계 더 촉촉하게 유지시켜 줍니다.', submanual: '세안 후 적당량을 취해 얼굴 및 목에 부드럽게펴 발라 흡수시켜 줍니다.', uri: require('../public/itemimages/377wt.png')
                        },
                        {
                            cate: 'code5', item: '377 화이트닝 에센스', manual: '천연의 지질성분과 유사한 스쿠알란을 사용하여 피부세포의 노폐물을 제거하고 정화시켜 맑고 깨끗한 피부를 유지시켜주며, 알부틴이 함유되어 피부를 더욱 밝고 환하게 가꾸어주는 데 도움을 줍니다.', submanual: '적당량을 덜어 원하는 부위에 두드리듯 흡수시킵니다.', uri: require('../public/itemimages/377we.png')
                        },
                        {
                            cate: 'code4', item: '377 화이트닝 앰플', manual: '최첨단 나노기술로 탄생한 심화이트-377과 알부틴 성분이 감초 추추물, 상백피 추출물 등에 한방 성분과 접목되어 탁월한 미백효과를 나타내는 미백 기능성 인증 제품입니다.', submanual: '스킨을 바른 후 적당량을 원하는 부위에 도포하여 골고루 펴 발라줍니다.', uri: require('../public/itemimages/377wa.png')
                        },
                        {
                            cate: 'code11', item: '화산재 크림', manual: '미네랄이 풍부한 화산재 크림은 화산재 특유의 미세하고 고운 입자와 우수한 흡착력으로 모공 속 노폐물을 부드럽게 제거해주고 동시에 탄력있는 피부로 가꿔줍니다.', submanual: '세안 후 물기를 제거하고 모공관리가 필요한 부위에 적당량을 덜어 골고루 펴 발라줍니다. 10~15분 후 미온수로 세안하여 깨끗하게 씻어냅니다.', uri: require('../public/itemimages/vc.png')
                        },
                        {
                            cate: 'code12', item: '미라클 펩타볼륨', manual: '미백,탄력,주름,보습 개선을 한번에 해결하는 집중케어 올인원 미스트형 앰플 펩타이드 6종이 다량 함유되어 피부에 깊은 영양감을 선사해주고 언제 어디서나 피부에 수분과 영양을 빠르고 간편하게 공급해줄 수 있습니다. 강력한 이중 기능성으로 거칠어지고 지친 피부를 케어하고 건강한 피부로 가꿔줍니다.', submanual: '세안 후 또는 건조함이 느껴질 때 눈을 감고 얼굴에서 20~30cm 거리를 두고 골고루 분사시켜 줍니다.', uri: require('../public/itemimages/mpv.png')
                        },
                        {
                            cate: 'code13', item: '화이트 라이어', manual: '바르는 순간 하얘지는 순간미백 화이트닝 크림으로 식약처에서 인증받은 미백 및 주름개선 기능성 제품입니다. 끈적임 없는 촉촉한 제형으로 하루종일 산뜻하게 유지됩니다.', submanual: '스킨 케어 후에 소량씩 덜어 얼굴 전체에 펴 바른후 두드려 흡수시켜 줍니다.', uri: require('../public/itemimages/wl.png')
                        }]
                },
                {
                    skinCode: 'skin5',
                    skinType: '탄력 주름 타입',
                    items:
                        [{
                            cate: 'code1', item: '화이트 폼 클렌징', manual: '크리미한 질감과 부드럽고 미세한 거품이 모공 속 노폐물까지 청결하게 해줍니다. EGF와 쌀 추출물 성분이 피부를 촉촉하고 탄력있게 가꿔줍니다.', submanual: '적당량을 덜어 충분히 거품을 낸 뒤 마사지하듯이 문질러주고 미온수로 충분히 헹군 후 찬물로 마무리 해줍니다.', uri: require('../public/itemimages/hfc.png')
                        },
                        {
                            cate: 'code2', item: '리페어 필링 겔', manual: '천연 셀룰로오스 성분이 모공에 남아있는 노폐물까지 자극없이 부드럽게 제거해주어 맑고 깨끗한 피부로 만들어 줍니다. 병풀 추출물이 피부를 진정시키고 EGF성분이 영양을 공급해줍니다.', submanual: '세안 후 물기를 깨끗이 닦아낸 후 적당량을 원하는 부위에 펴 바른 다음, 부드럽게 마사지하듯 문질러줍니다. 필링 겔과 함께 각질이 밀려나오면 물로 충분히 씻어냅니다.', uri: require('../public/itemimages/rfg.png')
                        },
                        {
                            cate: 'code3', item: '미라클 펩타볼륨', manual: '미백,탄력,주름,보습 개선을 한번에 해결하는 집중케어 올인원 미스트형 앰플 펩타이드 6종이 다량 함유되어 피부에 깊은 영양감을 선사해주고 언제 어디서나 피부에 수분과 영양을 빠르고 간편하게 공급해줄 수 있습니다. 강력한 이중 기능성으로 거칠어지고 지친 피부를 케어하고 건강한 피부로 가꿔줍니다.', submanual: '세안 후 또는 건조함이 느껴질 때 눈을 감고 얼굴에서 20~30cm 거리를 두고 골고루 분사시켜 줍니다.', uri: require('../public/itemimages/mpv.png')
                        },
                        {
                            cate: 'code4', item: '더 리프팅 R 프리미엄 앰플', manual: '순도 99% 이상의 카퍼트라이펩타이드-1과 아세틸헥사펩타이드-8이 2000ppm함유된 프리미엄 앰플로, 피부 탄력과 주름개선 및 안티에이징에 도움을 주며 에어 클라우드를 통해 앰플을 사용하는 순간 리프팅 효과와 놀라운 탄력감을 경험할 수 있습니다.', submanual: '스킨(토너) 후 앰플 단계에서 사용하며, 에어 Tip 메이크 업 후 분사 시 메이크업 고정 효과', uri: require('../public/itemimages/rrpa.png')
                        },
                        {
                            cate: 'code5', item: 'R 앰플', manual: '순도 99% 이상의 카퍼트라이펩타이드-1와 두가지펩타이드 성분이 더 함유되어 진하고 풍부한 영양성분이 피부 속부터 탄력을 채워주고, 피부를 진정시켜주는 천연 추출물이 함유되어 피부 활력을되찾아 줍니다. 식약처에서 인증받은 주름개선기능성 성분인 아데노신이 함유되어 건강하고 탱탱한 피부로 가꿔줍니다.일회용 포장 제품은 위생적으로 사용할 수 있으며,샘플용으로 활용하기에 매우 용이합니다.', submanual: '적당량을 덜어 얼굴 전체에 충분히 펴 발라 충분히흡수시켜 줍니다.', uri: require('../public/itemimages/ra.png')
                        },
                        {
                            cate: 'code7', item: 'R 크림', manual: '순도 99% 이상의 카퍼트라이펩타이드-1과 아세틸헥사펩타이드-8이 함유된 기능성 크림입니다. 강력한 이중 보습 성분들과 식약처에서 인증받은 주름개선기능성 성분인 아데노신이 함유되어있고, 부드러운 발림성으로 피부에 영양과 수분을 빠르게 공급하여 피부 속부터 채워지는 깊은 보습감과 탄력감을 느낄 수 있습니다. 일회용 포장제품은 위생적으로 사용할 수 있으며, 샘플용으로 활용하기에 매우 용이합니다.', submanual: '적당량을 덜어 얼굴 전체에 충분히 펴 발라 충분히 흡수시켜 줍니다.', uri: require('../public/itemimages/rc.png')
                        },
                        {
                            cate: 'code11', item: '화산재 크림', manual: '미네랄이 풍부한 화산재 크림은 화산재 특유의 미세하고 고운 입자와 우수한 흡착력으로 모공 속 노폐물을 부드럽게 제거해주고 동시에 탄력있는 피부로 가꿔줍니다.', submanual: '세안 후 물기를 제거하고 모공관리가 필요한 부위에 적당량을 덜어 골고루 펴 발라줍니다. 10~15분 후 미온수로 세안하여 깨끗하게 씻어냅니다.', uri: require('../public/itemimages/vc.png')
                        },
                        {
                            cate: 'code12', item: '펩타이드 이지에프 마스크', manual: '부드러운 텍스쳐타입의 제형으로 상피세포성장인자가 함유되어 있어 손상된 피부를 케어하고 칙칙하고 생기없는 각질층에 유·수분을 공급함으로서 유연하고 투명감있는 피부로 가꾸어줍니다.', submanual: null, uri: require('../public/itemimages/pegf.png'),
                        },
                        {
                            cate: 'code13', item: '화이트 라이어', manual: '바르는 순간 하얘지는 순간미백 화이트닝 크림으로 식약처에서 인증받은 미백 및 주름개선 기능성 제품입니다. 끈적임 없는 촉촉한 제형으로 하루종일 산뜻하게 유지됩니다.', submanual: '스킨 케어 후에 소량씩 덜어 얼굴 전체에 펴 바른후 두드려 흡수시켜 줍니다.', uri: require('../public/itemimages/wl.png')
                        }]
                }
            ]
        }
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
                <View styles={styles.txtDesignContent}>
                    <Text style={{ fontSize: width * 0.05, fontWeight: '400', textAlign: 'left', lineHeight: 30, color: '#222222' }}>{data.item.manual}</Text>
                </View>
                <View styles={styles.txtDesignContent}>
                    <Text style={{ fontSize: width * 0.05, fontWeight: '400', textAlign: 'left', lineHeight: 30, color: '#FFFAFC' }}>{data.item.submanual}</Text>
                </View>
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
                                            <Image source={data.uri} style={{flex : 1, aspectRatio : 1.2, resizeMode :'contain'}}/>
                                        </View>
                                        <Text style={styles.text}>{data.item}</Text>
                                    </View>
                                </View>
                                <View style={styles.sliderBottom}>
                                    <FlatList
                                        data={[data]}
                                        renderItem={item => this.renderItem(item)}
                                        keyExtractor={item => item.cate}
                                    />
                                </View>
                            </View>
                        )
                    } else {
                        return (
                            // <ImageBackground source={require('../public/images/lpback.png')} style={{ backgroundColor: '#E4F2F7', flex: 1, aspectRatio: 0.818, resizeMode: 'cover' }}>
                                <View style={styles.topContainer_LP}>
                                    <View style={styles.upperContainer_LP}>
                                        <Text style={styles.LastTxt}>현재 당신의 피부는 어떠한가요?</Text>
                                        <Text></Text>
                                        <Text style={styles.LastTxt}>당신만의 솔루션을 통해 변화되어가는</Text>
                                        <Text style={styles.LastTxt}>당신의 피부가 궁금하지 않나요?</Text>
                                        <Text></Text>
                                        <Text style={styles.LastTxt}>새롭게 만들어질 뷰티앱 LOV.U가</Text>
                                        <Text style={styles.LastTxt}>더 많은 솔루션들과 더 상세한 컨텐츠들로</Text>
                                        <Text style={styles.LastTxt}>당신의 피부를 함께 관리해드리겠습니다.</Text>
                                        <Text></Text>
                                        <Text style={styles.LastTxt}>뷰티앱 LOV.U를 기다려주세요!</Text>

                                    </View>
                                    <View style={styles.downerContainer_LP}>
                                        <View style={styles.girlImageBox}>
                                            {/* <Image source={require('../public/images/lpgirl.png')} style={{ flex: 1, resizeMode: 'cover', aspectRatio: 0.856 }} /> */}
                                        </View>
                                    </View>
                                </View>
                            // </ImageBackground>
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
        flex: 2,
    },
    sliderBottom: {
        backgroundColor: '#F8B7BD',
        flex: 1,
    },
    sliderImage: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    itemImages : {
        width : width*0.8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width,
        flex: 1
    },
    txtDesign: {
        padding: 10,
    },
    txtDesignContent: {
        marginTop: 100,
    },
    text: {
        marginBottom: 10,
        fontSize: width * 0.05,
        fontWeight: '400',
        color: '#444444'
    },
    child: {
        height: height * 0.5,
        width,
        justifyContent: 'center'
    },
    topContainer_LP: {
        flex: 1,
        width: width,
    },
    upperContainer_LP: {
        flex: 5,
        width: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    downerContainer_LP: {
        flex: 4,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    girlImageBox: {
        width: width * 0.5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    LastTxt: {
        color: '#005257',
        fontSize: width * 0.05,
        fontWeight: '900',
    }
});