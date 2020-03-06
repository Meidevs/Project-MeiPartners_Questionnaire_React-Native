import React, { Component } from 'react'
import {
    Text,
    View,
    Image,
    Dimensions,
    StyleSheet,
    FlatList,
} from 'react-native'
import Swiper from 'react-native-swiper'
const { width } = Dimensions.get('window')

export default class Recommendation extends React.Component {

    constructor(props) {
        super(props)
        var preData = this.props.navigation.state.params.json;
        this.state = {
            items: preData,
        }
        //피부 타입 중 랜덤 선별=>
        var aNum = this.state.items.length;
        var rNum = Math.floor(Math.random() * aNum);

        //랜덤 상품 선별 난수 생성
        var randArray = [];
        var aContentNum = this.state.items[rNum].items.length;
        let i = 0;
        while (i < 6) {
            let n = Math.floor(Math.random() * aContentNum);
            if(!sameNum(n)) {
                randArray.push(n);
                i++;
            }
        }

        function sameNum(n) {
            for (var i = 0; i < randArray.length; i++ ){
                if( n === randArray[i]) {
                    return true;
                }
            }
            return false;
        }
        rawArray = [];
        rawArray.push(this.state.items[rNum].items[randArray[0]]);
        rawArray.push(this.state.items[rNum].items[randArray[1]]);
        rawArray.push(this.state.items[rNum].items[randArray[2]]);

        var aArray = [];
        var bArray = [];
        var cArray = [];

        aArray.push(rawArray[0]);
        bArray.push(rawArray[1]);
        cArray.push(rawArray[2]);

        this.state.a = aArray;
        this.state.b = bArray;
        this.state.c = cArray;
        console.log('this.state.a',this.state.a)
        console.log('this.state.b',this.state.b)
        console.log('this.state.c',this.state.c)
        
    }

    renderItem1 = data => {
        return (
            <View style={styles.txtDesign}>
                <View styles={styles.txtDesignContent}>
                    <Text style={{ fontSize: 20, fontWeight: '400', textAlign: 'left', lineHeight: 30, color: '#222222' }}>{data.item.manual}</Text>
                </View>
                <View styles={styles.txtDesignContent}>
                    <Text style={{ fontSize: 20, fontWeight: '400', textAlign: 'left', lineHeight: 30, color: '#FFFAFC' }}>{data.item.submanual}</Text>
                </View>
            </View>
        )
    }

    renderItem2 = data => {
        return (
            <View style={styles.txtDesign}>
                <View styles={styles.txtDesignContent}>
                    <Text style={{ fontSize: 20, fontWeight: '400', textAlign: 'left', lineHeight: 30, color: '#222222' }}>{data.item.manual}</Text>
                </View>
                <View styles={styles.txtDesignContent}>
                    <Text style={{ fontSize: 20, fontWeight: '400', textAlign: 'left', lineHeight: 30, color: '#FFFAFC' }}>{data.item.submanual}</Text>
                </View>
            </View>
        )
    }
    renderItem3 = data => {
        return (
            <View style={styles.txtDesign}>
                <View styles={styles.txtDesignContent}>
                    <Text style={{ fontSize: 20, fontWeight: '400', textAlign: 'left', lineHeight: 30, color: '#222222' }}>{data.item.manual}</Text>
                </View>
                <View styles={styles.txtDesignContent}>
                    <Text style={{ fontSize: 20, fontWeight: '400', textAlign: 'left', lineHeight: 30, color: '#FFFAFC' }}>{data.item.submanual}</Text>
                </View>
            </View>
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <Swiper style={styles.wrapper} vertical={false} showsPagination={false} buttonWrapperStyle={{ backgroundColor: 'transparent', flexDirection: 'row', position: 'absolute', top: -80, left: 0, flex: 1, paddingHorizontal: 10, paddingVertical: 10, justifyContent: 'space-between', alignItems: 'center' }} showsButtons>
                    <View style={styles.sliderContent}>
                        <View style={styles.sliderTop}>
                            <View style={styles.sliderImage}>
                                <Text style={styles.text}>{this.state.a[0].item}</Text>
                            </View>
                        </View>
                        <View style={styles.sliderBottom}>
                            <FlatList
                                data={this.state.a}
                                ItemSeparatorComponent={this.FlatListItemSeparator}
                                renderItem={item => this.renderItem1(item)}
                                keyExtractor={item => item.id}
                            />
                        </View>
                    </View>
                    <View style={styles.sliderContent}>
                        <View style={styles.sliderTop}>
                            <View style={styles.sliderImage}>
                                <Text style={styles.text}>{this.state.b[0].item}</Text>
                            </View>
                        </View>
                        <View style={styles.sliderBottom}>
                            <FlatList
                                data={this.state.b}
                                ItemSeparatorComponent={this.FlatListItemSeparator}
                                renderItem={item => this.renderItem2(item)}
                                keyExtractor={item => item.id}
                            />
                        </View>
                    </View>
                    <View style={styles.sliderContent}>
                        <View style={styles.sliderTop}>
                            <View style={styles.sliderImage}>
                                <Text style={styles.text}>{this.state.c[0].item}</Text>
                            </View>
                        </View>
                        <View style={styles.sliderBottom}>
                            <FlatList
                                data={this.state.c}
                                ItemSeparatorComponent={this.FlatListItemSeparator}
                                renderItem={item => this.renderItem3(item)}
                                keyExtractor={item => item.item}
                            />
                        </View>
                    </View>
                    <View style={styles.sliderContent}>
                        <View>
                            <Text>hi</Text>
                        </View>
                    </View>
                </Swiper>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    wrapper: {
    },
    sliderContent: {
        flex: 1,
    },
    slide: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'transparent'
    },
    sliderTop: {
        flex: 2,
    },
    sliderBottom: {
        backgroundColor: '#F8B7BD',
        flex: 1,
    },
    sliderImage: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    image: {
        width,
        flex: 1
    },
    txtDesign: {
        padding: 10,
    },
    txtDesignContent: {

        marginTop: 100,
    },
    text: {
        marginBottom: 10,
        fontSize: 20,
        fontWeight: '400',
        color: '#444444'
    }
});