import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ImageBackground,
} from 'react-native';

export default class Login extends React.Component {

  login = () => {
    this.props.navigation.navigate('Login');
  }

  register = () => {
    this.props.navigation.navigate('Register')
  }

  render() {
    return (
      <ImageBackground source={require('../public/images/loginbackimage.jpg')} style={styles.imageBackground} resizeMode='stretch'>
        <View style={styles.container}>
          <View style={styles.top_container}>
            <View style={styles.logo}>
              <Image source={require('../public/images/MEI_Symbol_tr.png')} style={styles.logoStyle} />
              <Image source={require('../public/images/MEI_String_tr.png')} style={styles.logoTxtStyle} />
            </View>
          </View>
          <View style={styles.bottom_container}>
            <View style={styles.bottomContent}>
              <View style={styles.inputContent}>
                <Text style={styles.inputTxt}>
                  PHONENUMBER
                </Text>
                <View style={styles.txtInputStyle}>
                  <TextInput>

                  </TextInput>
                </View>

                <Text style={styles.inputTxt}>
                  NAME
                </Text>
                <View style={styles.txtInputStyle}>
                  <TextInput>

                  </TextInput>
                </View>
                <Text style={styles.inputTxt}>
                  PASSWORD
                </Text>
                <View style={styles.txtInputStyle}>
                  <TextInput>

                  </TextInput>
                </View>
                <Text style={styles.inputTxt}>
                  PHONENUMBER
                </Text>
                <View style={styles.txtInputStyle}>
                  <TextInput>

                  </TextInput>
                </View>
              </View>
              <View style={styles.inputButton}>
                <TouchableOpacity style={styles.register} onPress={this.register}>
                  <Text style={styles.registerTxt}>REGISTER</Text>
                </TouchableOpacity>
              </View>

            </View>
          </View>
        </View>
      </ImageBackground >
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
    alignItems: 'center',
    backgroundColor: 'rgba(229, 129, 176, 0.9)',
  },
  imageBackground: {
    flex: 1,
    width: null,
    height: null,
  },
  top_container: {
    width: '80%',
    padding: 10,
    bottom: 30,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  logo: {
    alignItems: 'center',
  },
  logoStyle: {
    margin: 10,
    width: 30,
    height: 30,
  },
  logoTxt: {
    margin: 15,
  },
  logoTxtStyle: {
    width: 185,
    height: 19,
  },
  bottom_container: {
    width: '80%',
    flex: 3,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomContent: {
    top: 30,
    alignItems: 'center',
  },
  register: {
    borderWidth: 1,
    borderColor: '#ffffff',
    borderRadius: 30,
    width: 200,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  login: {
    borderWidth: 1,
    borderColor: '#ffffff',
    borderRadius: 30,
    width: 200,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff'
  },
  registerTxt: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  loginTxt: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#E581B0',
  },
  inputContent: {
    top : 100,
    width: '100%',
    flex: 2,
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  inputButton: {
    flex: 1,

  },
  inputTxt : {
    marginTop : 3,
    color : '#ffffff',
    fontSize : 12,
    fontWeight : 'bold',
  },
  txtInputStyle : {
    borderBottomWidth : 1,
    borderColor : '#ffffff',
  }

});