import { useState } from 'react'
// import SongDisplay from './components/SongDisplay'
import React from 'react'


function Form(props) {
  const[formData, setFormData] = useState({searchterm: ""})

  const handleChange = (e) =>{
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) =>{
    console.log('Searching...')
    e.preventDefault()
    props.songSearch(formData.searchterm)
  }


  return (
    <div className='form'>
        <div className='topDiv'>
            <div className='result'></div>
            <form onSubmit={handleSubmit}>
            <input className='search' name="searchterm" type="text" placeholder="Search Song"
              onChange={handleChange} value={formData.searchterm}></input>
            <div><input id="btn" type="submit" value="Submit"/></div>
            </form>
        </div>
    </div>
  )
}

export default Form
