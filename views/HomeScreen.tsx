import { StyleSheet, Text, View, FlatList } from 'react-native';
import Card from '../components/Card';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={[
          { number: '1', name: 'Pikachu' },
          { number: '2', name: 'Bulbasaur' },
          { number: '3', name: 'Charmander' },
          { number: '4', name: 'Squirtle' },
          { number: '5', name: 'Jigglypuff' }
        ]}
        renderItem={({ item }) => <Card pokemon={item} />}
        numColumns={2}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderColor: 'red',
    borderWidth: 1,
    marginTop: 60,
    marginHorizontal: 5,
  },
});
