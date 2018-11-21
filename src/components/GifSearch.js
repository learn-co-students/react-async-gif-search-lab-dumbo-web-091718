import React, {Component} from 'react';

export default class GifSearch extends Component {

  formSubmitHandler = (event) => {
    event.preventDefault();
    this.props.submitHandler(this.refs.searchField.value)
  }

  render(){
    return (
      <form onSubmit={this.formSubmitHandler}>
        <input type="text" ref="searchField" placeholder="Enter Your Search"/>
        <button type="submit">Search</button>
      </form>
    )
  }


}
