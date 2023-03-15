import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiChevronDown, FiMenu, FiX } from "react-icons/fi";
import "./header.scss";
import Banner from "../../home/banner";

const Header = () => {
  const [profile, setProfile] = useState(false);

  const [language, setLanguage] = useState(false);

  const [active, setActive] = useState(false);

  const { pathname } = useLocation();

  const [mobile, setMobile] = useState(false);

  const [clicks, setClicks] = useState(false);

  const handleClicks = () => setClicks(!clicks);

  const unhandleClicks = () => setClicks(false);

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", isActive);
    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);

  return (
    <div className="header">
      <div
        className={
          active || pathname !== "/" ? "container active" : "container"
        }
      >
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
            <span to="/"></span>
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
        <div className="mobile_icon">
          <div className="m_lang">
            <img
              src="./assets/language.png"
              alt=""
              onClick={() => setLanguage(!language)}
            />
            {language && (
              <div className="m_lang_option">
                <Link to="/">English</Link>
                <Link to="/">Spanish</Link>
                <Link to="/">Deutch</Link>
                <Link to="/">French</Link>
              </div>
            )}
          </div>
          <div className="m_user" onClick={() => setProfile(!profile)}>
            <img
              src="https://avatars.githubusercontent.com/u/46303140?v=4"
              alt=""
            />

            {profile && (
              <div className="m_profile_drop">
                <Link to="/">Dashboard</Link>
                <Link to="/">Profile</Link>
                <Link to="/">History</Link>
                <Link to="/">Chat</Link>
                <Link to="/">Logout</Link>
              </div>
            )}
          </div>
          <i onClick={() => setMobile(!mobile)}>
            {clicks ? (
              <FiX onClick={unhandleClicks} style={{ color: "red" }} />
            ) : (
              <FiMenu onClick={handleClicks} />
            )}
          </i>
          {mobile && (
            <nav
              className={
                active || pathname !== "/" ? "mobile_nav active" : "mobile_nav"
              }
            >
              <Link to="/">Discover</Link>
              <Link to="/">Destination</Link>
              <Link to="/">Saved</Link>
              <Link to="/">About Us</Link>
              <Link to="/">Contact Us</Link>
            </nav>
          )}
        </div>
      </div>
      <Banner />
    </div>
  );
};

export default Header;
