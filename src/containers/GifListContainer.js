import React, { Component } from 'react';
import GifSearch from '../components/GifSearch';
import GifList from '../components/GifList';

const BaseUrl = "http://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&rating=g"

class GifListContainer extends Component {
  constructor(){
    super();
    this.state = {}
  }
 
  componentDidMount(){
    
  }

  fetchGiphys = searchInputData => {
    fetch(`${BaseUrl}&q=${searchInputData}`)
    .then(res => res.json())
    .then(res => {
       this.setState({
        results: res.data.slice(0, 3)
       })
    })
  }

  
  render() {
    return (
      <div className="row">
        <div className="col-sm-6">
         {/* {this.state.results && <GifList giphys={this.state.results}/>}  */}
         {this.state.results? <GifList giphys={this.state.results}/> : "DOM Content Not loaded Yet Bro!"} 
        </div>
        <div className="col-sm-4 pull-right">
          <GifSearch handleFetchGiphys={this.fetchGiphys} /> 
        </div>
      </div>
    )
  }
}

export default GifListContainer