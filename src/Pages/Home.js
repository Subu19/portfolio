import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import Left from "../components/Left";
import Right from "../components/Right";
import History from "../routes/history";

const Home = () => {
  return (
    <>
      <History></History>
      <Right></Right>
    </>
  );
};

export default Home;
