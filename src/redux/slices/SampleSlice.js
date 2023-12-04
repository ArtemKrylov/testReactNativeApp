import {toast} from "react-toastify";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import Swal from "sweetalert2";

import {apiUrl} from "../../facade/api/baseURL";
import {fetchData} from "../../facade/api/utils/axios.hook";

import {getInfo} from "./UserSlice";

const initialState = {
  currentSample: null,
  current: null,
  mySamples: [],
  tableLoading: false,
};

export const getSample = createAsyncThunk("sample/getSample", async sampleId => {
  const responce = fetchData(`/samples/get/${sampleId}`, "get");
  return responce;
});

export const fetchByQR = createAsyncThunk("sample/fetchByQR", async url => {
  var croppedUrl = url.replace(apiUrl, "");
  return fetchData(croppedUrl, "get");
});

export const takeUnderReport = createAsyncThunk("sample/takeUnderReport", async ({sampleId, data}) => {
  return fetchData(`/samples/takeUnderReport/${sampleId}`, "patch", data);
});

export const takeKitUnderReport = createAsyncThunk("sample/takeKitUnderReport", async ({kitId, data}) => {
  return fetchData(`/kits/takeUnderReport/${kitId}`, "patch", data);
});

export const returnToStock = createAsyncThunk("sample/returnToStock", async sampleId => {
  return fetchData(`/samples/returnToStock/${sampleId}`, "patch");
});
export const returnKitToStock = createAsyncThunk("sample/returnKitToStock", async kitId => {
  return fetchData(`/kits/returnToStock/${kitId}`, "patch");
});
export const fetchMySamples = createAsyncThunk("sample/fetchMy", async params => {
  return fetchData(`/samples/getAll`, "get", {params});
});

const userSlice = createSlice({
  name: "sample",
  initialState,
  reducers: {
    deselectSample: state => {
      state.current = null;
    },
    setMyCurrentSample: (state, {payload}) => {
      // console.log(payload);
      // console.log("state.mySamples", state.mySamples);
    },
    setMyCurrentSampleObj: (state, {payload}) => {
      state.currentSample = payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getSample.fulfilled, (state, {payload}) => {
        state.currentSample = payload;
      })
      .addCase(fetchByQR.fulfilled, (state, {payload}) => {
        var type = Object.prototype.hasOwnProperty.call(payload, "sampleId") ? "sample" : "kit";
        state.current = {...payload, type};
      })
      .addCase(fetchMySamples.pending, (state, {payload}) => {
        state.tableLoading = true;
      })
      .addCase(fetchMySamples.fulfilled, (state, {payload}) => {
        state.mySamples = payload;
        state.tableLoading = false;
      })
      .addCase(fetchMySamples.rejected, (state, {payload}) => {
        state.tableLoading = false;
      })
      .addCase(takeUnderReport.fulfilled, (state, {payload}) => {
        state.current = null;

        getInfo(`Екземпляр ${payload.skuNumber} взято у п/з`);
      })
      .addCase(takeKitUnderReport.fulfilled, (state, {payload}) => {
        state.current = null;
        getInfo(`Kit ${payload.skuNumber} взято у п/з`);
      })
      //// return sample
      .addCase(returnToStock.pending, (state, {payload}) => {
        state.tableLoading = true;
      })
      .addCase(returnToStock.fulfilled, (state, {payload}) => {
        state.currentSample = null;
        state.mySamples = state.mySamples.filter(samp => samp.sampleId !== payload.sampleId);
        state.tableLoading = false;
        getInfo(`Екземпляр ${payload.skuNumber} повернуто у сток`);
      })
      .addCase(returnToStock.rejected, (state, {payload}) => {
        state.tableLoading = false;
      })
      ///return kit
      .addCase(returnKitToStock.pending, (state, {payload}) => {
        state.tableLoading = true;
      })
      .addCase(returnKitToStock.fulfilled, (state, {payload}) => {
        state.currentSample = null;
        state.tableLoading = false;
        getInfo(`kitSKU №${payload.skuNumber} повернуто у сток`);
      })
      .addCase(returnKitToStock.rejected, (state, {payload}) => {
        state.tableLoading = false;
      })
      .addDefaultCase(() => {});
  },
});

const {actions, reducer} = userSlice;

export const {deselectSample, setMyCurrentSample, setMyCurrentSampleObj} = actions;

export default reducer;

export const getCurrentQrCode = state => state.sample.current?.qrCodeUrl || null;
export const getCurrentEntity = state => state.sample.current;
export const getMyCurrentSample = state => state.sample.currentSample;
// export const getCurrentKit = state => state.sample.currentKit;
export const getMySamples = state => state.sample.mySamples;
export const getTableLoading = state => state.sample.tableLoading;
