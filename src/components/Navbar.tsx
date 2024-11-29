import mainNavItems from "../navigation/mainNavItems";
import { NavLink } from "react-router-dom";
export const Navbar = () => {
  return (
    <nav className="pt-10 pb-10 px-6">
        <ul className="flex place-content-around">
        {
            mainNavItems.map(({id, name, link})=><li key={id}><NavLink className="bg-teal-900 text-white font-semibold p-2  border-emerald-800 border-2 rounded hover:bg-white hover:text-teal-800 active:border-b-4" to={ link }>{name}</NavLink></li>)
        }
        </ul>
    </nav>
  )
}
