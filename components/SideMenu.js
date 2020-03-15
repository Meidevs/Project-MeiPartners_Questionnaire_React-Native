import PropTypes from 'prop-types';
import React, { Component, Children } from 'react';
import { NavigationActions } from 'react-navigation';
import { ScrollView, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

class SideMenu extends Component {
  constructor(props) {
    super(props)
    console.log('a', this.props.navigation._childrenNavigation.Recommendation.state.params.codeAllCateArray)
    var allCate = this.props.navigation._childrenNavigation.Recommendation.state.params.codeAllCateArray;
    this.state = {
      cateArray: allCate
    }
  }

  render() {
    const mapToCateArray = data => {
      return data.map((data) => {
        return (
          <ScrollView>
            <View>
              <TouchableOpacity onPress={() => this.props.navigation.navigate(data.code, {cateSelectedCodes : data.code})}>
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