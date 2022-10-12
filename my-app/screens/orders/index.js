import React from "react";
import { View, Text, SafeAreaView, FlatList } from "react-native";
import { OrderItem } from "../../components";
import { ORDERS } from "../../data/orders";

import { styles } from "./styles";

const Orders = () => {
  const onDeleteOrder = (item) => {
    console.warn(item);
  };

  const renderItem = ({ item }) => (
    <OrderItem item={item} onDelete={onDeleteOrder}></OrderItem>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={ORDERS}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

export default Orders;
