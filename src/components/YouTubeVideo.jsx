import React, { useRef } from 'react';
import 'aframe';

const YouTubeVideo = (props) => {
  const videoRef = useRef();

  const handleClick = () => {
    videoRef.current.play();
  };

  return (
    <a-scene>
      <a-videosphere
        src={props.src}
        width={props.width}
        height={props.height}
        position={props.position}
        onClick={handleClick}
      ></a-videosphere>
    </a-scene>
  );
};

export default YouTubeVideo;