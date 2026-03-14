import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialDesignIcons } from '@react-native-vector-icons/material-design-icons';
import HomeScreen from './views/HomeScreen';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export default function App() {
  const Tab = createBottomTabNavigator();
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={() => ({
            tabBarIcon: () => <MaterialDesignIcons name='pokeball' color='#ff0000' size={30} />,
            headerShown: false,
          })}
        >
          <Tab.Screen name='Home' component={HomeScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
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
