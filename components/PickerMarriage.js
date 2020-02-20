import React from 'react';
import { Picker, View, StyleSheet } from 'react-native';

export default class PickerLocation extends React.Component {
    constructor (props) {
        super(props);
        this.state ={
            itemList : [
                {marriage : '미혼'},
                {marriage : '기혼'},
        ]
        };
    }
    
    sendMarriage = (data) => {
        this.props.marriageData(data);
        this.setState({marriage : data.marriage});
    }

    render() {
        return (
            <View>
                <Picker style={styles.pickerStyle}
                    mode="dropdown"
                    selectedValue={this.state.marriage}
                    onValueChange={(itemValue) =>
                        this.sendMarriage({ marriage: itemValue })}
                >
                    {
                        this.state.itemList.map((member) => 
                        <Picker.Item label={member.marriage} value={member.marriage} />
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