import React from "react";
import { View, StyleSheet } from "react-native";
import LoginForm from "../../components/auth/LoginForm";
import {Dimensions, TouchableOpacity, Text} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

interface ILoginPage {
  navigation?: any
}

export const LoginPage: React.FC<ILoginPage> = ({navigation}) => {
  
  return (
    <View style={styles.page}>
      <View style={styles.viewLoginForm}>
        <LoginForm />
        <TouchableOpacity onPress={() => navigation.navigate('RegistrationPage')} style={styles.buttonRegistration}>
        <Text style={styles.buttonRegistrationText}>Регистрация</Text>
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
  viewLoginForm: {
    
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
