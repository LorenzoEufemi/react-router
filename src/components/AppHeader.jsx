import { NavLink } from "react-router-dom";

function AppHeader() {
const list = [
    {
        path:"/",
        title:"Home"
    },
    {
        path:"/post",
        title:"Post"
    },
    {
        path:"/about",
        title:"About"
    },
]
    return(
        <header>
            <ul className="list">
                {list.map((curItem) => (
                    <li key={curItem.title}>
                        <NavLink to={curItem.path}>{curItem.title}</NavLink>
                    </li>
                ))}
            </ul>
        </header>
    )
}
export default AppHeader;