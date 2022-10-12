import React from "react";
import { View, Text, Image, FlatList } from "react-native";
import { BANDS } from "../../data/bands";
import { styles } from "./styles";
import IoniIcons from "@expo/vector-icons/Ionicons";
import { useSelector } from "react-redux";

const ProductDetailScreen = () => {
  const album = useSelector((state) => state.products.selected);
  const rank = [];
  for (let index = 0; index < album.rank; index++) {
    rank.push(<IoniIcons name={"star"} size={15} key={index} />);
  }
  return (
    <View style={styles.screen}>
      <View>
        <Image
          style={styles.logo}
          source={{
            uri: album.cover,
          }}
        />
      </View>
      <Text style={styles.name}>{album.name}</Text>
      <Text style={styles.album}>{album.album}</Text>
      <Text style={styles.year}>Año: {album.year}</Text>
      <Text style={styles.rankingHeader}>Puntaje: </Text>
      <View style={styles.ranking}>
        {rank.map((rank) => {
          {
            return rank;
          }
        })}
      </View>
      <Text style={styles.price}>$ {album.price.toFixed(2)}</Text>
    </View>
  );
};

export default ProductDetailScreen;
