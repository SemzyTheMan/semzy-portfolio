import React, { useEffect } from "react";
import "./details.scss";
import { useNavigate } from "react-router";
const Details = (props) => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <div className="Details_container">
      <img src={props.image} alt="movie" />
      <div className="Description">
        <div className="desc_one">
          <h1>{props.title}</h1>
          <p>{props.tools}</p>
          <p>{props.technologies}</p>
          <div className="buttons">
            <button>
              <a href={props.website} target="_blank">
                VISIT WEBSITE
              </a>{" "}
            </button>
            <button className="git">
              <span>
                <img
                  style={{ width: "2.5rem" }}
                  src="/images/icons/github-1.svg"
                  alt="git"
                />
              </span>{" "}
              <a href={props.codelink} target="_blank">
                VIEW CODE
              </a>
            </button>
          </div>
        </div>
        <div className="desc_two">{props.description}</div>
      </div>
      <div className="background">
        <h1>Project Background</h1>
        <p>{props.background}</p>
      </div>
      <div className="next_prev">
        <div
          onClick={() => navigate(`/portfolio/${props.prevId}`)}
          className="prev"
        >
          <h1>&larr;</h1>
          <div>
            <h1>{props.prev}</h1>
            <p> Previous Project</p>
          </div>
        </div>
        <div
          onClick={() => navigate(`/portfolio/${props.nextId}`)}
          className="next"
        >
          <div>
            <h1>{props.next}</h1>
            <p> Next Project</p>
          </div>
          <h1>&rarr;</h1>
        </div>
      </div>
      <div className="ContactMe">
        <h1>Intereted in doing a project together?</h1>
        <button>CONTACT ME</button>
      </div>
    </div>
  );
};

export default Details;
