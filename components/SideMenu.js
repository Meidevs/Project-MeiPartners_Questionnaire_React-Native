import PropTypes from 'prop-types';
import React, { Component, Children } from 'react';
import { NavigationActions, ThemeColors } from 'react-navigation';
import { ScrollView, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

class SideMenu extends Component {
  constructor(props) {
    super(props)
    
    var allCate = this.props.navigation._childrenNavigation.Graphs.state.params.codeAllCateArray;
    var cateData = this.props.navigation._childrenNavigation.Graphs.state.params.cateSelectedCodes;
    var preData = this.props.navigation._childrenNavigation.Graphs.state.params.resultsCodes;

    this.state = {
      cateArray: allCate,
      cates: cateData,
      listsNum: preData,
      itemList: [
        {
          itemCode: 'a', code: 'cate0', item: '5.8 마일드 클렌저', manual: "피부가 가장 건강한 pH 5.3의 약산성 클렌저로 강한회복력을 지니고 있고 피부 진정에 뛰어난 효과를 지닌각종 천연 추출물과 세포재생인자에 있는 다수의 펩타이드 성분이 클렌징 시 노폐물을 확실하게 제거함과동시에 피부에 강한 활력을 주어 턴오버 주기를 당겨줍니다.", submanual: '적당량을 덜어 충분히 거품을 낸 뒤 마사지하듯이문질러주며 미온수로 충분히 헹군 후 찬물로 마무리해줍니다.', uri: require('../public/itemimages/58mc.png')
        },
        {
          itemCode: 'b', code: 'cate0', item: '펩타 버블 클렌저', manual: "", submanual: '', uri: require('../public/itemimages/58mc.png')
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
          itemCode: 'i', code: 'cate4', item: '쥬얼리 크림', manual: "", submanual: '', uri: require('../public/itemimages/58mc.png')
        },
        {
          itemCode: 'j', code: 'cate4', item: 'R 크림', manual: '순도 99% 이상의 카퍼트라이펩타이드-1과 아세틸헥사펩타이드-8이 함유된 기능성 크림입니다. 강력한 이중 보습 성분들과 식약처에서 인증받은 주름개선기능성 성분인 아데노신이 함유되어있고, 부드러운 발림성으로 피부에 영양과 수분을 빠르게 공급하여 피부 속부터 채워지는 깊은 보습감과 탄력감을 느낄 수 있습니다. 일회용 포장제품은 위생적으로 사용할 수 있으며, 샘플용으로 활용하기에 매우 용이합니다.', submanual: '적당량을 덜어 얼굴 전체에 충분히 펴 발라 충분히 흡수시켜 줍니다.', uri: require('../public/itemimages/rc.png')
        },
        {
          itemCode: 'k', code: 'cate4', item: '네오 아이 블러썸', manual: "", submanual: '', uri: require('../public/itemimages/58mc.png')
        },
        {
          itemCode: 'l', code: 'cate4', item: '377 화이트닝 크림', manual: "", submanual: '', uri: require('../public/itemimages/58mc.png')
        },
        {
          itemCode: 'm', code: 'cate4', item: '콤플렉스 크림', manual: 'EGF와 폴리페놀성분이 수분과 영양이 필요한 피부에 충분한 활력 에너지를 제공하여 촉촉하고 탄력적인 피부로 가꾸어 줍니다. 알부틴의 기능성 성분이 피부미백에 더욱 증가된 효과를 더하여 줍니다.', submanual: '적당량을 펴 바른 후 충분히 두드려 흡수시켜줍니다.', uri: require('../public/itemimages/rcc.png')
        },
        {
          itemCode: 'n', code: 'cate5', item: '이오 마스크', manual: "", submanual: '', uri: require('../public/itemimages/58mc.png')
        },
        {
          itemCode: 'o', code: 'cate5', item: '377 나노셀 페이스 마스크', manual: "", submanual: '', uri: require('../public/itemimages/58mc.png')
        },
        {
          itemCode: 'p', code: 'cate5', item: 'DX에센스 & 파우더', manual: "", submanual: '', uri: require('../public/itemimages/58mc.png')
        },
        {
          itemCode: 'q', code: 'cate6', item: '미라클 펩타 볼륨', manual: '미백,탄력,주름,보습 개선을 한번에 해결하는 집중케어 올인원 미스트형 앰플 펩타이드 6종이 다량 함유되어 피부에 깊은 영양감을 선사해주고 언제 어디서나 피부에 수분과 영양을 빠르고 간편하게 공급해줄 수 있습니다. 강력한 이중 기능성으로 거칠어지고 지친 피부를 케어하고 건강한 피부로 가꿔줍니다.', submanual: '세안 후 또는 건조함이 느껴질 때 눈을 감고 얼굴에서 20~30cm 거리를 두고 골고루 분사시켜 줍니다.', uri: require('../public/itemimages/mpv.png')
        },
        {
          itemCode: 'r', code: 'cate7', item: '필링 겔', manual: '천연 셀룰로오스 성분이 모공에 남아있는 노폐물까지 자극없이 부드럽게 제거해주어 맑고 깨끗한 피부로 만들어 줍니다. 병풀 추출물이 피부를 진정시키고 EGF성분이 영양을 공급해줍니다.', submanual: '세안 후 물기를 깨끗이 닦아낸 후 적당량을 원하는 부위에 펴 바른 다음, 부드럽게 마사지하듯 문질러줍니다. 필링 겔과 함께 각질이 밀려나오면 물로 충분히 씻어냅니다.', uri: require('../public/itemimages/rfg.png')
        },
      ],
      result: [
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
                'l',
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
      ],
    }
    //Matching the listsNum with this.state.result.resultsCode, Push cates Data to cateArray
    var catArray = [];
    for (var i = 0; i < this.state.result.length; i++) {
      if (this.state.listsNum == this.state.result[i].resultsCode) {
        catArray.push(this.state.result[i].cates)
      }
    }
    //Matching the cate Code with this.state.cates, Push item Code into exArray
    var exArray = [];
    this.state.itemList.map((data) => {
      for (var i = 0; i < catArray[0].length; i++) {
        for (var j = 0; j < catArray[0][i].item.length; j++) {
          if (data.code === catArray[0][i].cate && data.itemCode == catArray[0][i].item[j]) {
            exArray.push(data)
          }
        }
      }
    })
    var resultsArray = [];
    for(var  i = 0; i < this.state.cateArray.length; i++) {
      for(var j = 0; j < exArray.length; j++) {
        if(this.state.cateArray[i].code == exArray[j].code) {
          resultsArray.push({code : this.state.cateArray[i].code, name : this.state.cateArray[i].name, item : exArray[j].item, manual : exArray[j].manual, uri : exArray[j].uri});
        }
      }
    }
    this.state = {
      dataSource: allCate,
      resultsArray : resultsArray
    }
    console.log(this.state.resultsArray)
  }

  render() {
    const mapToCateArray = data => {
      return data.map((data, i) => {
        var dataArray = [];
        for(var j = 0; j < this.state.resultsArray.length; j++) {
          if (data.code == this.state.resultsArray[j].code) {
            dataArray.push(this.state.resultsArray[j])
          }
        }
        return (
          <ScrollView>
            <View>
              <TouchableOpacity onPress={() => this.props.navigation.navigate(data.code, {code : data.code, data : dataArray})}>
                <Text>{data.name}</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>

        )
      })
    }
    return (
      <View>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Graphs')}>
          <Text>그래프</Text>
        </TouchableOpacity>
        {mapToCateArray(this.state.dataSource)}
      </View>
    );
  }
}

SideMenu.propTypes = {
  navigation: PropTypes.object
};

export default SideMenu;