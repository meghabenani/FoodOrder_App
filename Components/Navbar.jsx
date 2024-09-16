import { app_logo } from "../Mockdata/img_links";
import { Link } from "react-router-dom";

let Navbar = () => {
  return (
    <div className="navbar">
      <img className="app_logo" src={app_logo} />
      <h1>Megha's Food App</h1>
      <ul className="nav-items">
        <Link to={"/home"}>Home</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/contact"}>Contact</Link>
        <Link>Cart</Link>
      </ul>
    </div>
  );
};

export default Navbar;
