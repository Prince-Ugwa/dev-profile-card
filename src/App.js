import "./App.css";

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

function SkillList() {
  return (
    <div className="skill-list">
      <Skill name="HTML + CSS" emoji="💪" bgColor="#ff0000" />
      <Skill name="JavaScript" emoji="👍" bgColor="#654321" />
      <Skill name="React" emoji="🤏" bgColor="#123456" />
      <Skill name="Svelte" emoji="🤙" bgColor="#ff0" />
      <Skill name="Git & github" emoji="👊" bgColor="#00ff" />
    </div>
  );
}

function Skill({ name, emoji, bgColor }) {
  return (
    <div className="skill" style={{ backgroundColor: bgColor }}>
      <span>{name}</span>
      <span>{emoji}</span>
    </div>
  );
}
