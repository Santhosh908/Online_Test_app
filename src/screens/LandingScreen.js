import {View, Text, Image, Button, Pressable} from 'react-native';
import React from 'react';
import Styles from '../styles/Styles.js';

let flag1 = 0;
let color1 = 'gold',
  textcolor1 = 'black',
  color2 = 'white',
  textcolor2 = 'black';
function change1() {
  flag1 = 1;
  color1 = 'gold';
  textcolor1 = 'white';
}
function change2() {
  flag1 = 0;
  color2 = 'gold';
  textcolor2 = 'white';
  color1 = 'white';
  textcolor1 = 'black';
}

const LandingScreen = () => {
  return (
    <View>
      <View style={Styles.Landingtext}>
        <Text>Online Test App</Text>
      </View>
      <View>
        <Image
          style={Styles.logo1}
          source={require('../asserts/images/logo.jpg')}
        />
        <Text>{'\n'}</Text>
        <View style={Styles.landingbutton}>
          <Pressable
            style={() => [
              {backgroundColor: color1, color: textcolor1},
              Styles.btn,
            ]}
            onPress={() => {
              change1();
              console.log(color1);
            }}>
            <Text style={Styles.text1}>Log In</Text>
          </Pressable>
          <Pressable
            style={() => [
              {backgroundColor: color2, color: textcolor2},
              Styles.btn,
            ]}
            onPress={() => {
              change2();
              console.log(color1);
            }}>
            <Text style={Styles.text1}>Sign Up</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default LandingScreen;
