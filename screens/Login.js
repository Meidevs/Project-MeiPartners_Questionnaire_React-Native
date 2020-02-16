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

    onPress = () => {
        this.props.navigation.navigate('Main')
    }

    render() {
        return (
            <ImageBackground source={require('../public/images/loginbackimage.jpg')} style={styles.imageBackground} resizeMode='stretch'>
                <View style={styles.container}>
                    <View style={styles.top_container}>
                        <View style={styles.logo}>
                            <Image source={require('../public/images/MEI_Symbol.png')} style={styles.logoStyle} />
                            {/* <Image source={require('../public/images/MEI_String_tr.png')} style={styles.logoTxtStyle} /> */}
                        </View>
                    </View>
                    <View style={styles.bottom_container}>
                        <View style={styles.bottomContent}>
                            <View style={styles.phonenumber}>
                                <Text style={styles.phonenumberTxt}>
                                    PHONENUMBER
                                    </Text>
                                <TextInput style={styles.phonenumberTxtInput} />

                            </View>
                            <View style={styles.password}>
                                <Text style={styles.passwordTxt}>
                                    PASSWORD
                                    </Text>
                                <TextInput style={styles.passwordTxtInput} />
                            </View>
                            <View style={styles.forgot}>
                                <TouchableOpacity>
                                    <Text style={styles.fotgotTxt}>
                                        Forgot Password?
                                    </Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.touchableStyle}>
                                <TouchableOpacity style={styles.loginButton} onPress={this.onPress}>
                                    <Text style={styles.loginTxt}>LOGIN</Text>
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
        backgroundColor: 'rgba(212, 191, 201, 0.9)',
    },
    imageBackground: {
        flex: 1,
        width: null,
        height: null,
    },
    top_container: {
        width: '80%',
        padding: 10,
        flex: 3,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        alignItems: 'center',
    },
    logoStyle: {
        margin: 10,
        width: 80,
        height: 80,
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
        top: 80,
        width: '90%',
        alignItems: 'center'
    },
    loginButton: {
        borderWidth: 1,
        borderColor: '#ffffff',
        borderRadius: 30,
        width: 200,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff'
    },
    loginTxt: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#E581B0',
    },
    phonenumber: {
        width: '100%',
    },
    phonenumberTxt: {
        color: '#C52F76',
        fontSize: 10,
        fontWeight: 'bold',
        margin: 5,
    },
    phonenumberTxtInput: {
        borderBottomWidth: 1,
        borderColor: '#C52F76',
        marginBottom: 10,
    },
    password: {
        width: '100%',
    },
    passwordTxt: {
        color: '#C52F76',
        fontSize: 10,
        fontWeight: 'bold',
        margin: 5,
    },
    passwordTxtInput: {
        borderBottomWidth: 1,
        borderColor: '#C52F76',
        marginBottom: 10,
    },
    forgot: {
        flexDirection: 'row',
        alignSelf: 'flex-end'
    },
    fotgotTxt: {
        fontSize: 10,
        fontWeight: 'bold',
        color: '#ffffff',
    },
    touchableStyle: {
        top: 40,
    }
});