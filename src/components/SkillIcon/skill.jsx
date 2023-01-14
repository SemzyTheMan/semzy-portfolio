import React from "react";
import "./skill.scss";
const Skill = (props) => {
  return (
    <div className="skill">
      <img className="skill_img" src={props.image} alt="" />
      <p className="skill_p">{ props.skill}</p>
    </div>
  );
};
export default Skill;
