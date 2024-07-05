// src/components/TodoDetail.js
import React from "react";
import { View } from "react-native";

import { styles } from "./styles";
import IconWrapper from "../IconWrapper";
import LeftSvg from "../../../../assets/svgs/left.svg";
import EditSvg from "../../../../assets/svgs/edit.svg";
import ClockSvg from "../../../../assets/svgs/darkClock.svg";
import TrashSvg from "../../../../assets/svgs/trash.svg";

const TodoDetailHeader = ({ backHandler, editHandler }) => {
  return (
    <View style={styles.container}>
      <IconWrapper icon={<LeftSvg />} pressHandler={backHandler} />
      <View style={styles.icons}>
        <IconWrapper
          icon={<ClockSvg />}
          pressHandler={() => {
            console.log("hello");
          }}
        />
        <IconWrapper icon={<EditSvg />} pressHandler={editHandler} />
        <IconWrapper
          icon={<TrashSvg />}
          pressHandler={() => {
            console.log("hello");
          }}
        />
      </View>
    </View>
  );
};

export default TodoDetailHeader;
