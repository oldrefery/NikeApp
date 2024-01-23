import {
  FlatList,
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { products } from "../data/products";
import { ProductDetailsScreenProps } from "../navigation/types";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

export const ProductDetailsScreen = ({
  navigation,
}: ProductDetailsScreenProps) => {
  const selectedProduct = useSelector(
    (state: RootState) => state.products.selectedProduct
  );
  const { width } = useWindowDimensions();

  const handleAddToCart = () => {};

  if (!selectedProduct) {
    return <View />;
  }

  return (
    <SafeAreaView>
      <ScrollView>
        <FlatList
          data={selectedProduct.images}
          renderItem={({ item }) => (
            <Image source={{ uri: item }} style={{ width, aspectRatio: 1 }} />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
        />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{selectedProduct.name}</Text>
          <Text style={styles.price}>${selectedProduct.price}</Text>
          <Text style={styles.description}>{selectedProduct.description}</Text>
        </View>
      </ScrollView>
      <Pressable onPress={handleAddToCart} style={styles.button}>
        <Text style={styles.buttonText}>Add to cart</Text>
      </Pressable>
      <Pressable style={styles.icon}>
        <Ionicons name="close" size={24} color="white" />
      </Pressable>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 34,
    fontWeight: "500",
    marginVertical: 10,
  },
  price: {
    fontSize: 16,
    fontWeight: "500",
    letterSpacing: 1.5,
  },
  description: {
    fontSize: 18,
    fontWeight: "300",
    lineHeight: 30,
    marginVertical: 10,
  },
  textContainer: {
    padding: 20,
  },
  button: {
    position: "absolute",
    bottom: 30,
    width: "90%",
    alignSelf: "center",
    backgroundColor: "black",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "500",
    fontSize: 16,
  },
  icon: {
    position: "absolute",
    top: 50,
    right: 20,
    backgroundColor: "#000000AA",
    borderRadius: 50,
    padding: 5,
  },
});
