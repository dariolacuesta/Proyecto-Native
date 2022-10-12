import React from "react";
import { FlatList, SafeAreaView } from "react-native";
import { styles } from "./styles";
import { CategoryItem } from "../../components/index";
import { useDispatch, useSelector } from "react-redux";
import { selectCategory } from "../../store/actions/category.action";

const CategoriesScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.categories);
  const onSelected = (item) => {
    dispatch(selectCategory(item.id));
    navigation.navigate("Products", {
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
        data={categories}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </SafeAreaView>
  );
};

export default CategoriesScreen;
