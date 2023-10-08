import React from "react";
import { Link, Outlet } from "react-router-dom";
export default function NotFound() {
  return (
    <>
      <div className="not-found-wrapper">
        <Outlet />

        <div className="not-found-class">
          <h1 class="not-found">
            Sorry , the page you were looking for was not found
          </h1>
          <Link to="/">Return to Home</Link>
        </div>
      </div>
    </>
  );
}
