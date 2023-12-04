import React, {useEffect, useState} from "react";
import {Image, View} from "react-native";
import {Text} from "react-native";

import LogoImg from "../../assets/icons/logo.png";
import FunctionButton from "../../components/buttons/FunctionButton/FunctionButton";
import LoginInput from "../../components/inputs/LoginInput/LoginInput";
import PasswordInput from "../../components/inputs/PasswordInput/PasswordInput";
// import {useTranslation} from "react-i18next";
import {useDispatch, useSelector} from "react-redux";
import * as Yup from "yup";
import {Stack} from "expo-router";
import {Form, Formik} from "formik";
import styles from "./LoginPage.module.scss";
import {getInfo} from "../../utils/toasts";
import {login as loginAction} from "../../redux/slices/UserSlice";

const LoginPage = () => {
  // const {t} = useTranslation();

  const [login, setLogin] = useState(null);
  const [password, setPassword] = useState(null);

  const [error, setError] = useState();

  const {token, user} = useSelector(state => state.user);

  // const navigate = useNavigate();

  useEffect(() => {
    // if (token && user) navigate("/ba3a/samples/samples-m");
  }, [token]);

  const dispatch = useDispatch();

  const onLogin = values => {
    const {samplLogin, samplPassword} = values;
    dispatch(loginAction({email: samplLogin, password: samplPassword}));
  };

  return (
    <>
      <Stack.Screen
        options={{
          headerTitle: "ERP 'ba3a'",
          headerShadowVisible: false,
          headerLeft: () => <Image source={LogoImg} style={styles.menuIcon} />,
          // headerRight: () => <Image source={LogoutImg} />,
        }}
      />
      <View className="login_page__container">
        <Text className="centered">Підзвіт Зразків</Text>
        <Formik
          initialValues={{samplLogin: "", samplPassword: ""}}
          // validationSchema={Yup.object().shape({
          //   samplLogin: Yup.string().required(t("Enter login")),
          //   samplPassword: Yup.string().required(t("Enter password")),
          // })}
          validateOnChange={true}
          validateOnBlur={true}
          enableReinitialize
          onSubmit={onLogin}
        >
          {({values, errors}) => (
            <>
              {/* <TextInput
                label={"login"}
                name={"samplLogin"}
                autoComplete="login-erp-samplies"
                generalClassName={"login_input_container" + (errors.samplLogin ? " login_input_container__error" : "")}
                showErrorMessage={false}
              /> */}
              <PasswordInput label={"password"} name={"samplPassword"} autoComplete="parrw-erp-samplies" />
              <View className="fc jcsb contr_btns" style={{width: "100%"}}>
                {/* <FunctionButton name="Вхід" type="submit" />
                <FunctionButton
                  name="Скасувати"
                  onClick={() => {
                    getInfo("toast");
                  }}
                /> */}
              </View>
            </>
          )}
        </Formik>
      </View>
    </>
  );
};

export default LoginPage;
