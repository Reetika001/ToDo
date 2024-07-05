import { TouchableOpacity } from "react-native";
import React from "react";

import PlusSvg from "../../../../assets/svgs/plus.svg";
import { styles } from "./styles";

const FloatingButton = ({ pressHandler }) => {
  return (
    <TouchableOpacity onPress={pressHandler} style={styles.container}>
      <PlusSvg height={30} width={30} />
    </TouchableOpacity>
  );
};

export default FloatingButton;
