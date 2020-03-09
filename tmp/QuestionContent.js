import React, { Children } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Image,
    FlatList,
    Dimensions,
} from 'react-native';
const { width, height } = Dimensions.get('window');
import { ProgressBar, Colors } from 'react-native-paper';

export default class QuestionContent extends React.Component {

    constructor(props) {
        super(props)
        console.log('this.props', this.props)
        this.props.navigation.setParams({ increaseCount: 1 });
        this.state = {
            code1: 0,
            code2: 0,
            code3: 0,
            code4: 0,
            code5: 0,
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

    renderItem = data => {
        return (
            <TouchableOpacity
                style={data.item.selectedBackground}
                onPress={() => this.selectItem(data)}
            >
                <Text style={data.item.selectedTxt}>{data.item.id}</Text>
            </TouchableOpacity>
        )
    }

    onPress = () => {
        let j;
        let arrayData = this.state.contents;
        let nextCount = this.props.navigation.getParam('increaseCount');
        let curCount = nextCount - 1;
        let nextData = nextCount + 1;

        for (let i = 0; i < this.state.dataSource.length; i++) {
            if (this.state.dataSource[i].isSelect == true) {
                j = 2 - i;

                if (arrayData[curCount].type == 'code1') {
                    this.state.code1 = this.state.code1 + j;
                } else if (arrayData[curCount].type == 'code2') {
                    this.state.code2 = this.state.code2 + j;
                } else if (arrayData[curCount].type == 'code3') {
                    this.state.code3 = this.state.code3 + j;
                } else if (arrayData[curCount].type == 'code4') {
                    this.state.code4 = this.state.code4 + j;
                } else if (arrayData[curCount].type == 'code5') {
                    this.state.code5 = this.state.code5 + j;
                }
            }
        }
        let data = {
            code1: this.state.code1,
            code2: this.state.code2,
            code3: this.state.code3,
            code4: this.state.code4,
            code5: this.state.code5,
        }

        if (nextData == 11) {
            this.final(data);
            this.props.navigation.setParams({ increaseCount: 10 });
        } else {
            this.props.navigation.setParams({ increaseCount: nextData });
            this.setState({
                subTxt: arrayData[nextCount].subtxt,
                mainTxt: arrayData[nextCount].maintxt,
                dataSource: [
                    { id: arrayData[nextCount].question1, selectedBackground: styles.contentBorder, selectedTxt: styles.contentItem },
                    { id: arrayData[nextCount].question2, selectedBackground: styles.contentBorder, selectedTxt: styles.contentItem },
                    { id: arrayData[nextCount].question3, selectedBackground: styles.contentBorder, selectedTxt: styles.contentItem },
                ]
            });
        }


    }

    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: () => null,
            headerRight: () =>
                <View style={styles.headerStyle}>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end' }}>
                        <Text style={{ fontSize: 20, color: '#707070', fontWeight: '400' }}>{navigation.getParam('increaseCount')} / 10</Text>
                    </View>
                    <View>
                        <ProgressBar progress={navigation.getParam('increaseCount') / 10} color={Colors.pink600} style={{ height: 8, borderWidth: 0.5, borderColor: '#707070', borderRadius: 10 }} />
                    </View>
                </View>,
        }
    }

