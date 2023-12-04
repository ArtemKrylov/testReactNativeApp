import React, {useRef} from "react";
import {Text, TextInput, View} from "react-native";

const LoginInput = ({value, setValue, label}) => {
  const inputRef = useRef();
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
        type="password"
        // readOnly={true}
        ref={inputRef}
        // onFocus={() => {
        //   inputRef.current.removeAttribute('readonly');
        // }}
        // onBlur={() => {
        //   inputRef.current.setAttribute('readonly', true);
        // }}
        placeholder="Enter your email"
      />
      {/* <div className="hidden"></div> */}
    </View>
  );
};

export default LoginInput;
