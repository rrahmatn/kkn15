import React from "react";
import "./profile.css";
import { Link } from "react-router-dom";
import { BiChevronRight } from "react-icons/bi";
import getUsers from "../../harta/json/profile.json"

const Profile = (props) => {
  // console.log(props.cariNim)

  return (
    <>
      <div className="bungkusProfile">
      {getUsers.map((user, index) => {
          return (
            <Link
          to='/detailprofile'
          className="linkDetailProfile"
          key={index}
          onClick={() => {
            props.setCariNim(user.nim);
          }}
        >
          <img src={`profile/${user.img}`} alt="profile" />
          <div className="tumbnailNamaProfile">
            <h4>{user.name}</h4>
            <p>{user.bidang}</p>
          </div>
          <BiChevronRight className="inilinkDetail" />
        </Link>
          );
        })}
        
      </div>
    </>
  );
};

export default Profile;
