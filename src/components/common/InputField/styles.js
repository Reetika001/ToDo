import { StyleSheet } from "react-native";
import { moderateScale } from "../../../utils/scaleFile";
import { colors } from "../../../themes";

export const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: moderateScale(2),
    borderColor: colors.white,
    borderRadius: moderateScale(8),
    padding: moderateScale(8),
  },
  input: {
    minWidth: "87%",
  },
});
