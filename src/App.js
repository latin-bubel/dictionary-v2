import "./App.css";
import Dictionary from "./Dictionary.js";
import { createContext, useState } from "react";
import Switch from "react-switch";

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={`App${theme}`}>
        <div className="container">
          <header className="App-header">🤓📖 Dictionary II </header>

          <div className="switch">
            <label> {theme === "light" ? "Light Mode" : "Dark Mode"}</label>{" "}
            &nbsp;
            <Switch
              onChange={toggleTheme}
              checked={theme === "dark"}
              onColor="#9a5cac"
              offColor="#989898"
              checkedIcon={false}
              uncheckedIcon={false}
            />
          </div>

          <main>
            <Dictionary defaultKeyword="welcome" />
          </main>
          <footer className="App-footer">
            <small>
              {" "}
              <a
                href="https://github.com/latin-bubel/dictionary-v2"
                title="Github repository"
                target="_blank"
                rel="noreferrer"
              >
                Open-source code
              </a>
              &nbsp;by&nbsp;
              <a
                href="https://pl.linkedin.com/in/estera-pietkiewicz-6b7558178?original_referer=https%3A%2F%2Fwww.google.com%2F"
                target="_blank"
                rel="noreferrer"
                title="Estera - Linkedin"
              >
                Estera Pietkiewicz
              </a>{" "}
              <br />
              ✨Hosted on&nbsp;Netlify
              <br />
              <a
                href="https://www.pexels.com "
                target="_blank"
                rel="noreferrer"
                title="Pexels"
              >
                Photos provided by Pexels
              </a>
            </small>
          </footer>
        </div>
      </div>
    </ThemeContext.Provider>
  );
}
export default App;
