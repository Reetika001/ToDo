import { StyleSheet } from "react-native";
import { colors } from "../../../themes";
import { moderateScale } from "../../../utils/scaleFile";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.appBg,
  },
  contentContainerStyle: {
    paddingHorizontal: moderateScale(24),
  },
  headingText: {
    fontSize: moderateScale(40),
    fontWeight: "bold",
    color: colors.pitch,
    letterSpacing: -0.5,
    textShadowColor: colors.black,
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
    textAlign: "center",
  },
  imageStyle: {
    marginVertical: "20%",
    alignSelf: "center",
  },
  nameContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  heading: {
    fontSize: moderateScale(16),
    color: colors.black70,
    width: "20%",
  },
  value: {
    fontSize: moderateScale(16),
    color: colors.pitch,
  },
});
