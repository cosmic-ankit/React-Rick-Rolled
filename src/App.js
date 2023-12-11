// App.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './Components/Navbar';
import YouTubeVideoPlayer from './Components/YouTubeVideoPlayer';
const App = () => {
  const [videoId, setVideoId] = useState('BBJa32lCaaY'); 

  useEffect(() => {
   
  }, []);

  return (
    <div>
      {/* Navbar Component */}
      <Navbar />

      {/* Front Page */}
      <div className="front-page container-fluid text-center bg-dark text-light">
  <div className="container py-5">
    <h1 className="display-4 mb-4">U have been RICK ROLLED </h1> 
  </div>
</div>


      {/* Video Player */}
      <div className="VideoPlayer container-fluid text-center bg-dark text-light py-4" >
        <YouTubeVideoPlayer videoId={videoId} />
      </div>
    </div>
  );
};

export default App;
