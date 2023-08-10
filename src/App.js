import "./App.css";

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
    emoji: "💪",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
    emoji: "💪",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33",
    emoji: "👍",
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB",
    emoji: "💪",
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00",
  },
];

export default function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="./img/cat.jpg" alt="pic" />;
}
function Intro() {
  return (
    <div className="intro">
      <h1>Prince Brawny</h1>
      <p>
        Contrary to popular belief, Lorem Ipsum is not simply random text. It
        has roots in a piece of classical Latin literature from 45 BC, making it
        over 2000 years old.
      </p>
    </div>
  );
}

// function SkillList() {
//   // return (
//   //   <div className="skill-list">
//   //     <Skill name="HTML + CSS" emoji="💪" bgColor="#ff0000" />
//   //     <Skill name="JavaScript" emoji="👍" bgColor="#654321" />
//   //     <Skill name="React" emoji="🤏" bgColor="#123456" />
//   //     <Skill name="Svelte" emoji="🤙" bgColor="#ff0" />
//   //     <Skill name="Git & github" emoji="👊" bgColor="#00ff" />
//   //   </div>
//   // );
// }
function SkillList() {
  return (
    <div className="skill-list">
      {/*skills.map((skill) => (
        <Skill
          skill={skill.skill}
          level={skill.level}
          color={skill.color}
          emoji={skill.emoji}
        />
      ))*/}
      {skills.map((skill) => (
        <Skill skill={skill.skill} level={skill.level} color={skill.color} />
      ))}
    </div>
  );
}

function Skill({ skill, level, color }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span> {skill}</span>
      <span> {level === "beginner" && "🤏"}</span>
      <span> {level === "intermediate" && "👍"}</span>
      <span> {level === "advanced" && "💪"}</span>
    </div>
  );
}
