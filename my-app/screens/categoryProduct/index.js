import React from "react";
import { SafeAreaView, FlatList } from "react-native";
import { styles } from "./styles";
import { BANDS } from "../../data/bands";
import { ProductItem } from "../../components/index";

const CategoryProductScreen = ({ navigation, route }) => {
  const { categoryId } = route.params;
  const products = BANDS.filter((product) => product.category === categoryId);
  const handleSelected = (item) => {
    navigation.navigate("Detail", {
      productId: item.id,
      name: item.name,
    });
  };
  const renderItemProduct = ({ item }) => (
    <ProductItem item={item} onSelected={handleSelected}></ProductItem>
  );

  const keyExtractor = (item, index) => item.id.toString();
  return (
    <SafeAreaView style={styles.screen}>
      <FlatList
        data={products}
        renderItem={renderItemProduct}
        keyExtractor={keyExtractor}
      />
    </SafeAreaView>
  );
};

export default CategoryProductScreen;
