import { SafeAreaView, Text, View } from "react-native";
import React, { useState } from "react";
import { styles } from "./styles";
import TodoDetailHeader from "../../common/TodoDetailHeader";
import TodoModal from "../../common/TodoModal";
const Detail = ({ navigation }) => {
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);

  const editModalHandler = () => {
    setIsEditModalVisible(!isEditModalVisible);
  };

  const backHandler = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <TodoDetailHeader
        backHandler={backHandler}
        editHandler={editModalHandler}
      />
      <Text style={styles.heading}>Design Logo</Text>
      <View style={{ flex: 1 }}>
        <Text style={styles.description}>Make logo for the mini project</Text>
      </View>
      <Text style={styles.dateText}>Created at 1 Sept 2021</Text>
      <TodoModal isVisible={isEditModalVisible} handler={editModalHandler} />
    </SafeAreaView>
  );
};

export default Detail;
