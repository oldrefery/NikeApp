import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RouteProp } from "@react-navigation/native";

export type RootStackParamList = {
  Products: undefined;
  "Product Details": undefined;
  Cart: undefined;
};

export type ProductScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, "Products">;
  route: RouteProp<RootStackParamList, "Products">;
};

export type ProductDetailsScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, "Product Details">;
  route: RouteProp<RootStackParamList, "Product Details">;
};

export type ShoppingCartScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, "Cart">;
  route: RouteProp<RootStackParamList, "Cart">;
};
