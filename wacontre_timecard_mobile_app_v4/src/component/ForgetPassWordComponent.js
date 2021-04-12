import React, {Component} from 'react';
import {
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {colors, fonts, screenWidth, screenHeight} from '../res/style/theme';
import Images from '../res/image';
import Header from './custom/Header';
import LottieView from 'lottie-react-native';

export default class ForgetPassWordComponent extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <Header
          isShowBack
          onPressBack={() => this.props.navigation.goBack()}
          title="Forgot Password"
        />
        <ImageBackground
          source={Images.ic_bg_timecard}
          style={{width: screenWidth, height: screenHeight}}>
          <View style={{marginHorizontal: 20, marginVertical: 20}}>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <LottieView
                source={require('../res/Json/16766-forget-password-animation.json')}
                autoPlay
                loop
                style={{height: 200, width: 200}}
              />
            </View>

            <Text>Email</Text>
            <TextInput
              placeholder="Nhập email của bạn"
              multiline
              style={{
                borderWidth: 2,
                borderRadius: 10,
                borderColor: '#E8E8E8',
              }}></TextInput>
            <View
              style={{justifyContent: 'center', alignItems: 'center', top: 50}}>
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
