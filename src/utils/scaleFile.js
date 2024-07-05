import { Dimensions } from "react-native";
const { height, width } = Dimensions.get("window");

const guidelineBaseWidth = 430;
const guidelineBaseHeight = 932;

const CURRENT_RESOLUTION = Math.sqrt(height * height + width * width);
const DESIGN_RESOLUTION = Math.sqrt(
  guidelineBaseHeight * guidelineBaseHeight +
    guidelineBaseWidth * guidelineBaseWidth
);
const RESOLUTIONS_PROPORTION = CURRENT_RESOLUTION / DESIGN_RESOLUTION;

const moderateScale = (input) => input * RESOLUTIONS_PROPORTION;
const verticalScale = (input) => input * RESOLUTIONS_PROPORTION;

export { moderateScale, verticalScale };
