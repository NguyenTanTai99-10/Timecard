import React, {Component} from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import Header from './custom/Header';
import {colors, fonts, screenWidth, screenHeight} from '../res/style/theme';
import Images from '../res/image';

export default class YourGetPermissionComponent extends Component {
  render() {
    return (
      <View style={{backgroundColor: 'white'}}>
        <View style={{marginHorizontal: 10, marginVertical: 10}}>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              style={{backgroundColor: 'green', height: 30, width: 70 , borderRadius:3  ,justifyContent:'center' , alignItems:'center'}}>
              <Text>bc</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{backgroundColor: 'green', height: 30, width: 70 , marginLeft:20,borderRadius:3,justifyContent:'center' , alignItems:'center'}}>
              <Text>bc</Text>
            </TouchableOpacity>
          </View>
          <Text style={{marginTop:10}}>
            ABLALALLALA
          </Text>
        </View>
      </View>
    );
  }
}
