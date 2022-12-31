import "./App.css";
import { ReactComponent as ReactLogo } from "./logo.svg";

import React from "react";

class App extends React.Component {
  // uncomment the constructor if you want to make violation of eslint to check
  // constructor(props) {
  //   super(props);
  //   const neverUsed = "neverUsed";
  //   const neverUsedRegex = "neverUsedRegex";
  // }

  transform() {
    const banner = document.getElementById("banner-message");
    banner.classList.contains("alt")
      ? banner.classList.remove("alt")
      : banner.classList.add("alt");
  }

  render() {
    return (
      <div>
        <div id="banner-message">
          <p>Hello React</p>
          <ReactLogo />
          <button onClick={() => this.transform()}>transform</button>
        </div>
      </div>
    );
  }
}

export default App;
