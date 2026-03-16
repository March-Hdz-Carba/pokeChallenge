import { Image, StyleSheet } from 'react-native';

export default function Title() {
  return (
    <Image source={require('../assets/title.png')} style={styles.titleLogo} />
  );
}

const styles = StyleSheet.create({
  titleLogo: {
    height: '45%',
    marginBottom: '5%',
    width: '70%'
  }
});
