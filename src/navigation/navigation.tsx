import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { ProductScreen } from "../screens/ProductScreen";
import { ProductDetailsScreen } from "../screens/ProductDetailsScreen";
import { ShoppingCartScreen } from "../screens/ShoppingCartScreen";
import { RootStackParamList } from "./types";

const Stack = createNativeStackNavigator<RootStackParamList>();

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Products" component={ProductScreen} />
        <Stack.Screen name="Product Details" component={ProductDetailsScreen} />
        <Stack.Screen name="Cart" component={ShoppingCartScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
