import React, { Children } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Image,

    FlatList,
} from 'react-native';
import { ProgressBar, Colors } from 'react-native-paper';

export default class QuestionContent extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            count: 1,
            pressStatus: false,
            FlatListItems: [
                { id: 'a', value: 'a' },
                { id: 'b', value: 'a' },
                { id: 'c', value: 'a' },
                { id: 'd', value: 'a' },
            ]
        }
        this.props.navigation.setParams({ increaseCount: 1 });
    }

    _buttonPress = (a) => {
        console.log('a', a)
        if (this.state.pressStatus == false) {
            this.setState({ pressStatus: true });
        } else {
            this.setState({ pressStatus: false });
        }
    }

    onPress = () => {
        this.setState({
            count: this.state.count + 1,
        });
        console.log(this.state.count);
        this.props.navigation.setParams({ increaseCount: this.state.count });
    }

    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: () => null,
            headerRight: () =>
                <View style={styles.headerStyle}>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', }}>
                        <Text style={{ fontSize: 10, color: '#707070', fontWeight: 'bold' }}>응답 진행률</Text>
                        <Text style={{ fontSize: 10, color: '#707070', fontWeight: 'bold' }}>{navigation.getParam('increaseCount')} / 15</Text>
                    </View>
                    <View>
                        <ProgressBar progress={navigation.getParam('increaseCount') / 15} color={Colors.pink600} style={{ height: 8, borderWidth: 0.5, borderColor: '#707070', borderRadius: 10 }} />
                    </View>
                </View>,
        }
    }

    _renderItem = ({ item }) => {
        <View>
            <TouchableOpacity style={styles.contentBorder,
                this.state.pressStatus ? styles.contentBorderPress : styles.contentBorder}
                onPress={this._buttonPress}>
                <Text style={styles.contentItem,
                    this.state.pressStatus ? styles.contentItemPress : styles.contentItem}>
                    안티 에이징 크림{item.id}
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.contentBorder,
                    this.state.pressStatus ? styles.contentBorderPress : styles.contentBorder}
                onPress={this._buttonPress}>
                <Text
                    style={styles.contentItem,
                        this.state.pressStatus ? styles.contentItemPress : styles.contentItem}>
                    페이셜 리프팅 폼
                                    </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.contentBorder,
                    this.state.pressStatus ? styles.contentBorderPress : styles.contentBorder}>
                <Text
                    style={styles.contentItem,
                        this.state.pressStatus ? styles.contentItemPress : styles.contentItem}>
                    피부 진정 크림
                                    </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.contentBorder,
                    this.state.pressStatus ? styles.contentBorderPress : styles.contentBorder}>
                <Text
                    style={styles.contentItem,
                        this.state.pressStatus ? styles.contentItemPress : styles.contentItem}>
                    화이트닝 크림
                                    </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.contentBorder,
                    this.state.pressStatus ? styles.contentBorderPress : styles.contentBorder}>
                <Text
                    style={styles.contentItem,
                        this.state.pressStatus ? styles.contentItemPress : styles.contentItem}>
                    마스크 팩
                                    </Text>
            </TouchableOpacity>
        </View>
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
                                <FlatList data={this.state.FlatListItems} renderItem={({ item }) => (
                                    <View>
                                        <TouchableOpacity style={styles.contentBorder,
                                            this.state.pressStatus ? styles.contentBorderPress : styles.contentBorder}
                                            onPress={this._buttonPress}>
                                            <Text style={styles.contentItem,
                                                this.state.pressStatus ? styles.contentItemPress : styles.contentItem}>
                                                안티 에이징 크림{item.id}
                                            </Text>
                                        </TouchableOpacity>
                                    </View>
                                )} />
                            </View>
                            <View style={{ marginTop: 25, alignItems: 'center' }}>
                                <TouchableOpacity onPress={this.onPress} style={{ height: 40, width: 200, backgroundColor: '#FFC9DD', borderRadius: 10, justifyContent: 'center', borderColor: '#707070', borderWidth: 1 }}>
                                    <Text style={{ color: '#ffffff', fontWeight: 'bold', fontSize: 14, textAlign: 'center' }}>선택 완료</Text>
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
    // top_container: {
    //     height: 150,
    //     backgroundColor: 'red',
    // },
    // rectangle: {
    //     position: 'absolute',
    //     top: 80,
    //     width: '100%',
    //     flexDirection: 'row',
    //     justifyContent: 'center',
    // },
    // rectagleContent: {
    //     width: '80%',
    //     height: 450,
    //     alignItems: 'center',
    //     backgroundColor: '#ffffff',
    //     borderColor: '#707070',
    //     borderWidth: 1,
    //     borderRadius: 10,
    // },
    // rectagleContentTop: {
    //     padding: 10,
    // },
    // rectangleOuter: {
    //     marginTop: 20,
    // },
    // contentBorder: {
    //     backgroundColor: '#ffffff',
    //     borderWidth: 1,
    //     borderColor: '#707070',
    //     borderRadius: 10,
    //     width: 250,
    //     height: 40,
    //     margin: 8,
    // },
    // contentBorderPress: {
    //     backgroundColor: '#FFC9DD',
    //     borderWidth: 1,
    //     borderColor: '#707070',
    //     borderRadius: 10,
    //     width: 250,
    //     height: 40,
    //     margin: 8,
    // },
    // subTxt: {
    //     color: '#E2417B',
    //     fontSize: 12,
    //     fontWeight: 'bold',
    // },
    // mainTxt: {
    //     fontSize: 14,
    //     fontWeight: '900',
    // },
    // contentItem: {
    //     padding: 10,
    //     color: '#707070',
    //     fontWeight: 'bold'
    // },
    // contentItemPress: {
    //     padding: 10,
    //     color: '#ffffff',
    //     fontWeight: 'bold'
    // },
    // headerStyle: {
    //     backgroundColor: '#ffffff',
    //     width: 150,
    //     marginRight: 10,
    //     height: '65%',
    // }
});
