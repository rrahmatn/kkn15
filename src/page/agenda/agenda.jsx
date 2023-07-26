import React from "react";
import "./agenda.css";
import { Link } from "react-router-dom";
import { BiChevronRight } from "react-icons/bi";
import getHari from "../../harta/json/agenda.json"

const Agenda = (props) => {
  return (
    <>
      <div className="bungkusAgenda">
        
        {getHari.map((hari, index) => {
          return (
            <Link
          className="linkDetailAgenda" to='/detailagenda'
          key={index}
          onClick={() => {
            props.setHari(hari.hari);
          }}
        >
          <div className="tumbnailNama">
            <h4>Day {hari.hari}</h4>
            <p>{hari.tanggal}</p>
          </div>
          <BiChevronRight className="linkAgenda" />
        </Link>
            
          );
        })}
        
      </div>
    </>
  );
};

export default Agenda;
