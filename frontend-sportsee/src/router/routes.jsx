import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
// import DashboardContainer from "../pages/DashboardContainer";
import NotFound from "../pages/NotFound";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="user/:id" element={<Dashboard />} />
      {/* <Route path="user/:id" element={<DashboardContainer />} /> */}
      <Route path="*" element={<NotFound />} />
      <Route path="404" element={<NotFound />} />
    </Route>
  )
);
