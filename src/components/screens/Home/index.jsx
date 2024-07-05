import { Text, SafeAreaView, View, ScrollView } from "react-native";
import React from "react";

import SettingSvg from "../../../../assets/svgs/settings.svg";
import FilterSvg from "../../../../assets/svgs/filter.svg";
import TodosSvg from "../../../../assets/svgs/todos.svg";

import { styles } from "./styles";
import TaskCard from "../../common/TaskCard";
import { colors } from "../../../themes";
import FloatingButton from "../../common/FloatingButton";

const Home = ({ navigation }) => {
  const cardPressHandler = () => {
    navigation.navigate("Detail");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.todoText}>TO DO LIST</Text>
        <SettingSvg />
      </View>
      <View style={styles.headerContainer}>
        <View style={styles.flexStyle}>
          <TodosSvg />
          <Text style={styles.todoListText}>LIST OF TODOS</Text>
        </View>
        <FilterSvg />
      </View>
      <ScrollView contentContainerStyle={styles.cardListStyle}>
        <TaskCard
          title="Design Logo"
          description="Make logo for the mini project"
          date="1 Sept 2021"
          backgroundColor={colors.orange}
          cardPress={cardPressHandler}
        />
        <TaskCard
          title="Make UI Design"
          description="Make UI design for the mini project post figma link to the trello using ..."
          date="1 Sept 2021"
          backgroundColor={colors.pitch}
          cardPress={cardPressHandler}
        />
      </ScrollView>
      <FloatingButton />
    </SafeAreaView>
  );
};

export default Home;
