import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { LoginPage, RegistrationPage } from "../pages/auth";

const Stack = createNativeStackNavigator();

const Routes = () => {
  return <Stack.Navigator screenOptions={{
    headerShown: false,
    animationTypeForReplace: 'push'
    
  }}>
    <Stack.Screen name="LoginPage" component={LoginPage} />
    <Stack.Screen name="RegistrationPage" component={RegistrationPage} />
    </Stack.Navigator>;
};

export default Routes;