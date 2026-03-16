import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { FlatList, RefreshControl, StyleSheet, Text, View } from 'react-native';
import Card from '../components/Card';
import { Header } from '../components/Header';

const BASE_URL = 'https://pokeapi.co/api/v2/pokemon';

export default function HomeScreen() {
  const [typing, setTyping] = useState('');
  const [search, setSearch] = useState<string | null>(null);

  const getAllPokemons = async ({ pageParam = 1 }) => {
    const response = await fetch(`${pageParam === 1 ? BASE_URL : pageParam}`);
    return response.json();
  };

  const getPokemon = async () => {
    const response = await fetch(`${BASE_URL}/${search}`);
    return response.json();
  };

  const {
    data: pokemonData,
    isLoading: isPokemonLoading,
    isFetching: isPokemonFetching,
    error: pokemonError
  } = useQuery({
    queryKey: ['getPokemon', search],
    queryFn: getPokemon,
    enabled: search !== null && search.trim() !== ''
  });

  const {
    data,
    isLoading,
    hasNextPage,
    fetchNextPage,
    isFetching,
    error,
    refetch
  } = useInfiniteQuery({
    queryKey: ['getAllPokemons'],
    queryFn: getAllPokemons,
    getNextPageParam: lastPage => {
      if (lastPage.next !== null) {
        return lastPage.next;
      }

      return lastPage;
    }
  });

  const loadMore = () => {
    if (hasNextPage) {
      fetchNextPage();
    }
  };

  return (
    <View style={styles.container}>
      <Header typing={typing} setTyping={setTyping} setSearch={setSearch} />
      {!search && (
        <FlatList
          data={data?.pages.flatMap(page => page.results) || []}
          renderItem={({ item }) => <Card pokemon={item} />}
          numColumns={2}
          onEndReached={loadMore}
          onEndReachedThreshold={0.2}
          refreshControl={
            <RefreshControl
              size="default"
              refreshing={isFetching || isLoading}
              onRefresh={refetch}
            />
          }
        />
      )}
      {(isPokemonLoading || isPokemonFetching || isLoading || isFetching) && (
        <Text>Searching...</Text>
      )}
      {pokemonError && <Text>Pokemon not found</Text>}
      {error && <Text>Something was wrong</Text>}
      {pokemonData && (
        <Card
          pokemon={{
            name: pokemonData?.name,
            url: `${BASE_URL}/${pokemonData?.id}`
          }}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: '10%',
    marginHorizontal: '2%'
  }
});
