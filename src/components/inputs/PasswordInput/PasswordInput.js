import React, {useRef, useState} from "react";

import ImageButton from "../../buttons/ImageButton/ImageButton";
import OpenedEyeImg from "../../../assets/icons/openEye.png";
import {View} from "react-native";
import ClosedEyeImg from "../../../assets/icons/openEye.png";
import {Text} from "react-native";
import {TextInput} from "react-native";

const PasswordInput = ({value, setValue, label}) => {
  const [hide, setHide] = useState(true);
  const inputRef = useRef();

  function onToggleShowPasswordBtnClick() {
    setHide(hide => !hide);
  }

  return (
    <View
      className="login_input_container"
      onClick={() => {
        inputRef.current.focus();
      }}
    >
      <Text>{label}</Text>
      <TextInput
        value={value || ""}
        onChangeText={value => {
          console.log("value :", value);
          if (value.length === 0) {
            // inputRef.current.setAttribute("readonly", true);
            setTimeout(() => {
              // inputRef.current.removeAttribute("readonly");
            }, 100);
          }
          setValue(value);
        }}
        name={"password"}
        type={hide ? "password" : "text"}
        autoComplete="new-password-erp"
        ref={inputRef}
        placeholder="Enter your password"
      />
      {/* <div className="hidden"></div> */}
      {/* <ImageButton
        src={hide ? ClosedEyeImg : OpenedEyeImg}
        className={"showPaswBtn"}
        onClick={onToggleShowPasswordBtnClick}
      /> */}
    </View>
  );
};

export default PasswordInput;
