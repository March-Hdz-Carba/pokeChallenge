import { StyleSheet, View, FlatList, RefreshControl } from 'react-native';
import Card from '../components/Card';
import { useInfiniteQuery } from '@tanstack/react-query';

const BASE_URL = 'https://pokeapi.co/api/v2/pokemon';

export default function HomeScreen() {
  const getAllPokemons = async ({ pageParam = 1 }) => {
    const response = await fetch(`${ pageParam === 1 ? BASE_URL : pageParam}`);
    return response.json();
  }

  const { data, isLoading, hasNextPage, fetchNextPage, isFetching, error, refetch } = useInfiniteQuery({
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
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={data?.pages.flatMap(page => page.results) || []}
        renderItem={({ item }) => <Card pokemon={item} />}
        numColumns={2}
        onEndReached={loadMore}
        onEndReachedThreshold={0.2}
        refreshControl={<RefreshControl size='default' refreshing={isFetching || isFetching} onRefresh={refetch} />}
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
    marginTop: '20%',
    marginHorizontal: '2%',
  },
});
