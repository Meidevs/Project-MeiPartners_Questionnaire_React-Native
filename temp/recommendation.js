import React, { Children } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Image,
    FlatList,
} from 'react-native';

export default class Swiper extends React.Component {

    constructor(props) {
        super(props)
        var preData = this.props.navigation.state.params.json;
        this.state = {
            items: preData,
        }
    }

    renderItem = data => {
        console.log(data)
        return (
            <View style={styles.renderItems}>
                <View style={styles.skinTypeStyle}>
                    <Text>{data.item.skinType}</Text>
                </View>
                <View style={styles.renderItemsContent}>
                    <View style={styles.TitleComponent}>
                        <Text>클</Text><Text>렌</Text><Text>징 :</Text>
                    </View>
                    <View style={styles.ImplementComponent}>
                        <Text>{data.item.cleansing}</Text>
                    </View>
                </View>
                <View style={styles.renderItemsContent}>
                    <View style={styles.TitleComponent}>
                        <Text>딥</Text><Text>클</Text><Text>렌</Text><Text>징 :</Text>
                    </View>
                    <View style={styles.ImplementComponent}>
                        <Text>{data.item.deepcleansing}</Text>
                    </View>
                </View>
                <View style={styles.renderItemsContent}>
                    <View style={styles.TitleComponent}>
                        <Text>토</Text><Text>너 :</Text>
                    </View>
                    <View style={styles.ImplementComponent}>
                        <Text>{data.item.toner}</Text>
                    </View>
                </View>
                <View style={styles.renderItemsContent}>
                    <View style={styles.TitleComponent}>
                        <Text>앰</Text><Text>플 :</Text>
                    </View>
                    <View style={styles.ImplementComponent}>
                        <Text>{data.item.ample}</Text>
                    </View>
                </View>
                <View style={styles.renderItemsContent}>
                    <View style={styles.TitleComponent}>
                        <Text>세</Text><Text>럼</Text><Text>/</Text><Text>에</Text><Text>센</Text><Text>스 :</Text>
                    </View>
                    <View style={styles.ImplementComponent}>
                        <Text>{data.item.serum}</Text>
                    </View>
                </View>
                <View style={styles.renderItemsContent}>
                    <View style={styles.TitleComponent}>
                        <Text>아</Text><Text>이</Text><Text>크</Text><Text>림 :</Text>
                    </View>
                    <View style={styles.ImplementComponent}>
                        <Text>{data.item.eyecream}</Text>
                    </View>
                </View>
                <View style={styles.renderItemsContent}>
                    <View style={styles.TitleComponent}>
                        <Text>자</Text><Text>외</Text><Text>선</Text><Text>차</Text><Text>단</Text><Text>제 :</Text>
                    </View>
                    <View style={styles.ImplementComponent}>
                        <Text>{data.item.sunblock}</Text>
                    </View>
                </View>
                <View style={styles.renderItemsContent}>
                    <View style={styles.TitleComponent}>
                        <Text>특</Text><Text>수</Text><Text>/</Text><Text>영</Text><Text>양 :</Text>
                    </View>
                    <View style={styles.ImplementComponent}>
                        <Text>{data.item.special}</Text>
                    </View>
                </View>
                <View style={styles.renderItemsContent}>
                    <View style={styles.TitleComponent}>
                        <Text>크</Text><Text>림 :</Text>
                    </View>
                    <View style={styles.ImplementComponent}>
                        <Text>{data.item.cream}</Text>
                    </View>
                </View>
                <View style={styles.renderItemsContent}>
                    <View style={styles.TitleComponent}>
                        <Text>마</Text><Text>스</Text><Text>크 :</Text>
                    </View>
                    <View style={styles.ImplementComponent}>
                        <Text>{data.item.mask}</Text>
                    </View>
                </View>

                <View style={styles.renderItemsContent}>
                    <View style={styles.TitleComponent}>
                        <Text>옵</Text><Text>션</Text><Text>1 :</Text>
                    </View>
                    <View style={styles.ImplementComponent}>
                        <Text>{data.item.opt1}</Text>
                    </View>
                </View>                
                <View style={styles.renderItemsContent}>
                    <View style={styles.TitleComponent}>
                        <Text>옵</Text><Text>션</Text><Text>2 :</Text>
                    </View>
                    <View style={styles.ImplementComponent}>
                        <Text>{data.item.opt2}</Text>
                    </View>
                </View>
            </View>

        )
    }

    render() {
        console.log(this.state.items)

        return (
            <View style={styles.container}>
                <View style={styles.containerTop}>

                </View>
                <View style={styles.rectangler}>
                    <View style={styles.rectaglerContent}>
                        <FlatList
                            style={styles.FlatListStyle}
                            data={this.state.items}
                            ItemSeparatorComponent={this.FlatListItemSeparator}
                            renderItem={item => this.renderItem(item)}
                        />
                    </View>
                </View>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    containerTop: {
        width: '100%',
        height: 150,
        backgroundColor: 'black',
    },
    rectangler: {
        position: 'absolute',
        top: 80,
        width: '80%',
        flexDirection: 'row',
        alignSelf: 'center',
        justifyContent: 'center',
    },
    rectaglerContent: {
        flex: 1,
        width: '100%',
        height: 450,
        alignItems: 'center',
        backgroundColor: '#ffffff',
        borderColor: '#707070',
        borderWidth: 1,
        borderRadius: 10,
    },
    FlatListStyle: {
        padding: 10,
        width: '100%',
        height: '100%',
    },
    renderItems: {
        width: '100%',
        height : 400,
    },
    skinTypeStyle: {
        alignItems: 'center',
    },
    renderItemsContent: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    TitleComponent: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    ImplementComponent: {
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'flex-end'
    }
});
