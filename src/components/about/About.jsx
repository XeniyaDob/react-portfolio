import React from "react";
import "./About.css";
import ME from "../../assets/xeniya.png";
import { VscTools } from "react-icons/vsc";
import { TbAward } from "react-icons/tb";
import { MdWorkOutline } from "react-icons/md";

const About = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About me</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="About me" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <VscTools className="about_icon" />
              <h5>Experience</h5>
              <small>2+ Years Working</small>
            </article>

            <article className="about_card">
              <TbAward className="about_icon" />
              <h5>Education</h5>
              <small>Code The Dream school</small>
            </article>

            <article className="about_card">
              <MdWorkOutline className="about_icon" />
              <h5>Projects</h5>
              <small>Currently creating Food app</small>
            </article>
          </div>

          <p>
            I started to learn how to code about one year ago. As a visual
            person, I enjoy web development. I find the most interesting part of
            programming is being able to write some code and see the results
            immediately on the screen. These days my time is spent learning,
            researching, designing, and coding.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
