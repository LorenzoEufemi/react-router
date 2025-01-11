import { NavLink } from "react-router-dom";

function AppHeader() {
    const list = [
        {
            path: "/",
            title: "Home"
        },
        {
            path: "/post",
            title: "Post"
        },
        {
            path: "/about",
            title: "About"
        },
    ]
    return (
        <ul className="nav nav-tabs justify-content-center">
            {list.map((curLink) => (
                <li className="nav-item" key={curLink.title}>
                    <NavLink
                        className="nav-link"
                        aria-current="page"
                        to={curLink.path}
                    >
                        {curLink.title}
                    </NavLink>
                </li>))}
        </ul>
    )
}
export default AppHeader;