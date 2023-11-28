import React from 'react'
import { useState } from 'react'

function MusicSearch() {
    const [song, setSong] = useState("")
    const myApi = "8585c97282msh92d53c3affc0d28p190d69jsn6848a6977c6c"
    const url = "https://shazam.p.rapidapi.com/shazam-songs/list-similarities?id=track-similarities-id-424767377&locale=en-US"

    const getSong = async () =>{
        try {
            const response = await fetch(url)
            let data = await response.json()
            setSong(data)
        }catch(e){
            console.log(e)
        }
    }

    









  return (
   <></>
  )
}

export default MusicSearch
