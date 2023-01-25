import { Outlet } from "react-router-dom";

import MainNavigation from "./Navbar";

function RootLayout() {
  return (
    <>
      <MainNavigation />
      <Outlet />
    </>
  );
}

export default RootLayout;
