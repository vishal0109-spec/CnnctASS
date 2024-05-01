import React from 'react';
import Home from './src/Screens/AfterLogin/Home';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import TabRoutes from './src/Navigation/TabRoutes';


const RootStack = createNativeStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
      {/* <RootStack.Navigator screenOptions={{headerShown:false}} >
        <RootStack.Screen
          name="Home"
          component={Home}
        />
      </RootStack.Navigator> */}
      <TabRoutes />
    </NavigationContainer>
  );
}



export default App;
