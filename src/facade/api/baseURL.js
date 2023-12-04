import {MODE} from "../../utils/gitIgnore/appMode";

// import {MODE} from "../gitIgnore/appMode";
const baseUrls = {
  DEV: "https://api.ba3a-sample.technogroup.in.ua",
  TEST: "https://api.ba3a-test.technogroup.in.ua",
  PROD: "https://api.ba3a.technogroup.in.ua",
  old: "https://api.osvitabezmezh.com.ua",
};

export const apiUrl = baseUrls[MODE];
