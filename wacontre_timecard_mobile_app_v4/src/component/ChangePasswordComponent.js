import React, {Component} from 'react';
import {Text, TextInput, TouchableOpacity, View,ImageBackground} from 'react-native';
import Header from './custom/Header';
import {colors, fonts, screenWidth, screenHeight} from '../res/style/theme';
import Images from '../res/image';


export default class ChangePasswordComponent extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <Header
          isShowBack
          onPressBack={() => this.props.navigation.goBack()}
          title="Change Password"
        />
        <ImageBackground
          source={Images.ic_bg_timecard}
          style={{width: screenWidth, height: screenHeight}}>
        <View style={{marginHorizontal: 40, marginVertical: 30}}>
          <View>
            <Text style={{fontWeight: 'bold'}}>Mật khẩu hiện tại</Text>
            <TextInput
              placeholder="Nhập mật khẩu hiện tại"
              multiline
              style={{
                marginTop: 7,
                borderWidth: 2,
                borderRadius: 20,
                borderColor: '#E8E8E8',
              }}></TextInput>
          </View>

          <View style={{marginTop: 20}}>
            <Text style={{fontWeight: 'bold'}}>Mật khẩu mới</Text>
            <TextInput
              placeholder="Nhập mật khẩu hiện tại"
              multiline
              style={{
                marginTop: 7,
                borderWidth: 2,
                borderRadius: 20,
                borderColor: '#E8E8E8',
              }}></TextInput>
          </View>
          <View style={{marginTop: 20}}>
            <Text style={{fontWeight: 'bold'}}>Nhập lại mật khẩu mới</Text>
            <TextInput
              placeholder="Nhập lại mật khẩu mới"
              multiline
              style={{
                marginTop: 7,
                borderWidth: 2,
                borderRadius: 20,
                borderColor: '#E8E8E8',
              }}></TextInput>
          </View>
          <View style={{justifyContent:'center', alignItems:'center' ,top:50}}>
          <TouchableOpacity
                style={{
                  backgroundColor: '#bb64a1',
                  height: 50,
                  width: screenWidth / 2,
                  borderRadius: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={{color: 'white', fontWeight: 'bold'}}>
                  CONFIRM
                </Text>
              </TouchableOpacity>

          </View>
        </View>
        </ImageBackground>
      </View>
    );
  }
}
