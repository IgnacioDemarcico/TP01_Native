import { StyleSheet, Text, View, Image } from 'react-native';
import Card from './components/Card';

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={require('./imagenes/logo.jpeg')} style={styles.imagen}/>
      <Text style={styles.texto}>Probá nuestro café</Text>
      <br/>
      <br/>
      <Card/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  imagen:{
    display: 'block',
   width: "80%",
   height: "20%",
   resizeMode: 'contain',
  },
  texto:{
    fontWeight:'bold',
    marginTop:'1rem'
    
  }
});
