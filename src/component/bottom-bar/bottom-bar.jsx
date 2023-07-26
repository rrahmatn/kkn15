import React from "react";
import "./bottom-bar.css";
import { AiOutlineHome, AiTwotoneCalendar } from "react-icons/ai";
import { Link , useLocation} from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import { useState , useEffect} from "react";
const BottomBar = () => {
  const [activeBot, setActivebot] = useState("home");

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      setActivebot("home");
    }
    if (location.pathname === "/agenda" || location.pathname === "/detailagenda") {
      setActivebot("agenda");
    }
    if (location.pathname === "/profile" || location.pathname === "/detailprofile" ) {
      setActivebot("profile");
    }
  }, []);
  return (
    <div className="bungkus-bottom-bar">
      <Link className="bottom-bar-icon" to="/" id={activeBot === "home" ? "activeBot" : ""}
        onClick={() => {
          setActivebot("home");
        }}>
        <AiOutlineHome />
      </Link>
      <Link className="bottom-bar-icon" to="/agenda" id={activeBot === "agenda" ? "activeBot" : ""}
        onClick={() => {
          setActivebot("agenda");
        }}>
        <AiTwotoneCalendar />
      </Link>
      <Link to="/profile" className="bottom-bar-icon" id={activeBot === "profile" ? "activeBot" : ""}
        onClick={() => {
          setActivebot("profile");
        }}>
        <FaRegUser />
      </Link>
    </div>
  );
};
export default BottomBar;
