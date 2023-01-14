import React from "react";
import { useEffect } from "react";
import Project from "../../components/Projects/projects";

const Portfolio = (props) => {
   useEffect(() => {
     window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
   }, []);
  return (

    <div>
      <Project
        title={"Audiophile E-commerce App"}
        description={`This is a multipage project that required me to build a fully reponsive website using Next JS.
        I built this app to improve my knowlege of Next Js. I made sure the app was fully responsive
          and i used modern CSS tools like Grid and Flexbox for layout.`}
        image={"/images/homepage/audio.jpg"}
        id={"audiophile"}
      ></Project>
      <Project
        title={"Designo"}
        description={` Designo is a multipage webapp that serves as a portfolio for a design
          company. Showcasing their works, services and different locations. I
          built this app with React Js. I made sure the app was fully responsive
          and i used modern CSS tools like Grid and Flexbox for layout.`}
        image={"/images/homepage/Designo.jpg"}
        id={"designo"}
      ></Project>
      <Project
        title={"Entertainment App"}
        reverse={true}
        description={` This is a multipage webapp that contains details about various movies.
        It required me to fetch data from an external API. As a matter of fact
        it is completely powered by an external API including the Images, the movie titles and
        so on. I built this app with React Js and the TMDB API. I really learnt a lot
        from this project particularly rendering of external data on a page .I made sure the app was fully responsive
          and i used modern CSS tools like Grid and Flexbox for layout.`}
        image={"/images/homepage/movie.png"}
        id={"entertainmentApp"}
      ></Project>
      <Project
        title={"Devjobs"}
        reverse={false}
        description={` This is a multipage webapp that displays job vacancies for developers and
        details about the jobs including the requirements, the role responsibilities and so on. The app required me
        to fetch data from a local JSON file. I built this app with React Js and i made sure the app was fully responsive.
         I used modern CSS tools like Grid and Flexbox for layout.`}
        image={"/images/homepage/job-filter.png"}
        id={"devjobs"}
      ></Project>
      <Project
        title={"Space App"}
        reverse={true}
        description={`This is a multipage webapp that contains information about different places in space. I bulit this app
        with HTML, CSS and Vanilla Javascript. I made sure the app is fully responsive, `}
        image={"/images/homepage/space.jpg"}
        id={"spaceApp"}
      ></Project>
    </div>
  );
};
export default Portfolio;
