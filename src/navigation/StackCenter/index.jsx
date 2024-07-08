import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Screens } from "../../constants";
import Splash from "../../components/screens/Splash";
import Home from "../../components/screens/Home";
import Detail from "../../components/screens/Detail";
import Profile from "../../components/screens/Profile";
import Login from "../../components/screens/Auth/login";
import SignUp from "../../components/screens/Auth/signUp";

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
      <Stack.Screen name={Screens.LOGIN_SCREEN} component={Login} />
      <Stack.Screen name={Screens.SIGN_UP_SCREEN} component={SignUp} />
      <Stack.Screen name={Screens.HOME_SCREEN} component={Home} />
      <Stack.Screen name={Screens.DETAIL_SCREEN} component={Detail} />
      <Stack.Screen name={Screens.PROFILE_SCREEN} component={Profile} />
    </Stack.Navigator>
  );
};

export default StackCenter;
