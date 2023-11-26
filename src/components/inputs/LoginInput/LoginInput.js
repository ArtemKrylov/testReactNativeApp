import React, {useRef} from 'react';

const LoginInput = ({value, setValue, label}) => {
  const inputRef = useRef();
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
        type="text"
        readOnly={true}
        ref={inputRef}
        onFocus={() => {
          inputRef.current.removeAttribute('readonly');
        }}
        onBlur={() => {
          inputRef.current.setAttribute('readonly', true);
        }}
      />
      <div className="hidden"></div>
    </div>
  );
};

export default LoginInput;
