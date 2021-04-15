import React, {Component} from 'react';
import {
  FlatList,
  Image,
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Alert
} from 'react-native';
import Images from '../res/image';
import Header from './custom/Header';
import {colors, fonts, screenWidth, screenHeight} from '../res/style/theme';
import LoadingView from './custom/LoadingView';

export default class CompanyMemberComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageAvt :'',
      dataMB :'',
      data: [
        {
          date: 'https://f41-zpg.zdn.vn/4276645316036163978/72c42136fa0708595116.jpg?fbclid=IwAR20ZCoBSgu7s8EofxQA2zrdQvmhfto4Cjc9lOxbmsrXxcrT3XXO1ZJ3Xjc',
          name: 'Nguyen Tan Tai',
          status: 'IOS Developer',
        },
        {
          date: 'https://i.imgur.com/8OMrXbH.png',
          name: '8:30/17:30',
          status: 'WED Developer',
        },
        {
          date: 'https://i.imgur.com/8OMrXbH.png',
          name: 'Nguyen Tan Tai',
          status: 'IOS Developer',
        },
        {
          date: 'https://i.imgur.com/8OMrXbH.png',
          name: '8:30/17:30',
          status: 'WED Developer',
        },
        {
          date: 'https://i.imgur.com/8OMrXbH.png',
          name: 'Nguyen Tan Tai',
          status: 'IOS Developer',
        },
        {
          date: 'https://i.imgur.com/8OMrXbH.png',
          name: '8:30/17:30',
          status: 'WED Developer',
        },
        {
          date: 'https://i.imgur.com/8OMrXbH.png',
          name: 'Nguyen Tan Tai',
          status: 'IOS Developer',
        },
        {
          date: 'https://i.imgur.com/8OMrXbH.png',
          name: '8:30/17:30',
          status: 'WED Developer',
        },
        {
          date: 'https://i.imgur.com/8OMrXbH.png',
          name: '8:30/17:30',
          status: 'WED Developer',
        },
        {
          date: 'https://f41-zpg.zdn.vn/4276645316036163978/72c42136fa0708595116.jpg?fbclid=IwAR20ZCoBSgu7s8EofxQA2zrdQvmhfto4Cjc9lOxbmsrXxcrT3XXO1ZJ3Xjc',
          name: '8:30/17:30',
          status: 'WED Developer',
        },
        {
          date: 'https://i.imgur.com/8OMrXbH.png',
          name: '8:30/17:30',
          status: 'WED Developer',
        },
        {
          date: 'https://i.imgur.com/8OMrXbH.png',
          name: 'Nguyen Tan Tai',
          status: 'IOS Developer',
        },
        {
          date: 'https://f41-zpg.zdn.vn/4276645316036163978/72c42136fa0708595116.jpg?fbclid=IwAR20ZCoBSgu7s8EofxQA2zrdQvmhfto4Cjc9lOxbmsrXxcrT3XXO1ZJ3Xjc',
          name: 'Nguyen Tan Tai123',
          status: 'IOS Developer123',
        },
        {
          date: 'https://i.imgur.com/8OMrXbH.png',
          name: 'Nguyen Tan Tai123',
          status: 'IOS Developer123',
        },
        {
          date: 'https://f41-zpg.zdn.vn/4276645316036163978/72c42136fa0708595116.jpg?fbclid=IwAR20ZCoBSgu7s8EofxQA2zrdQvmhfto4Cjc9lOxbmsrXxcrT3XXO1ZJ3Xjc',
          name: 'Nguyen Tan Tai123',
          status: 'IOS Developer123',
        },
      ],
    };
  }
  componentDidMount(){
    // console.log('this.props.dataLG',this.props.dataLG.token);
    this.setState({imageAvt:this.props.dataLG.avatar})
    //
    this.didFocusListener =  this.props.navigation.addListener('focus', () => {
      // do something 
      this.props.companyMenberAction({token:this.props.dataLG.token})
    });
  }
   componentDidUpdate(prevProps) {
      
      
    if (this.props.statusCM !== null && this.props.statusCM !== prevProps.statusCM) {
       // console.log('(this.props.status==',this.props.message);
       // console.log('vao day1');
       if (this.props.statusCM === 1) {
          // console.log('vao day2');
          // console.log(this.props.dataCM);
          this.setState({dataMB:this.props.dataCM})
         
         
       } else {
          // console.log('vao day message');
          setTimeout(() => {
             Alert.alert('Thông báo', this.props.messageCM);
          }, 10);
       }
    }
    if (this.props.errorCM !== null && this.props.errorCM !== prevProps.errorCM) {
       // console.log('vao day error');
       setTimeout(() => {
          Alert.alert('Thông báo', this.props.errorCM);
       }, 10);
    }
 }
 
  renderItem = item => (
    <TouchableOpacity
    onPress={()=>{this.props.navigation.navigate('InfoMemberComponent',{item:item.item})}}
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        width: (screenWidth * 0.9) / 2,
        marginHorizontal: 10,
        marginVertical: 10,
        // borderWidth: 1,q
        backgroundColor: 'white',
        borderRadius: 10,
      }}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginVertical: 10,
        }}>
        <View style={{borderRadius: 50, borderColor: 'pink', borderWidth: 2}}>
          <Image
            source={{
              uri: `${item.item.avatar}`,
            }}
            style={{height: 50, width: 50 , borderRadius:9999}}
            resizeMode="cover"
          />
        </View>

        <Text style={{marginTop: 5 , fontWeight: '600',}}>{item.item.name.toUpperCase()}</Text>
        <Text style={{fontWeight: '600',}}>{item.item.position.toUpperCase()}</Text>
      </View>
    </TouchableOpacity>
  );

  render() {
      // console.log('state===',this.state.imageAvt);
    return (
      <View style={{flex: 1}}>
        <Header 
        title="Company Member" 
        isShowImage
        
        image={this.state.imageAvt}
        />
        {this.props.loadingCM &&<LoadingView/>}
        
        <ImageBackground
          source={Images.ic_bg_timecard}
          style={{height: screenHeight, width: screenWidth}}>
          <ScrollView nestedScrollEnabled >
            <FlatList
              data={this.state.dataMB}
              keyExtractor={(item, index) => String(index)}
              renderItem={this.renderItem}
              numColumns={2}
            />
          </ScrollView>
        </ImageBackground>
      </View>
    );
  }
}
