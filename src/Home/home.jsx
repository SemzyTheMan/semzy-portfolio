import React from "react";
import classes from "./home.module.css";
import Skill from "../components/SkillIcon/skill";
import { useNavigate } from "react-router";
const Home = (props) => {
  const navigate = useNavigate();
  return (
    <div className={classes.Container}>
      <div className={classes.Homepage}>
        <img
          className={classes.imgHome}
          src="/images/homepage/desktop/image-homepage-hero.jpg"
          alt="img"
        />
        <div className={classes.Headcontainer}>
          <h2 className={classes.Head}>
            Hey, i am Mustapha Semilore and i love building beautiful websites
          </h2>
          <a href="#desc" className={classes.AboutBtn}>
            <span>
              <img src="/images/icons/down-arrows.svg" alt="" />
            </span>{" "}
            ABOUT ME
          </a>
        </div>
      </div>

      <div className={classes.Section_about}>
        <img
          className={classes.Aboutimg}
          src="/images/homepage/Semzy.jpg"
          alt=""
        />
        <div id="desc" className={classes.Description}>
          <h1>About Me</h1>
          <p>
            I am a Frontend Developer looking for a new role in an exciting
            company. I build web apps using tools like HTML, CSS, Javascript
            and React Js. I mostly use React Js but i can adapt to whatever
            tools are required. I am based in Lagos, Nigeria but i am happy
            working remotely and have experience in remote teams. When i am not
            coding you find me reading , learning new stuff or playing amazing
            video games. I'd love you to check out my work.
          </p>
          <button onClick={() => navigate("/portfolio")}>
            GO TO PORTFOLIO
          </button>
        </div>
      </div>
      <div className={classes.Skills}>
        <h1>Skills/Languages</h1>
        <div className={classes.skill_main}>
          <Skill image={"/images/icons/html.svg"} skill={"HTML"}></Skill>
          <Skill image={"/images/icons/css.svg"} skill={"CSS"}></Skill>
          <Skill
            image={"/images/icons/javascript.svg"}
            skill={"Javascript"}
          ></Skill>
          <Skill image={"/images/icons/react.svg"} skill={"React"}></Skill>
          <Skill image={"/images/icons/redux.svg"} skill={"Redux"}></Skill>
          <Skill image={"/images/icons/sass.svg"} skill={"Sass"}></Skill>
          <Skill image={"/images/icons/git-icon.svg"} skill={"Git"}></Skill>
          <Skill
            image={"/images/icons/github-icon.svg"}
            skill={"Github"}
          ></Skill>
          <Skill
            image={"/images/icons/typescript.svg"}
            skill={"Typescript"}
          ></Skill>
        </div>
      </div>
      <div onClick={() => navigate("/contact")} className={classes.ContactMe}>
      
        <h1>Intereted in doing a project together?</h1>
        <button>CONTACT ME</button>
      </div>
    </div>
  );
};
export default Home;
