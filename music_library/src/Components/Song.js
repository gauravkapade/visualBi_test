import React from 'react';
import '../public/style.css'

const Song = ({ song, position }) => {
  if(!song) return;
  // console.log(song);
  return (
    <div class="song">
     <img id='playlist' src= {song.thumbnailUrl} alt=""/>
     <h4 class="songPosition">{position}</h4>
      <p class="songInfo">{song.title}</p>
      <p class="songInfo">{song.albumId}</p>
    
    </div>
  )
}

export default Song;
