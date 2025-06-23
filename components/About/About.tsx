// import React from "react";

// export default function About() {
//   return (
//     <div className="section">
//       <p className="section-header">About</p>
//       {/* Replace this p tag with more info about yourself. */}
//       <p className="main-color ">
//       Hi, I am Jannat , a passionate software engineer with a strong interest in backend development, data structures,  algorithms and Machine Learning. I am currently pursuing my Master of Science in Computer Science at Virginia Commonwealth University. With experience in NLP, React,React Native,Node JS, Python and other modern technologies. I enjoy building efficient, scalable solutions and creating user-friendly applications. When I am not coding, I am exploring new frameworks, honing my skills, or diving into projects that solve real-world problems.
//       </p>
//     </div>
//   );
// }
import React from "react";

export default function About() {
  return (
    <div className="section">
      <p className="section-header">About</p>
      <p className="main-color leading-relaxed text-justify">
        Hi, I am <span className="font-semibold">Jannat</span> — a passionate software engineer 
        currently pursuing my <span className="italic">Master of Science in Computer Science</span> 
        at Virginia Commonwealth University. I specialize in backend development, algorithms, and 
        machine learning. I have worked with modern tools like <span className="font-medium">React</span>, 
        <span className="font-medium"> React Native</span>, <span className="font-medium">Node.js</span>, 
        <span className="font-medium">Python</span>, and <span className="font-medium">NLP frameworks</span> to build 
        scalable, efficient, and user-centric applications.
        <br /><br />
        Whether I am optimizing data pipelines or crafting intuitive UI, I love solving real-world problems 
        through tech. When I am not coding, you will find me exploring new frameworks or chasing down bugs 
        like its a competitive sport.
      </p>
    </div>
  );
}
