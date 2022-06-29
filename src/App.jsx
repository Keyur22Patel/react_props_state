import "./App.css";
import { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    
    const BOX_COUNT = 24;
    const BOXES = new Array(BOX_COUNT);
    
    for (let i = 0; i < BOXES.length; i++) {
     BOXES[i] = {
       id: i + 1,
       color: `rgb(${this.getRandomColor()}, ${this.getRandomColor()}, ${this.getRandomColor()})`
      }
    }
    const boxes = [];
    const numBoxes = 24;
    for (let i = 0; i < numBoxes; i++) {
      boxes.push ({
        id: 1,
        color: `rgb(${this.getRandomColor()}, ${this.getRandomColor()}, ${this.getRandomColor()})`
       });
     }

     this.state = { boxes }; 
     
     handleBoxClick(e) {
      const newBoxes = this.State.boxes.map((box) => {
         if (box.id == e.targrt.id){
          box.color = `rgb(${this.getRandomColor()}, ${this.getRandomColor()}, ${this.getRandomColor()})`
      }
      return box;
         });
   };
  }

  render() {
    return (
      <main
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          textAlign: "center",
        }}
      >
        <h1>React: State and Props</h1>
        <div className="App">{ boxes }</div>
      </main>
    );
  }
}

export default App;
