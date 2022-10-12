import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import IoniIcons from "@expo/vector-icons/Ionicons";
import { styles } from "./styles";

const CartItem = ({ item, onDelete }) => {
  return (
    <View style={styles.item}>
      <View>
        <Text style={styles.header}>{item.name}</Text>
        <Text style={styles.subHeader}>{item.album}</Text>
      </View>
      <View style={styles.detail}>
        <View>
          <Text>Cantidad: {item.quantity}</Text>
          <Text>$ {item.price}</Text>
        </View>
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

export default CartItem;
