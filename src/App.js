import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Search from "./Search";

export default function App() {
  return (
    <div className="App">
      <div className="App-header">
        <h1>Dictionary App</h1>
        <div className="container">
          <Search defaultWord="dictionary" />
        </div>
      </div>
    </div>
  );
}
