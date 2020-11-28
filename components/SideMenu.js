import PropTypes from 'prop-types';
import React, { Component, Children } from 'react';
import { NavigationActions, ThemeColors } from 'react-navigation';
import { Text, View, StyleSheet, Dimensions, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ProgressBar } from 'react-native-paper';
const { width, height } = Dimensions.get('window');

class SideMenu extends Component {
  constructor(props) {
    super(props)
    // SideMenu is in the DrawerStack. And, SideMenu's props are declared in the _childrenNavigation;
    // _childrenNavigation has resultsCode, codeAllCateArray, cateSelectedCodes;
    var routesKeys = Object.keys(this.props.navigation._childrenNavigation)
    var preData, allCate, cateData;
    for (var i = 0; i < routesKeys.length; i++) {
      // If One of Category is selected at the cate0 - 1 Screens, there is routesKeys;
      if (this.props.navigation._childrenNavigation[routesKeys[i]].state.params != undefined) {
        var routeName = routesKeys[i];

        preData = this.props.navigation._childrenNavigation[routeName].state.params.resultsCode;
        allCate = this.props.navigation._childrenNavigation[routeName].state.params.codeAllCateArray;
        cateData = this.props.navigation._childrenNavigation[routeName].state.params.cateSelectedCodes;

      }
    }
    // Set Categories to show at the SideMenu View;
    this.state = {
      listsNum: preData,
      cateArray: allCate,
      cates: cateData,
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
    // Initial check which of category is selected & render diffrently icon & text;
    var rawArray = [];
    for (var i = 0; i < this.state.cateArray.length; i++) {
      for (var j = 0; j < this.state.itemCategories.length; j++) {
        if (this.state.cateArray[i].code == this.state.itemCategories[j].code) {
          if (this.state.cates == this.state.itemCategories[j].code) {
            this.state.itemCategories[j].isSelected = !this.state.itemCategories[j].isSelected;
            this.state.itemCategories[j].txtSelection = this.state.itemCategories[j].isSelected ? styles.itemCategoriesTxtPress : styles.itemCategoriesTxt;
          }
          rawArray.push(this.state.itemCategories[j])
        }
      }
    }
    this.state = {
      dataSource: rawArray
    }
    this.props.navigation.setParams({ cateData: cateData, preData: preData, itemList: this.state.itemList, result: this.state.result })
  }

  sendDataCode() {
    var code;

    //Exception Process, None Of Categories are Selected
    var expArray = [];
    for (var x = 0; x < this.state.dataSource.length; x++) {
      if (this.state.dataSource[x].isSelected == true) {
        expArray.push(true)
      }
    }

    if (expArray[0] == undefined) {
      alert('카테고리를 선택해주세요')
    } else {
      for (var x = 0; x < this.state.dataSource.length; x++) {
        if (this.state.dataSource[x].isSelected == true) {
          code = this.state.dataSource[x].code;
        }
      }
      var listsNum = this.props.navigation.getParam('preData');
      var itemList = [
        {
            itemCode: 'a', code: 'cate0', item: '5.8 마일드 클렌저', manual: "피부가 가장 건강한 pH 5.3의 약산성 클렌저로 강한회복력을 지니고 있고 피부 진정에 뛰어난 효과를 지닌각종 천연 추출물과 세포재생인자에 있는 다수의 펩타이드 성분이 클렌징 시 노폐물을 확실하게 제거함과동시에 피부에 강한 활력을 주어 턴오버 주기를 당겨줍니다.", submanual: '적당량을 덜어 충분히 거품을 낸 뒤 마사지하듯이 문질러주며 미온수로 충분히 헹군 후 찬물로 마무리해줍니다.', uri: require('../public/itemimages/58mc.png')
        },
        {
            itemCode: 'b', code: 'cate0', item: '화이트 폼 클렌징', manual: '크리미한 질감과 부드럽고 미세한 거품이 모공 속 노폐물까지 청결하게 해줍니다. EGF와 쌀 추출물 성분이 피부를 촉촉하고 탄력있게 가꿔줍니다.', submanual: '적당량을 덜어 충분히 거품을 낸 뒤 마사지하듯이 문질러주고 미온수로 충분히 헹군 후 찬물로 마무리 해줍니다.', uri: require('../public/itemimages/hfc.png')
        },
        {
            itemCode: 'c', code: 'cate1', item: 'R 앰플', manual: '순도 99% 이상의 카퍼트라이펩타이드-1와 두가지펩타이드 성분이 더 함유되어 진하고 풍부한 영양성분이 피부 속부터 탄력을 채워주고, 피부를 진정시켜주는 천연 추출물이 함유되어 피부 활력을되찾아 줍니다. 식약처에서 인증받은 주름개선기능성 성분인 아데노신이 함유되어 건강하고 탱탱한 피부로 가꿔줍니다.일회용 포장 제품은 위생적으로 사용할 수 있으며,샘플용으로 활용하기에 매우 용이합니다.', submanual: '적당량을 덜어 얼굴 전체에 충분히 펴 발라 충분히흡수시켜 줍니다.', uri: require('../public/itemimages/ra.png')
        },
        {
            itemCode: 'd', code: 'cate1', item: '더 리프팅 R 프리미엄 앰플', manual: '순도 99% 이상의 카퍼트라이펩타이드-1과 아세틸헥사펩타이드-8이 2000ppm함유된 프리미엄 앰플로, 피부 탄력과 주름개선 및 안티에이징에 도움을 주며 에어 클라우드를 통해 앰플을 사용하는 순간 리프팅 효과와 놀라운 탄력감을 경험할 수 있습니다.', submanual: '스킨(토너) 후 앰플 단계에서 사용하며, 에어 Tip 메이크 업 후 분사 시 메이크업 고정 효과', uri: require('../public/itemimages/rrpa.png')
        },
        {
            itemCode: 'e', code: 'cate2', item: '리바이탈라이즈 세럼', manual: '외부 자극에 의해 손상받거나 민감해진 피부에 EGF와 폴리페놀 성분이 풍부한 영양과 활력을 제공하여 손상된 피부를 현저히 개선시키며 피부의 유연성을 증가시켜 건강하고 탄력적인 피부로 가꾸어 줍니다.', submanual: '적당량을 도포하여 발라주십시오.', uri: require('../public/itemimages/rvs.png')
        },
        {
            itemCode: 'f', code: 'cate2', item: 'AC 에센스', manual: '레몬 오일의 함유로 과도한 피지분비를 막아주며 특허추출물인 인삼추출물 함유로 여드름균, 아토피원인의 균들의 활성을 막아주어 피부트러블의 원인을 억제시켜줍니다.', submanual: '적당량을 도포하여 발라줍니다.', uri: require('../public/itemimages/ace.png')
        },
        {
            itemCode: 'g', code: 'cate3', item: 'R 크림', manual: '순도 99% 이상의 카퍼트라이펩타이드-1과 아세틸헥사펩타이드-8이 함유된 기능성 크림입니다. 강력한 이중 보습 성분들과 식약처에서 인증받은 주름개선기능성 성분인 아데노신이 함유되어있고, 부드러운 발림성으로 피부에 영양과 수분을 빠르게 공급하여 피부 속부터 채워지는 깊은 보습감과 탄력감을 느낄 수 있습니다. 일회용 포장제품은 위생적으로 사용할 수 있으며, 샘플용으로 활용하기에 매우 용이합니다.', submanual: '적당량을 덜어 얼굴 전체에 충분히 펴 발라 충분히 흡수시켜 줍니다.', uri: require('../public/itemimages/rc.png')
        },
        {
            itemCode: 'h', code: 'cate3', item: '리뉴얼 콤플렉스 크림', manual: 'EGF와 폴리페놀성분이 수분과 영양이 필요한 피부에 충분한 활력 에너지를 제공하여 촉촉하고 탄력적인 피부로 가꾸어 줍니다. 알부틴의 기능성 성분이 피부미백에 더욱 증가된 효과를 더하여 줍니다.', submanual: '적당량을 펴 바른 후 충분히 두드려 흡수시켜줍니다.', uri: require('../public/itemimages/rcc.png')
        },
        {
            itemCode: 'i', code: 'cate3', item: 'AC 크림', manual: '특허추출물인 인삼추출물 함유로 여드름균 등의 피부 트러블 원인의 활성을 막아주며 알로에베라 잎 추출물이 함유되어 피부에 대한 진정효과도 뛰어납니다. 또한 BHA(바하)성분의 함유로  모공 속 쌓인 각질 및 피지 등 노폐물을 분해시켜 피부를 맑게 해줍니다.', submanual: '적당량을 펴 바른 후 충분히 두드려 흡수시켜줍니다.',  uri: require('../public/itemimages/acc.png')
        },
        {
            itemCode: 'j', code: 'cate4', item: 'DX에센스 & 파우더', manual: "다양한 천연 가루와 천연 추출물 성분을 함유하여 피부진정 및 쿨링, 피부결 개선, 피부 보습에 도움을 줍니다. 디엑스 파우더가 1회분씩 개별 포장되어 내용물의 변질을 막아주고 위생적이고 간편 하게 관리할 수 있는 One Day Use 제품입니다.", submanual: '에센스 10ml와 파우더 1개입을 용기에 부어 골고루 섞어줍니다. 눈가와 입가를 제외한 얼굴에 고르게 도포 해주고 10~20분 경과 후 물 세안으로 마무리해줍니다.', uri: require('../public/itemimages/dx.png')
        },
        {
            itemCode: 'k', code: 'cate5', item: 'GNB8 화이트닝 펩타 미스트', manual: '미백,탄력,주름,보습 개선을 한번에 해결하는 집중케어 올인원 미스트형 앰플 펩타이드 6종이 다량 함유되어 피부에 깊은 영양감을 선사해주고 언제 어디서나 피부에 수분과 영양을 빠르고 간편하게 공급해줄 수 있습니다. 강력한 이중 기능성으로 거칠어지고 지친 피부를 케어하고 건강한 피부로 가꿔줍니다.', submanual: '세안 후 또는 건조함이 느껴질 때 눈을 감고 얼굴에서 20~30cm 거리를 두고 골고루 분사시켜 줍니다.', uri: require('../public/itemimages/gnb8.png')
        },
        {
            itemCode: 'l', code: 'cate6', item: '리페어 필링 겔', manual: '천연 셀룰로오스 성분이 모공에 남아있는 노폐물까지 자극없이 부드럽게 제거해주어 맑고 깨끗한 피부로 만들어 줍니다. 병풀 추출물이 피부를 진정시키고 EGF성분이 영양을 공급해줍니다.', submanual: '세안 후 물기를 깨끗이 닦아낸 후 적당량을 원하는 부위에 펴 바른 다음, 부드럽게 마사지하듯 문질러줍니다. 필링 겔과 함께 각질이 밀려나오면 물로 충분히 씻어냅니다.', uri: require('../public/itemimages/rfg.png')
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
              cate: 'cate1',
              item: [
                'c',
                'd'
              ]
            },
            {
              cate: 'cate3',
              item: [
                'g'
              ]
            },
            {
              cate: 'cate5',
              item: [
                'k'
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
              cate: 'cate1',
              item: [
                'c',
                'd'
              ]
            },
            {
              cate: 'cate3',
              item: [
                'g'
              ]
            },
            {
              cate: 'cate5',
              item: [
                'k'
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
                'c',
                'd'
              ]
            },
            {
              cate: 'cate3',
              item: [
                'g'
              ]
            },
            {
              cate: 'cate5',
              item: [
                'k'
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
                'c',
              ]
            },
            {
              cate: 'cate3',
              item: [
                'g'
              ]
            },
            {
              cate: 'cate5',
              item: [
                'k'
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
                'c',
                'd'
              ]
            },
            {
              cate: 'cate3',
              item: [
                'g'
              ]
            },
            {
              cate: 'cate5',
              item: [
                'k'
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
                'c',
                'd'
              ]
            },
            {
              cate: 'cate3',
              item: [
                'g'
              ]
            },
            {
              cate: 'cate5',
              item: [
                'k'
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
              cate: 'cate1',
              item: [
                'c',
                'd'
              ]
            },
            {
              cate: 'cate3',
              item: [
                'g'
              ]
            },
            {
              cate: 'cate5',
              item: [
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
                'c',
              ]
            },
            {
              cate: 'cate3',
              item: [
                'g'
              ]
            },
            {
              cate: 'cate5',
              item: [
                'k'
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
              ]
            },
            {
              cate: 'cate1',
              item: [
                'd'
              ]
            },
            {
              cate: 'cate2',
              item: [
                'e',
              ]
            },
            {
              cate: 'cate3',
              item: [
                'h',
              ]
            },
            {
              cate: 'cate4',
              item: [
                'j',
              ]
            },
            {
              cate: 'cate5',
              item: [
                'k',
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
              ]
            },
            {
              cate: 'cate1',
              item: [
                'd'
              ]
            },
            {
              cate: 'cate2',
              item: [
                'e',
              ]
            },
            {
              cate: 'cate3',
              item: [
                'h',
              ]
            },
            {
              cate: 'cate4',
              item: [
                'j',
              ]
            },
            {
              cate: 'cate5',
              item: [
                'k',
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
              ]
            },
            {
              cate: 'cate1',
              item: [
                'd',
              ]
            },
            {
              cate: 'cate2',
              item: [
                'e',
              ]
            },
            {
              cate: 'cate3',
              item: [
                'h',
              ]
            },
            {
              cate: 'cate4',
              item: [
                'j',
              ]
            },
            {
              cate: 'cate5',
              item: [
                'k',
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
              ]
            },
            {
              cate: 'cate2',
              item: [
                'e',
              ]
            },
            {
              cate: 'cate3',
              item: [
                'h',
              ]
            },
            {
              cate: 'cate4',
              item: [
                'j',
              ]
            },
            {
              cate: 'cate5',
              item: [
                'k',
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
                'b',
              ]
            },
            {
              cate: 'cate1',
              item: [
                'd'
              ]
            },
            {
              cate: 'cate2',
              item: [
                'f',
              ]
            },
            {
              cate: 'cate3',
              item: [
                'i',
              ]
            },
            {
              cate: 'cate5',
              item: [
                'k',
              ]
            },
            {
              cate: 'cate6',
              item: [
                'l',
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
                'b',
              ]
            },
            {
              cate: 'cate1',
              item: [
                'd'
              ]
            },
            {
              cate: 'cate2',
              item: [
                'f',
              ]
            },
            {
              cate: 'cate3',
              item: [
                'i',
              ]
            },
            {
              cate: 'cate5',
              item: [
                'k',
              ]
            },
            {
              cate: 'cate6',
              item: [
                'l',
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
                'b',
              ]
            },
            {
              cate: 'cate1',
              item: [
                'd',
              ]
            },
            {
              cate: 'cate2',
              item: [
                'f',
              ]
            },
            {
              cate: 'cate3',
              item: [
                'i',
              ]
            },
            {
              cate: 'cate5',
              item: [
                'k',
              ]
            },
            {
              cate: 'cate6',
              item: [
                'l',
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
                'b',
              ]
            },
            {
              cate: 'cate2',
              item: [
                'f',
              ]
            },
            {
              cate: 'cate3',
              item: [
                'i',
              ]
            },
            {
              cate: 'cate5',
              item: [
                'k',
              ]
            },
            {
              cate: 'cate6',
              item: [
                'l',
              ]
            },
          ]
        },
      ];

      var catArray = [];
      for (var i = 0; i < result.length; i++) {
        if (listsNum == result[i].resultsCode) {
          catArray.push(result[i].cates)
        }
      }
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
      var resultsArray = [];
      for (var j = 0; j < exArray.length; j++) {
        if (code == exArray[j].code) {
          resultsArray.push({ code: code, item: exArray[j].item, manual: exArray[j].manual, submanual: exArray[j].submanual, rectxt: exArray[j].rectxt, uri: exArray[j].uri });
        }
      }

      this.props.navigation.navigate(code, { code: code, data: resultsArray })
    }
  }

  // Check which of category is selected & render diffrently icon & text;
  // Also, change none selected cateogory's view
  categoryStatus = index => {
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

  render() {
    const mapToCateArray = data => {
      return data.map((data, i) => {
        return (

          <TouchableOpacity onPress={() => this.categoryStatus(i)} style={styles.imageContainer}>
            {
              data.isSelected ? (
                <Image source={data.uriSelected} style={styles.cateImages} />
              ) : (
                  <Image source={data.uri} style={styles.cateImages} />
                )
            }
            <Text style={data.txtSelection}>{data.name}</Text>
          </TouchableOpacity>
        )
      })
    }
    return (
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Graphs')} >
            <Text style={styles.resultButton}>SURVEY</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.middleContainer}>
          {mapToCateArray(this.state.dataSource)}
        </View>
        <View style={styles.bottomContainer}>
          <TouchableOpacity onPress={() => this.sendDataCode()} style={styles.buttonContainer}>
            <Text style={styles.buttonTxtStyle}>선택 완료</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

SideMenu.propTypes = {
  navigation: PropTypes.object
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  topContainer: {
    height: width * 0.13,
    justifyContent: 'center',
    alignItems: 'center',
  },
  middleContainer: {
    flex: 4,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  imageContainer: {
    padding: 10,
    width: width * 0.19,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cateImages: {
    height: width * 0.20,
    aspectRatio: 0.872,
  },
  bottomContainer: {
    height: width * 0.13,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF7BAC'
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  buttonTxtStyle: {
    fontFamily: 'NanumSquareRoundEB',
    fontSize: width * 0.04,
    color: '#FFFFFF'
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
  resultButton: {
    color: '#FF7BAC',
    fontSize: width * 0.05,
    fontFamily: 'NanumSquareRoundB',
  }
});

export default SideMenu;