import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  CategoriesScreen,
  ProductDetailScreen,
  CategoryProductScreen,
} from "../screens/index";
import { Platform } from "react-native";
import { colors } from "../constants/colors";

const Stack = createNativeStackNavigator();

const ShopNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.background,
        },
        headerTintColor:
          Platform.OS === "ios" ? colors.red : colors.prussianBlue,
        headerTitleStyle: {
          fontFamily: "Roboto-Bold",
        },
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen name="Home" component={CategoriesScreen} />
      <Stack.Screen name="Products" component={CategoryProductScreen} />
      <Stack.Screen name="Detail" component={ProductDetailScreen} />
    </Stack.Navigator>
  );
};

export default ShopNavigator;
