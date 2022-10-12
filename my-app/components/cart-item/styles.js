import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";
export const styles = StyleSheet.create({
  item: {
    flex: 1,
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: colors.fulvous,
  },
  header: {
    fontSize: 20,
    fontFamily: "Roboto-Bold",
  },
  subHeader: {
    fontSize: 15,
    fontFamily: "Roboto-Bold",
  },
  detail: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-between",
  },
  text: {
    fontSize: 13,
    fontFamily: "Roboto-Black",
  },
});
