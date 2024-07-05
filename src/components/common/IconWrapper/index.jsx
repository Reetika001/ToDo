import { TouchableOpacity } from "react-native";
import React from "react";
import { styles } from "./styles";

const IconWrapper = ({ icon, pressHandler }) => {
  return (
    <TouchableOpacity onPress={pressHandler} style={styles.touchArea}>
      {icon}
    </TouchableOpacity>
  );
};

export default IconWrapper;
