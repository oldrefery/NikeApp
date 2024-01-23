import { FlatList, Image, Pressable, StyleSheet } from "react-native";
import { ProductScreenProps } from "../navigation/types";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { setSelectedProduct } from "../features/productSlice";

export const ProductScreen = ({ navigation }: ProductScreenProps) => {
  const products = useSelector((state: RootState) => state.products.products);
  const dispatch = useDispatch();

  return (
    <FlatList
      data={products}
      numColumns={2}
      renderItem={({ item }) => (
        <Pressable
          style={styles.itemContainer}
          onPress={() => {
            dispatch(setSelectedProduct(item.id));
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
