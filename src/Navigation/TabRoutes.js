import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../Screens/AfterLogin/Home';
import Chat from '../Screens/AfterLogin/Chat';
import Account from '../Screens/AfterLogin/Account';
import Cart from '../Screens/AfterLogin/Cart';
import {account, cart, chat, home, plus} from '../Utils/img';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Plus from '../Screens/AfterLogin/Plus';

const BottomTab = createBottomTabNavigator();

const CustomTabBarButton = ({children, onPress}) => (
  <TouchableOpacity
    style={{
      top: -35,
      justifyContent: 'center',
      alignItems: 'center',
      shadowOpacity: 0.2,
      shadowColor: '#000000',
      shadowRadius: 3,
      elevation: 20,
      shadowOffset: {
        width: 0,
        height: 4,
      },
    }}
    onPress={onPress}>
    <View style={{borderRadius: wp(9), borderWidth: 1, borderColor: '#FFF'}}>
      <View
        style={{
          width: wp(14),
          height: hp(7),
          borderRadius: wp(7),
          backgroundColor: '#FF4D4D',
        }}>
        {children}
      </View>
    </View>
  </TouchableOpacity>
);

const TabRoutes = () => {
  return (
    <BottomTab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#FF4D4D',
        tabBarInactiveTintColor: '#FFFFFF',
        tabBarStyle: {
          backgroundColor: '#FF4D4D',
          height: hp(8),
          borderWidth:2,
          borderTopColor:'#FFF',
          
        
        },
      }}>
      <BottomTab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => {
            return focused ? (
              <View
                style={{
                  backgroundColor: 'white',
                  flexDirection: 'row',
                  alignItems: 'center',
                  width: wp(22),
                  padding: wp(1.5),
                  borderRadius: wp(5),
                  marginLeft: wp(3),
                }}>
                <Image
                  style={{
                    tintColor: focused ? '#FF4D4D' : '#FFFFFF',
                  }}
                  source={home}
                />
                <Text
                  style={{
                    color: '#000',
                    fontSize: hp(1.8),
                    fontWeight: '500',
                    marginLeft: wp(2),
                  }}>
                  Home
                </Text>
              </View>
            ) : (
              <View>
                <Image
                  style={{
                    tintColor: focused ? '#FF4D4D' : '#FFFFFF',
                  }}
                  source={home}
                />
              </View>
            );
          },
        }}
      />
      <BottomTab.Screen
        name="Chat"
        component={Chat}
        options={{
          tabBarIcon: ({focused}) => {
            return focused ? (
              <View
                style={{
                  backgroundColor: 'white',
                  flexDirection: 'row',
                  alignItems: 'center',
                  width: wp(22),
                  padding: wp(1.5),
                  borderRadius: wp(5),
                  marginLeft: wp(3),
                }}>
                <Image
                  style={{
                    tintColor: focused ? '#FF4D4D' : '#FFFFFF',
                  }}
                  source={chat}
                />
                <Text
                  style={{
                    color: '#000',
                    fontSize: hp(1.8),
                    fontWeight: '500',
                    marginLeft: wp(2),
                  }}>
                  Chat
                </Text>
              </View>
            ) : (
              <View>
                <Image
                  style={{
                    tintColor: focused ? '#FF4D4D' : '#FFFFFF',
                  }}
                  source={chat}
                />
              </View>
            );
          },
        }}
      />
      <BottomTab.Screen
        name="Plus"
        component={Plus}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={plus}
              resizeMode="contain"
              style={{width: wp(7), tintColor: '#FFF'}}
            />
          ),
          tabBarButton: props => <CustomTabBarButton {...props} />,
        }}
      />
      <BottomTab.Screen
        name="Account"
        component={Account}
        options={{
          tabBarIcon: ({focused}) => {
            return focused ? (
              <View
                style={{
                  backgroundColor: 'white',
                  flexDirection: 'row',
                  alignItems: 'center',
                  width: wp(25),
                  padding: wp(1.5),
                  borderRadius: wp(5),
                  marginLeft: wp(3),
                }}>
                <Image
                  style={{
                    tintColor: focused ? '#FF4D4D' : '#FFFFFF',
                  }}
                  source={account}
                />
                <Text
                  style={{
                    color: '#000',
                    fontSize: hp(1.8),
                    fontWeight: '500',
                    marginLeft: wp(2),
                  }}>
                  Account
                </Text>
              </View>
            ) : (
              <View>
                <Image
                  style={{
                    tintColor: focused ? '#FF4D4D' : '#FFFFFF',
                  }}
                  source={account}
                />
              </View>
            );
          },
        }}
      />
      <BottomTab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarIcon: ({focused}) => {
            return focused ? (
              <View
                style={{
                  backgroundColor: 'white',
                  flexDirection: 'row',
                  alignItems: 'center',
                  width: wp(22),
                  padding: wp(1.5),
                  borderRadius: wp(5),
                  marginLeft: wp(3),
                }}>
                <Image
                  style={{
                    tintColor: focused ? '#FF4D4D' : '#FFFFFF',
                  }}
                  source={cart}
                />
                <Text
                  style={{
                    color: '#000',
                    fontSize: hp(1.8),
                    fontWeight: '500',
                    marginLeft: wp(2),
                  }}>
                  Cart
                </Text>
              </View>
            ) : (
              <View>
                <Image
                  style={{
                    tintColor: focused ? '#FF4D4D' : '#FFFFFF',
                  }}
                  source={cart}
                />
              </View>
            );
          },
        }}
      />
    </BottomTab.Navigator>
  );
};

export default TabRoutes;
