import React, {Component} from 'react';

export default class GifList extends Component {
  render(){
    // console.log(this.props.searchResults.data)
    let arrayOfResults = this.props.searchResults.data.map(result => {
     return <li><img key={result.id} src={result.images.original.url} alt=""/></li>
    })
    return (
      <ul>
        {arrayOfResults}
      </ul>
    )
  }
}
