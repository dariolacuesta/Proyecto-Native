import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
  },
  list: {
    flex: 1,
  },
  footer: {
    padding: 12,
    borderTopWidth: 1,
  },
  confirm: {
    backgroundColor: colors.warmGreen,
    borderRadius: 10,
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  total: {
    flexDirection: "row",
  },
  confirmText: {
    fontSize: 15,
    fontFamily: "Roboto-Bold",
    color: colors.lightSteel,
  },
  text: {
    fontSize: 18,
    fontFamily: "Roboto-Bold",
    padding: 8,
    color: colors.lightSteel,
  },
});
