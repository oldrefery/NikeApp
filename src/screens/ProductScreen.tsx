import { FlatList, Image, Pressable, StyleSheet } from "react-native";
import { products } from "../data/products";
import { ProductScreenProps } from "../navigation/types";

export const ProductScreen = ({ navigation }: ProductScreenProps) => {
  return (
    <FlatList
      data={products}
      numColumns={2}
      renderItem={({ item }) => (
        <Pressable
          style={styles.itemContainer}
          onPress={() => {
            navigation.navigate("Product Details");
          }}
        >
          <Image source={{ uri: item.image }} style={styles.image} />
        </Pressable>
      )}
    />
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    aspectRatio: 1,
  },
  itemContainer: {
    width: "50%",
    padding: 1,
  },
});
