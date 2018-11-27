import React from 'react'

export default class GifSearch extends React.Component {

  state = {
    value: ''
  }

   render() {
     return (
       <form onSubmit={(e) => this.props.onSubmit(e, this.state.value)}>
        <input type='text' value={this.state.value} onChange={this.changeHandler} />
        <input type='submit' value='find gifs' />
       </form>
     )
   }

   changeHandler = (e) => {
     // console.log(e.target.name)
     this.setState({
       value: e.target.value
     })
   }
}
