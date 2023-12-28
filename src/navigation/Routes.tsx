import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { LoginPage, RegistrationPage } from "../pages/auth";
import { LearningPage, LessonsPage } from "../pages/learning";
import { TestsPage } from "../pages/tests";
import { TestAnalitic } from "../pages/tests/TestAnalitic";

const Stack = createNativeStackNavigator();

const Routes = () => {
  return <Stack.Navigator screenOptions={{
    headerShown: false,
    animationTypeForReplace: 'push'
  }}>
     <Stack.Screen name="LoginPage" component={LoginPage} />
     <Stack.Screen name="Learning" component={LearningPage} />
    <Stack.Screen name="LessonsPage" component={LessonsPage}/>
    <Stack.Screen name="TestsPage" component={TestsPage}/>
    <Stack.Screen name="TestAnalitic" component={TestAnalitic}/>
   
 
    <Stack.Screen name="RegistrationPage" component={RegistrationPage} />
    </Stack.Navigator>;
};

export default Routes;