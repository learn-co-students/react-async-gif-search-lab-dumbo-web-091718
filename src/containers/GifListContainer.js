import React, {Component} from 'react';
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'
export default class GifListContainer extends Component {

  state = {
    searchTerm: "",
    searchResults: {
      data: []
    }
  }

  submitHandler = (searchValue) => {
    this.setState({
      searchTerm: searchValue
    });

    fetch(`http://api.giphy.com/v1/gifs/search?q=${this.state.searchTerm}&api_key=dc6zaTOxFJmzC&rating=g`)
    .then(res => res.json())
    .then(json => {this.setState({
      searchResults: json
    })
  });
  }

  render(){
    return (
      <div>
        < GifSearch submitHandler={this.submitHandler} />
        < GifList searchResults={this.state.searchResults} />
      </div>
    )
  }

}
