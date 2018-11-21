import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'


class GifListContainer extends React.Component {

    constructor(){
        super()
        this.state = {
            gifs: []
        }
    }

    handleSubmit = searchValue => {
     
        fetch(`http://api.giphy.com/v1/gifs/search?q=${searchValue}&api_key=dc6zaTOxFJmzC&rating=g`)
        .then(response => response.json())
        .then(gifs => {

            let selectedGifs = gifs.data.slice(0,3)
            this.setState({
                gifs: selectedGifs
            })

        })



    }

  
    render() {
        return (
            <div>
                <GifList gifs= {this.state.gifs} />
                <GifSearch handleSubmit={searchValue => this.handleSubmit(searchValue)} />
            </div>
        )
    }

}

export default GifListContainer