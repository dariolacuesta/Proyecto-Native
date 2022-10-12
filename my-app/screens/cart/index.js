import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { CartItem } from "../../components";
import { CART } from "../../data/cart";

import { styles } from "./styles";

const CartScreen = () => {
  const items = CART;
  const total = 4000;

  const handleConfirm = () => {
    console.warn("CONFIRM");
  };
  const handleDelete = () => {
    console.warn("DDLETE");
  };
  const renderItem = ({ item }) => (
    <CartItem item={item} onDelete={handleDelete}></CartItem>
  );

  return (
    <View style={styles.container}>
      <View style={styles.list}>
        <FlatList
          data={items}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
        ></FlatList>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.confirm} onPress={handleConfirm}>
          <Text style={styles.confirmText}>Confirm</Text>
          <View style={styles.total}>
            <Text style={styles.text}>Total</Text>
            <Text style={styles.text}>${total}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartScreen;
