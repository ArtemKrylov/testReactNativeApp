import React from 'react';
import {Image} from 'react-native';
import PropTypes from 'prop-types';

// import ToolTip from "../ToolTip";
import {BUTTON_COLORS, BUTTON_TYPES} from '../../../constants/buttons';

const ImageButton = ({
  src,
  className = '',
  width,
  height,
  size,
  alt,
  type = BUTTON_TYPES.BUTTON,
  children,

  onClick = () => {},
  ...props
}) => {
  //   const {t} = useTranslation();

  return (
    <button
      className={`img_btn ${className}`}
      {...props}
      type={type}
      onClick={onClick}
    >
      {/* <ToolTip title={typeof tooltipMessage === "string" ? t(tooltipMessage) : tooltipMessage}> */}
      <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', width: `${width || size}em`}}>
        {children}
        {src !== null && (
          // <img
          //   alt={alt}
          //   src={src}
          //   className={props.disabled ? 'img_disabled' : ''}
          //   style={{
          //     width: `${width || size}em`,
          //     height: `${height || size}em`,
          //   }}
          // />
          <Image
            style={{
              width: `${width || size}em`,
              height: `${height || size}em`,
            }}
          />
        )}
      </div>
      {/* </ToolTip> */}
    </button>
  );
};

ImageButton.propTypes = {
  src: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  alt: PropTypes.string,
  className: PropTypes.string,
  color: PropTypes.oneOf(Object.values(BUTTON_COLORS)),
  type: PropTypes.oneOf(Object.values(BUTTON_TYPES)),
  onClick: PropTypes.func,
  props: PropTypes.array,
};

export default ImageButton;
