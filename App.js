import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import StackCenter from "./src/navigation/StackCenter";
import { colors } from "./src/themes";

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <StackCenter />
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.appBg,
  },
});
