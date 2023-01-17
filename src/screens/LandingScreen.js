import {View, Text, Image, Pressable} from 'react-native';
import React from 'react';
import Styles from '../styles/Styles.js';
import {useState} from 'react';
import SignupScreen from '../screens/SignupScreen.js';
import LoginScreen from '../screens/LoginScreen.js';

const LandingScreen = () => {
  const [islogged, setIslogged] = useState(true);

  return (
    <View>
      <View style={Styles.Landingtext}>
        <Text>Online Test App</Text>
      </View>
      <View style={Styles.loginandsignup}>
        <Image
          style={Styles.logo1}
          source={require('../asserts/images/logo.jpg')}
        />
        <Text>{'\n'}</Text>
        <View style={{flexDirection: 'row'}}>
          <Pressable
            onPress={() => {
              setIslogged(true);
            }}
            style={{
              backgroundColor: islogged ? 'gold' : 'transparent',
              paddingVertical: 12,
              paddingHorizontal: 32,
              borderRadius: 4,
              elevation: 3,
            }}>
            <Text style={Styles.text}>Log In</Text>
          </Pressable>
          <Pressable
            onPress={() => {
              setIslogged(false);
            }}
            style={{
              backgroundColor: islogged ? 'transparent' : 'gold',
              paddingVertical: 12,
              paddingHorizontal: 32,
              borderRadius: 4,
              elevation: 3,
            }}>
            <Text style={Styles.text}>Sign Up</Text>
          </Pressable>
        </View>
        {islogged ? <LoginScreen /> : <SignupScreen />}
      </View>
    </View>
  );
};

export default LandingScreen;
