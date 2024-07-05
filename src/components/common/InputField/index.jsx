import { TextInput, View } from "react-native";
import React from "react";
import { styles } from "./styles";
import IconWrapper from "../IconWrapper";
import { colors } from "../../../themes";

const InputField = ({ placeholder, IconName, style }) => (
  <View style={[styles.inputContainer, style]}>
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      editable={false}
      placeholderTextColor={colors.white}
    />
    {IconName && <IconWrapper icon={<IconName />} />}
  </View>
);

export default InputField;
