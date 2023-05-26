import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
//import Layout from "./components/Layout";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import { GlobalStyle } from "./utils/GlobalStyle";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="user/:userId" element={<Dashboard />} />
      {/* <Route path="user/12" element={<Dashboard />} />
      <Route path="user/18" element={<Dashboard />} /> */}
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
