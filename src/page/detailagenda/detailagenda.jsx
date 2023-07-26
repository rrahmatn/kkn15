import React, { useEffect } from "react";
import "./detailagenda.css";
import { Link } from "react-router-dom";
import { FaAngleLeft } from "react-icons/fa";
import getHari from "../../harta/json/agenda.json";

const DetailAgenda = (props) => {
  useEffect(() => {
    const jsonString = JSON.stringify(getHari);

    localStorage.setItem("hari", JSON.stringify(jsonString));
  }, []);

  const hariYangDicari = props.hari;
  const cariObjekBerdasarkanNIM = (hariYangDicari) => {
    return getHari.find((item) => item.hari === hariYangDicari);
  };
  const hari = cariObjekBerdasarkanNIM(hariYangDicari);

  const gambar = hari.img ;
  return (
    <>
      <div className="navDetailAgenda">
        <Link to="/agenda" className="backDetail">
          <FaAngleLeft />
        </Link>
      </div>
      <div className="bungkusDetailAgenda">
        <div className="headerAgenda">
          <h2>{hari.judul}</h2>
        </div>
        <hr />
        <hr />
        <div className="imgDetailAgenda">
          <img src={`agenda/${gambar}`} className="image-agenda" alt="foto agenda" />
        </div>
        <div className="kontenAgenda">
          <p>{hari.konten.p1}</p>
          <br />
          <p>{hari.konten.p2}</p>
          <br />
          <p>{hari.konten.p3}</p>
          <br />
          <p>{hari.konten.p4}</p>
          <br />
          <p>{hari.konten.p5}</p>
          <br />
          <p>{hari.konten.p6}</p>
          <br />
          <p>{hari.konten.p7}</p>
          <br />
          <p>{hari.konten.p8}</p>
          <br />
          <p>{hari.konten.p9}</p>
          <br />
          <p>{hari.konten.p10}</p>
        </div>
      </div>
    </>
  );
};

export default DetailAgenda;
