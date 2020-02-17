import React from 'react';
import { Picker, View, StyleSheet } from 'react-native';

export default class PickerLocation extends React.Component {
    constructor (props) {
        super(props);
        this.state ={
            itemList : [
                {location : '서울특별시'},
                {location : '인천광역시'},
                {location : '대전광역시'},
                {location : '세종특별시'},
                {location : '광주광역시'},
                {location : '대구광역시'},
                {location : '울산광역시'},
                {location : '부산광역시'},
                {location : '경기도'},
                {location : '강원도'},
                {location : '충청북도'},
                {location : '충청남도'},
                {location : '전라북도'},
                {location : '전라남도'},
                {location : '경상북도'},
                {location : '경상남도'},
        ]
        };
    }
    
    sendLocation = (data) => {
        this.props.locationData(data);
        this.setState({location : data.location});
    }

    render() {
        return (
            <View>
                <Picker style={styles.pickerStyle}
                    mode="dropdown"
                    selectedValue={this.state.location}
                    onValueChange={(itemValue) =>
                        this.sendLocation({ location: itemValue })}
                >
                    {
                        this.state.itemList.map((member) => 
                        <Picker.Item label={member.location} value={member.location} />
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