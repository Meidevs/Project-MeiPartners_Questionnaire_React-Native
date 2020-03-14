import PropTypes from 'prop-types';
import React, { Component, Children } from 'react';
import { NavigationActions } from 'react-navigation';
import { ScrollView, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

class SideMenu extends Component {
  constructor(props) {
    super(props)
    console.log('props', this.props.navigation._childrenNavigation.Recommendation.state.params)
    var allCate = this.props.navigation._childrenNavigation.Recommendation.state.params.codeAllCateArray;

    this.state = {
      cateArray: allCate
    }
    console.log('this.state.cateArray', this.state.cateArray)
    console.log('?', this.props.children)
  }

  render() {
    const mapToCateArray = data => {
      return data.map((data) => {
        return (
          <ScrollView>
            <View>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('Recommendation', {cateSelectedCodes : data.code})}>
                <Text>{data.name}</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>

        )
      })
    }
    return (
      <View>
        {mapToCateArray(this.state.cateArray)}
      </View>
    );
  }
}

SideMenu.propTypes = {
  navigation: PropTypes.object
};

export default SideMenu;