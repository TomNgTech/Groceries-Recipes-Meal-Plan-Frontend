import { Outlet } from "react-router-dom";
import Title from "./shared/Title";
import MainNavigation from "./Navbar";

function RootLayout() {
  return (
    <>
      <Title title="Meal Plan Assistant" />
      <MainNavigation />
      <Outlet />
    </>
  );
}

export default RootLayout;
