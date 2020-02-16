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
          <View style={styles.topContainerContent}>
            <Text style={styles.titleStyle}>
              LovU
            </Text>
          </View>
          <View style={styles.topDownerContainer}>
            <Text style={styles.topTxt}>
              모바일 | 010 - 66** - 07**
            </Text>
          </View>
        </View>
        <View style={styles.bottomContainer}>
          <View style={styles.bottomUpperContent}>
            <Image source={require('../public/images/MEI_Symbol.png')} style={styles.symbolStyle} />
            <Image source={require('../public/images/MEI_String.png')} style={styles.logoStyle} />
          </View>
          <View style={styles.bottomDownerContent}>
            <View style={styles.downerContent_1}>
              <View style={styles.content_1}>
                <View style={styles.interLeftBox}>
                  <Text style={styles.inter_left}></Text>
                </View>
                <View style={styles.interRightBox}>
                  <Text style={styles.inter_right}></Text>
                </View>
              </View>
            </View>
            <View style={styles.downerContent_2}>
              <View style={styles.content_2}>
                <View style={styles.interLeftBox}>
                  <Text style={styles.inter_left}></Text>
                </View>
                <View style={styles.interRightBox}>
                  <Text style={styles.inter_right}></Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
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
  topContainerContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  titleStyle: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#ffffff',
    padding: 5,
  },
  topTxt: {
    fontWeight: 'bold',
    fontSize: 12,
    color: '#ffffff',
    paddingLeft: 5,
    paddingBottom: 5,
  },
  bottomContainer: {
    backgroundColor: '#ffffff',
    flex: 6,
  },
  bottomUpperContent: {
    width: '100%',
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomDownerContent: {
    flex: 3,
  },
  symbolStyle: {
    width: '30%',
    height: '30%',
    margin: 15,
  },
  logoStyle: {
    width: '80%',
    height: '25%',
  },
  downerContent_1: {
    flex: 1,
  },
  downerContent_2: {
    flex: 1,
  },
  content_1: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  content_2: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  interLeftBox: {
    marginLeft: 50,
    marginTop: 10,
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#C0C0C0',
    borderRadius: 10,
    width: 120,
    height: 120,
  },
  interRightBox: {
    marginRight: 50,
    marginTop: 10,
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#C0C0C0',
    borderRadius: 10,
    width: 120,
    height: 120,
  },
});
