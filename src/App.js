import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Search from "./Search";

export default function App() {
  return (
    <div className="App">
      <h1>Dictionary App</h1>
      <div className="container">
        <Search defaultWord="dictionary" />
      </div>
      <footer>
        This dictionary application is coded by Toh Hui Shan and is open-sourced
        on{" "}
        <a
          href="https://github.com/tohhuishan/shecodes-react-dictionary-application"
          rel="noreferrer"
        >
          GitHub
        </a>
      </footer>
    </div>
  );
}
