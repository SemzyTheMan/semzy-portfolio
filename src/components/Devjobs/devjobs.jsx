import React from "react";
import Details from "../Project Details/details";
const Devjobs = (props) => {
  return (
    <div>
      <Details
        image={"/images/homepage/job-filter.png"}
        title={"Devjobs"}
        tools={"Interaction Design/ Frontend Development/ Reusable Components"}
        technologies={"HTML/CSS/JAVASCRIPT/REACT JS"}
        description={`This is a multipage webapp that displays job vacancies for developers and details
         about the jobs including the requirements, the role responsibilities and so on. The app required
         me to fetch data from a local JSON file. I built this app with React Js and i made sure the app was
          fully responsive. I used modern CSS tools like Grid and Flexbox for layout.`}
        background={` This project was a frontend challenge from Frontend mentor. It is a platform that
        enables developers to improve their skills by developing real world projects. I specifically built
        this project to improve my skills in Reusable components using React.`}
        nextId={"spaceApp"}
        prevId={"entertainmentApp"}
        next={"Space App"}
        prev={"Entertainment App"}
        website={"https://semzy-dev-jobs.web.app/"}
        codelink={"https://github.com/SemzyTheMan/semzy-job-app"}
      ></Details>
    </div>
  );
};

export default Devjobs;
