import React, { Component } from 'react';
import GifSearch from '../components/GifSearch.js'
import GifList from '../components/GifList.js'

class GifListContainer extends Component {

  constructor() {
    super()

    this.state = {
      gifs: [],
      searchTerm: "dolphin"
    }
  }

  componentDidMount() {
    this.ourFetch()
  }

  handleSubmit = (search) => {
    this.setState({
      searchTerm: search.search
    }, this.ourFetch)
  }
  // fetch from api here
  ourFetch = () => {
    console.log('in mount')
    let url = 'http://api.giphy.com/v1/gifs/search?q='
    let apiKey = '&api_key=dc6zaTOxFJmzC&rating=g'
    fetch(url + this.state.searchTerm + apiKey)
    .then(res => res.json())
    .then(json => {
      let threeGifs = json.data.slice(0,3)
      this.setState({ gifs: threeGifs })
    })
  }

  render() {
    console.log('hi')
    return (
      <div>
        <GifSearch onGifSubmit={this.handleSubmit}/>
        <GifList gifs={this.state.gifs}/>
      </div>
    )
  }


}

export default GifListContainer;
