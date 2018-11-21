import React, { Component } from 'react';

class GifSearch extends Component {

  state = {
    search: ""
  }

  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  formSubmitHandler = (e) => {
    e.preventDefault()
    this.props.onGifSubmit(this.state)
    this.setState({
      search: ""
    })
  }


  render() {
    return (
      <div>
        <form onSubmit={this.formSubmitHandler}>
          <h3>Enter a Search Term: </h3>
          <input type="text" name="search" value={this.state.search} onChange={this.changeHandler}/>
          <button>Find Gifs</button>
        </form>
      </div>
    )
  }
}

export default GifSearch;
