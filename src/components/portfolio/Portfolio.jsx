import React from "react";
import "./Portfolio.css";
import TODO from "../../assets/todo.jpg";
import MOVIE from "../../assets/movie.jpg";
//DO Not use these images in production
const data = [
  {
    id: 1,
    image: TODO,
    title: "Todo List App",
    github: "https://github.com/XeniyaDob/ctd-react-albatross",
    demo: "https://github.com/XeniyaDob/ctd-react-albatross",
  },
  {
    id: 2,
    image: MOVIE,
    title: "Movie recommendation app",
    github: "https://github.com/XeniyaDob/entertainment-hub",
    demo: "https://github.com/XeniyaDob/entertainment-hub",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio_container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio_item">
              <div className="portfolio_item-image">
                <img src={image} alt={title}></img>
              </div>
              <h3>{title}</h3>
              <div className="portfolio_item-cta">
                <a
                  href={github}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
