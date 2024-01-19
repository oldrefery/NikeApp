import { SafeAreaView, StyleSheet } from "react-native";
import { ShoppingCartScreen } from "./src/screens/ShoppingCartScreen";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ShoppingCartScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
