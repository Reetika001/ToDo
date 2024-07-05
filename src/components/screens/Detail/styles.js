import { StyleSheet } from "react-native";
import { colors } from "../../../themes";
import { moderateScale } from "../../../utils/scaleFile";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.appBg,
  },
  heading: {
    marginTop: moderateScale(20),
    fontSize: moderateScale(26),
    color: colors.black,
    margin: moderateScale(24),
    letterSpacing: -0.8,
  },
  description: {
    marginHorizontal: moderateScale(24),
    fontSize: moderateScale(16),
    color: colors.black,
    letterSpacing: -0.8,
  },
  dateText: {
    marginHorizontal: moderateScale(24),
    fontSize: moderateScale(16),
    color: colors.black,
    letterSpacing: -0.8,
    textAlign: "center",
  },
});
