import React from 'react';
import {
  View,
  Text,
  PermissionsAndroid,
  TouchableOpacity,
  StyleSheet,
  Image,
  Button,
  ImageBackground,
} from 'react-native';

export default class Home extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.top_container}>
          <View style={styles.top_info}>
            <Text>
              강서현님,안녕하세요
            </Text>
          </View>
        </View>

        <View style={styles.bottom_container}>
          <View style={styles.bottom_top}>
            <View style={styles.smart}>
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate('Question')
                }
                style={styles.buttonContainer}>
                <Image source={require('../public/images/button1.png')} style={styles.button1}/>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.bottom_bottom}>
            <Text>Hi</Text>
          </View>
        </View>
      </View>
    );
  }

  constructor(props) {
    super(props);
    this.state = {};
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  top_container: {
    backgroundColor: '#FFFFFF',
    flex: 2,
    flexDirection: 'row',
  },
  bottom_container: {
    backgroundColor: '#BDBDBD',
    flex: 4,
  },
  bottom_top: {
    backgroundColor: 'blue',
    flex: 1,
    flexDirection: 'row',
  },
  bottom_bottom: {
    backgroundColor: 'white',
    flex: 1,
    flexDirection: 'row',
  },
});
