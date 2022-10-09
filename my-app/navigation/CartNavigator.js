import React from "react";
import { Platform } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CartScreen } from "../screens/index";
import { colors } from "../constants/colors";
import { LinearGradient } from "expo-linear-gradient";

const Stack = createNativeStackNavigator();

const CartNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Cart"
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
        name="Cart"
        component={CartScreen}
        options={{ title: "Carrito" }}
      ></Stack.Screen>
    </Stack.Navigator>
  );
};

export default CartNavigator;
