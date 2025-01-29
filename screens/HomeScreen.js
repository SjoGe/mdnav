import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Button mode="contained" onPress={() => navigation.navigate('Second')}>
        Go to Second Screen
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
});
