import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { colors } from "../constants/colors";
import { OrdersScreen } from "../screens/index";
import { LinearGradient } from "expo-linear-gradient";

const Stack = createNativeStackNavigator();

const OrdersNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Orders"
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
        name="Orders"
        component={OrdersScreen}
        options={{ title: "Ordenes" }}
      />
    </Stack.Navigator>
  );
};

export default OrdersNavigator;
