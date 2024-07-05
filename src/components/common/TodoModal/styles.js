import { StyleSheet } from "react-native";
import { moderateScale } from "../../../utils/scaleFile";
import { colors } from "../../../themes";

export const styles = StyleSheet.create({
  sheetContainer: {
    paddingTop: moderateScale(42),
    paddingBottom: moderateScale(42),
    paddingHorizontal: moderateScale(24),
    backgroundColor: colors.pitchBg,
    position: "absolute",
    bottom: 0,
    borderTopLeftRadius: moderateScale(20),
    borderTopRightRadius: moderateScale(20),
    width: "100%",
    height: "85%",
    rowGap: moderateScale(20),
  },
  input: {
    borderWidth: moderateScale(2),
    borderColor: colors.white,
    borderRadius: moderateScale(8),
    padding: moderateScale(8),
  },
});
