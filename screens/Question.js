import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  SafeAreaView,
  ScrollView,
} from 'react-native';

import PickerYear from '../components/PickerYear.js';
import PickerMonth from '../components/PickerMonth.js';
import PickerDay from '../components/PickerDay.js';
import PickerLocation from '../components/PickerLocation.js';


export default class Question extends React.Component {

  onPress = () => {
    this.props.navigation.navigate('QuestionContent');
  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <View style={styles.top_container}>
            <View style={styles.category}>
              <Text style={styles.txt}>
                관심 카테고리
            </Text>
            </View>
            <View style={styles.subCategory}>
              <Text style={{ color: 'red', fontSize: 12 }}>*<Text style={{ color: 'black' }}>집중 관리하고 싶은 피부케어를 선택해주세요.</Text></Text>
            </View>
            <View style={styles.categoryImage}>
              <View style={styles.categoryItem}>
                <View>
                <Image source={require('../public/images/antiaging_basic.png')} style={{ width: 66, height: 58 }} />
                </View>
                <Text style={styles.categoryItemTxt}>
                  안티에이징
                </Text>
              </View>
              <View style={styles.categoryItem}>
                <Image source={require('../public/images/whitening_basic_2.png')} style={{ width: 66, height: 58 }} />
                <Text style={styles.categoryItemTxt}>
                  화이트닝
                </Text>
              </View>
              <View style={styles.categoryItem}>
                <Image source={require('../public/images/Troublecareing_basic.png')} style={{ width: 66, height: 58 }} />
                <Text style={styles.categoryItemTxt}>
                  트러블
                </Text>
              </View>
              <View style={styles.categoryItem}>
                <Image source={require('../public/images/lifting_basic.png')} style={{ width: 66, height: 58 }} />
                <Text style={styles.categoryItemTxt}>
                  리프팅
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.bottom_container}>
            <View style={styles.category}>
              <Text style={styles.txt}>
                기본정보
              </Text>
            </View>
            <View style={styles.subCategory}>
              <Text style={{ color: 'red', fontSize: 12 }}>*<Text style={{ color: 'black' }}>성별</Text></Text>
            </View>
            <View style={styles.categorySex}>
              <View style={styles.categoryBox}>
                <Text style={{ textAlign: 'center', color: '#C0C0C0' }}>여성</Text>
              </View>
              <View style={styles.categoryBox}>
                <Text style={{ textAlign: 'center', color: '#C0C0C0' }}>남성</Text>
              </View>
            </View>
            <View style={styles.subCategory}>
              <Text style={{ color: 'red', fontSize: 12 }}>*<Text style={{ color: 'black' }}>이름</Text></Text>
            </View>
            <View style={styles.categoryName}>
              <TextInput
                style={{ height: 40, borderColor: '#C0C0C0', borderWidth: 1 }}
                onChangeText={text => onChangeText(text)}
              />
            </View>
            <View style={styles.subCategory}>
              <Text style={{ color: 'red', fontSize: 12 }}>*<Text style={{ color: 'black' }}>생년월일</Text></Text>
            </View>
            <View style={styles.categoryBirth}>
              <View style={styles.categoryItem}>
                <PickerYear />
              </View>
              <View style={styles.categoryItem}>
                <PickerMonth />
              </View>
              <View style={styles.categoryItem}>
                <PickerDay />
              </View>
            </View>
            <View style={styles.subCategory}>
              <Text style={{ color: 'red', fontSize: 12 }}>*<Text style={{ color: 'black' }}>거주지역</Text></Text>
            </View>
            <View style={styles.categoryBirth}>
              <View style={styles.categoryItem}>
                <PickerLocation />
              </View>
            </View>
            <TouchableOpacity style={styles.button}
              onPress={this.onPress}>
              <Text>다음</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
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
  top_container: {
    backgroundColor: '#ffffff',
    marginBottom: 5,
  },
  bottom_container: {
    backgroundColor: '#ffffff',
  },
  category: {
    paddingTop: 10,
    paddingRight: 10,
    paddingLeft: 10,
  },
  txt: {
    fontWeight: 'bold'
  },
  subCategory: {
    paddingRight: 10,
    paddingLeft: 10,
    paddingBottom: 20
  },
  categoryImage: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  categoryItem: {
    padding: 10,
  },
  categoryItemTxt: {
    textAlign: 'center',
    fontSize: 10,
  },
  categorySex: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 50,
    paddingLeft: 50,
    paddingBottom: 20,
  },
  categoryBirth: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 20,
    paddingLeft: 20,
  },
  categoryName: {
    padding: 15,
  },
  pickerStyle: {
    height: 150,
    width: 100,
    // color: '#344953',
    justifyContent: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#C0C0C0',
    padding: 10
  },
  categoryBox: {
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#C0C0C0',
    width: 100,
  }
});
