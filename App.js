import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { PaperProvider } from 'react-native-paper';
import HomeScreen from './screens/HomeScreen';
import SecondScreen from './screens/SecondScreen';
import CustomAppBar from './components/CustomAppBar';

const Stack = createStackNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={({ navigation, route }) => ({
            header: (props) => <CustomAppBar {...props} navigation={navigation} />,
          })}
        >
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Second" component={SecondScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
