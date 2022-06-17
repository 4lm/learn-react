import { Component } from "react";

import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [
        {
          name: "Linda",
          id: "a4a867b9",
        },
        {
          name: "Frank",
          id: "e7c689a1",
        },
        {
          name: "Jacky",
          id: "30a6a8e0",
        },
        {
          name: "Andrei",
          id: "f2c3e894",
        },
      ],
    };
  }

  render() {
    return (
      <div className="App">
        {this.state.monsters.map((monster) => {
          return (
            <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
