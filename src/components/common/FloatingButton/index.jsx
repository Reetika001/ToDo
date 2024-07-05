import { TouchableOpacity, View } from "react-native";
import React from "react";

import PlusSvg from "../../../../assets/svgs/plus.svg";
import { styles } from "./styles";

const FloatingButton = () => {
  return (
    <TouchableOpacity
      onPress={() => {
        console.log("hello");
      }}
      style={styles.container}
    >
      <PlusSvg height={30} width={30} />
    </TouchableOpacity>
  );
};

export default FloatingButton;
