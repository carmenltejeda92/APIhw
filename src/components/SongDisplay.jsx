import React from 'react'

function SongDisplay(props) {
        return (
        <div>
            <h1>Song Display</h1>
            <p>{props.info.artists.hits[0].artist.name}</p>
        </div>
        )
}

export default SongDisplay
