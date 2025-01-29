import React from 'react';
import { Appbar } from 'react-native-paper';

export default function CustomAppBar({ navigation, back }) {
  return (
    <Appbar.Header>
      {back ? (
        <Appbar.BackAction onPress={navigation.goBack} />
      ) : (
        <>
          <Appbar.Content title="Home Screen" />
          <Appbar.Action icon="arrow-right" onPress={() => navigation.navigate('Second')} />
        </>
      )}
      {back && <Appbar.Content title="Second Screen" />}
    </Appbar.Header>
  );
}
