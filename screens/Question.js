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
import { render } from 'react-dom';

class CategoriesInfo extends React.Component {
    render() {
        return (
            <TouchableOpacity style={styles.categoryItem}>
                <Text style={this.props.categories.selection}>
                    {this.props.categories.name}
                </Text>
            </TouchableOpacity>
        )
    }
}

export default class Question extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            itemCategories: [
                { code: 'code1', name: '클렌징', selection: styles.itemCategoriesTxt },
                { code: 'code2', name: '딥 클렌징', selection: styles.itemCategoriesTxt },
                { code: 'code3', name: '토너', selection: styles.itemCategoriesTxt },
                { code: 'code4', name: '앰플', selection: styles.itemCategoriesTxt },
                { code: 'code5', name: '세럼 & 에센스', selection: styles.itemCategoriesTxt },
                { code: 'code6', name: '아이크림', selection: styles.itemCategoriesTxt },
                { code: 'code7', name: '크림', selection: styles.itemCategoriesTxt },
                { code: 'code8', name: '마스크', selection: styles.itemCategoriesTxt },
                { code: 'code9', name: '자외선차단제', selection: styles.itemCategoriesTxt },
                { code: 'code10', name: '블레미쉬 밤', selection: styles.itemCategoriesTxt },
                { code: 'code11', name: '특수 / 영양', selection: styles.itemCategoriesTxt },
                { code: 'code12', name: '옵션 1', selection: styles.itemCategoriesTxt },
                { code: 'code13', name: '옵션 2', selection: styles.itemCategoriesTxt },
            ]
        }
    }

    categoryItemPress = (index) => {
        console.log(index)
        var i;
        var data = this.state.itemCategories;
        data[index].isSelected = !data[index].isSelected;
        data[index].selection = data[index].isSelected ? styles.itemCategoriesTxtPress : styles.itemCategoriesTxt;
        this.setState({ categoryItemsd: data[index].name });
        this.setState({ code: data[index].code });
        // for (i = 0; i < index; i++) {
        //     if (data[i].isSelected == true) {
        //         data[i].isSelected = !data[i].isSelected;
        //         data[i].selection = data[i].isSelected ? styles.itemCategoriesTxtPress : styles.itemCategoriesTxt;
        //     }
        // }
        // for (i = index + 1; i < data.length; i++) {
        //     if (data[i].isSelected == true) {
        //         data[i].isSelected = !data[i].isSelected;
        //         data[i].selection = data[i].isSelected ? styles.itemCategoriesTxtPress : styles.itemCategoriesTxt;
        //     }
        // }
        this.setState({
            categoryItems: data,
        });
    }

    render() {
        const mapToCategories = data => {
            return data.map((data, i) => {
                return (
                <TouchableOpacity key={i} onPress={() => this.categoryItemPress(i)}>
                    <Text style={data.selection}>
                        {data.name}
                    </Text>
                </TouchableOpacity>)
            })
        }
        return (
            <SafeAreaView style={styles.container}>
                <ScrollView style={styles.scrollView}>
                    <View style={styles.topContainer}>
                        <View style={styles.category}>
                            <Text style={styles.txt}>
                                관심 카테고리
                            </Text>
                        </View>
                        <View style={styles.subCategory}>
                            <Text style={{ color: 'red', fontSize: 12 }}>*<Text style={{ color: 'black' }}>집중 관리하고 싶은 피부케어를 선택해주세요.</Text></Text>
                        </View>
                        <View style={styles.categoryImage}>
                            {mapToCategories(this.state.itemCategories)}
                        </View>
                    </View>
                    <View style={styles.bottom_container}>

                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollView: {
        backgroundColor: '#C0C0C0',
    },
    topContainer: {
        backgroundColor: '#ffffff',
        marginBottom: 5,
    },
    bottom_container: {
        backgroundColor: '#ffffff',
    },
    category: {
        paddingTop: 10,
        paddingRight: 10,
        paddingLeft: 10,
    },
    txt: {
        fontWeight: 'bold'
    },
    subCategory: {
        paddingRight: 10,
        paddingLeft: 10,
        paddingBottom: 20
    },
    categoryImage: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    categoryItem: {
        padding: 10,
        width: '20%',
        height: null,
    },
    itemCategoriesTxt: {
        textAlign: 'center',
        fontSize: 10,
        color: 'black'
    },
    itemCategoriesTxtPress: {
        textAlign: 'center',
        fontSize: 10,
        color: 'pink'
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#C0C0C0',
        padding: 10
    },
});