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
        this.props.navigation.setParams({ increaseCount: 1 });
        this.state = {
            count: 1,

        }
    }
    componentDidMount() {
        this.setState({
            subTxt: '해당하는 선택지를 모두 선택해주세요',
            mainTxt: '1. 최근 3개월 이내에 구입하신 스킨 케어 제품을 선택해주세요',
            dataSource: [
                { id: '안티 에이징 크림', selectedBackground: styles.contentBorder, selectedTxt: styles.contentItem },
                { id: '페이셜 리프팅 폼', selectedBackground: styles.contentBorder, selectedTxt: styles.contentItem },
                { id: '피부 진정 크림', selectedBackground: styles.contentBorder, selectedTxt: styles.contentItem },
                { id: '화이트닝 크림', selectedBackground: styles.contentBorder, selectedTxt: styles.contentItem },
            ]
        })
        console.log(this.state)
    }

    onPress = () => {
        let nextData = this.props.navigation.getParam('increaseCount') + 1;
        this.props.navigation.setParams({ increaseCount: nextData });
        this.setState({ count: this.props.navigation.getParam('increaseCount') + 1 });
        if (nextData == 2) {
            this.setState({
                subTxt: '해당하는 선택지를 하나만 선택해주세요',
                mainTxt: '2. 본인에게 해당하는 피부 타입을 선택해주세요.',
                dataSource: [
                    { id: '지성 피부', selectedBackground: styles.contentBorder, selectedTxt: styles.contentItem },
                    { id: '민감성 피부', selectedBackground: styles.contentBorder, selectedTxt: styles.contentItem },
                    { id: '건성 피부', selectedBackground: styles.contentBorder, selectedTxt: styles.contentItem },

                ]
            })
        } else if (nextData == 3) {
            this.setState({
                subTxt: '해당하는 선택지를 하나만 선택해주세요',
                mainTxt: '3. 하루 수분 섭취량과 운동량을 선택해주세요.',
                dataSource: [
                    { id: '1L이하, 1 - 2시간', selectedBackground: styles.contentBorder, selectedTxt: styles.contentItem },
                    { id: '1L, 1 - 2시간', selectedBackground: styles.contentBorder, selectedTxt: styles.contentItem },
                    { id: '1L, 2 - 4시간', selectedBackground: styles.contentBorder, selectedTxt: styles.contentItem },
                    { id: '2L, 1 - 2시간', selectedBackground: styles.contentBorder, selectedTxt: styles.contentItem },
                    { id: '2L, 2 - 4시간', selectedBackground: styles.contentBorder, selectedTxt: styles.contentItem },
                    { id: '2L이상, 1 - 2시간', selectedBackground: styles.contentBorder, selectedTxt: styles.contentItem },
                ]
            })
        }
    }

    FlatListItemSeparator = () => <View style={styles.line} />;

    selectItem = data => {
        data.item.isSelect = !data.item.isSelect;
        data.item.selectedBackground = data.item.isSelect ?
            styles.contentBorderPress : styles.contentBorder;
        data.item.selectedTxt = data.item.isSelect ?
            styles.contentItemPress : styles.contentItem;
        const index = this.state.dataSource.findIndex(
            item => data.item.id === item.id
        );
        this.state.dataSource[index] = data.item;
        this.setState({
            dataSource: this.state.dataSource,
        });
    };

    renderItem = data =>
        <TouchableOpacity
            style={data.item.selectedBackground}
            onPress={() => this.selectItem(data)}
        >
            <Text style={data.item.selectedTxt}>{data.item.id}</Text>
        </TouchableOpacity>

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

    componentJSX() {
        if (this.state.count == 1) {

        }
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
                            <Text style={styles.subTxt}>{this.state.subTxt}</Text>
                            <Text style={styles.mainTxt}>{this.state.mainTxt}</Text>
                        </View>
                        <View style={styles.rectagleContentBottom}>
                            <View style={styles.rectangleUpper}>
                                <FlatList
                                    data={this.state.dataSource}
                                    ItemSeparatorComponent={this.FlatListItemSeparator}
                                    renderItem={item => this.renderItem(item)}
                                />

                            </View>
                            <View style={styles.rectangleDowner}>
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
        borderColor: '#707070',
        borderWidth: 1,
        borderRadius: 10,
    },
    rectagleContentTop: {
        padding: 10,
    },
    rectangleUpper: {
        marginTop: 20,
        height: 300,
    },
    rectangleDowner: {
        alignItems: 'center'
    },
    contentBorder: {
        backgroundColor: '#ffffff',
        borderWidth: 1,
        borderColor: '#707070',
        borderRadius: 10,
        width: 250,
        height: 40,
        margin: 8,
    },
    contentBorderPress: {
        backgroundColor: '#FFC9DD',
        borderWidth: 1,
        borderColor: '#707070',
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
        color: '#707070',
        fontWeight: 'bold'
    },
    contentItemPress: {
        padding: 10,
        color: '#ffffff',
        fontWeight: 'bold'
    },
    headerStyle: {
        backgroundColor: '#ffffff',
        width: 150,
        marginRight: 10,
        height: '65%',
    }
});
