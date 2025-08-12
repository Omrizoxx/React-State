import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: "Omar Oyow",
        bio: "A passionate software developer with 15 years of experience in React and Node.js.",
        imgSrc: "https://wallpaperbat.com/img/124408-wallpaper-ronaldo-juventus-cristiano-ronaldo-juventus-cristano.jpg",
        profession: "Software Engineer"
      },
      shows: false,
      mountTime: new Date(),
      timeSinceMount: 0
    };
  }

  toggleShow = () => {
    this.setState(prevState => ({
      shows: !prevState.shows
    }));
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      const now = new Date();
      const seconds = Math.floor((now - this.state.mountTime) / 1000);
      this.setState({ timeSinceMount: seconds });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { person, shows, timeSinceMount } = this.state;

    return (
      <div className="App">
        <h1>Welcome to Biometric App</h1>
        <p>this app collects biometrics and stores them in the database</p>
        <button onClick={this.toggleShow}>
          {shows ? 'Hide Profile' : 'Show Profile'}
        </button>
        
        {shows && (
          <div className="profile">
            <img src={person.imgSrc} alt={person.fullName} />
            <h2>{person.fullName}</h2>
            <h3>{person.profession}</h3>
            <p>{person.bio}</p>
          </div>
        )}
        
        <p>Component mounted {timeSinceMount} seconds ago.</p>
      </div>
    );
  }
}

export default App;