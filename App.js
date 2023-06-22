import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={require('./imagenes/logo.jpeg')} style={styles.imagen}/>
      <Text style={styles.texto}>Probá nuestro café</Text>
      <StatusBar style="auto" />
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
