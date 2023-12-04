import React from "react";

import infinity from "./spin.gif";
const Spinner = () => {
  return (
    //     <tr>
    //     <td colSpan="5">
    //         <img alt ="" src={infinity} style={{ margin: '0 auto', width:'100px', height:'auto',  display:'block'}} />
    //     </td>
    //   </tr>
    <img
      alt=""
      src={infinity}
      style={{width: "10em", height: "auto", position: "absolute", top: "35%", left: "calc(50% - 100px)"}}
      draggable="false"
    />
  );
};

export default Spinner;
