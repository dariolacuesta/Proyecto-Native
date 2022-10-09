import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import IoniIcons from "@expo/vector-icons/Ionicons";
import CartNavigator from "../CartNavigator";
import OrdersNavigator from "../OrderNavigator";
import ShopNavigator from "../ShopNavigator";
import { colors } from "../../constants/colors";
import { View, StyleSheet, Text } from "react-native";
const BottomTab = createBottomTabNavigator();
const styles = StyleSheet.create({
  tabBarIcon: {
    justifyContent: "center",
    alignItems: "center",
  },
  tabBarText: {
    fontFamily: "Roboto-Black",
    fontSize: 14,
    color: colors.blackOlive,
  },
  tabBarTextFocused: {
    fontFamily: "Roboto-Bold",
    fontSize: 14,
    color: colors.blackOlive,
  },
});
const Tabs = () => {
  return (
    <BottomTab.Navigator
      initialRouteName="ShopTab"
      screenOptions={{
        headerShown: false,
      }}
    >
      <BottomTab.Screen
        name="ShopTab"
        component={ShopNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.tabBarIcon}>
              <IoniIcons
                name={focused ? "disc" : "disc-outline"}
                size={20}
                color={colors.black}
              ></IoniIcons>
              <Text
                style={focused ? styles.tabBarTextFocused : styles.tabBarText}
              >
                Shop
              </Text>
            </View>
          ),
          tabBarShowLabel: false,
        }}
      />
      <BottomTab.Screen
        name="CartTab"
        component={CartNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.tabBarIcon}>
              <IoniIcons
                name={focused ? "cart" : "cart-outline"}
                size={20}
                color={colors.black}
              ></IoniIcons>
              <Text
                style={focused ? styles.tabBarTextFocused : styles.tabBarText}
              >
                Carrito
              </Text>
            </View>
          ),
          tabBarShowLabel: false,
        }}
      />
      <BottomTab.Screen
        name="OrdersTab"
        component={OrdersNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.tabBarIcon}>
              <IoniIcons
                name={focused ? "receipt" : "receipt-outline"}
                size={20}
                color={colors.black}
              ></IoniIcons>
              <Text
                style={focused ? styles.tabBarTextFocused : styles.tabBarText}
              >
                Ordenes
              </Text>
            </View>
          ),
          tabBarShowLabel: false,
        }}
      />
    </BottomTab.Navigator>
  );
};

export default Tabs;
