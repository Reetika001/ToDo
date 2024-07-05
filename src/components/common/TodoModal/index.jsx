import { View, Text, TextInput } from "react-native";
import React from "react";
import Modal from "react-native-modal";

import { styles } from "./styles";
import { colors } from "../../../themes";
import Button from "../Button";
import InputField from "../InputField";
import CalendarSvg from "../../../../assets/svgs/calendar.svg";

const TodoModal = ({ isVisible, handler }) => {
  return (
    <Modal
      animationIn="slideInUp"
      animationOut="slideOutDown"
      isVisible={isVisible}
      onBackButtonPress={handler}
      onSwipeComplete={handler}
      swipeDirection={["down"]}
      style={{ margin: 0 }}
      backdropOpacity={1}
      swipeThreshold={200}
      backdropColor={colors.black70}
      onBackdropPress={handler}
      avoidKeyboard
    >
      <View style={styles.sheetContainer}>
        <InputField placeholder={"Title"} />
        <InputField style={{ height: "70%" }} placeholder="Description" />
        <InputField IconName={CalendarSvg} />
        <Button title={"Add Todo"} />
      </View>
    </Modal>
  );
};

export default TodoModal;
