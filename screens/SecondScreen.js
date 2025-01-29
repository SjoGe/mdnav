import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';

export default function SecondScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Button mode="contained" onPress={() => navigation.goBack()}>
        Go To Home Screen
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
