import React from "react";
import { StyleSheet, View } from "react-native";
import { Provider } from "react-redux";
import { useFonts } from "expo-font";
import { store } from "./src/redux/store";
import * as SplashScreen from "expo-splash-screen";
import { RegistrationPage, LoginPage } from "./src/pages/auth";
import Routes from "./src/navigation/Routes";
import { NavigationContainer } from "@react-navigation/native";
import linking from "./src/navigation/Linking";

SplashScreen.preventAutoHideAsync();

const App = () => {
  const [fontsLoaded, fontError] = useFonts({
    Montserrat: require("./assets/fonts/Montserrat-VariableFont_wght.ttf"),
  });

  const onLayoutRootView = React.useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <NavigationContainer  linking={linking}>
        
        <Routes />
       
      </NavigationContainer>
      </View>
  );
};

const AppWrapper = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
});

export default AppWrapper;
