import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    input: {
      backgroundColor: "white",
      paddingLeft: 10,
      alignSelf: "center",
      height: 30,
      borderRadius: 30,
      width: "100%",
      outlineStyle: "none",
      fontFamily: 'Montserrat'
    },
    title: {
      fontFamily: "Montserrat",
      fontSize: 25,
      marginBottom: 20,
    },
    buttonAuth: {
      marginTop: 15,
      display: "flex",
      alignSelf: 'center',
      alignItems: "center",
      justifyContent: "center",
      paddingHorizontal: 10,
      height: 30,
      borderRadius: 15,
      backgroundColor: "#409945",
    },
  
    buttonSwitch: {
      marginTop: 10,
      display: "flex",
      alignSelf: 'center',
      alignItems: "center",
      justifyContent: "center",
    },
    buttonAuthText: {
      color: "white",
      fontSize: 13,
      fontFamily: 'Montserrat'
    },
    buttonSwitchText: {
      color: "#409945",
      fontFamily: 'Montserrat',
      fontSize: 13,
    },
    inputWrapper: {
      display: "flex",
      flexDirection: "row",
      marginBottom: 15,
      backgroundColor: "#fff",
      borderRadius: 30,
      height: 35,
    },
    iconInput: {
      alignSelf: "center",
      marginLeft: 10,
      height: 15,
      width: 15,
    },
  });