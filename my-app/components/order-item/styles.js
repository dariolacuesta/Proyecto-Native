import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";
export const styles = StyleSheet.create({
  order: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    marign: 10,
    marginTop: 15,
    borderWidth: 3,
    borderColor: colors.fulvous,
    borderRadius: 5,
  },
  date: {
    fontSize: 18,
  },
  total: {
    fontSize: 18,
    fontFamily: "Roboto-Bold",
  },
});
