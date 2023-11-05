import React, { useRef } from 'react';
import 'aframe';

const YouTubeVideo = (props) => {
  const videoRef = useRef();

  const handleClick = () => {
    videoRef.current.play();
  };

  return (
    <a-scene>
      <a-assets>
        <video id="video" preload="auto" controls={true} autoPlay={true} crossOrigin="anonymous" src={props.src}> </video>
      </a-assets>
      <a-videosphere
        src="#video"
        width={props.width}
        height={props.height}
        position={props.position}
      ></a-videosphere>
    </a-scene>
  );
};

export default YouTubeVideo;
