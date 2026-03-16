import { View, Text, TextInput, StyleSheet, Image } from 'react-native';
import  Title  from './Title'; 

export const Header = () => {
  return (
    <View style={styles.container}>
      <Title />
      <TextInput style={styles.textInput} placeholder='Search Pokemon' />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '30%',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10
  },
  textInput: {
    width: '80%',
    height: 45,
    backgroundColor: '#e5e5e5',
    borderRadius: 30,
    fontSize: 16,
    textAlign: 'center'
  }
});
