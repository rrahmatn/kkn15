import { React, useState } from "react";
import BottomBar from "../component/bottom-bar/bottom-bar";
import Navbar from "../component/navbar/navbar";
import "./router.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Dashboard from "../page/dashboard/dashboard";
import Agenda from "../page/agenda/agenda";
import Profile from "../page/profile/profile";
import DetailProfile from "../page/detailprofile/detailprofile";
import DetailAgenda from "../page/detailagenda/detailagenda";

const Rout = () => {
  const [cariNim, setCariNim] = useState("1207050111");
  const [hari, setHari] = useState("h-1");

  return (
    <>
      <BrowserRouter>
        <div className="content">
          <Switch>
            <Route path="/" exact>
              <Navbar />
              <Dashboard />
              <BottomBar />
            </Route>
            <Route path="/agenda">
              <Navbar />
              <Agenda hari={hari} setHari={setHari} />
              <BottomBar />
            </Route>
            <Route path="/profile">
              <Navbar />
              <Profile cariNim={cariNim} setCariNim={setCariNim} />
              <BottomBar />
            </Route>
            <Route path="/detailprofile">
              <DetailProfile cariNim={cariNim} />
              <BottomBar />
            </Route>
            <Route path="/detailagenda">
              <DetailAgenda hari={hari} />
              <BottomBar />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </>
  );
};
export default Rout;
