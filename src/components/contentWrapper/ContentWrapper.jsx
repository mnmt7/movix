import React from "react";
import "./style.css";

const ContentWrapper = ({ children }) => {
  return <div className="content-wrapper">{children}</div>;
};

export default ContentWrapper;

// import React from 'react'

// const ContentWrapper = () => {
//   console.log("content wrapper")
//   return (
//     <div>ContentWrapper</div>
//   )
// }

// export default ContentWrapper