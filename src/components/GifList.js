import React from 'react'


class GifList extends React.Component {

    render(){

        let gifArray = this.props.gifs.map(gif => {
            return <li><img src={gif.images.original.url} alt="gif"/></li>
        })

        return(
            <ul>{gifArray}</ul>
        )
    }
}

export default GifList

