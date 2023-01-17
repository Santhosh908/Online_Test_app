import {StyleSheet, Text, Pressable} from 'react-native';
import React from 'react';

let bg, tc;
const Button = props => {
  bg = props.bg;
  tc = props.tc;
  return (
    <Pressable>
      <Text style={({backgroundColor: props.bg, color: props.tc}, styles.btn1)}>
        {props.title}
        {props.bg}
      </Text>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  btn1: {
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 10,
    elevation: 3,
    borderWidth: 1,
    fontSize: 20,
    backgroundColor: 'gold',
    color: 'white',
  },
});
