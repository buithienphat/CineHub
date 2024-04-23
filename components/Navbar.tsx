"use client";

import { Search } from "@mui/icons-material";
import Link from "next/link";
import { LegacyRef, useEffect, useRef, useState } from "react";

type Props = {};

function Navbar({}: Props) {
  const [search, setSearch] = useState<string>("");
  const [dropdownMenu, setDropdownMenu] = useState<boolean>(false);
  const [changeBgColor, setChangeBgColor] = useState(false);

  const handleScorll = () => {
    if (window.scrollY > 100) {
      setChangeBgColor(true);
    } else {
      setChangeBgColor(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScorll);

    return () => {
      window.removeEventListener("scroll", handleScorll);
    };
  }, []);

  return (
    <div
      className={`navbar ${
        changeBgColor ? "bg-black-1 shadow-2xl" : "bg-transparent"
      } duration-500 transition-[background]`}
    >
      <Link href={"/"}>
        <img src="/assets/logo.png" alt="Movie Logo" className="logo" />
      </Link>
      <div className="nav-links">
        <Link href={"/"} className="nav-link">
          Home
        </Link>
        <Link href={"/my-list"} className="nav-link">
          My list
        </Link>
      </div>

      <div className="nav-right">
        <div className="search">
          <input
            value={search}
            type="text"
            placeholder="Search Movie..."
            className="input-search"
            onChange={(e) => setSearch(e?.target?.value)}
          />
          <Search className="icon" />
        </div>
        <img
          onClick={() => {
            setDropdownMenu(!dropdownMenu);
          }}
          src="/assets/profile_icon.jpg "
          className="profile"
        />
        {dropdownMenu && (
          <div className="dropdown-menu">
            <Link href={"/"}>Home</Link>
            <Link href={"/my-list"}>My list</Link>
            <a href="Log Out">Log out</a>
          </div>
        )}
      </div>
    </div>
  );
}
export default Navbar;
