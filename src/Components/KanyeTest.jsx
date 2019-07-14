import React from 'react'
import axios from 'axios'

class KanyeTest extends React.Component {
    
    state = {
        quote: "Make Kanye 2006 Again"
    }

    componentDidMount() {
        axios.get('https://api.kanye.rest').then(result => {
            let quote = result.data.quote;
            this.setState({
            quote
            })
        })
        }

    render () {
        return(
            <>
                <h1>Kanye Quote Page</h1>
                <p>{this.state.quote}</p>
            </>
        )
    }
}

export default KanyeTest;