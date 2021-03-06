
import { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import ParticlesComponent from './components/Particles/Particles.jsx';



class  App extends Component {
  constructor() {
    super();
  }
  render() {
    return(
    <div className="App">
      <ParticlesComponent />
      
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm />
      {/* 
      <FaceRecognition /> */}
    </div>
    )
  }
}

export default App;
 