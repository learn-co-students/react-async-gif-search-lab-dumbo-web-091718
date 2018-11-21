import React, { Component } from 'react'

export default class GifSearch extends Component {
  constructor() {
    super();
    this.state = {
      searchInput: ''
    }
  }

  updateSearchTerm = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    return (
      <div>
        Enter a Search Term:
        <input name="searchInput" value={this.state.searchInput} onChange={this.updateSearchTerm} /> <br/>
  
        <button className="btn btn-success" onClick={() => this.props.handleFetchGiphys(this.state.searchInput)}>Find Gifs
        </button>

      </div>
    )
  }

}
