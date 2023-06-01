import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

/**
 * Render layout to wrap page content
 * @returns { JSX }
 */

export default function Layout() {
  return (
    <div className="layout">
      <Header />
      <Sidebar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
