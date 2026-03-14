import { Image, StyleSheet, Text, View } from 'react-native';

export default function Card({ pokemon }: { pokemon?: { number: string, name: string } }) {
  return (
    <View style={styles.conteiner}>
      <View style={styles.cardContainer}>
        <Image
          source={require('../assets/favicon.png')}
          style={styles.pokemonImg}
        />

        <View style={styles.textContainer}>
          <Text style={styles.textNumberPoke}>{pokemon?.number}</Text>
          <Text style={styles.textName}>{pokemon?.name}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  conteiner: {
    margin: 10,
    borderColor: 'blue',
    borderWidth: 1,
    height: 150,
    justifyContent: 'flex-end',
  },
  cardContainer: {
    alignItems: 'center',
    backgroundColor: '#FB71FE',
    borderRadius: 20,
    height: 120,
    width: 170,
    paddingBottom: 15,
    justifyContent: 'flex-end'
  },
  textContainer: {
    backgroundColor: '#676767',
    borderRadius: 8,
    flexDirection: 'row',
    gap: 25,
    height: 30,
    justifyContent: 'center',
    marginTop: 8,
    width: 140
  },
  textName: {
    fontSize: 16,
    color: 'white',
  },
  textNumberPoke: {
    fontSize: 16,
    color: '#F993FB',
  },
  pokemonImg: {
    backgroundColor: 'lightgray',
    height: 100,
    width: 100
  }
});
