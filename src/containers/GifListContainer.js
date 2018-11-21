import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends Component {
    constructor(props){
        super(props)

        this.state = {
            gifs: []
        }
    }

    searchThing = (e) => {
        e.preventDefault()
        let search = e.target.firstElementChild.value
        
        this.setState({
            gifs: []
        })

        if (search === ""){
            this.componentDidMount()
        } else {
            fetch(`http://api.giphy.com/v1/gifs/search?q=${search}&api_key=dc6zaTOxFJmzC&rating=g`)
            .then(res => res.json())
            .then(data => 
            {for (let i = 0; i < 3; i++){
                this.setState({
                    gifs: [...this.state.gifs, data.data[i].images.original.url]
                })
            }})
        }
    }

    render(){
        let arrayOfGifs = this.state.gifs.map(gif => {
            return(
                <GifList
                gif={gif}
                />
            )
        })
            
        return(<div>
            <GifSearch search={this.searchThing}/>
            <ul>{arrayOfGifs}</ul>
        </div>)
    }

    componentDidMount() {
        fetch("http://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=dc6zaTOxFJmzC&rating=g")
        .then(res => res.json())
        .then(data => 
            {for (let i = 0; i < 3; i++){
                this.setState({
                    gifs: [...this.state.gifs, data.data[i].images.original.url]
                })
            }})
    }

}

export default GifListContainer