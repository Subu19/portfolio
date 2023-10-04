import axios from "axios";
import { useEffect, useState } from "react";

export const useFetchProjects = () => {
  const [loadingProject, setLoadingProjects] = useState(true);
  const [projects, setProjects] = useState([]);
  const getData = () => {
    axios
      .get(
        "http://localhost:1337/api/projects?populate=CoverImage&populate=MainImage"
      )
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
export const useFetchProject = (id) => {
  const [loadingProject, setLoadingProject] = useState(true);
  const [project, setProject] = useState([]);
  const getData = () => {
    axios
      .get(`http://localhost:1337/api/projects/${id}?populate=*`)
      .then((res) => {
        setProject(res.data.data);
        setLoadingProject(false);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getData();
  }, []);

  return { loadingProject, project };
};
