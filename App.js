import { StyleSheet, View } from "react-native";
import Home from "./src/components/screens/Home";
import { colors } from "./src/themes";

export default function App() {
  return (
    <View style={styles.container}>
      <Home />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.appBg,
  },
});
