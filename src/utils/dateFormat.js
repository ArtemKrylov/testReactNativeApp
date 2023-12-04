import moment from "moment";

export const dateFormat = date => {
  if (!date || date == "") return null;
  // const d = new Date(date).toLocaleDateString().replaceAll(/\./g, "-").split("-").reverse().join("-");
  return moment(date).format("DD.MM.YYYY");
};
