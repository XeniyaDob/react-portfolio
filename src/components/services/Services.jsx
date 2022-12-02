import React from "react";
import "./Services.css";
import { FiCheckCircle } from "react-icons/fi";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Learned</h5>
      <h2>Experience</h2>
      <div className="container services_container">
        <article className="service">
          <div className="service_head">
            <h3>Intro to Programming</h3>
          </div>
          <ul className="service_list">
            <FiCheckCircle className="service_list-icon" />
            <li>
              <p>HTML, CSS, and JavaScript</p>
            </li>
            <FiCheckCircle className="service_list-icon" />
            <li>
              <p>Practice with hands-on exercises and projects</p>
            </li>
            <FiCheckCircle className="service_list-icon" />
            <li>
              <p>Git and GitHub workflow</p>
            </li>
            <FiCheckCircle className="service_list-icon" />
            <li>
              <p>How the Internet works and Debugging</p>
            </li>
            <FiCheckCircle className="service_list-icon" />
            <li>
              <p>AJAX basics and API fetch</p>
            </li>
            <FiCheckCircle className="service_list-icon" />
            <li>
              <p>
                Built confidence in ability to think and problem-solve like a
                programmer
              </p>
            </li>
          </ul>
        </article>
        {/* ----------------End-------------------- */}
        <article className="service">
          <div className="service_head">
            <h3>ReactJS</h3>
          </div>
          <ul className="service_list">
            <li>
              <FiCheckCircle className="service_list-icon" />
              <p> React fundamentals </p>
            </li>
            <li>
              <FiCheckCircle className="service_list-icon" />
              <p>Functional and class components</p>
            </li>
            <li>
              <FiCheckCircle className="service_list-icon" />
              <p>React router</p>
            </li>
            <li>
              <FiCheckCircle className="service_list-icon" />
              <p>React maintenance and testing</p>
            </li>
            <li>
              <FiCheckCircle className="service_list-icon" />
              <p>Handling and pagination in React</p>
            </li>
            <li>
              <FiCheckCircle className="service_list-icon" />
              <p>Deployment</p>
            </li>
          </ul>
        </article>
        {/* ----------------End-------------------- */}
        <article className="service">
          <div className="service_head">
            <h3>Practicum</h3>
          </div>
          <ul className="service_list">
            <li>
              <FiCheckCircle className="service_list-icon" />
              <p>Gain experience working on a development team</p>
            </li>
            <li>
              <FiCheckCircle className="service_list-icon" />
              <p>Collaborate + integrate code with a larger project</p>
            </li>
            <li>
              <FiCheckCircle className="service_list-icon" />
              <p>Solve code problems with other developers</p>
            </li>
            <li>
              <FiCheckCircle className="service_list-icon" />
              <p>Develop good continuous integration habits</p>
            </li>
            <li>
              <FiCheckCircle className="service_list-icon" />
              <p>Get a sense of what software developer jobs are like</p>
            </li>
            <li>
              <FiCheckCircle className="service_list-icon" />
              <p>
                Make real-world decisions about what code to include and why
              </p>
            </li>
            <li>
              <FiCheckCircle className="service_list-icon" />
              <p>Gain exposure to agile methods and terminology</p>
            </li>
            <li>
              <FiCheckCircle className="service_list-icon" />
              <p>Gain experience on a real-world, deployable project</p>
            </li>
            <li>
              <FiCheckCircle className="service_list-icon" />
              <p>
                Understand development, staging and production pipeline concept
              </p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
