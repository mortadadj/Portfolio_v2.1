// src/components/ProjectsList.jsx
import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig";

const ProjectsList = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const getProjects = async () => {
      const querySnapshot = await getDocs(collection(db, "projects"));
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProjects(data);
    };

    getProjects();
  }, []);

  return (
    <div>
      <h1>Liste des Projets</h1>
      {projects.map((project) => (
        <div key={project.id} style={{ border: "1px solid black", margin: "10px", padding: "10px" }}>
          <h2>{project.projectTitle}</h2>
          <p>{project.subTitel}</p>
          <img src={project.Url_img} alt={project.projectTitle} style={{ width: "100px" }} />
          <p>{project.resume}</p>
          <a href={project.Url_git} target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href={project.Url_drive} target="_blank" rel="noopener noreferrer">Drive</a>
        </div>
      ))}
    </div>
  );
};

export default ProjectsList;
