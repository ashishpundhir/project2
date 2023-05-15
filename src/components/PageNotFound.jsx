import React from "react";
import Background from "./Background";

const PageNotFound = () => {
  return (
    <div>
      <Background />
      <div className="pageNotFound">
        <div>Page Not Found</div>
        <br />
        <a href="/">Click to Go to Home Page</a>
      </div>
    </div>
  );
};

export default PageNotFound;
