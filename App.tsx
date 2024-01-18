import { SafeAreaView, StyleSheet, View } from "react-native";
import { ProductScreen } from "./src/screens/ProductScreen";
import { ProductDetailsScreen } from "./src/screens/ProductDetailsScreen";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ProductDetailsScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
