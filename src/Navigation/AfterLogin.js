import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../Screens/AfterLogin/Home';

// import Home from '../Screens/AfterLogin/Home';


const AfterLoginStack = createNativeStackNavigator();

const AfterLoginNavigator = () =>{
  return(
    <AfterLoginStack.Navigator
    screenOptions={{headerShown: false}}
    initialRouteName='Home'>
      <AfterLoginStack.Screen name="Home" component={Home}/>
      {/* <AfterLoginStack.Screen name="TabRoutes" component={TabRoutes}/> */}
    </AfterLoginStack.Navigator>

  );
};
export  default AfterLoginNavigator;