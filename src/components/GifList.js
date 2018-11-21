import React, { Component } from 'react'

class GifList extends Component {
    constructor(props){
        super(props)

        this.state = {
            gifs: this.props.gifs
        }
    }
    render(){
        return(<li><img src={this.props.gif} alt=""></img></li>)
    }
}

export default GifList