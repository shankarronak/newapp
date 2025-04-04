import "./styles.css";

const skills = [
  {
    skill: "VisualCode",
    level: "advanced",
    color: "#2b7489"
  },
  {
    skill: "Java",
    level: "advanced",
    color: "#60dafb"
  },
  {
    skill: "C++",
    level: "intermediate",
    color: "#F0DB4F"
  },
  {
    skill: "Web Design",
    level: "intermediate",
    color: "#C3DCAF"
  },
  {
    skill: "Git and GitHub",
    level: "beginner",
    color: "#F1502F"
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00"
  }
];

// Parent Component
function RonakApp() {
  return (
    // Parent Component
    <div className="card">
      {/* Child Component */}
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

// Component
function Avatar() {
  return (
    <img
      src="https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp"
      height="400px"
      width="400px"
    />
  );
}

// React Component
function Intro() {
  return (
    <div>
      <h1>My name is Tom Cat</h1>
      <span>Employee ID: 1234</span>
    </div>
  );
}

// Parent Component
function SkillList() {
  return (
    <div className="skill-list">
        {skills.map((skill) => (<Skill skill={skill.skill} level={skill.level} color={skill.color} />))}
    </div>
  );
}

// Child Component
function Skill({skill, level, color}) {
  // Do something
  // We want to return SKILL + Emoji?
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <div>{skill}</div>  
      <div>
        {level === "beginner" && "👶"}
        {level === "intermediate" && "👍"}
        {level === "advanced" && "💪"}
      </div>
    </div>
  );
}


export default RonakApp;
