import {View, Text, FlatList, StyleSheet} from 'react-native';
import React from 'react';

const data = [
  {
    id: '1',
    tittle: 'Frame 1',
  },
  {
    id: '2',
    tittle: 'Frame 2',
  },
  {
    id: '3',
    tittle: 'Frame 3',
  },
  {
    id: '4',
    tittle: 'Frame 4',
  },
  {
    id: '5',
    tittle: 'Frame 5',
  },
  {
    id: '6',
    tittle: 'Frame 6',
  },
];
const TestScreen = () => {
  return (
    <View style={styles.viewbox}>
      <Text>TestScreen</Text>
      <FlatList
        horizontal
        data={data}
        KeyExtractor={item => item.id}
        renderItem={({item}) => (
          <Text style={styles.box}>{item.tittle}heading</Text>
        )}
      />
      <Text>TestScreen</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  box: {
    color: 'black',
    backgroundColor: 'green',
    fontWeight: 'bold',
    padding: 25,
    fontSize: 30,
    marginRight: 20,
  },
  viewbox: {
    margin: 10,
  },
});
export default TestScreen;
