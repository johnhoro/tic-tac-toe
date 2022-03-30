import Game from "./Game.js";

const App = () => {
  return (
    <div className="App">
      <div className="App-header">
        <h2>Welcome to React</h2>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
          className="App-logo"
          alt="logo"
        />
      </div>
      <p className="App-intro">
        <Game></Game>
      </p>
    </div>
  );
};

export default App;
