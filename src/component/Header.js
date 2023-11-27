
import {LOGO_IMAGE} from "../utils/constants";

const Header = () => {
    return (
      <div className="header">
        <div className="logo-container">
          <img
            className="logo"
            src={LOGO_IMAGE}
          />
        </div>
        <div className="nav-item">
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Contact Us</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;