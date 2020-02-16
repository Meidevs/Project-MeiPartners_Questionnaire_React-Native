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
  constructor(props) {
    super(props)
    this.state = {
      categoryItems: [
        { id: '1', name: '안티 에이징', selection: styles.categoryItemTxt },
        { id: '2', name: '화이트닝', selection: styles.categoryItemTxt },
        { id: '3', name: '트러블', selection: styles.categoryItemTxt },
        { id: '4', name: '리프팅', selection: styles.categoryItemTxt },
      ],
      gender: [
        {id : '여성', name : '여성', selection : styles.categoryBox, txtSelection : styles.categoryBoxTxt},
        {id : '남성', name : '남성', selection : styles.categoryBox, txtSelection : styles.categoryBoxTxt}
      ]
    }
  }

  categoryItemPress = data => {
    if (data == '1') {
      this.state.categoryItems[0].isSelected = !this.state.categoryItems[0].isSelected;
      this.state.categoryItems[0].selection = this.state.categoryItems[0].isSelected ? styles.categoryItemTxtPress : styles.categoryItemTxt;
    } else if (data == '2') {
      this.state.categoryItems[1].isSelected = !this.state.categoryItems[1].isSelected;
      this.state.categoryItems[1].selection = this.state.categoryItems[1].isSelected ? styles.categoryItemTxtPress : styles.categoryItemTxt;
    } else if (data == '3') {
      this.state.categoryItems[2].isSelected = !this.state.categoryItems[2].isSelected;
      this.state.categoryItems[2].selection = this.state.categoryItems[2].isSelected ? styles.categoryItemTxtPress : styles.categoryItemTxt;
    } else if (data == '4') {
      this.state.categoryItems[3].isSelected = !this.state.categoryItems[3].isSelected;
      this.state.categoryItems[3].selection = this.state.categoryItems[3].isSelected ? styles.categoryItemTxtPress : styles.categoryItemTxt;
    }
    this.setState({
      categoryItems : this.state.categoryItems,
    });
  }

  genderPress = data => {
    if (data == '여성') {
      this.state.gender[0].isSelected = !this.state.gender[0].isSelected;
      this.state.gender[0].selection = this.state.gender[0].isSelected ? styles.categoryBoxPress : styles.categoryBox;
      this.state.gender[0].txtSelection = this.state.gender[0].isSelected ? styles.categoryBoxTxtPress : styles.categoryBoxTxt;
    } else {
      this.state.gender[1].isSelected = !this.state.gender[1].isSelected;
      this.state.gender[1].selection = this.state.gender[1].isSelected ? styles.categoryBoxPress : styles.categoryBox;
      this.state.gender[1].txtSelection = this.state.gender[1].isSelected ? styles.categoryBoxTxtPress : styles.categoryBoxTxt;
    }
    this.setState({
      gender : this.state.gender,
    });
    console.log(this.state.gender)
  }

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
              <TouchableOpacity style={styles.categoryItem} onPress={() => this.categoryItemPress('1')}>
                <Image source={require('../public/images/antiaging_basic.png')} style={{ width: 66, height: 80 }} />
                <Text style={this.state.categoryItems[0].selection}>
                  {this.state.categoryItems[0].name}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.categoryItem} onPress={() => this.categoryItemPress('2')}>
                <Image source={require('../public/images/whitening_basic_2.png')} style={{ width: 66, height: 80 }} />
                <Text style={this.state.categoryItems[1].selection}>
                  {this.state.categoryItems[1].name}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.categoryItem} onPress={() => this.categoryItemPress('3')}>
                <Image source={require('../public/images/Troublecareing_basic.png')} style={{ width: 66, height: 80 }} />
                <Text style={this.state.categoryItems[2].selection}>
                  {this.state.categoryItems[2].name}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.categoryItem} onPress={() => this.categoryItemPress('4')}>
                <Image source={require('../public/images/lifting_basic.png')} style={{ width: 66, height: 80 }} />
                <Text style={this.state.categoryItems[3].selection}>
                  {this.state.categoryItems[3].name}
                </Text>
              </TouchableOpacity>
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
            <View style={styles.categoryGender}>
              <TouchableOpacity style={this.state.gender[0].selection} onPress={() => this.genderPress('여성')}>
                <Text style={this.state.gender[0].txtSelection}>여성</Text>
              </TouchableOpacity>
              <TouchableOpacity style={this.state.gender[1].selection} onPress={() => this.genderPress('남성')}>
                <Text style={this.state.gender[1].txtSelection}>남성</Text>
              </TouchableOpacity>
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
              <View style={styles.categoryDate}>
                <PickerYear />
              </View>
              <View style={styles.categoryDate}>
                <PickerMonth />
              </View>
              <View style={styles.categoryDate}>
                <PickerDay />
              </View>
            </View>
            <View style={styles.subCategory}>
              <Text style={{ color: 'red', fontSize: 12 }}>*<Text style={{ color: 'black' }}>거주지역</Text></Text>
            </View>
            <View style={styles.categoryBirth}>
              <View style={styles.categoryLocation}>
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
    width: '25%',
    height: null,
  },
  categoryItemTxt: {
    textAlign: 'center',
    fontSize: 10,
    color : 'black'
  },
  categoryItemTxtPress: {
    textAlign: 'center',
    fontSize: 10,
    color: 'blue'
  },
  categoryGender: {
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
  },
  categoryBoxPress : {
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'pink',
    width: 100,
  },
  categoryBoxTxt : {
    textAlign: 'center', 
    color: '#C0C0C0'
  },
  categoryBoxTxtPress : {
    textAlign: 'center', 
    color: 'pink'
  },
  categoryDate: {
    padding: 10,
  },
  categoryLocation: {
    padding: 10,
  }
});
