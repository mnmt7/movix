import React, { useState, useEffect } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { SlMenu } from "react-icons/sl";
import { VscChromeClose } from "react-icons/vsc";
import { useNavigate, useLocation } from "react-router-dom";

import "./style.css";

import logo from "../../assets/movix-logo.svg";
import Img from "../lazyLoadImage/Img";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 600);
  const [search, setSearch] = useState("");
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [showHeader, setShowHeader] = useState(true);

  const navigate = useNavigate();
  const location = useLocation();

  const navigationHelper = (type) => {
    navigate(`/explore/${type}`);
    setShowMenu(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        if (window.scrollY > scrollY) {
          setShowHeader(false);
        } else {
          setShowHeader(true);
        }
        setScrollY(window.scrollY);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollY]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <header className={"header" + (showHeader ? "" : " swipe-and-hide")}>
      <div className={"header-container" + (showMenu ? " dark-bg-color" : "")}>
        <div onClick={() => navigate("/")} className="pointer">
          <Img src={logo} />
        </div>

        <div className="header-btns">
          <ul className={"header-menu" + (showMenu ? "" : " hide")}>
            <li
              className="header-menu-item"
              onClick={() => navigationHelper("movie")}
            >
              Movies
            </li>
            <li
              className="header-menu-item"
              onClick={() => navigationHelper("tv")}
            >
              TV Shows
            </li>
          </ul>
          <div>
            <HiOutlineSearch
              onClick={() => {
                setShowSearchBar(!showSearchBar);
                setShowMenu(false);
              }}
              className="pointer"
            />
          </div>
          <div className="header-menu-btn">
            {showMenu ? (
              <VscChromeClose
                onClick={() => setShowMenu(!showMenu)}
                className="pointer"
              />
            ) : (
              <SlMenu
                onClick={() => {
                  setShowMenu(!showMenu);
                  setShowSearchBar(false);
                }}
                className="pointer"
              />
            )}
          </div>

          {showSearchBar && (
            <div className="search">
              <input
                className="search-bar"
                type="text"
                placeholder="Search for a movie or tv show..."
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                // onKeyUp={handleEnterSearch}
              />
              <VscChromeClose
                className="closeIcon pointer"
                onClick={() => {
                  setShowSearchBar(!showSearchBar);
                  setShowMenu(false);
                }}
                color="black"
              />
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
