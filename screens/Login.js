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

export default class Login extends React.Component {

    render() {
        return (
            <ImageBackground source={require('../public/images/loginbackimage.jpg')} style={styles.imageBackground} resizeMode='stretch'>
                <View style={styles.container}>
                    <View style={styles.top_container}>
                        <View style={styles.logo}>
                            <Image source={require('../public/images/LovU_448x180.png')} style={styles.logoStyle} />
                            {/* <Image source={require('../public/images/MEI_String_tr.png')} style={styles.logoTxtStyle} /> */}
                        </View>
                    </View>
                    <View style={styles.bottom_container}>
                        <View style={styles.bottomContent}>
                            <View style={styles.phonenumber}>
                                <Text style={styles.phonenumberTxt}>
                                    전화번호
                                    </Text>
                                <TextInput style={styles.phonenumberTxtInput} placeholderTextColor="#F56093" placeholder='010 - 0000 - 0000' onChangeText={(phonenumber) => this.setState({ phonenumber })} value={this.state.phonenumber} />

                            </View>
                            <View style={styles.password}>
                                <Text style={styles.passwordTxt}>
                                    비밀번호
                                    </Text>
                                <TextInput style={styles.passwordTxtInput} placeholderTextColor="#F56093" placeholder='********' onChangeText={(password) => this.setState({ password })} value={this.state.password} />
                            </View>
                            <View style={styles.forgot}>
                                {/* <TouchableOpacity>
                                    <Text style={styles.fotgotTxt}>
                                        Forgot Password?
                                    </Text>
                                </TouchableOpacity> */}
                            </View>
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
            </ImageBackground >
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
            let response = await fetch('http://localhost:19001/api/login', {
                method: 'POST',
                headers: {
                    Accpet: 'application/json',
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
                body: JSON.stringify({ user: this.state.phonenumber, password: this.state.password }),
            });
            let json = await response.json();

            if (!json.user) {
                alert('아이디 및 비밀번호를 확인해주세요')
            }
            if (response.ok) {
                this.props.navigation.navigate('Main', {
                    json,
                });
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
        backgroundColor: 'rgba(224, 64, 122, 1)',
    },
    imageBackground: {
        flex: 1,
        width: null,
        height: null,
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
        width: 224,
        height: 90,
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
        flexDirection: 'row',
        justifyContent: 'center',
    },
    bottomContent: {
        width: '90%',
        alignItems: 'center',

    },
    loginButton: {
        margin : 10,
        borderWidth: 1,
        borderColor: '#ffffff',
        borderRadius: 8,
        width: 200,
        height: 40,
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
        color : '#ffffff'

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
        color : '#ffffff'
    },
    forgot: {
        flexDirection: 'row',
        alignSelf: 'flex-end'
    },
    fotgotTxt: {
        fontSize: 24,
        fontWeight: '400',
        color: '#ffffff',
    },
    touchableStyle: {
        top: 80,
    },
    registerButton : {
        margin : 10,
        // borderWidth: 1,
        // borderColor: '#ffffff',
        borderRadius: 8,
        width: 200,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFD5D5'
    }
});