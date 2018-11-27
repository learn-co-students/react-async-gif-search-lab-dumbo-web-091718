import React from 'react'
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'

export default class GifListContainer extends React.Component {

  state = {
    gifArray: []
  }

  render() {
    let gifs = this.state.gifArray.map( image => {
      return (
        <div>
          <GifList image={image}/>
        </div>
      )
    })

    // console.log(this.state.gifArray);

    return (
      <div>
        <GifSearch onSubmit={this.submitHandler} />
        <br />
        {gifs}
      </div>
    )
  }

  componentDidMount() {
    fetch('http://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=dc6zaTOxFJmzC&rating=g')
    .then(res => res.json())
    .then(json => {
      // console.log(json)
      this.setState({
        gifArray: [...json.data].map( obj => {
          return obj.images.original.url
        })
      })
    })
  }

  submitHandler = (e, value) => {
    const base_url = 'http://api.giphy.com/v1/gifs/search?q='
    const api = "&api_key=dc6zaTOxFJmzC&rating=g"

    e.preventDefault()

    // console.log(e.target.children[0].value);
    console.log(value);

    fetch(base_url + value + api)
    .then(res => res.json())
    .then(json => {
      this.setState({
        gifArray: [...json.data].map( obj => {
          return obj.images.original.url
        })
      })
    })
  }

}
