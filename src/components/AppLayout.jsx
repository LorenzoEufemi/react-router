import AppHeader from "./AppHeader";

import { Outlet } from "react-router-dom";

function AppLayout() {
    return(
    <>
    <AppHeader/>
    <Outlet />
    <footer className="txt">footer</footer>
    </>
    )
}
export default AppLayout;