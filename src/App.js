import "./styles.css";

// Parent Component
function App() {
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
      <Skill skill="TypeScript" emoji="💪" color="red" />
      <Skill skill="Java" emoji="💪" color="blue" />
      <Skill skill="C++" emoji="👶" color="yellow" />
    </div>
  );
}

// Child Component
function Skill(props) {
  // Do something
  //const name = "Ronak";
  // We want to return SKILL + Emoji?
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <div>{props.skill}</div>
      <div>{props.emoji}</div>
    </div>
  );
}


export default App;
