import React, {useState} from 'react';

import LogoImg from '../../assets/icons/logo.png';
import FunctionButton from '../../components/buttons/FunctionButton/FunctionButton';
import LoginInput from '../../components/inputs/LoginInput/LoginInput';
import PasswordInput from '../../components/inputs/PasswordInput/PasswordInput';

const LoginPage = () => {
  const [login, setLogin] = useState(null);
  const [password, setPassword] = useState(null);
  return (
    <div className="login_page">
      <div className="navbar__logo">
        <img
          alt=""
          src={LogoImg}
          draggable="false"
        />
        <h1>ERP ’ba3a’ </h1>
      </div>
      <div className="login_page__container">
        <h1 className="centered">Підзвіт Зразків</h1>

        <LoginInput
          value={login}
          setValue={setLogin}
          label={'login'}
        />
        <PasswordInput
          value={password}
          setValue={setPassword}
          label={'password'}
        />

        {/* <TextInput label={"Login"} id="login" name="login" />
      <PasswordInput label={"Password"} id="password" name="password" /> */}

        <div
          className="fc jcsb contr_btns"
          style={{width: '100%'}}
        >
          <FunctionButton name={'Вхід'} />
          <FunctionButton name={'Скасувати'} />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
