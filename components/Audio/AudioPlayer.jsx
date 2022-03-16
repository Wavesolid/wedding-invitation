import { useState, useEffect, useRef } from "react";

export default function AudioPlayer(props) {

  const audioPlayer = useRef();

  const [playing, setPlaying] = useState(props.play);

  const toggleHandler = () => {
    setPlaying(!playing);
  }

  useEffect(()=>{

    playing? audioPlayer.current.play() : audioPlayer.current.pause();

  },[playing])

  useEffect(()=>{
      audioPlayer.current.addEventListener('ended', function(){
      audioPlayer.current.currentTime = 0;
      audioPlayer.current.play() 
    })
  },[])

  return(
    <div>
      <audio ref={audioPlayer}  src="/WeddingSong.mp3" autoPlay/>
        <button className="bg-[white] rounded-[25px] w-[50px] h-[50px] fixed top-[90vh] right-[1vh] z-[2]" onClick={toggleHandler}>
          {playing ? 
            <img className="w-[38%] my-0 mx-auto" src="/Icon/MusicPlay.png" alt="play"/> 
            : 
            <img className="w-[40%] my-0 mx-auto" src="/Icon/MusicPause.png" alt="pause"/>
          }
        </button>
    </div>
  )
}