import React, {Component} from 'react'

class GifSearch extends Component {
    constructor(props){
        super(props)
        this.state = {
            text: ""
        }
    }

    formHandler = e => {
        this.setState({
            text: e.target.value
        })
    }

    // handleSubmit = e => {
    //     e.preventDefault()
    //     this.props.search(this.state.text)
    // }

    render(){
        return(<form onSubmit={(e) => this.props.search(e)}>
            <input 
                type="text"
                name="text"
                value={this.state.text}
                onChange={this.formHandler}
                ></input>
            <button>Search Dem Gifs Girl</button>
        </form>
        )
    }
}

export default GifSearch