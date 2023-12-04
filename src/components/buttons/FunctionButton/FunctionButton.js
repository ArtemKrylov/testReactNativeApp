import React from "react";
import {useTranslation} from "react-i18next";
import {Button} from "react-native";
import PropTypes from "prop-types";

// import ToolTip from "../ToolTip";
import {BUTTON_COLORS, BUTTON_TYPES} from "../../../constants/buttons";

const FunctionButton = ({
  name,
  className = "",
  color = BUTTON_COLORS.BLUE,
  type = BUTTON_TYPES.BUTTON,
  autoWidth,
  onClick = () => {},
  //   tooltipMessage = '',
  width = null,
  style = {},
  disabled,
}) => {
  const buttonClassName = `fixed_button fixed_button__${color} ${className} ${autoWidth ? "autoWidth" : ""}`;

  const {t} = useTranslation();

  return (
    <Button
      className={buttonClassName}
      onPress={onClick}
      title={typeof name === "string" ? t(name) : name}
      disabled={disabled}
      // type={type}
      // style={width ? {width: width} : {...style}}
    />
  );
};

FunctionButton.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  color: PropTypes.oneOf(Object.values(BUTTON_COLORS)),
  type: PropTypes.oneOf(Object.values(BUTTON_TYPES)),
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

export default FunctionButton;
