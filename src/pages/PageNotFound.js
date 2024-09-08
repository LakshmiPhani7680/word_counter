import React from "react";
import NotFound from "../assets/NotFound.png";
import { Link } from "react-router-dom";
export function PageNotFound() {
  return (
    <div className="page-not-found-container">
      <div id="pageNotFound">
        <img src={NotFound} alt="Page Not Found" />
      </div>
      <div className="go-back">
        <Link to="/">
          <button className="homePage-btn">Go back to home Page</button>
        </Link>
      </div>
    </div>
  );
}
