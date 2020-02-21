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
import { render } from 'react-dom'
const { width } = Dimensions.get('window')

export default class Recommendation extends React.Component {
    
    constructor(props) {
        super(props)
        var preData = this.props.navigation.state.params.json;
        this.state = {
            items: preData,
        }
        console.log('this.state.items', this.state.items)
        //피부 타입 중 랜덤 선별=>
        var aNum = this.state.items.length;
        var rNum = Math.floor(Math.random()*aNum);

        //랜덤 상품 선별 난수 생성
        var aContentNum = this.state.items[rNum].items.length;
        var rNum1 = Math.floor(Math.random()*aContentNum);
        var rNum2 = Math.floor(Math.random()*aContentNum);
        var rNum3 = Math.floor(Math.random()*aContentNum);

        var rawArray = [];

        rawArray.push(this.state.items[rNum].items[rNum1]);
        rawArray.push(this.state.items[rNum].items[rNum2]);
        rawArray.push(this.state.items[rNum].items[rNum3]);

        console.log('rawArray', rawArray);
        // for (var i = 0; i < this.state.items.length; i++) {
        //     for (var j = 0; j < this.state.items[i].items.length; j++) {
        //         rawArray.push(this.state.items[i].items[j]);
        //     }
        // }
        var aArray = [];
        var bArray = [];
        var cArray = [];

        aArray.push(rawArray[0]);
        bArray.push(rawArray[1]);
        cArray.push(rawArray[2]);

        this.state.a = aArray;
        this.state.b = bArray;
        this.state.c = cArray;

    }

    renderItem1 = data => {
        return (
            <View style={styles.txtDesign}>
                <View styles={styles.txtDesignContent}>
                    <Text style={{fontSize : 20, fontWeight : '400', textAlign : 'left', lineHeight : 30, color : '#222222'}}>{data.item.manual}</Text>
                </View>
                <View styles={styles.txtDesignContent}>
                    <Text style={{fontSize : 20, fontWeight : '400', textAlign : 'left', lineHeight : 30,color : '#FFFAFC' }}>{data.item.submanual}</Text>
                </View>
            </View>
        )
    }

    renderItem2 = data => {
        return (
            <View style={styles.txtDesign}>
                <View styles={styles.txtDesignContent}>
                    <Text style={{fontSize : 20, fontWeight : '400', textAlign : 'left', lineHeight : 30, color : '#222222'}}>{data.item.manual}</Text>
                </View>
                <View styles={styles.txtDesignContent}>
                    <Text style={{fontSize : 20, fontWeight : '400', textAlign : 'left', lineHeight : 30, color : '#FFFAFC'}}>{data.item.submanual}</Text>
                </View>
            </View>
        )
    }
    renderItem3 = data => {
        return (
            <View style={styles.txtDesign}>
                <View styles={styles.txtDesignContent}>
                    <Text style={{fontSize : 20, fontWeight : '400', textAlign : 'left', lineHeight : 30, color : '#222222'}}>{data.item.manual}</Text>
                </View>
                <View styles={styles.txtDesignContent}>
                    <Text style={{fontSize : 20, fontWeight : '400', textAlign : 'left', lineHeight : 30, color : '#FFFAFC'}}>{data.item.submanual}</Text>
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
                                keyExtractor={item => item.id}
                            />
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
        flexDirection : 'column',
        alignItems : 'center',
        justifyContent : 'flex-end',
    },
    image: {
        width,
        flex: 1
    },
    txtDesign: {
        padding: 10,
    },
    txtDesignContent : {
        
        marginTop : 100,
    },
    text : {
        marginBottom : 10,
        fontSize : 20,
        fontWeight : '400',
        color : '#444444'
    }
});