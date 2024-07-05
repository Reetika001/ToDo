import { StyleSheet } from "react-native";
import { moderateScale } from "../../../utils/scaleFile";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: moderateScale(24),
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  touchArea: {
    height: moderateScale(35),
    width: moderateScale(40),
  },
  icons: {
    flexDirection: "row",
    columnGap: moderateScale(12),
  },
});
