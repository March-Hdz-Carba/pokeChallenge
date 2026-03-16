import { StyleSheet, TextInput, View } from 'react-native';
import Title from './Title';

type HeaderProps = {
  typing: string;
  setTyping: (text: string) => void;
  setSearch: (text: string) => void;
};

export const Header: React.FC<HeaderProps> = ({
  typing,
  setTyping,
  setSearch
}) => {
  return (
    <View style={styles.container}>
      <Title />
      <TextInput
        style={styles.textInput}
        placeholder="Search Pokemon"
        value={typing}
        onChangeText={text => setTyping(text)}
        onEndEditing={() => setSearch(typing)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '30%',
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
