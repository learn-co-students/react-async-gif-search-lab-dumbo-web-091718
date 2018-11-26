import React from 'react'

import NavBar from './NavBar'
import GifListContainer from '../containers/GifListContainer'
// url http://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=dc6zaTOxFJmzC&rating=g
// the App component should render out the GifListContainer component

function App() {
  return (
    <div>
        < NavBar color='black' title="Giphy Search" />
        < GifListContainer />
    </div>
  )
}

export default App
