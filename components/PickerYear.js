import React from 'react';
import { Picker, View, StyleSheet } from 'react-native';

export default class PickerYear extends React.Component {
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
        console.log('hi')
    }

    sendYears = (data) => {
        this.props.yearData(data);
        this.setState({years : data.years});
    }
    
    render() {
        return (
            <View>
                <Picker style={styles.pickerStyle} mode="dropdown" selectedValue={this.state.years} onValueChange={(itemValue) =>this.sendYears({ years: itemValue })}>
                    {
                        this.state.itemList.map((member) => 
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
        height: 50,
        width: 100,
        color: '#344953',
        justifyContent: 'center',
    }
});