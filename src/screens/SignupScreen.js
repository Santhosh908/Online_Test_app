import {View, Text, Button, TextInput} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import Styles from '../styles/Styles.js';

const SignupScreen = () => {
  const navigation = useNavigation();
  return (
    <View>
      <View style={Styles.middle}>
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
        <TextInput
          secureTextEntry={true}
          style={Styles.input}
          placeholder="Confirm Password"
          placeholderTextColor="#999"
        />
        <Text>{'\n'}</Text>
        <Button
          title="Sign Up"
          color="gold"
          onPress={() => navigation.push('Home')}
        />
      </View>
    </View>
  );
};

export default SignupScreen;
