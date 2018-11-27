import React from 'react'

export default class GifList extends React.Component {
  render() {
    return (
      // console.log(this.props.gif)
      <div>
        <img src={this.props.image} alt="" />
      </div>
    )
  }
}
