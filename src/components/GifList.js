import React, {Component} from 'react';

export default class GifList extends Component {
  render(){
    let displayGif = this.props.gifs.map(gif => {
      return <li><img src={gif.images.original.url} alt="" /></li>
    })

    return (
      <ul>
        {displayGif}
      </ul>
    )
  }
}
