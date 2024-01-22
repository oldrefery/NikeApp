import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { ProductScreen } from "../screens/ProductScreen";
import { ProductDetailsScreen } from "../screens/ProductDetailsScreen";
import { ShoppingCartScreen } from "../screens/ShoppingCartScreen";
import { Pressable, StyleSheet, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { RootStackParamList } from "./types";

const Stack = createNativeStackNavigator<RootStackParamList>();

const styles = StyleSheet.create({
  cartContainer: {
    flexDirection: "row",
  },
  cartText: {
    marginLeft: 5,
    fontWeight: "500",
  },
  commonStyle: {
    backgroundColor: "white",
  },
});
export const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          contentStyle: styles.commonStyle,
        }}
      >
        <Stack.Screen
          name="Products"
          component={ProductScreen}
          options={({ navigation }) => ({
            headerRight: () => (
              <Pressable
                onPress={() => navigation.navigate("Cart")}
                style={styles.cartContainer}
              >
                <FontAwesome name="shopping-cart" size={18} color="gray" />
                <Text style={styles.cartText}>1</Text>
              </Pressable>
            ),
          })}
        />
        <Stack.Screen name="Product Details" component={ProductDetailsScreen} />
        <Stack.Screen name="Cart" component={ShoppingCartScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
