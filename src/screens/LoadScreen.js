import {View, Text, Image} from 'react-native';
import React from 'react';
import Styles from '../styles/Styles.js';
import {Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const LoadScreen = () => {
  const navigation = useNavigation();
  setTimeout(() => {
    navigation.navigate('Landing');
  }, 2000);
  return (
    <View style={Styles.load}>
      <Image
        style={Styles.logo}
        source={require('../asserts/images/logo.jpg')}
      />
      <Text style={Styles.logoText}>Online{'\n'}Test App</Text>
    </View>
  );
};

export default LoadScreen;
