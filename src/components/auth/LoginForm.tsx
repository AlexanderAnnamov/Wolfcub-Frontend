import React from "react";
import {
  View,
  TouchableOpacity,
  Text,
  TextInput,
  Image,
} from "react-native";

import CheckBox from "../../ui/check-box/CheckBox";
import { usePostLoginMutation } from "../../redux/apiQuery/auth";
import { Login, Password } from "../../../assets/img/";

import type { TLoginForm } from "../../models/auth/LoginForm";

import { styles } from "./styles"

const LoginForm = ({onClick}: {onClick: () => void}) => {
  const [emailText, setEmail] = React.useState("");
  const [passwordText, setPassword] = React.useState("");
  const [checked, setCheked] = React.useState(false);

  const [postLogin] = usePostLoginMutation();

  const handleLogin = (dataLogin: TLoginForm) => {
    postLogin(dataLogin);
  };

  return (
    <View>
      <Text style={styles.title}>Вход</Text>
      <View style={styles.inputWrapper}>
        <Image source={Login} style={styles.iconInput} />
        <TextInput
          keyboardType="email-address"
          style={styles.input}
          placeholder="Email"
          value={emailText}
          onChangeText={setEmail}
          placeholderTextColor="#696969"
          autoComplete="email"
        />
      </View>
      <View style={styles.inputWrapper}>
        <Image source={Password} style={styles.iconInput} />
        <TextInput
          style={styles.input}
          placeholder="Пароль"
          value={passwordText}
          onChangeText={setPassword}
          placeholderTextColor="#696969"
          autoComplete="password"
          secureTextEntry={true}
        />
      </View>
      <CheckBox
        selected={checked}
        onPress={() => {
          setCheked(!checked);
        }}
        text="Сохранить мой аккаунт"
        textStyle={{ fontFamily: "Montserrat", fontSize: 13 }}
      />
      <TouchableOpacity
        style={styles.buttonAuth}
        onPress={() => {
         onClick()
          
           }}
      >
        <Text style={styles.buttonAuthText}>Войти</Text>
      </TouchableOpacity>
      
    </View>
  );
};

export default LoginForm;
