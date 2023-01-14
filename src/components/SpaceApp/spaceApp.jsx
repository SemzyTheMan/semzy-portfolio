import React from "react";
import Details from "../Project Details/details";
const SpaceApp = (props) => {
  return (
    <div>
      <Details
        image={"/images/homepage/space.jpg"}
        title={"Space App"}
        tools={"Interaction Design/ Frontend Development/CSS/VANILLA JS"}
        technologies={"HTML/CSS/JAVASCRIPT"}
        description={`This is a multipage webapp that contains information about different places in space. I bulit this app with HTML, CSS and Vanilla Javascript. 
          I made sure the app is fully responsive.`}
        background={` This project was a frontend challenge from Frontend mentor. It is a platform that
        enables developers to improve their skills by developing real world projects. I specifically built
        this project to improve my skills in Vanilla Js.`}
        prevId={"Devjobs"}
        nextId={"Designo"}
        prev={"Devjobs"}
        next={"Designo"}
        website={"https://semzy-spaceapp.netlify.app/"}
        codelink={"https://github.com/SemzyTheMan/semzy-spaceapp"}
      ></Details>
    </div>
  );
};

export default SpaceApp;
