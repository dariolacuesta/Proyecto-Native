import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import colors from "./../constants/colors";
const NamePage = ({ name, goBack }) => {
  const styles = StyleSheet.create({
    MainText: {
      fontSize: 20,
      alignItems: "center",
      padding: 10,
      color: colors.white,
      fontFamily: "Roboto-Black",
    },
    screen: {
      flex: 1,
      padding: 20,
      alignItems: "center",
      justifyContent: "center",
    },
  });

  return (
    <View style={styles.screen}>
      <Text style={styles.MainText}>Bienvenido {name}</Text>
      <Button
        style={styles.button}
        color={colors.green}
        title="Volver"
        onPress={goBack}
      ></Button>
    </View>
  );
};

export default NamePage;