    componentJSX() {
        if (this.props.navigation.getParam('increaseCount') != 10) {
            return (
                <TouchableOpacity onPress={this.onPress} style={{ height: height * 0.06, width: width * 0.55, backgroundColor: '#FFC9DD', borderRadius: 10, justifyContent: 'center', borderColor: '#707070', borderWidth: 1 }}>
                    <Text style={{ color: '#ffffff', fontWeight: 'bold', fontSize: 20, textAlign: 'center' }
                    }> 확인</Text >
                </TouchableOpacity>
            )
        } else {
            return (
                <TouchableOpacity onPress={this.onPress} style={{ height: height * 0.06, width: width * 0.55, backgroundColor: '#FFC9DD', borderRadius: 10, justifyContent: 'center', borderColor: '#707070', borderWidth: 1 }}>
                    <Text style={{ color: '#ffffff', fontWeight: 'bold', fontSize: 20, textAlign: 'center' }
                    }>제출</Text >
                </TouchableOpacity>


            )
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
                        <View style={styles.rectagleContentUpper}>
                            <Text style={styles.subTxt}>{this.state.subTxt}</Text>
                            <Text style={styles.mainTxt}>{this.props.navigation.getParam('increaseCount')}. {this.state.mainTxt}</Text>
                        </View>
                        <View style={styles.rectagleContentMiddle}>
                            <FlatList
                                data={this.state.dataSource}
                                ItemSeparatorComponent={this.FlatListItemSeparator}
                                renderItem={item => this.renderItem(item)}
                                keyExtractor={item => item.id}
                            />
                        </View>
                        <View style={styles.rectangleContentDowner}>
                            {this.componentJSX()}
                        </View>
                    </View>
                </View>
            </View>


        );
    }

    componentDidMount() {
        this.getQuestions();
    }

    final = async (data) => {
        try {
            let response = await fetch(`http://meipartners.xyz:20000/api/question/`, {
                method: 'POST',
                headers: {
                    Accpet: 'application/json',
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
                body: JSON.stringify(data),
            });

            let json = await response.json();
            console.log('json', json);
            this.props.navigation.navigate('Waiting', {
                json
            })
        } catch (err) {
            console.log(err);
        }
    }

    getQuestions = async () => {
        try {
            let response = await fetch('http://meipartners.xyz:20000/api/randquestions', {
                method: 'GET',
                headers: {
                    Accpet: 'application/json',
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
            });

            let json = await response.json();
            this.setState({ contents: json });
            if (response.ok) {
                this.setState({
                    subTxt: json[0].subtxt,
                    mainTxt: json[0].maintxt,
                    dataSource: [
                        { id: json[0].question1, selectedBackground: styles.contentBorder, selectedTxt: styles.contentItem },
                        { id: json[0].question2, selectedBackground: styles.contentBorder, selectedTxt: styles.contentItem },
                        { id: json[0].question3, selectedBackground: styles.contentBorder, selectedTxt: styles.contentItem },
                    ],
                    type: json[0].type,
                });
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
    top_container: {
        height: height * 0.23,
        backgroundColor: '#FD7777'
    },
    rectangle: {
        position: 'absolute',
        top: height * 0.10,
        width: '80%',
        flexDirection: 'row',
        alignSelf: 'center',
        justifyContent: 'center',
    },
    rectagleContent: {
        flex: 1,
        width: '80%',
        height: height * 0.7,
        alignItems: 'center',
        backgroundColor: '#ffffff',
        borderColor: '#707070',
        borderWidth: 1,
        borderRadius: 10,
    },
    rectagleContentUpper: {
        flex: 1,
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        padding: 20,
    },
    rectagleContentMiddle: {
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flex: 2,
    },
    rectangleContentDowner: {
        flex: 1,
        width : '100%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    contentBorder: {
        backgroundColor: '#ffffff',
        borderWidth: 1,
        borderColor: '#707070',
        borderRadius: 10,
        width: width * 0.7,
        height: height * 0.06,
        margin: 8,
        justifyContent: 'center'
    },
    contentBorderPress: {
        backgroundColor: '#FFC9DD',
        borderWidth: 1,
        borderColor: '#707070',
        borderRadius: 10,
        width: width * 0.7,
        height: height * 0.06,
        margin: 8,
        justifyContent: 'center'
    },
    subTxt: {
        color: '#E2417B',
        fontSize: 20,
        fontWeight: '400',
    },
    mainTxt: {
        fontSize: 20,
        fontWeight: '400',
    },
    contentItem: {
        padding: 10,
        color: '#707070',
        fontWeight: '400',
        fontSize: 20,

    },
    contentItemPress: {
        padding: 10,
        color: '#ffffff',
        fontWeight: '400',
        fontSize: 20,

    },
    headerStyle: {
        backgroundColor: '#ffffff',
        width: 150,
        marginRight: 10,
        height: '65%',
    }
});