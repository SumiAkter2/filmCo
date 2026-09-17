import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <h1 className="text-6xl">Layout</h1>
      <Outlet />
    </>
  );
}

export default Layout;
