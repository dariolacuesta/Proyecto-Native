import { StyleSheet } from "react-native";

import { colors } from "../../constants/colors";
import { isAndroid } from "../../utils/functions";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 10,
    margin: 20,
    height: 180,
  },
  containerTouchable: {
    flex: 1,
    backgroundColor: isAndroid ? colors.background : colors.background,
    borderRadius: 10,
    shadowColor: colors.black,
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 3,
    justifyContent: "space-around",
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  title: {
    fontSize: 14,
    fontFamily: "Roboto-Bold",
  },
  price: {
    paddingTop: 15,
    fontSize: 15,
    fontFamily: "Roboto-Black",
  },
  year: {
    fontSize: 14,
    fontFamily: "Roboto-Bold",
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 100,
    height: 100,
  },
});
