import { StyleSheet, Text, View , SafeAreaView, Platform , StatusBar} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>
        Hello
      </Text>
    </View>
  );
}

console.log(StatusBar.currentHeight)

const styles = StyleSheet.create({
  container: {
    flex:1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor:"rgb(86 131 205)",
    paddingHorizontal:5,
  },
});
