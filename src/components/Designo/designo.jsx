import React from "react";
import EntertainmentApp from "../EntertainmentApp/entertainmentApp";
import Details from "../Project Details/details";
const Designo = (props) => {
  return (
    <div>
      <Details
        image={"/images/homepage/Designo.jpg"}
        title={"Designo"}
        tools={"Interaction Design/ Frontend Development/ React Router"}
        technologies={"HTML/CSS/JAVASCRIPT/REACT JS"}
        description={`Designo is a multipage webapp that serves as a portfolio for a design company. 
        Showcasing their works, Services and different locations. I built this app with React Js, React Router and
         a lot of state management was also required. I made sure the app was fully responsive and
          i used modern CSS tools like Grid and Flexbox for layout.`}
        background={` This project was a frontend challenge from Frontend mentor. It is a platform that
        enables developers to improve their skills by developing real world projects. I specifically built
        this project to improve my skills in creating multipage websites using React Router.`}
        prevId={"audiophile"}
        nextId={"entertainmentApp"}
        prev={"Space App"}
        next={"Entertainment App"}
        website={"https://semzy-designo.web.app/"}
        codelink={"https://github.com/SemzyTheMan/Designo"}
      ></Details>
    </div>
  );
};

export default Designo;
