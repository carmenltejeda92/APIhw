import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import Header from './components/Header';
import SongDisplay from './components/SongDisplay'


function App() {
  const [song, setSong] = useState(null)
    // const myApi = "8585c97282msh92d53c3affc0d28p190d69jsn6848a6977c6c"
    // const url = 'https://shazam.p.rapidapi.com/shazam-songs/list-similarities?id=track-similarities-id-424767377&locale=en-US';

    const getSong = async (searchTerm) =>{


        const url = `https://shazam.p.rapidapi.com/search?term=${searchTerm}&locale=en-US&offset=0&limit=5`;
        const options = {
          method: 'GET',
          headers: {
            'X-RapidAPI-Key': '8585c97282msh92d53c3affc0d28p190d69jsn6848a6977c6c',
            'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
          }
        };

        try {
          const response = await fetch(url, options);
          const result = await response.json();
          setSong(result);
        } catch (error) {
          console.error(error);
        }
    }


  return (
    <div className="App">
      <Header />
      {song?<SongDisplay info={song}/>: null}
      <Form songSearch={getSong} />
    </div>
  );
}

export default App;
