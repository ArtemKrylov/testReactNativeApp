import {Provider} from "react-redux";
import LoginPage from "../src/pages/LoginPage/LoginPage";
import {ToastContainer} from "react-toastify";
import store from "../src/redux/store";
// import i18n from "./i18n";
// import {I18nextProvider} from "react-i18next";
// import "./i18n";
// import {withNamespaces} from "react-i18next";
// import "intl-pluralrules";
// import "intl-pluralrules/locale-data/en";

const HomePage = () => {
  return (
    // <I18nextProvider i18n={i18n}>
    <Provider store={store}>
      <LoginPage />
      <ToastContainer position="top-center" hideProgressBar />
    </Provider>
    // </I18nextProvider>
  );
};

// export default withNamespaces()(HomePage);
export default HomePage;
