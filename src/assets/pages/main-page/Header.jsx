import HeaderNav from "./HeaderNav";
import { Link } from "react-router-dom";
import SignUp from "../login pages/SignUp";
import ProfileEditing from "../ProfileEditing";

const Header = () => {
  return (
    <>
      <div className="header-banner">
        <h1 className="banner-title">Realworld Blog</h1>
        <h3 className="banner-subtitle">A place to share your knowledge</h3>
      </div>
    </>
  );
};

export default Header;
