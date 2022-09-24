import React from "react";
import { View, Text, StyleSheet } from "react-native";
import colors from "../constants/colors";

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.green,
    alignItems: "center",
    paddingTop: 36,
    height: 100,
    width: "100%",
    justifyContent: "center",
  },
  headerTitle: {
    fontSize: 22,
    padding: 10,
    margin: "auto",
    color: colors.white,
    fontFamily: "Roboto-Black",
  },
});

const Header = (props) => {
  const { title } = props;
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{title}</Text>
    </View>
  );
};

export default Header;
