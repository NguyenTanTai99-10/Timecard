import React, {Component} from 'react';
import {FlatList, Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import {Avatar} from 'react-native-elements';

import Images from '../res/image';
import {colors, fonts, screenWidth,screenHeight} from '../res/style/theme';
import Header from './custom/Header';

export default class UserInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      phone: '',
      position: '',
      birthDay: '',
      avt: '',
    };
    // this.data = [
    //   {label: 'Họ và tên', value: this.state.dataInfo.name},
    //   {label: 'Tên đăng nhập', value: this.state.dataInfo.name},
    //   //  position
    //   {label: 'Email', value: this.state.dataInfo.email},
    //   {label: 'Số điện thoại', value: this.state.dataInfo.phone},
    //   {label: 'Chức danh', value: this.state.dataInfo.position},
    // ];
  }

  componentDidMount() {
    let data = this.props.route.params;
    console.log(data.data.avatar);
    this.setState({
      name: data.data.name,
      email: data.data.email,
      phone: data.data.phone,
      position: data.data.position,
      birthDay: data.data.dob,
      avt: data.data.avatar,
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <Header
          isShowBack
          onPressBack={() => this.props.navigation.goBack()}
          title="Thông tin cá nhân"
        />
        <ImageBackground
          source={Images.ic_bg_timecard}
          style={{width: screenWidth, height: screenHeight}}>
          <Image
            style={styles.img}
            source={{
              uri: `${this.state.avt}`,
            }}
          />

          <View style={[styles.item, {marginTop: 10}]}>
            <Text style={styles.text}>Họ và tên</Text>
            <Text style={styles.text}>{this.state.name}</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.text}>Ngày Sinh</Text>
            <Text style={styles.text}>{this.state.birthDay}</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.text}>Email</Text>
            <Text style={styles.text}>{this.state.email}</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.text}>Số điện thoại</Text>
            <Text style={styles.text}>{this.state.phone}</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.text}>Chức danh</Text>
            <Text style={styles.text}>{this.state.position}</Text>
          </View>
        </ImageBackground>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomColor: colors.gray2,
    borderBottomWidth: 1,
  },
  text: {
    fontSize: 16,
    fontFamily: fonts.medium,
  },
  img: {
    width: screenWidth * 0.5,
    height: screenWidth * 0.5,
    alignSelf: 'center',
    borderRadius: 100,
    top: 10,
  },
});
