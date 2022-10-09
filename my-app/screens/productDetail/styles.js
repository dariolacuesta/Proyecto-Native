import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 200,
    height: 200,
    borderRadius: 15,
  },
  name: {
    paddingTop: 10,
    fontSize: 20,
    fontFamily: "Roboto-Italic",
  },
  album: {
    fontSize: 18,
    fontFamily: "Roboto-Italic",
  },
  price: {
    fontSize: 22,
    fontFamily: "Roboto-Black",
    paddingTop: 15,
  },
  year: {
    fontSize: 14,
  },
  ranking: {
    justifyContent: "center",
    flexDirection: "row",
  },
  rankingHeader: {
    paddingTop: 15,
  },
});
