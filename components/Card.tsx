import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import { useQuery } from '@tanstack/react-query';
import { capitalize } from '../Helpers/Utils';

const { height } = Dimensions.get('screen');

export default function Card({ pokemon }: { pokemon?: { name: string, url: string } }) {

  const getPokemon = async () => {
    const response = await fetch(`${pokemon?.url}`);
    return response.json();
  }

  const { data: pokemonData } = useQuery({
    queryKey: ['pokemon', pokemon?.url],
    queryFn: getPokemon,
  });

  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <Image
          source={{uri: pokemonData?.sprites?.other?.['official-artwork']?.front_default}}
          style={styles.pokemonImg}
        />

        <View style={styles.textContainer}>
          <Text style={styles.textNumberPoke}>{`#${(pokemonData?.id).toString().padStart(3, '0')}`}</Text>
          <Text style={styles.textName}>{capitalize(pokemonData?.name || '')}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    height: 150,
    width: '45%',
    justifyContent: 'flex-end',
  },
  cardContainer: {
    alignItems: 'center',
    backgroundColor: '#FB71FE',
    borderRadius: 20,
    height: height * 0.13,
    paddingBottom: '5%',
    justifyContent: 'flex-end'
  },
  textContainer: {
    backgroundColor: '#676767',
    borderRadius: 10,
    flexDirection: 'row',
    gap: 20,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '5%',
    width: '90%'
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
    height: '100%',
    width: '60%'
  }
});
