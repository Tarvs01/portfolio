import { useRef } from "react";
import { useInView } from "framer-motion";

function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div className={isInView ? "skills skills-anim" : "skills"} ref={ref}>
      <h1>Skills</h1>
      <h2>Languages and Tools</h2>
      <ul className="language-frameworks">
        <li>HTML</li>
        <li>CSS</li>
        <li>Javascript</li>
        <li>TypeScript</li>
        <li>React</li>
        <li>jQuery</li>
        <li>SCSS</li>
        <li>Bootstrap</li>
        <li>Node js Basics</li>
        <li>Express</li>
        <li>Git</li>
        <li>Github</li>
        <li>VS code</li>
        <li>Postman</li>
        <li>mySql</li>
        <li>Firebase</li>
      </ul>
    </div>
  );
}

export default Skills;
