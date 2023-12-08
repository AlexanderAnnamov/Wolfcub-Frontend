import { NavigationContainer } from "@react-navigation/native";
import * as Linking from "expo-linking";

const linking = {
  prefixes: [Linking.createURL("/")], 
  config: {
    screens: {
      Home: "",
    },
  },
};

export default linking;