import React, { Component } from 'react'

export default class GifList extends Component {
  render() {
    const {giphys} = this.props;
    const giphyLi = giphys.map(gif => <li key={gif.id}>
      <img src={gif.images.original.url} />
    </li> )

    return (
      <div>
        <ul>
        {giphyLi}
        </ul>
        
      </div>
    )
  }
}
