import React, { useState, useEffect } from "react";

const useAudio = () => {
  const [audio] = useState(typeof Audio !== "undefined" ? new Audio("/WeddingSong.mp3") : undefined);
  const [playing, setPlaying] = useState(true);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
      audio.volume = 0.2;
      playing ? audio.play() : audio.pause();
    },
    [playing]
  );

  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false));
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false));
    };
  }, []);

  return [playing, toggle];
};

const Player = ({ url }) => {
  const [playing, toggle] = useAudio(url);

  return (
    <div>
      <button
        className="bg-[white] rounded-[25px] w-[50px] h-[50px] fixed top-[90vh] right-[1vh]"
        onClick={toggle}>
          {playing ? <img className="w-[40%] my-0 mx-auto" src="/Icon/MusicPlay.png" alt="pause"/> : <img className="w-[40%] my-0 mx-auto" src="/Icon/MusicPause.png" alt="play"></img> }
        </button>
    </div>
  );
};

export default Player;