import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome5';
import { colors } from '../../res/style/theme';
import Sizes from '../../utils/Sizes';
import StatusBarView from './StatusBarView';



const Header = (props) => {
   const iconBack = () => (
      <Pressable
         android_ripple={{ color: colors.black_transparent, borderless: true }}
         style={styles.iconBack}
         onPress={() => props.onPressBack()}>
         <Icon name="arrow-left" size={20} color={colors.white} />
      </Pressable>
   );
   const iconMenu = () => (
      <Pressable
         android_ripple={{ color: colors.black_transparent, borderless: true }}
         style={styles.iconBack}
         onPress={() => props.onPressMenu()}>
         <Icon name="bars" size={20} color={colors.white} />
      </Pressable>
   );
   //////////////////////////////////
   return (
      <View>
         <StatusBarView />
         <View style={styles.container}>
            {props.isShowMenu ? iconMenu() : null}
            {props.isShowBack ? iconBack() : null}
            <Text style={styles.title}>{props.title}</Text>
         </View>
      </View>
   );
};

export default Header;
Header.defaultProps = {
   onPressBack: () => {},
   onPressMenu: () => {},
};
const styles = StyleSheet.create({
   container: {
      height: Platform.OS === 'ios' ? Sizes.s100 : (Sizes.s110 ),
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor:'#bb64a1',
      // borderColor: colors.gray,
      // borderBottomWidth: 1,
   },
   title: {
      fontSize: 18,
      fontWeight: 'bold',
      color: colors.white,
   },
   iconBack: {
      position: 'absolute',
      left: 0,
      height: 48,
      paddingHorizontal: 16,
      justifyContent: 'center',
      alignItems: 'center',
   },
});
