import React from 'react'

const MusicPlayer = ({cuurentSong}) => {
    return (
        <div>
            <center><h1>Play Your Song here.</h1>
             <img src= "data:image/jpeg;base64,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" alt=""/>
            <p class="songInfo">"song.title"</p>

         <audio controls className='audioStyles'>
            <source src="https://music.apple.com/gb/album/afterglow-single/1545341237?uo=2" type="audio/mpeg"/>
            Your browser does not support the audio element.
        </audio></center>
        </div>
    )
};

export default MusicPlayer