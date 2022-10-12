import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import IoniIcons from "@expo/vector-icons/Ionicons";
import { styles } from "./styles";

const formatDay = (time) => {
  const date = new Date(time);
  return date.toLocaleDateString();
};

const OrderItem = ({ item, onDelete }) => {
  return (
    <View style={styles.order}>
      <View>
        <Text style={styles.date}>{formatDay(item.date)}</Text>
        <Text style={styles.subHeader}>{item.total}</Text>
      </View>
      <View style={styles.detail}>
        <TouchableOpacity
          onPress={() => {
            onDelete(item.id);
          }}
        >
          <IoniIcons name="trash-bin-outline" size={25} color></IoniIcons>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OrderItem;
