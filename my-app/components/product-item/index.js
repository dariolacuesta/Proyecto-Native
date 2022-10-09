import React from "react";
import IoniIcons from "@expo/vector-icons/Ionicons";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { styles } from "./styles";
import { colors } from "../../constants/colors";
const ProductItem = ({ item, onSelected }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.containerTouchable}
        onPress={() => onSelected(item)}
      >
        <View>
          <Image
            style={styles.logo}
            source={{
              uri: item.cover,
            }}
          />
        </View>
        <View>
          <Text style={styles.title}>Band: {item.name}</Text>
          <Text style={styles.title}>Album: {item.album}</Text>
          <Text style={styles.year}>Year: {item.year}</Text>
          <Text style={styles.price}>Price: ${item.price}</Text>
        </View>
        <View>
          <IoniIcons
            name={"chevron-forward"}
            size={40}
            color={colors.black}
          ></IoniIcons>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ProductItem;
