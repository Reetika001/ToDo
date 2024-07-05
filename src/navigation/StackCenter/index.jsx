import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Screens } from "../../constants";
import Splash from "../../components/screens/Splash";
import Home from "../../components/screens/Home";
import Detail from "../../components/screens/Detail";

const Stack = createNativeStackNavigator();

const StackCenter = () => {
  return (
    <Stack.Navigator
      initialRouteName={Screens.SPLASH_SCREEN}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={Screens.SPLASH_SCREEN} component={Splash} />
      <Stack.Screen name={Screens.HOME_SCREEN} component={Home} />
      <Stack.Screen name={Screens.DETAIL_SCREEN} component={Detail} />
    </Stack.Navigator>
  );
};

export default StackCenter;
