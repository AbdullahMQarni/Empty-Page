import "./styles.css";
import Name from "./components/Name";

export default function App() {
  const titles = [
    "Empty",
    "Nothing",
    "Abo hosaipah team",
    "hampola team",
    "Not Important",
    "Training",
    " : )",
  ];

  function selectTitle(title) {
    return Math.floor(Math.random() * (title + 1));
  }

  return (
    <div className="App">
      <h1>Welcome to The {titles[selectTitle(6)]} Page</h1>
      <p>Note: Don't Refresh the page :]</p>
      <Name name="YourName" />
    </div>
  );
}
