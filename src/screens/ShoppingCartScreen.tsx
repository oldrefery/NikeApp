import { FlatList, Pressable, StyleSheet, Text } from "react-native";
import { CartListItem } from "../components/CartListItem";
import { CartTotals } from "../components/CartTotals";
import { ShoppingCartScreenProps } from "../navigation/types";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

export const ShoppingCartScreen = ({ navigation }: ShoppingCartScreenProps) => {
  const cart = useSelector((state: RootState) => state.cart.items);

  const handleCheckout = () => {
    navigation.goBack();
  };

  return (
    <>
      <FlatList
        data={cart}
        renderItem={({ item }) => <CartListItem cartItem={item} />}
        ListFooterComponent={CartTotals}
      />
      <Pressable onPress={handleCheckout} style={styles.button}>
        <Text style={styles.buttonText}>Checkout</Text>
      </Pressable>
    </>
  );
};

const styles = StyleSheet.create({
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
});
