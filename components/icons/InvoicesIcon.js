import * as React from "react";

function InvoicesIcon({ fill = "#6C7281", ...rest }) {
  return (

    <svg
      width={24}
      height={24}
      fill="#6C7281"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 576 512">
      <path d="M64 64C28.7 64 0 92.7 0 128V384c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64H64zm64 320H64V320c35.3 0 64 28.7 64 64zM64 192V128h64c0 35.3-28.7 64-64 64zM448 384c0-35.3 28.7-64 64-64v64H448zm64-192c-35.3 0-64-28.7-64-64h64v64zM288 352c-53 0-96-43-96-96s43-96 96-96s96 43 96 96s-43 96-96 96z" /></svg>

  );
}



export default InvoicesIcon;