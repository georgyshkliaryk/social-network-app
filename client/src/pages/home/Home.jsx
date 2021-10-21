import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import "./Home.scss";
import { AuthContext } from "../../context/AuthContext";
import { useContext, useEffect, useState } from "react";

const Home = () => {
  const { user: currentUser, dispatch } = useContext(AuthContext);
  return (
    <> 
      <Topbar />
      <div className="home__container">
        <Sidebar user={currentUser}/>
        <Feed />
        <Rightbar />
      </div>
    </>
  );
};

export default Home;
