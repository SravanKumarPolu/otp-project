import React, { useState } from "react";

import "./App.css";
import Login from "./pages/Login";
import Layout from "./components/Layout";
import Authorised from "./pages/Authorised";
import Unauthorised from "./pages/Unauthorised";
import AfterMarket from "./pages/AfterMarket";
import Towling from "./pages/Towling";
import EVServiceCenter from "./pages/EVServiceCenter";

import {
  BrowserRouter,
  Routes,
  RouterProvider,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path="/" element={<Login />} />
      <Route path="/authorised" element={<Authorised />} />
      <Route path="/unauthorised" element={<Unauthorised />} />
      <Route path="/aftermarket" element={<AfterMarket />} />
      <Route path="/towling" element={<Towling />} />
      <Route path="/service" element={<EVServiceCenter />} />
    </Route>
  )
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
