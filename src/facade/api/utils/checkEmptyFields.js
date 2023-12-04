export function checkEmptyFields(originalObj) {
  if (originalObj instanceof FormData) return originalObj;
  if (originalObj)
    return Object.entries(originalObj).reduce((obj, [key, value]) => {
      if ((value || value === false) && value !== "") {
        obj[key] = value;
      }
      return obj;
    }, {});
  else return null;
}
