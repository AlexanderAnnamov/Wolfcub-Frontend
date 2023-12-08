import React from "react";
import { View, StyleSheet, Dimensions, TouchableOpacity, Text } from "react-native";
import RegistrationForm from "../../components/auth/RegistrationForm";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
interface IRegistrationPage {
  navigation?: any
}

export const RegistrationPage: React.FC<IRegistrationPage> = ({navigation}) => {
  return (
    <View style={styles.page}>
    <View style={styles.viewRegistrationForm}>
      <RegistrationForm />
      <TouchableOpacity onPress={() => navigation.navigate('LoginPage')} style={styles.buttonRegistration}>
        <Text style={styles.buttonRegistrationText}>Войти</Text>
      </TouchableOpacity>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    // 
    width: windowWidth,
    height: windowHeight,
    alignItems: "center",
    justifyContent: "center",
  },
  viewRegistrationForm: {
    backgroundColor: "#E3E3E3",
    paddingHorizontal: 12,
    paddingVertical: 25,
    width: '80%',
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 6,
      height: 3,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 10,
  },
  buttonRegistration: {
    marginTop: 10,
    display: "flex",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonRegistrationText: {
    color: "#409945",
    fontFamily: "Montserrat",
    fontSize: 13,
  },
});
