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
        { code: 'code1', name: '건성 타입', selection: styles.categoryItemTxt },
        { code: 'code2', name: '민감성 타입', selection: styles.categoryItemTxt },
        { code: 'code3', name: '트러블 지성 타입', selection: styles.categoryItemTxt },
        { code: 'code4', name: '색소성 타입', selection: styles.categoryItemTxt },
        { code: 'code5', name: '탄력 주름 타입', selection: styles.categoryItemTxt },

      ],
      gender: [
        { id: '여성', name: '여성', selection: styles.categoryBox, txtSelection: styles.categoryBoxTxt },
        { id: '남성', name: '남성', selection: styles.categoryBox, txtSelection: styles.categoryBoxTxt }
      ],
    }
  }

  categoryItemPress = index => {
    var i;
    var data = this.state.categoryItems;
    data[index].isSelected = !data[index].isSelected;
    data[index].selection = data[index].isSelected ? styles.categoryItemTxtPress : styles.categoryItemTxt;
    this.setState({ categoryItemsd: data[index].name });
    this.setState({ code: data[index].code });
    for (i = 0; i < index; i++) {
      if (data[i].isSelected == true) {
        data[i].isSelected = !data[i].isSelected;
        data[i].selection = data[i].isSelected ? styles.categoryItemTxtPress : styles.categoryItemTxt;
      }
    }
    for (i = index + 1; i < data.length; i++) {
      if (data[i].isSelected == true) {
        data[i].isSelected = !data[i].isSelected;
        data[i].selection = data[i].isSelected ? styles.categoryItemTxtPress : styles.categoryItemTxt;
      }
    }
    this.setState({
      categoryItems: data,
    });
  }

  genderPress = index => {
    var data = this.state.gender;
    var i;
    data[index].isSelected = !data[index].isSelected;
    data[index].selection = data[index].isSelected ? styles.categoryBoxPress : styles.categoryBox;
    data[index].txtSelection = data[index].isSelected ? styles.categoryBoxTxtPress : styles.categoryBoxTxt;
    this.setState({ genderd: data[index].name });
    for (i = 0; i < index; i++) {
      if (data[i].isSelected == true) {
        data[i].isSelected = !data[i].isSelected;
        data[i].selection = data[i].isSelected ? styles.categoryBoxPress : styles.categoryBox;
        data[i].txtSelection = data[i].isSelected ? styles.categoryBoxTxtPress : styles.categoryBoxTxt;
      }
    }
    for (i = index + 1; i < data.length; i++) {
      if (data[i].isSelected == true) {
        data[i].isSelected = !data[i].isSelected;
        data[i].selection = data[i].isSelected ? styles.categoryBoxPress : styles.categoryBox;
        data[i].txtSelection = data[i].isSelected ? styles.categoryBoxTxtPress : styles.categoryBoxTxt;
      }
    }
    this.setState({
      gender: this.state.gender,
    });
  }

  getYears = (data) => {
    this.setState({ year: data.years });
  }
  getMonth = (data) => {
    this.setState({ month: data.month });
  }
  getDays = (data) => {
    this.setState({ day: data.days });
  }
  getLocations = (data) => {
    this.setState({ location: data.location });
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
              <TouchableOpacity style={styles.categoryItem} onPress={() => this.categoryItemPress(0)}>
                <Image source={require('../public/images/antiaging_basic.png')} style={{ width: 40, height: 60 }} />
                <Text style={this.state.categoryItems[0].selection}>
                  {this.state.categoryItems[0].name}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.categoryItem} onPress={() => this.categoryItemPress(1)}>
                <Image source={require('../public/images/whitening_basic_2.png')} style={{ width: 40, height: 60 }} />
                <Text style={this.state.categoryItems[1].selection}>
                  {this.state.categoryItems[1].name}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.categoryItem} onPress={() => this.categoryItemPress(2)}>
                <Image source={require('../public/images/Troublecareing_basic.png')} style={{ width: 40, height: 60 }} />
                <Text style={this.state.categoryItems[2].selection}>
                  {this.state.categoryItems[2].name}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.categoryItem} onPress={() => this.categoryItemPress(3)}>
                <Image source={require('../public/images/lifting_basic.png')} style={{ width: 40, height: 60 }} />
                <Text style={this.state.categoryItems[3].selection}>
                  {this.state.categoryItems[3].name}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.categoryItem} onPress={() => this.categoryItemPress(4)}>
                <Image source={require('../public/images/antiaging_basic.png')} style={{ width: 40, height: 60 }} />
                <Text style={this.state.categoryItems[4].selection}>
                  {this.state.categoryItems[4].name}
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
              <TouchableOpacity style={this.state.gender[0].selection} onPress={() => this.genderPress(0)}>
                <Text style={this.state.gender[0].txtSelection}>여성</Text>
              </TouchableOpacity>
              <TouchableOpacity style={this.state.gender[1].selection} onPress={() => this.genderPress(1)}>
                <Text style={this.state.gender[1].txtSelection}>남성</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.subCategory}>
              <Text style={{ color: 'red', fontSize: 12 }}>*<Text style={{ color: 'black' }}>이름</Text></Text>
            </View>
            <View style={styles.categoryName}>
              <TextInput
                style={{ height: 40, borderColor: '#C0C0C0', borderWidth: 1 }}
                onChangeText={name => this.setState({ name })} value={this.state.name} />
            </View>
            <View style={styles.subCategory}>
              <Text style={{ color: 'red', fontSize: 12 }}>*<Text style={{ color: 'black' }}>생년월일</Text></Text>
            </View>
            <View style={styles.categoryBirth}>
              <View style={styles.categoryDate}>
                <PickerYear yearData={this.getYears.bind(this)} />
              </View>
              <View style={styles.categoryDate}>
                <PickerMonth monthData={this.getMonth.bind(this)} />
              </View>
              <View style={styles.categoryDate}>
                <PickerDay dayData={this.getDays.bind(this)} />
              </View>
            </View>
            <View style={styles.subCategory}>
              <Text style={{ color: 'red', fontSize: 12 }}>*<Text style={{ color: 'black' }}>거주지역</Text></Text>
            </View>
            <View style={styles.categoryBirth}>
              <View style={styles.categoryLocation}>
                <PickerLocation locationData={this.getLocations.bind(this)} />
              </View>
            </View>
            <TouchableOpacity style={styles.button}
              onPress={() => this.onPress()}>
              <Text>다음</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }

  onPress = async () => {
    console.log(this.state.day)
    console.log(this.state.month)
    console.log(this.state.location)
    console.log(this.state.year)
    console.log(this.state.genderd)
    console.log(this.state.categoryItemsd)
    console.log(this.state.name)
    console.log(this.state.code)

    try {
      let response = await fetch('http://localhost:19000/api/getuserselectiondata', {
        method: 'POST',
        headers: {
          Accpet: 'application/json',
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({ day: this.state.day, month: this.state.month, year: this.state.year, location: this.state.location, gender: this.state.genderd, category: this.state.categoryItemsd, name: this.state.name, code: this.state.code }),
      });
      if (response.ok) {
        this.props.navigation.navigate('QuestionContent');
      }
    } catch (err) {
      console.log(err);
    }
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
    width: '20%',
    height: null,
  },
  categoryItemTxt: {
    textAlign: 'center',
    fontSize: 10,
    color: 'black'
  },
  categoryItemTxtPress: {
    textAlign: 'center',
    fontSize: 10,
    color: 'pink'
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
  categoryBoxPress: {
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'pink',
    width: 100,
  },
  categoryBoxTxt: {
    textAlign: 'center',
    color: '#C0C0C0'
  },
  categoryBoxTxtPress: {
    textAlign: 'center',
    color: 'pink'
  },
  categoryDate: {
    padding: 10,
  },
  categoryLocation: {
    padding: 10,
    width: 100,
  }
});
