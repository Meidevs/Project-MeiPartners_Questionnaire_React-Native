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
import Constants from 'expo-constants';

export default class Quesion extends React.Component {
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
                <Image source={require('../public/images/topback.png')} style={{ width: 66, height: 58 }} />
                <Text style={styles.categoryItemTxt}>
                  안티에이징
                </Text>
              </View>
              <View style={styles.categoryItem}>
                <Image source={require('../public/images/topback.png')} style={{ width: 66, height: 58 }} />
                <Text style={styles.categoryItemTxt}>
                  화이트닝
                </Text>
              </View>
              <View style={styles.categoryItem}>
                <Image source={require('../public/images/topback.png')} style={{ width: 66, height: 58 }} />
                <Text style={styles.categoryItemTxt}>
                  트러블
                </Text>
              </View>
              <View style={styles.categoryItem}>
                <Image source={require('../public/images/topback.png')} style={{ width: 66, height: 58 }} />
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
              <View style={styles.categoryItem}>
                <Image source={require('../public/images/topback.png')} style={{ width: 66, height: 58 }} />
              </View>
              <View style={styles.categoryItem}>
                <Image source={require('../public/images/topback.png')} style={{ width: 66, height: 58 }} />
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
                <Image source={require('../public/images/topback.png')} style={{ width: 66, height: 58 }} />
              </View>
              <View style={styles.categoryItem}>
                <Image source={require('../public/images/topback.png')} style={{ width: 66, height: 58 }} />
              </View>
              <View style={styles.categoryItem}>
                <Image source={require('../public/images/topback.png')} style={{ width: 66, height: 58 }} />
              </View>
            </View>
            <View style={styles.subCategory}>
              <Text style={{ color: 'red', fontSize: 12 }}>*<Text style={{ color: 'black' }}>거주지역</Text></Text>
            </View>
            <View style={styles.categoryBirth}>
              <View style={styles.categoryItem}>
                <Image source={require('../public/images/topback.png')} style={{ width: 66, height: 58 }} />
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }

  constructor(props) {
    super(props);
    this.state = { phonenumber: '', password: '' };
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
  categoryName : {
    padding : 15,
  }
});
