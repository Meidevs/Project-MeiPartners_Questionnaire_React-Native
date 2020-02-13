import React from 'react';
import { Picker, View, StyleSheet } from 'react-native';

export default class PickerComponent extends React.Component {
    constructor (props) {
        super(props);
        var date = new Date();
        var lastYear = JSON.stringify(date).substring(1,5);
        var years = [];
        for(let i=1970; i<parseInt(lastYear) + 1; i++) {
            years.push({value : JSON.stringify(i)});
        }
        this.state ={
            itemList : years
        }
    }
    render() {
        return (
            <View>
                <Picker style={styles.pickerStyle}
                    mode="dropdown"
                    selectedValue={this.state.years}
                    onValueChange={(itemValue) =>
                        this.setState({ years: itemValue })}
                >
                    <Picker.Item label='1969' value='1969' />
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