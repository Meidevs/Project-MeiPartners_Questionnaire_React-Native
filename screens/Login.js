import React from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
    Image,
} from 'react-native';
const { width, height } = Dimensions.get('window');

export default class Login extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.top_container}>
                    <View style={styles.logo}>
                        <Image source={require('../public/images/LovU_800_redpink.png')} style={styles.logoStyle} />
                        {/* <Image source={require('../public/images/MEI_String_tr.png')} style={styles.logoTxtStyle} /> */}
                    </View>
                </View>
                <View style={styles.bottom_container}>
                    <View style={styles.bottomContent_1}>
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
                    </View>
                    <View style={styles.bottomContent_2}>
                        <View style={styles.touchableStyle}>
                            <TouchableOpacity style={styles.loginButton} onPress={this.login}>
                                <Text style={styles.loginTxt}>로그인</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.registerButton} onPress={this.register}>
                                <Text style={styles.loginTxt}>회원가입</Text>
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
    register = () => {
        this.props.navigation.navigate('Register')
    }
    login = async () => {
        try {
            let response = await fetch('http://meipartners.xyz:20000/api/login', {
                method: 'POST',
                headers: {
                    Accpet: 'application/json',
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
                body: JSON.stringify({ user: this.state.phonenumber, password: this.state.password }),
            });
            let json = await response.json();
            if (response.ok) {
                if (json.success == false) {
                    alert(json.msg)
                } else {
                    this.props.navigation.navigate('Main', {
                        json,
                    });
                }
            }
        } catch (err) {
            console.log(err)
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
        flex: 3,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        // backgroundColor : 'black',
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logoStyle: {
        margin: 10,
        width: width * 0.6,
        height: '100%'
        // resizeMode :'stretch',
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
        flex: 5,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems : 'center',
    },
    bottomContent_1: {
        flex: 3,
        flexDirection: 'column',
        width: '90%',
        alignItems: 'center',
        justifyContent: 'center',

    },
    bottomContent_2: {
        flex: 2,
        flexDirection: 'column',
        width: '90%',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 30,

    },
    loginButton: {
        margin: 10,
        borderWidth: 1,
        borderColor: '#ffffff',
        borderRadius: 8,
        width: width * 0.63,
        height: height * 0.08,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff'
    },
    loginTxt: {
        fontSize: 24,
        fontWeight: '400',
        color: '#E0407A',
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
    }
});