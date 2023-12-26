import { useState } from "react";

export default function Name({ name }) {
  const [isEditing, setIsEditing] = useState(false);

  const [updating, setUpdating] = useState(name);

  function handleIsEditing() {
    setIsEditing((wasEditing) => !wasEditing);
  }

  function handleUpdatingName(event) {
    setUpdating(event.target.value);
  }

  let nameVariable = <h3>{updating}</h3>;
  let bttnStatus = "Edit";

  if (isEditing) {
    nameVariable = (
      <input
        type="text"
        required
        id="NameInput"
        value={updating}
        placeholder="Name"
        onChange={handleUpdatingName}
      />
    );
    bttnStatus = "Save";
  }

  let welcomeMessage = "YourName";
  if (updating === "YourName") {
    welcomeMessage = "";
  } else if (updating === "") {
    welcomeMessage = "";
  } else if (
    updating === "Wail" ||
    updating === "Abdullah" ||
    updating === "Rahaf" ||
    updating === "Wisam"
  ) {
    welcomeMessage = `Welcome Dear and the most welcome ${updating}`;
  } else if (updating === "Mohammed") {
    welcomeMessage = "Where is WBS ?????";
  } else if (updating === "Mahito") {
    welcomeMessage = "I HATE YOU!!!";
  } else {
    welcomeMessage = `just Welcome ${updating}`;
  }

  return (
    <>
      <div className="container">
        <label>What is Your Name</label>
        <br />
        {nameVariable}
        <br />
        <button onClick={handleIsEditing}>{bttnStatus}</button>
        <br />
        {welcomeMessage}
      </div>
    </>
  );
}
