import { Component } from "react";
import './App.css';
class App extends Component {

constructor() {
  super();
  //UI State
  this.state = {
    monsters: []
  }
}
  //Lifecycle Methods
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ monsters: users}));
  }

  //Rendering UI
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
