import React from "react";
import { Text, View } from "react-native";

import { styles } from "./styles";
import ClockSvg from "../../../../assets/svgs/clock.svg";

const TaskCard = ({ title, description, date, backgroundColor }) => {
  return (
    <View style={[styles.card, { backgroundColor }]}>
      <View style={styles.flexStyle}>
        <Text style={styles.title}>{title}</Text>
        <ClockSvg />
      </View>
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.date}>Created at {date}</Text>
    </View>
  );
};

export default TaskCard;
