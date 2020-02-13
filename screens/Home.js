import React from 'react';
import {
  View,
  Text,
  PermissionsAndroid,
  TouchableOpacity,
  StyleSheet,
  Image,
  Button,
} from 'react-native';

export default class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.top_container}>
          <View style={styles.top_info}>
            <Text style={styles.info_1_font}>
              강서현님,안녕하세요
            </Text>
          </View>
          <View style={styles.top_image}>
          </View>
        </View>

        <View style={styles.bottom_container}>
          <View style={styles.bottom_top}>
            <View style={styles.smart}>
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate('Questionnaire')
                }
                style={styles.buttonContainer}>
                  <Image source={require('../public/images/button1.png')} />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.bottom_bottom}>
            <View style={styles.token}>
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate('Token')
                }
                style={styles.buttonContainer}>
                  
              </TouchableOpacity>
            </View>
            <View style={styles.history}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('OrderList')
                }
                style={styles.buttonContainer}>
              </TouchableOpacity>
            </View>
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
    backgroundColor: 'red',
    flex: 1,
    flexDirection: 'row',
  },
  top_info: {
    flex: 2,
    paddingHorizontal: 15,
    paddingVertical: 30,
  },
  info_1_font: {
    fontSize: 15,
    fontWeight: 'normal',
    fontStyle: 'normal',
    letterSpacing: 0,
    color: '#444444',
  },
  info_2_font: {
    fontSize: 17,
    fontWeight: '600',
    fontStyle: 'normal',
    letterSpacing: 0,
    color: '#5ab9cd',
  },
  info_3_font: {
    fontSize: 13,
    fontWeight: 'normal',
    fontStyle: 'normal',
    letterSpacing: 0,
    color: '#444444',
  },
  top_image: {
    flex: 1,
    paddingVertical: 50,
    paddingHorizontal: 40,
    alignItems: 'center',
  },
  bottom_container: {
    backgroundColor : 'black',
    flex: 4,
    paddingVertical: 30,
  },
  bottom_top: {
    backgroundColor : 'blue',
    flex: 1,
    flexDirection: 'row',
  },
  itemlist: {
    flex: 1,
    alignItems: 'center',
  },
  smart: {
    flex: 1,
    alignItems: 'center',
  },
  bottom_bottom: {
    backgroundColor : 'white',
    flex: 1,
    flexDirection: 'row',
    paddingBottom: 50,
  },
  token: {
    flex: 1,
    alignItems: 'center',
  },
  history: {
    flex: 1,
    alignItems: 'center',
  },
});
