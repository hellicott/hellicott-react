import './App.css';

function RandomColour() {
  return (
    <div id="colourGenerator" className="App">
      <header className="App-section">
        <form onSubmit={handleSubmit}>
          <p>
            Get a new randomly generated colour by clicking the button below
          </p>
          <button type="submit">New Colour</button>
        </form>
      </header>
    </div>
  );

  function handleSubmit(e) {
    e.preventDefault();

    const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);

    console.log(randomColor);

    const colourGenDiv = document.getElementById("colourGenerator");

    colourGenDiv.style.backgroundColor = randomColor;

    console.log(colourGenDiv);

  }

}

export default RandomColour;
