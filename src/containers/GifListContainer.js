import React, {Component} from 'react';
import GifList from '../components/GifList';
import GifSearch from '../components/GifSearch';

export default class GifListContainer extends Component {
  constructor(){
    super()
    this.state={
      gifs: [],
      searchTerm: 'dogs'
    }
  }

  componentDidMount(){
    this.gifFetch()
  }

  gifFetch = () => {
    let url = 'http://api.giphy.com/v1/gifs/search?q='
    let apiKey = '&api_key=dc6zaTOxFJmzC&rating=g'
    fetch(url + this.state.searchTerm + apiKey)
    .then(res => res.json())
    .then(json => {
      let newGifArr = json.data.slice(0,3)
      this.setState({ gifs: newGifArr})
    })
  }
  handleSubmit = (search) => {
    this.setState({
      searchTerm: search.search
    }, this.gifFetch)
  }

  render(){
    return(
      <div>
      <GifSearch onGifSubmit={this.handleSubmit} />
      <GifList gifs={this.state.gifs} />
      </div>
    )
  }
}
