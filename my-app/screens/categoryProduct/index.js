import React from "react";
import { View, Text, Button } from "react-native";
import { styles } from "./styles";

const CategoryProductScreen = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <Text>categoryProductScreen</Text>
      <Button
        title="Ir a Detalle"
        onPress={() => {
          navigation.navigate("Detail");
        }}
      ></Button>
    </View>
  );
};

export default CategoryProductScreen;
