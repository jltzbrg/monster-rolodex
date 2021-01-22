import { Component } from "react";
import './App.css';
class App extends Component {

constructor() {
  super();

  this.state = {
    monsters: [
      { name: 'Frankenstein', id: 'asr1' },
      { name: 'Dracula', id: 'asr2' },
      { name: 'Jason', id: 'asr3' },
    ]
  }
}

  render() {
    return(
      <div className='App'> 
        
        {this.state.monsters.map(monster => (
          <h1 key={monster.id}>{monster.name}</h1>
        ))}
      </div>
    )
  }
}

export default App;
