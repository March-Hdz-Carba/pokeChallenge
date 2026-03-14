import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialDesignIcons } from '@react-native-vector-icons/material-design-icons';
import HomeScreen from './views/HomeScreen';

export default function App() {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={() => ({
          tabBarIcon: () => <MaterialDesignIcons name='pokeball' color='#ff0000' size={20} />,
          headerShown: false,
        })}
      >
        <Tab.Screen name='Home' component={HomeScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
