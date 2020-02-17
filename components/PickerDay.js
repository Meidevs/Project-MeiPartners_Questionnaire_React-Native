import React from 'react';
import { Picker, View, StyleSheet } from 'react-native';

export default class PickerDay extends React.Component {
    constructor (props) {
        super(props);
        var days = [];
        for(let i=1; i<32; i++) {
            days.push({value : JSON.stringify(i)});
        }
        this.state ={
            itemList : days
        }
    }

    sendDays = (data) => {
        this.props.dayData(data);
        this.setState({days : data.days});
    }
    render() {
        return (
            <View>
                <Picker style={styles.pickerStyle}
                    mode="dropdown"
                    selectedValue={this.state.days}
                    onValueChange={(itemValue) =>
                        this.sendDays({ days: itemValue })}
                >
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