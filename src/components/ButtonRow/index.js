import React from "react";

import { Image, Text, TouchableOpacity } from "react-native";

import Style from "./style";

export default (props) => {
  return (
    <TouchableOpacity style={Style.cardOptions} onPress={props.onPress}>
      <Image
        source={props.source}
        style={[{ width: props.widthIcon }, { height: props.heightIcon }]}
      />
      <Text style={Style.textRelatorios}>{props.textButton}</Text>
    </TouchableOpacity>
  );
};
