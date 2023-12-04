import {toast} from "react-toastify";

export const getError = error => {
  toast.error(error, {autoClose: 1000});
};
export const getInfo = text => {
  toast.info(text, {autoClose: 1000});
};

export const getWarn = text => {
  toast.warning(text, {autoClose: 1000});
};

export const getSuccess = text => {
  toast.success(text, {autoClose: 1000});
};
