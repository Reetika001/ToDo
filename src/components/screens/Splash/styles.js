import { StyleSheet } from "react-native";
import { colors } from "../../../themes";
import { moderateScale } from "../../../utils/scaleFile";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.pitch,
  },
  heading: {
    fontSize: moderateScale(40),
    fontWeight: "bold",
    color: colors.white,
    letterSpacing: -0.5,
    textShadowColor: colors.black,
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  subHeading: {
    fontSize: moderateScale(24),
    fontWeight: "bold",
    color: colors.white,
    letterSpacing: -0.8,
  },
});
