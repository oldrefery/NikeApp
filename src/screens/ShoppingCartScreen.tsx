import { FlatList, Pressable, StyleSheet, Text } from "react-native";
import { CartListItem } from "../components/CartListItem";
import { cart } from "../data/cart";
import { CartTotals } from "../components/CartTotals";

export const ShoppingCartScreen = () => {
  return (
    <>
      <FlatList
        data={cart}
        renderItem={({ item }) => <CartListItem cartItem={item} />}
        ListFooterComponent={CartTotals}
      />
      <Pressable style={styles.button}>
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
