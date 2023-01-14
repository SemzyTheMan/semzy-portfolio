import React from "react";
import { useNavigate } from "react-router";
import "./projects.scss";

const Project = (props) => {
  const navigate = useNavigate();
  return (
    <div className={`Project ${props.reverse ? "reverse" : ""}`}>
      <img className="Project_img" src={props.image} alt="img" />
      <div className="Project_desc">
        <h1>{props.title}</h1>
        <p>{props.description}</p>
        <button onClick={() => navigate(`/portfolio/${props.id}`)}>
          VIEW PROJECT
        </button>
      </div>
    </div>
  );
};
export default Project;
