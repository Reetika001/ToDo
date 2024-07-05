import { StyleSheet } from "react-native";
import { moderateScale } from "../../../utils/scaleFile";
import { colors } from "../../../themes";

export const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.white,
    borderWidth: moderateScale(2),
    borderColor: colors.white,
    borderRadius: moderateScale(8),
    paddingHorizontal: moderateScale(8),
    paddingVertical: moderateScale(10),
    alignItems: "center",
  },
  buttonText: {
    color: colors.pitchBg,
    fontWeight: "bold",
  },
});
