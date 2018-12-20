import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = { Towels_list:[] }
  async componentDidMount(){
    try{
      const response = await fetch('//localhost:8080/Towels/list')
      const data = await response.json()
      this.setState({Towels_list:data})
    }catch(err){
      console.log(err)
    }
  }

  
  render() {
    const { Towels_list } = this.state
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
            { Towels_list.map( Towel => 
           <div key={Towel.id}>
           <p>{Towel.id} - {Towel.color}</p>
           </div>
  )
}

          </a>
        </header>
      </div>
    );
  }
}

export default App;
