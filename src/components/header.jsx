import "../index.css";
import logo from "../images/Studio Design.gif";
import { Link } from "react-router-dom";

export default function Header() {

  
  return (
    <header>
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <div className="navbar">
        <Link to={"./about"}><button>About Us</button></Link>
        <Link to={"./contact"}><button>Contacts</button></Link>
      </div>
    </header>
  );
}
