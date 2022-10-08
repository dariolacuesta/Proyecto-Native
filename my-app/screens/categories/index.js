import React from "react";
import { View, Text, Button } from "react-native";
import { styles } from "./styles";
const CategoriesScreen = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <Text>Category Screen</Text>
      <Button
        title="Ir a productos"
        onPress={() => {
          navigation.navigate("Products");
        }}
      ></Button>
    </View>
  );
};

export default CategoriesScreen;
