import { MaterialDesignIcons } from '@react-native-vector-icons/material-design-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { StyleSheet } from 'react-native';
import HomeScreen from './views/HomeScreen';

export default function App() {
  const Tab = createBottomTabNavigator();
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={() => ({
            tabBarIcon: () => (
              <MaterialDesignIcons name="pokeball" color="#ff0000" size={30} />
            ),
            headerShown: false
          })}
        >
          <Tab.Screen name="Pokemon" component={HomeScreen} />
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
    justifyContent: 'center'
  }
});
