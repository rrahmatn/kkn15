import React, { useEffect } from "react";
import "./detailprofile.css";
// import defaultprofile from "../../harta/img/defaultprof.png";
import { Link} from "react-router-dom";
import { FaAngleLeft } from "react-icons/fa";
import getUser from "../../harta/json/profile.json";

const DetailProfile = (props) => {

  // const [item , setItem] = useState("");

  useEffect(() => {
    const jsonString = JSON.stringify(getUser);

    localStorage.setItem("nim", JSON.stringify(jsonString));
  }, []);


  const nimYangDicari = props.cariNim;
  const cariObjekBerdasarkanNIM = (nimYangDicari) => {
    return getUser.find(item => item.nim === nimYangDicari);
  };
  const user = cariObjekBerdasarkanNIM(nimYangDicari);
  console.log(user);

  const gambar = user.img;

  return (
    <>
      <div className="bungkusDetailProfile">
        <div className="navDetailProfile">
          <Link to="/profile" className="backDetail">
            <FaAngleLeft />
          </Link>
        </div>
        <div className="tumbDetailProfile">
          <img src={`profile/${gambar}`}alt="Foto" />
          <div className="namaJabatan">
            <h3>{user.name}</h3>
            <p>{user.jurusan}</p>
          </div>
        </div>
        <div className="isiDetailProfile">
          <table>
            <tbody>
            <tr>
                <td>NIM</td>
                <td>:</td>
                <td>{user.nim}</td>
              </tr>
            <tr>
                <td>Fakultas</td>
                <td>:</td>
                <td> {user.fakultas}</td>
              </tr>
              <tr>
                <td>Bidang</td>
                <td>:</td>
                <td> {user.bidang}</td>
              </tr>
              {/* <tr>
                <td>Email</td>
                <td>:</td>
                <td> {user.email}</td>
              </tr> */}
              <tr>
                <td>Instagram</td>
                <td>:</td>
                <td> <a  className="namaig" href={`https://www.instagram.com/${user.instagram}/`}>{user.instagram}</a></td>
              </tr>      
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default DetailProfile;
