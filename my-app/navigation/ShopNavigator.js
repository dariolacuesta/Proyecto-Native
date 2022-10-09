import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  CategoriesScreen,
  ProductDetailScreen,
  CategoryProductScreen,
} from "../screens/index";
import { Platform, View, Text } from "react-native";
import { colors } from "../constants/colors";
import { LinearGradient } from "expo-linear-gradient";

const Stack = createNativeStackNavigator();

const ShopNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerTintColor: Platform.OS === "ios" ? colors.red : colors.lightSteel,
        headerTitleStyle: {
          fontFamily: "Roboto-Bold",
        },
        headerTitleAlign: "center",
        headerBackground: () => (
          <LinearGradient
            start={{ x: 0.5, y: 0.7 }}
            end={{ x: 0.5, y: 0.2 }}
            locations={[0.1, 0.9]}
            colors={[colors.darkGreen, colors.warmGreen]}
            style={{ flex: 1 }}
          ></LinearGradient>
        ),
      }}
    >
      <Stack.Screen
        name="Home"
        component={CategoriesScreen}
        options={{ title: "Music World" }}
      />
      <Stack.Screen
        name="Products"
        component={CategoryProductScreen}
        options={({ route }) => ({ title: route.params.name })}
      />
      <Stack.Screen
        name="Detail"
        component={ProductDetailScreen}
        options={({ route }) => ({ title: route.params.name })}
      />
    </Stack.Navigator>
  );
};

export default ShopNavigator;
