import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Title from './src/components/Titles';
import Form from './src/components/Form';

export default function App() {
  return (
    <View style={styles.container}>
      <Title />
      <Form />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dc142c',
    paddingTop:80,
  },
});
