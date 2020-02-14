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
        this.props.navigation.navigate('QuestionContent', {
            itemId: 86,
            otherParam: '파라미터 전달',
        });
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.top_container}>
                    <View style={styles.backgroundImage}>
                        <Image source={require('../public/images/topback.png')} />
                    </View>
                    <View style={styles.rectangle}>
                        <View style={styles.rectagleContent}>
                            <Text>Hi</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.bottom_continer}>

                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundImage: {
        width: 100,
        height: 100,
    },
    rectangle: {
        position: 'absolute',
        top: 80,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    rectagleContent: {
        width: '80%',
        height : 450,
        alignItems: 'center',
        backgroundColor: '#ffffff',
        borderColor : '#C0C0C0',
        borderWidth : 1,
        borderRadius : 10,
    }
});
