import React from "react";
import Icon from "react-native-vector-icons/MaterialIcons";

import { TouchableOpacity, Text } from "react-native";

interface ICheckBox {
  selected: boolean,
  onPress: () => void,
  style?: any,
  textStyle?: any,
  size?: number,
  color?: string,
  text: string
}

const CheckBox: React.FC<ICheckBox> = ({
  selected,
  onPress,
  style,
  textStyle,
  size = 20,
  color = "#409945",
  text = "",
  ...props
}) => (
  <TouchableOpacity
    style={[styles.checkBox, style]}
    onPress={onPress}
    {...props}
  >
    <Icon
      size={size}
      color={color}
      name={selected ? "check-box" : "check-box-outline-blank"}
    />

    <Text style={textStyle}> {text} </Text>
  </TouchableOpacity>
);

import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  checkBox: {
    paddingLeft: 8,
    flexDirection: "row",
    alignItems: "center",
  },
});

export default CheckBox;
