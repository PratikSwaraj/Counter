// import { useState } from "react";
// import "./styles.css";

// export default function App() {
//   const [value, setValue] = useState(0);
//   const increase = () => {
//     setValue((prev) => prev + 1);
//   };
//   const decrease = () => {
//     setValue((prev) => prev - 1);
//   };
//   return (
//     <div className="App">
//       <h1>Counter App</h1>
//       <p>Count: {value}</p>
//       <button onClick={increase}>Increment</button>
//       <button onClick={decrease}>Decrement</button>
//     </div>
//   );
// }

import React, { Component } from "react";
import "./styles.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
  }

  increase = () => {
    this.setState((prevState) => ({
      value: prevState.value + 1
    }));
  };

  decrease = () => {
    this.setState((prevState) => ({
      value: prevState.value - 1
    }));
  };

  render() {
    const { value } = this.state;
    return (
      <div className="App">
        <h1>Counter App</h1>
        <p>Count: {value}</p>
        <button onClick={this.increase}>Increment</button>
        <button onClick={this.decrease}>Decrement</button>
      </div>
    );
  }
}

export default App;
