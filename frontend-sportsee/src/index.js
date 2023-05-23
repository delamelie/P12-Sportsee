import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
//import Layout from "./components/Layout";
import Home from "./pages/Home";
import { GlobalStyle } from "./utils/GlobalStyle";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<Home />} />
      <Route path="profile" />
      <Route path="settings" />
      <Route path="community" />
      <Route path="*" />
      <Route path="404" />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <GlobalStyle />
  </React.StrictMode>
);
