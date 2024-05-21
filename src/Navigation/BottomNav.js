import {View, TouchableOpacity, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  runOnJS,
  withSequence,
  Easing
} from 'react-native-reanimated';
import {account, cart, home} from '../Utils/img';

const AnimatedBtn = Animated.createAnimatedComponent(TouchableOpacity);

const BottomNav = () => {
  const [color1, setColor1] = useState('black');
  const [color2, setColor2] = useState('black');
  const [color3, setColor3] = useState('black');
  const [currentTab, setCurrentTab] = useState(0);
  const animatedX = useSharedValue(0);
  const animatedWidth = useSharedValue(60);
  const animatedHeight = useSharedValue(60);

  const targetStarts = [0, 100, 200];

  const handleTabChange = tabIndex => {
    const targetX = targetStarts[tabIndex];
    const distance = Math.abs(targetX - targetStarts[currentTab]);

    if (tabIndex > currentTab) {
      animatedWidth.value = withTiming(distance + 60, {duration: 300}, () => {
        animatedX.value = withTiming(targetX, {duration: 300});
        animatedWidth.value = withTiming(60, {duration: 300}, () => {
          runOnJS(setCurrentTab)(tabIndex);
        });
      });
    } else {
      animatedWidth.value = withTiming(distance + 60, {duration: 300});

      animatedX.value = withTiming(targetX, {duration: 300}, () => {
        animatedWidth.value = withTiming(60, {duration: 300}, () => {
          runOnJS(setCurrentTab)(tabIndex);
        });
      });
    }
    if (tabIndex === 0) {
      runOnJS(setColor1)('white');
      runOnJS(setColor2)('black');
      runOnJS(setColor3)('black');
    } else if (tabIndex === 1) {
      runOnJS(setColor1)('black');
      runOnJS(setColor2)('white');
      runOnJS(setColor3)('black');
    } else {
      runOnJS(setColor1)('black');
      runOnJS(setColor2)('black');
      runOnJS(setColor3)('white');
    }
    animatedHeight.value = withSequence(
      withTiming(30, { duration: 300, easing: Easing.inOut(Easing.ease) }), // Shrink in the middle
      withTiming(60, { duration: 300, easing: Easing.inOut(Easing.ease) })  // Expand back
    );
  };

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: animatedX.value }],
      width: animatedWidth.value,
      height: animatedHeight.value,
    };
  });

  return (
    <View style={{flex: 1}}>
      <View
        style={{
          width: '100%',
          height: 70,
          elevation: 5,
          position: 'absolute',
          bottom: 0,
          backgroundColor: 'white',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          alignItems: 'center',
        }}>
        <Animated.View
          style={[
            {
              height: 60,
              borderRadius: 30,
              backgroundColor: 'orange',
              position: 'absolute',
            },
            animatedStyle,
          ]}
        />
        <AnimatedBtn
          style={{
            width: 60,
            height: 60,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => {
            handleTabChange(0);
          }}>
          <Image
            source={home}
            style={{width: 30, height: 30, tintColor: color1}}
          />
        </AnimatedBtn>
        <AnimatedBtn
          style={{
            width: 60,
            height: 60,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => {
            handleTabChange(1);
          }}>
          <Image
            source={cart}
            style={{width: 30, height: 30, tintColor: color2}}
          />
        </AnimatedBtn>
        <AnimatedBtn
          style={{
            width: 60,
            height: 60,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => {
            handleTabChange(2);
          }}>
          <Image
            source={account}
            style={{width: 30, height: 30, tintColor: color3}}
          />
        </AnimatedBtn>
      </View>
    </View>
  );
};

export default BottomNav;
