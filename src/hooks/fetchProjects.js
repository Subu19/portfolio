import axios from "axios";
import { useEffect, useState } from "react";

export const useFetchProject = () => {
  const [loadingProject, setLoadingProjects] = useState(true);
  const [projects, setProjects] = useState([]);
  const getData = () => {
    axios
      .get("http://192.168.0.114:1337/api/projects?populate=*")
      .then((res) => {
        setProjects(res.data.data);
        setLoadingProjects(false);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getData();
  }, []);

  return { loadingProject, projects };
};
