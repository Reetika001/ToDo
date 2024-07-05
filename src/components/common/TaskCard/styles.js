import { StyleSheet } from "react-native";
import { moderateScale } from "../../../utils/scaleFile";
import { colors } from "../../../themes";

export const styles = StyleSheet.create({
  card: {
    borderRadius: moderateScale(10),
    padding: moderateScale(20),
    marginBottom: moderateScale(20),
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
  flexStyle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontSize: moderateScale(20),
    fontWeight: "bold",
    color: colors.white,
  },
  description: {
    fontSize: moderateScale(16),
    color: colors.white,
    marginTop: moderateScale(10),
  },
  date: {
    fontSize: moderateScale(12),
    color: colors.white,
    marginTop: moderateScale(20),
  },
});
