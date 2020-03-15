import React from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
    Image,
    StatusBar,
} from 'react-native';
import * as Font from 'expo-font';
const { width, height } = Dimensions.get('window');

export default class Incomming1 extends React.Component {
    state = {
        fontLoaded: false,
    }
    async componentDidMount() {
        await Font.loadAsync({
            'NanumSquareRoundEB': require('../assets/fonts/NanumSquareRoundEB.ttf'),
            'NanumSquareRoundB': require('../assets/fonts/NanumSquareRoundB.ttf'),
            'NanumSquareRoundR': require('../assets/fonts/NanumSquareRoundR.ttf'),
            'NanumSquareRoundL': require('../assets/fonts/NanumSquareRoundL.ttf')
        })

        this.setState({ fontLoaded: true })
    }
    constructor(props) {
        super(props)
        console.log(this.props.navigation.state.params)
        this.state = {
            cateSelectedCodes : this.props.navigation.state.params.cateSelectedCodes,
            resultsCodes : this.props.navigation.state.params.resultsCodes,
            codeAllCateArray : this.props.navigation.state.params.codeAllCateArray,
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    barStyle="dark-content"
                    // dark-content, light-content and default
                    hidden={false}
                    //To hide statusBar
                    backgroundColor="#00BCD4"
                    //Background color of statusBar
                    translucent={false}
                    //allowing light, but not detailed shapes
                    networkActivityIndicatorVisible={true}
                />
                <View>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Recommendation', {cateSelectedCodes : this.state.cateSelectedCodes, resultsCodes : this.state.resultsCodes, codeAllCateArray : this.state.codeAllCateArray})}>
                        <Text>다음</Text>
                    </TouchableOpacity>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: StatusBar.currentHeight,
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
});