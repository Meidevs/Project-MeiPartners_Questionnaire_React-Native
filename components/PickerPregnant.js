import React from 'react';
import { Picker, View, StyleSheet } from 'react-native';

export default class PickerPregnant extends React.Component {
    constructor (props) {
        super(props);
        this.state ={
            itemList : [
                {pregnant : '유'},
                {pregnant : '무'},
        ]
        };
    }
    
    sendPregnant = (data) => {
        this.props.pregnantData(data);
        this.setState({pregnant : data.pregnant});
    }

    render() {
        return (
            <View>
                <Picker style={styles.pickerStyle}
                    mode="dropdown"
                    selectedValue={this.state.pregnant}
                    onValueChange={(itemValue) =>
                        this.sendPregnant({ pregnant: itemValue })}
                >
                    {
                        this.state.itemList.map((member) => 
                        <Picker.Item label={member.pregnant} value={member.pregnant} />
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
        width: 150,
        color: '#344953',
        justifyContent: 'center',
    }
});