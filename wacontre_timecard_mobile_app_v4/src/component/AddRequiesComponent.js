import React, {Component} from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import Header from './custom/Header';
import {colors, fonts, screenWidth, screenHeight} from '../res/style/theme';
import Images from '../res/image';
import DropDownPicker from 'react-native-dropdown-picker';

export default class AddRequiesComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      TimeLate: '',
    };
  }

  render() {
    return (
      <View>
        <Header
          isShowBack
          onPressBack={() => this.props.navigation.goBack()}
          title="Add Your Request"
        />
        <ImageBackground
          source={Images.ic_bg_timecard}
          style={{width: screenWidth, height: screenHeight}}>
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <View style={{marginHorizontal: 20, marginVertical: 20}}>
              <Text style={{fontSize: 15, fontWeight: '700'}}>
                Type request *{' '}
              </Text>
              <View style={{marginTop: 10}}>
                <DropDownPicker
                  items={[
                    {
                      label: 'Late',
                      value: 'Late',

                      //   hidden: true,
                    },
                    {
                      label: 'OT',
                      value: 'OT',
                    },
                    {
                      label: 'Off Day',
                      value: 'Off Day',
                    },
                    {
                      label: 'Check out soon',
                      value: 'Check out soon',
                    },
                  ]}
                  placeholder="Type request"
                  defaultValue={this.state.TimeLate}
                  containerStyle={{height: 50}}
                  //   style={[{backgroundColor: '#fafafa', marginTop:20}]}
                  itemStyle={{
                    justifyContent: 'center',
                  }}
                  //   dropDownStyle={{backgroundColor: '#fafafa' }}
                  onChangeItem={item =>
                    this.setState({
                      TimeLate: item.value,
                    })
                  }
                />
              </View>
              <Text style={{fontSize: 15, fontWeight: '700', marginTop: 10}}>
                Date Start *{' '}
              </Text>
              <View
                style={{
                  borderColor: '#BFBFBF',
                  borderWidth: 1,
                  borderRadius: 10,
                  marginTop: 10,
                }}>
                <TextInput placeholder="Date Start" multiline></TextInput>
              </View>
              <Text style={{fontSize: 15, fontWeight: '700', marginTop: 10}}>
                Date End *
              </Text>
              <View
                style={{
                  borderColor: '#BFBFBF',
                  borderWidth: 1,
                  borderRadius: 10,
                  marginTop: 10,
                }}>
                <TextInput placeholder="Date End" multiline></TextInput>
              </View>
              <Text style={{fontSize: 15, fontWeight: '700', marginTop: 10}}>
                Note *
              </Text>
              <View
                style={{
                  borderColor: '#BFBFBF',
                  borderWidth: 1,
                  borderRadius: 10,
                  marginTop: 10,
                  height: 100,
                }}>
                <TextInput placeholder="Note" multiline></TextInput>
              </View>
              <View
                style={{
                  top: 20,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <TouchableOpacity
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: 50,
                    width: 100,
                    backgroundColor: '#bb64a1',
                    borderRadius: 10,
                  }}>
                  <Text style={{color: 'white', fontWeight: '700'}}>
                    Submit
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    );
  }
}
