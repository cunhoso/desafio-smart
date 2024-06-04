import React, { useRef, useState } from 'react';
import './AudioPlayer.css';

const AudioPlayer = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const changeVolume = (event) => {
    audioRef.current.volume = event.target.value;
  };

  return (
    <div className="audio-player">
      <audio ref={audioRef} src="/background-music.mp3" />
      <div className="audio-controls">
        <button onClick={togglePlayPause}>
          {isPlaying ? "Pause" : "Play"}
        </button>
      </div>
      <input type="range" min="0" max="1" step="0.01" onChange={changeVolume} />
    </div>
  );
};

export default AudioPlayer;