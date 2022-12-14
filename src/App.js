import "./App.css";
import { ReactComponent as ReactLogo } from "./logo.svg";

import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);

    // uncomment here to check eslint
    // let major;
    // let minor;
    // const add = (x, y) => {
    //   return x + y;
    // };
  }

  handleClick() {
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
          <p>
            <ReactLogo />
          </p>
          <button onClick={this.handleClick}>transform</button>
        </div>
      </div>
    );
  }
}

export default App;
