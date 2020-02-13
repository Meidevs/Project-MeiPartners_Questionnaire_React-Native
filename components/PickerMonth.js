import React from 'react';
import { Picker, View, StyleSheet } from 'react-native';

export default class PickerComponent extends React.Component {
    constructor (props) {
        super(props);
        var month = [];
        for(let i=1; i<13; i++) {
            month.push({value : JSON.stringify(i)});
        }
        this.state ={
            itemList : month
        }
    }
    render() {
        return (
            <View>
                <Picker style={styles.pickerStyle}
                    mode="dropdown"
                    selectedValue={this.state.month}
                    onValueChange={(itemValue) =>
                        this.setState({ month: itemValue })}
                >
                    {
                        this.state.itemList.map((member, key) => 
                        <Picker.Item label={member.value} value={member.value} />
                        )
                    }
                </Picker>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textStyle: {
        margin: 24,
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    pickerStyle: {
        height: 150,
        width: 100,
        color: '#344953',
        justifyContent: 'center',
    }
});