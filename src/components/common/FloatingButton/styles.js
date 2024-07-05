import { StyleSheet } from "react-native";
import { moderateScale } from "../../../utils/scaleFile";
import { colors } from "../../../themes";

export const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: moderateScale(50),
    right: 0,
    height: moderateScale(70),
    width: moderateScale(70),
    borderRadius: moderateScale(50),
    backgroundColor: colors.orange,
    alignItems: "center",
    justifyContent: "center",
  },
});
