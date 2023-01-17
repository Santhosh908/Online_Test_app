import {View, Text, Button, TextInput} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import Styles from '../styles/Styles.js';

const LoginScreen = () => {
  const navigation = useNavigation();
  return (
    <View>
      <TextInput
        style={Styles.input}
        placeholderTextColor="#999"
        placeholder="Username"
      />
      <TextInput
        secureTextEntry={true}
        style={Styles.input}
        placeholder="Password"
        placeholderTextColor="#999"
      />
      <Text>{'\n'}</Text>
      <Button
        title="Log in"
        color="gold"
        onPress={() => navigation.push('Home')}
      />
    </View>
  );
};

export default LoginScreen;
