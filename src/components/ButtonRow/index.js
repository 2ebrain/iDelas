import React from "react";

import { Text, TouchableOpacity } from "react-native";

import Style from "./style";

export default (props) => {
  return (
    <TouchableOpacity style={Style.cardOptions} onPress={props.onPress}>
      {props.children}
      <Text style={Style.textRelatorios}>{props.textButton}</Text>
    </TouchableOpacity>
  );
};
