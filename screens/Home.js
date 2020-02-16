import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';

export default class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <View style={styles.topUpperContent}>
            <Text style={styles.topUpperContentTxt}>
              LovU
            </Text>
          </View>
          <View style={styles.topDownerContent}>
            <View style={styles.topDownerContent_1}>
              <Text style={styles.topDownerContentTxt_1}>모바일 | 010 - 66** - ****</Text>
            </View>
          </View>

        </View>
        <View style={styles.rectangle}>
          <View style={styles.rectagleContent}>
            <Text>Hi</Text>
          </View>
        </View>
        <View style={styles.bottomContainer}>

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
  topContainer: {
    backgroundColor: '#E78DB8',
    flex: 1,
    
  },
  topUpperContent: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'flex-end'
  },
  topUpperContentTxt: {
    padding: 10,
    fontSize: 23,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  topDownerContent: {
    flex: 5,
  },
  topDownerContent_1: {
    paddingLeft: 5,
  },
  topDownerContentTxt_1: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  bottomContainer: {
    backgroundColor: '#ffffff',
    flex: 2,
  },
  rectangle: {
    position: 'absolute',
    top: 150,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  rectagleContent: {
    width: '80%',
    height: 450,
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderColor: '#707070',
    borderWidth: 1,
    borderRadius: 10,
},

});
