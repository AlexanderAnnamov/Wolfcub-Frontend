import React from "react";
import {
  View,
  TouchableOpacity,
  Text,
  TextInput,
  Image,
} from "react-native";

import CheckBox from "../../ui/check-box/CheckBox";
import { usePostRegistrationMutation } from "../../redux/apiQuery/auth";
import { Login, Password, Info } from "../../../assets/img/";

import { TRegistrationForm } from "../../models/auth/RegistrationForm";

import {styles} from "./styles"

const RegistrationForm: React.FC = () => {
  const [emailText, setEmail] = React.useState("");
  const [passwordText, setPassword] = React.useState("");
  const [firstNameText, setFirstNameText] = React.useState("");
  const [lastNameText, setLastNameText] = React.useState("")
  const [checked, setCheked] = React.useState(false);

  const [postRegistration] = usePostRegistrationMutation();

  const handleRegistration = (data: TRegistrationForm) => {
    postRegistration(data);
  };

  return (
    <View>
      <Text style={styles.title}>Регистрация</Text>
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
      <View style={styles.inputWrapper}>
        <Image source={Info} style={styles.iconInput} />
        <TextInput
          style={styles.input}
          placeholder="Фамилия"
          placeholderTextColor="#696969"
          value={lastNameText}
          onChangeText={setLastNameText}
         
        />
      </View>
      <View style={styles.inputWrapper}>
        <Image source={Info} style={styles.iconInput} />
        <TextInput
          style={styles.input}
          placeholder="Имя"
          placeholderTextColor="#696969"
          value={firstNameText}
          onChangeText={setFirstNameText}
        />
      </View>
    
      <CheckBox
        selected={checked}
        onPress={() => {setCheked(!checked)}}
        text="Сохранить мой аккаунт"
        textStyle={{fontFamily: 'Montserrat', fontSize: 13}}
      />
     
      <TouchableOpacity
        style={styles.buttonAuth}
        onPress={() => {
          handleRegistration({
            email: emailText,
            password: passwordText,
            firstname: firstNameText,
            lastname: lastNameText
          });
        }}
      >
        <Text style={styles.buttonAuthText}>Зарегистрироваться</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RegistrationForm;
