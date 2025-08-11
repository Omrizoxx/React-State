import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      person:{
        name:"Omar Oyow",
        bio:"I am a software engineer with a passion for building web applications",
        imgSrc:"https://via.placeholder.com/150",
        Profession: "Software Engineer",
      },
      showBio: false,
      MountedTime:0,
    };
    this.Timer = null;
  }

  componentDidMount() {
    this.Timer = setInterval(() => {
      this.setState({MountedTime: this.state.MountedTime + 1});
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.Timer);
  }

  toggleBio = () => {
    this.setState({showBio: !this.state.showBio});
  }

  render() {
    return (
      <div className="App">
        <h1>Hello World</h1>
        <p>This is a simple React app</p>
        <button onClick={this.toggleBio}>Toggle Bio</button>
        {this.state.showBio && <p>{this.state.person.bio}</p>}
        <p>Mounted Time: {this.state.MountedTime} seconds</p>
      </div>
    )
  }
}

export default App;