import React, {useRef, useState} from 'react';

import OpenedEyeImg from '../../../assets/icons/openEye.png';
import ClosedEyeImg from '../../../assets/icons/openEye.png';
import ImageButton from '../../buttons/ImageButton/ImageButton';

const PasswordInput = ({value, setValue, label}) => {
  const [hide, setHide] = useState(true);
  const inputRef = useRef();

  console.log('OpenedEyeImg :', OpenedEyeImg);
  console.log('ClosedEyeImg :', ClosedEyeImg);

  function onToggleShowPasswordBtnClick() {
    setHide((hide) => !hide);
  }

  return (
    <div
      className="login_input_container"
      onClick={() => {
        inputRef.current.focus();
      }}
    >
      <label>{label}</label>
      <input
        value={value || ''}
        onChange={(e) => {
          if (e.target.value.length === 0) {
            inputRef.current.setAttribute('readonly', true);
            setTimeout(() => {
              inputRef.current.removeAttribute('readonly');
            }, 100);
          }
          setValue(e.target.value);
        }}
        name={'password'}
        type={hide ? 'password' : 'text'}
        autoComplete="new-password-erp"
        ref={inputRef}
      />
      <div className="hidden"></div>
      {/* <ImageButton
        src={hide ? ClosedEyeImg : OpenedEyeImg}
        className={'showPaswBtn'}
        onClick={onToggleShowPasswordBtnClick}
      /> */}
    </div>
  );
};

export default PasswordInput;
