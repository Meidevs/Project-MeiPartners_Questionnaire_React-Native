import React from 'react';
import { View, Text, Image } from 'react-native';

class LogoTitle extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Image
                    source={require('../public/images/topback.png')}
                    style={{ width: 40, height: 40 }}
                />
            </View>
        )
    }
}

module.exports = {
    LogoTitle
}