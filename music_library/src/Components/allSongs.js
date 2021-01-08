import React from 'react'

const AllSongs = ({allSongs}) => {
    return (
        <div>
            <center><h1>All Songs Playlist</h1></center>
            {allSongs.map((song) => (
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">{song.id}</h5>
                        <p class="card-text">{song.title}</p>
                    </div>
                </div>
            ))}
        </div>
    )
};

export default AllSongs