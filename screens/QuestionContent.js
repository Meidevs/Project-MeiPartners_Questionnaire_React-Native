import React, { Children } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Image,
    Button,
} from 'react-native';

export default class QuestionContent extends React.Component {

    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: null,
            headerRight: (
                <View><Text>{navigation.getParam('increaseCount')}</Text></View>
            ),
            headerLeft: null,
        }
    }

    constructor(props) {
        super(props)
        this.state = {
            count : 1,
        }
    }

    onPress = () => {
        this.setState({
            count : this.state.count + 1,
        });
        console.log(this.state.count);
        this.props.navigation.setParams({increaseCount : this.state.count });
    }

    render() {
        return (
            <View style={styles.container}>

                <View style={styles.top_container}>
                    <Image source={require('../public/images/topback.png')} style={{ width: '100%', height: '100%' }} />
                </View>
                <View style={styles.rectangle}>
                    <View style={styles.rectagleContent}>
                        <View style={styles.rectagleContentTop}>
                            <Text style={styles.subTxt}>해당하는 선택지를 모두 선택해주세요</Text>
                            <Text style={styles.mainTxt}>1.최근 3개월 이내에 구입하신 스킨 케어 제품을 선택해주세요</Text>
                        </View>
                        <View style={styles.rectagleContentBottom}>
                            <View style={styles.rectangleOuter}>
                                <View style={styles.contentBorder}>
                                    <Text style={styles.contentItem}>안티 에이징 크림</Text>
                                </View>
                                <View style={styles.contentBorder}>
                                    <Text style={styles.contentItem}>페이셜 리프팅 폼</Text>
                                </View>
                                <View style={styles.contentBorder}>
                                    <Text style={styles.contentItem}>피부 진정 크림</Text>
                                </View>
                                <View style={styles.contentBorder}>
                                    <Text style={styles.contentItem}>화이트닝 크림</Text>
                                </View>
                                <View style={styles.contentBorder}>
                                    <Text style={styles.contentItem}>마스크 팩</Text>
                                </View>
                            </View>
                            <View>
                                <TouchableOpacity onPress={this.onPress}>
                                    <Text>확인</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    top_container: {
        height: 150,
        backgroundColor: 'red',
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
        height: 450,
        alignItems: 'center',
        backgroundColor: '#ffffff',
        borderColor: '#C0C0C0',
        borderWidth: 1,
        borderRadius: 10,
    },
    rectagleContentTop: {
        padding: 10,
    },
    rectangleOuter: {
        marginTop: 20,
    },
    contentBorder: {
        borderWidth: 0.5,
        borderColor: '#C0C0C0',
        borderRadius: 10,
        width: 250,
        height: 40,
        margin: 8,
    },
    subTxt: {
        color: '#E2417B',
        fontSize: 12,
        fontWeight: 'bold',
    },
    mainTxt: {
        fontSize: 14,
        fontWeight: '900',
    },
    contentItem: {
        padding: 10,
        color: '#C0C0C0',
    },
});
