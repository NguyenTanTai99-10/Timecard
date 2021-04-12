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


//bottom-tab
const Tab = createMaterialBottomTabNavigator();
const bottomTab = () => {
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
               tabBarIcon: ({ color }) => <Icon name="home" color={color} size={26} />,
            }}
         />
         <Tab.Screen
            name="Detail"
            component={DetailContainer}
            options={{
               tabBarLabel: 'Thống kê',
               tabBarIcon: ({ color }) => <Icon name="chart-bar" color={color} size={26} />,
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
            {/* InfoPerson */}
            
            
            
         </Stack.Navigator>
      </NavigationContainer>
   );
};
export default App;
