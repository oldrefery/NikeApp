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
import { ProductDetailsScreenProps } from "../navigation/types";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { addItem } from "../features/cartSlice";

export const ProductDetailsScreen = ({
  navigation,
}: ProductDetailsScreenProps) => {
  const product = useSelector(
    (state: RootState) => state.products.selectedProduct
  );
  const dispatch = useDispatch();
  const { width } = useWindowDimensions();

  const handleAddToCart = () => {
    dispatch(addItem({ product }));
    navigation.goBack();
  };

  if (!product) {
    return <View />;
  }

  return (
    <SafeAreaView>
      <ScrollView>
        <FlatList
          data={product.images}
          renderItem={({ item }) => (
            <Image source={{ uri: item }} style={{ width, aspectRatio: 1 }} />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
        />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{product.name}</Text>
          <Text style={styles.price}>${product.price}</Text>
          <Text style={styles.description}>{product.description}</Text>
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
