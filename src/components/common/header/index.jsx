import { useState } from "react";
import { Link } from "react-router-dom";
import { FiChevronDown } from "react-icons/fi";
import "./header.scss";

const Header = () => {
  const [profile, setProfile] = useState(false);

  const [language, setLanguage] = useState(false);

  return (
    <div className="header">
      <div className="container">
        <Link to="/" className="logo">
          Travel<i>Fy</i>
        </Link>
        <nav className="navbar">
          <Link to="/">Discover</Link>
          <Link to="/">Destination</Link>
          <Link to="/">Saved</Link>
          <Link to="/">About Us</Link>
          <Link to="/">Contact Us</Link>
        </nav>
        <div className="nav_right">
          <div className="lang" onClick={() => setLanguage(!language)}>
            <span to="/">Language</span>
            <img src="./assets/language.png" alt="" />
            <i>
              <FiChevronDown />
            </i>
            {language && (
              <div className="lang_option">
                <Link to="/">English</Link>
                <Link to="/">Spanish</Link>
                <Link to="/">Deutch</Link>
                <Link to="/">French</Link>
              </div>
            )}
          </div>
          <div className="user" onClick={() => setProfile(!profile)}>
            <img
              src="https://avatars.githubusercontent.com/u/46303140?v=4"
              alt=""
            />
            <span>Tope Daniel</span>
            {profile && (
              <div className="profile_drop">
                <Link to="/">Dashboard</Link>
                <Link to="/">Profile</Link>
                <Link to="/">History</Link>
                <Link to="/">Chat</Link>
                <Link to="/">Logout</Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;