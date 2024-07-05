import { StyleSheet } from "react-native";
import { colors } from "../../../themes";
import { moderateScale } from "../../../utils/scaleFile";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: moderateScale(24),
    backgroundColor: colors.appBg,
  },
  flexStyle: {
    flexDirection: "row",
    alignItems: "center",
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: moderateScale(40),
  },
  todoText: {
    fontSize: moderateScale(40),
    fontWeight: "bold",
    color: colors.pitch,
    letterSpacing: -0.5,
    textShadowColor: colors.black,
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  todoListText: {
    fontSize: moderateScale(36),
    fontWeight: "bold",
    color: colors.orange,
    marginLeft: moderateScale(10),
    letterSpacing: -0.8,
  },
});
