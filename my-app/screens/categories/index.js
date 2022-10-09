import React from "react";
import { FlatList, SafeAreaView } from "react-native";
import { styles } from "./styles";
import { CATEGORIES } from "../../data/categories";
import { CategoryItem } from "../../components/index";

const CategoriesScreen = ({ navigation }) => {
  const onSelected = (item) => {
    navigation.navigate("Products", {
      categoryId: item.id,
      name: item.title,
    });
  };
  const renderItem = ({ item }) => (
    <CategoryItem item={item} onSelected={onSelected} />
  );
  const keyExtractor = (item, index) => item.id.toString();

  return (
    <SafeAreaView style={styles.screen}>
      <FlatList
        data={CATEGORIES}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </SafeAreaView>
  );
};

export default CategoriesScreen;
