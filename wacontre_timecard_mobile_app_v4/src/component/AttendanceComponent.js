import React, {Component} from 'react';
import {Text, View,ImageBackground} from 'react-native';
import Header from './custom/Header';
import {colors, fonts, screenWidth, screenHeight} from '../res/style/theme';
import Images from '../res/image';

export default class AttendanceComponent extends Component {
    constructor(props) {
        super(props)
        this.state={
            data :[
                
            ]
        }
    }
    
  render() {
    return (
      <View style={{flex: 1}}>
        <Header
          isShowBack
          onPressBack={() => this.props.navigation.goBack()}
          title="Attendance Time"
        />
        <ImageBackground
          source={Images.ic_bg_timecard}
          style={{width: screenWidth, height: screenHeight}}>


          </ImageBackground>
      </View>
    );
  }
}
