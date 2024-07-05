import { SafeAreaView, Text, View } from "react-native";
import React from "react";
import { styles } from "./styles";
import TodoDetailHeader from "../../common/TodoDetailHeader";
const Detail = ({ navigation }) => {
  const backHandler = () => {
    navigation.goBack();
  };
  return (
    <SafeAreaView style={styles.container}>
      <TodoDetailHeader backHandler={backHandler} />
      <Text style={styles.heading}>Design Logo</Text>
      <View style={{ flex: 1 }}>
        <Text style={styles.description}>Make logo for the mini project</Text>
      </View>
      <Text style={styles.dateText}>Created at 1 Sept 2021</Text>
    </SafeAreaView>
  );
};

export default Detail;
