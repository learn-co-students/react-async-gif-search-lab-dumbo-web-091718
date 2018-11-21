import React from 'react'

class GifSearch extends React.Component {

    constructor(){
        super()
        this.state = {
            searchValue: ""
        }
    }

    changeHandler = event => {
        this.setState({
            searchValue: event.target.value 
        })
    }

    submitHandler = event => {
        event.preventDefault()
        this.props.handleSubmit(this.state.searchValue)
    }

    render(){
        return(
            <form onSubmit={event => this.submitHandler(event)}>
                <label id="searchLabel">Enter a Search Term: </label>  
                <input htmlFor="searchLabel" type="text" name="findGifs" value={this.state.searchValue} onChange={event => this.changeHandler(event)}/> 
                <button >Find Gifs</button>
            </form>
        )
    }

}

export default GifSearch