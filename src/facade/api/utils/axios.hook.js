import {toast} from "react-toastify";

import {instance} from "../apiSetup";

import {checkEmptyFields} from "./checkEmptyFields";

export const fetchData = async (url, method, rawBody = null, headers = null, withoutError = false) => {
  const config = {
    headers,
  };

  const body = method.toUpperCase() === "POST" ? checkEmptyFields(rawBody) : rawBody;

  var response = await instance[method](url, body, config)
    .then(res => {
      toast.info(res.data.message, {autoClose: 1000});
      return res.data;
    })
    .catch(err => {
      if (!withoutError) toast.error(err.response.data.message);
      throw new Error(err.response.data.message);
      // return err;
    });
  return response;
};

export const fetchDataDemo = async (url, method) => {
  var response = await instance[method](url, {})
    .then(res => {
      toast.info(res.data.message, {autoClose: 1000});
      return res.data;
    })
    .catch(err => {
      toast.error(err.response.data.message);
      throw new Error(err.response.data.message);
    });
  return response;
};

export const fetchList = async (url, method = "get", body = null) => {
  var response = await instance[method](url, body)
    .then(res => {
      return res.data;
    })
    .catch(err => {
      throw new Error(err.response.data.message);
    });
  return response;
};

export const deleteReq = async (url, body = null, headers = null) => {
  var response = await instance
    .delete(url, {headers, data: body})
    .then(res => {
      toast.info(res.data.message, {autoClose: 1000});
      return res.data;
    })
    .catch(err => {
      toast.error(err.response.data.message);
      throw new Error(err.response.data.message);
    });
  return response;
};
