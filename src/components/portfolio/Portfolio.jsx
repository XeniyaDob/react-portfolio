import React from "react";
import "./Portfolio.css";
import TODO from "../../assets/todo.png";
import MOVIE from "../../assets/movie.png";
import MYKITCHEN from "../../assets/mykitchen.png";

const data = [
  {
    id: 1,
    image: TODO,
    title: "Todo List App",
    credentialsLink: "https://codethedream.org/",
    credentials: "Final project in Code The Dream",
    github: "https://github.com/XeniyaDob/ctd-react-albatross",
    demo: "https://xeniya.gor.sh/todo/",
    comment: "My first React app",
  },
  {
    id: 2,
    image: MOVIE,
    title: "Movie Recommendation App",
    credentialsLink: "https://www.youtube.com/watch?v=vxUfx4aM5d8&t=7019s",
    credentials: "Created from a YouTube tutorial",
    github: "https://github.com/XeniyaDob/entertainment-hub/tree/lesson-5",
    demo: "https://xeniya.gor.sh/entertainment/",
    comment: "Currently working on the next version",
  },
  {
    id: 3,
    image: MYKITCHEN,
    title: "Recipe recommendation MyKitchen App",
    credentialsLink: "https://codethedream.org/",
    credentials: "Team project in Code The Dream",
    github: "https://github.com/Code-the-Dream-School/MyKitchenApp-front",
    demo: "http://mykitchen.gor.sh/",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Projects</h2>
      <div className="container portfolio_container">
        {data.map(
          ({
            id,
            image,
            title,
            github,
            demo,
            credentials,
            credentialsLink,
            comment,
          }) => {
            return (
              <article key={id} className="portfolio_item">
                <div className="portfolio_item-image">
                  <img src={image} alt={title}></img>
                </div>
                <h3>{title}</h3>
                <a
                  href={credentialsLink}
                  rel="noreferrer"
                  target="_blank"
                  className="credentials"
                >
                  {credentials}
                </a>
                <p>{comment}</p>
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
          }
        )}
      </div>
    </section>
  );
};

export default Portfolio;
