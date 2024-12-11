import { useState } from "react";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constant";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const OnlineStatus = useOnlineStatus();
  return (
    <div className=" header" id="navbars">
      <div id="image">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items" id="nav-links">
        <ul>
          <li>OnlineStatus:{OnlineStatus ? "🟢" : "🔴"}</li>
          <li>
            <Link to="/Home">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          {/* <li>
            <Link to="/cart">Cart</Link>
          </li> */}
          <button
            className="btn-React"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
