import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import Right from "../components/Right";
import History from "../routes/history";
import HomeIndex from "../components/home/HomeIndex";
const Home = () => {
  return (
    <>
      <History></History>
      <Right>
        <HomeIndex></HomeIndex>
      </Right>
    </>
  );
};

export default Home;
