import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

export const History = () => {
  const history = useHistory();
  const handleChange = async () => {
    console.log(history.location.pathname);
    console.log(location.pathname);
    window.removeEventListener("locationchange", handleChange);
    history.push(location.pathname);
    //   window.removeEventListener("locationchange", handleChange);
  };
  useEffect(() => {
    window.addEventListener("locationchange", handleChange);
    return () => {
      window.removeEventListener("locationchange", handleChange);
    };
  }, []);
  return <></>;
};
export default History;
