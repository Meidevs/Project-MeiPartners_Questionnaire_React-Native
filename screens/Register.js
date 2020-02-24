import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Image,
  ImageBackground,
} from 'react-native';
const { width, height } = Dimensions.get('window');

export default class Login extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.top_container}>
        </View>
        <View style={styles.bottom_container}>
          <View style={styles.bottomContent_1}>
            <View style={styles.name}>
              <Text style={styles.nameTxt}>
                이름
                </Text>
              <TextInput style={styles.nameTxtInput} placeholderTextColor="#F57081" placeholder='OOO' onChangeText={(name) => this.setState({ name })} value={this.state.name} />
            </View>
            <View style={styles.phonenumber}>
              <Text style={styles.phonenumberTxt}>
                전화번호
                </Text>
              <TextInput style={styles.phonenumberTxtInput} placeholderTextColor="#F57081" placeholder='010 - 0000 - 0000' onChangeText={(phonenumber) => this.setState({ phonenumber })} value={this.state.phonenumber} />
            </View>
            <View style={styles.password}>
              <Text style={styles.passwordTxt}>
                비밀번호
                </Text>
              <TextInput style={styles.passwordTxtInput} placeholderTextColor="#F57081" placeholder='********' onChangeText={(password) => this.setState({ password })} value={this.state.password} />
            </View>
            <View style={styles.passwordConfrim}>
              <Text style={styles.passwordConfrimTxt}>
                비밀번호 확인
                </Text>
              <TextInput style={styles.passwordConfrimTxtInput} placeholderTextColor="#F57081" placeholder='********' onChangeText={(passwordConfirm) => this.setState({ passwordConfirm })} value={this.state.passwordConfirm} />
            </View>
          </View>
          <View style={styles.bottomContent_2}>
            <View style={styles.touchableStyle}>
              <TouchableOpacity style={styles.registerButton} onPress={this.register}>
                <Text style={styles.registerTxt}>가입 완료</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  }

  constructor(props) {
    super(props);
    this.state = { phonenumber: '', password: '' };
  }

  register = async () => {
    try {
      let response = await fetch('http://meipartners.xyz:19999/api/register', {
        method: 'POST',
        headers: {
          Accpet: 'application/json',
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({ user: this.state.phonenumber, name: this.state.name, password: this.state.password, passwordConfirm: this.state.passwordConfirm }),
      });
      let json = await response.json();

      if (response.ok) {
        if (json.success == false) {
          alert(json.msg);
        } else {
          this.props.navigation.navigate('Main', {
            json,
          });
        }
      }
    } catch (err) {
      console.log(err);
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'rgba(224, 96, 112, 1)',
  },
  top_container: {
    width: '100%',
    padding: 10,
    flex: 1,
  },
  bottom_container: {
    width : '80%',
    flex: 5,
    alignItems: 'center',
  },
  bottomContent_1: {
    flex: 3,
    flexDirection: 'column',
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  bottomContent_2: {
    flex: 1,
    flexDirection: 'column',
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  name: {
    width: '100%',
    marginBottom: 10,
  },
  nameTxt: {
    color: '#000000',
    fontSize: 24,
    fontWeight: '400',
  },
  nameTxtInput: {
    borderBottomWidth: 1,
    borderColor: '#ffffff',
    marginBottom: 10,
    fontSize: 24,
    color: '#ffffff'
  },
  phonenumber: {
    width: '100%',
    marginBottom: 10,
  },
  phonenumberTxt: {
    color: '#000000',
    fontSize: 24,
    fontWeight: '400',
  },
  phonenumberTxtInput: {
    borderBottomWidth: 1,
    borderColor: '#ffffff',
    marginBottom: 10,
    fontSize: 24,
    color: '#ffffff'
  },
  password: {
    width: '100%',
  },
  passwordTxt: {
    color: '#000000',
    fontSize: 24,
    fontWeight: '400',
  },
  passwordTxtInput: {
    borderBottomWidth: 1,
    borderColor: '#ffffff',
    marginBottom: 10,
    fontSize: 24,
    color: '#ffffff'
  },
  passwordConfrim: {
    width: '100%',
  },
  passwordConfrimTxt: {
    color: '#000000',
    fontSize: 24,
    fontWeight: '400',
  },
  passwordConfrimTxtInput: {
    borderBottomWidth: 1,
    borderColor: '#ffffff',
    marginBottom: 10,
    fontSize: 24,
    color: '#ffffff'
  },
  touchableStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  registerButton: {
    margin: 10,
    borderRadius: 8,
    width: width * 0.63,
    height: height * 0.08,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFD5D5'
  },
  registerTxt: {
    fontSize: 24,
    fontWeight: '400',
    color: '#E0407A',
  },
});