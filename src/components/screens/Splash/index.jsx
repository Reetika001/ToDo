import { useEffect } from "react";
import { View, Text } from "react-native";

import { styles } from "./styles";
import { Screens } from "../../../constants";

const Splash = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate(Screens.HOME_SCREEN);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>ToDo</Text>
      <Text style={styles.subHeading}>Your companion for all Task</Text>
    </View>
  );
};

export default Splash;
