import React from "react";
import Details from "../Project Details/details";
function Audiophile() {
  return (
    <div>
      <Details
        image={"/images/homepage/audio.jpg"}
        title={"Audiophile"}
        tools={"Interaction Design/ Frontend Development/ Next Js"}
        technologies={"HTML/CSS/JAVASCRIPT/NEXT JS"}
        description={`This is a multipage project that required me to build a fully reponsive website using Next JS. I built this app to improve my knowlege of Next Js. I made sure the app was fully responsive and i used modern CSS tools like Grid and Flexbox for layout.`}
        background={` This project was a frontend challenge from Frontend mentor. It is a platform that
        enables developers to improve their skills by developing real world projects. I specifically built
        this project to improve my skills in Next JS, Redux and Local Storage.`}
        prevId={"spaceApp"}
        nextId={"designo"}
        prev={"Space App"}
        next={"Designo"}
        website={"https://semzy-audiophile.vercel.app/"}
        codelink={"https://github.com/SemzyTheMan/semzy-audiophile"}
      ></Details>
    </div>
  );
}

export default Audiophile;
