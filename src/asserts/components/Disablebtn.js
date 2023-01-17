import {StyleSheet, Text, Pressable} from 'react-native';
import React from 'react';

const Disablebtn = props => {
  return (
    <Pressable>
      <Text style={styles.btn1}>{props.title}</Text>
    </Pressable>
  );
};

export default Disablebtn;

const styles = StyleSheet.create({
  btn1: {
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 10,
    borderColor: 'black',
    borderWidth: 1,
    fontSize: 20,
    backgroundColor: 'White',
    color: 'Black',
  },
});
