import React, { useEffect } from "react";
import { SafeAreaView, FlatList } from "react-native";
import { styles } from "./styles";
import { ProductItem } from "../../components/index";
import { useSelector, useDispatch } from "react-redux";
import {
  filteredBands,
  selectProduct,
} from "../../store/actions/products.action";

const CategoryProductScreen = ({ navigation }) => {
  const handleSelected = (item) => {
    dispatch(selectProduct(item.id));
    navigation.navigate("Detail", {
      name: item.name,
    });
  };

  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.filteredBands);
  const categorySelected = useSelector((state) => state.categories.selected);

  const renderItemProduct = ({ item }) => (
    <ProductItem item={item} onSelected={handleSelected}></ProductItem>
  );

  useEffect(() => {
    dispatch(filteredBands(categorySelected.id));
  }, []);

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
