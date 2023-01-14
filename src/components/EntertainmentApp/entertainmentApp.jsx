import React from "react";
import Details from "../Project Details/details";
const EntertainmentApp = (props) => {
  return (
    <div>
      <Details
        image={"/images/homepage/movie.png"}
        title={"Entertainment App"}
        tools={"Interaction Design/ Frontend Development/ TMDB/Rest API"}
        technologies={"HTML/CSS/JAVASCRIPT/REACT JS"}
        description={` This is a multipage webapp that contains details about various movies.
          It required me to fetch data from an external API. As a matter of fact
          it is completely powered by an external API including the Images, the
          movie titles and so on and so forth. I built this app with React Js
          and the TMDB API. I really learnt a lot from this project particularly
          rendering of external data on a page .I made sure the app was fully
          responsive and i used modern CSS tools like Grid and Flexbox for
          layout.`}
        background={` The major reason i built this project was to improve my knowledge in
          fetching and rendering data from an external API and also improve my
          familiarity with React Js.`}
        prevId={"Designo"}
        nextId={"Devjobs"}
        prev={"Designo"}
        next={"Devjobs"}
        website={"https://semzy-movieapp.web.app/"}
        codelink={"https://github.com/SemzyTheMan/semzy-movieApp"}
      ></Details>
    </div>
  );
};

export default EntertainmentApp;
