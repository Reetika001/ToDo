import { View } from "react-native";
import React from "react";

import PlusSvg from "../../../../assets/svgs/plus.svg";
import { styles } from "./styles";

const FloatingButton = () => {
  return (
    <View style={styles.container}>
      <PlusSvg height={30} width={30} />
    </View>
  );
};

export default FloatingButton;
