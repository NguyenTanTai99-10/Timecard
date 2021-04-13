import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { colors } from './src/res/style/theme';

////////////////////////////////////////////////////////////
import LoginContainer from './src/container/login/LoginContainer';

import HomeContainer from './src/container/home/HomeContainer';
import  DetailContainer from './src/container/home/DetailContainer';





////////////////////////////////////////////////////////////

import  DrawerComponent from './src/component/drawer/DrawerComponent';
import  DrawerConatiner  from './src/container/DrawerContainer/DrawerConatiner';
import InfoPerson from './src/component/InfoPerson';
import RequireLateContainer from './src/container/RequireLate/RequireLateContainer';
import FogetPasswordConatiner from './src/container/FogetPasswordConatiner/FogetPasswordConatiner';
import ChangePasswordContainer from './src/container/ChangePasswordContainer/ChangePasswordContainer';
import AttendanceContainer from './src/container/AttendanceContainer/AttendanceContainer';
import CompanyMemberContainer from './src/container/CompanyMemberContainer/CompanyMemberContainer';






//bottom-tab
const Tab = createMaterialBottomTabNavigator();
const bottomTab = () => {
   //hospital-user
   //CompanyMemberContainer
   return (
      <Tab.Navigator
         initialRouteName="Home"
         activeColor={colors.white}
         inactiveColor={colors.black1}
         shifting={true}
         barStyle={{ backgroundColor: '#bb64a1', height: 48, justifyContent: 'center' }}
         backBehavior="initialRoute">
         <Tab.Screen
            name="Home"
            component={HomeContainer}
            options={{
               tabBarLabel: 'Trang chủ',
               tabBarIcon: ({ color }) => <Icon name="home" color={color} size={25} />,
            }}
         />
         <Tab.Screen
            name="AttendanceContainer"
            component={AttendanceContainer}
            options={{
               tabBarLabel: 'Thống kê',
               tabBarIcon: ({ color }) => <Icon name="chart-bar" color={color} size={25} />,
            }}
         />
          <Tab.Screen
            name="CompanyMemberContainer"
            component={CompanyMemberContainer}
            options={{
               tabBarLabel: 'Thành viên',
               tabBarIcon: ({ color }) => <Icon name="hospital-user" color={color} size={25} />,
            }}
         />
      </Tab.Navigator>
   );
};
//Drawer navigation
const Drawer = createDrawerNavigator();
const Drawers = () => {
   return (
      <Drawer.Navigator drawerContent={(props) => <DrawerConatiner {...props} />}>
         <Drawer.Screen name="Drawer" component={bottomTab} />
      </Drawer.Navigator>
   );
};
//stack navigation
const Stack = createStackNavigator();
const App = () => {
   return (
      <NavigationContainer>
         <Stack.Navigator
            screenOptions={{
               headerShown: false,
               ...TransitionPresets.SlideFromRightIOS,
            }}>
            
            <Stack.Screen name="Login" component={LoginContainer} />
            <Stack.Screen name="Drawers" component={Drawers} />
            <Stack.Screen name="InfoPerson" component={InfoPerson} />
            <Stack.Screen name="RequireLateContainer" component={RequireLateContainer} />
            <Stack.Screen name="FogetPasswordConatiner" component={FogetPasswordConatiner} />
            <Stack.Screen name="ChangePasswordContainer" component={ChangePasswordContainer} />
            <Stack.Screen name="AttendanceContainer" component={AttendanceContainer} />
            <Stack.Screen name="CompanyMemberContainer" component={CompanyMemberContainer} />
            {/* CompanyMemberComponent */}
            {/* AttendanceContainer */}
            {/* ChangePasswordContainer */}
            {/* FogetPasswordConatiner */}
            {/* InfoPerson */}
            {/* RequireLateContainer */}
            
            
            
         </Stack.Navigator>
      </NavigationContainer>
   );
};
export default App;
