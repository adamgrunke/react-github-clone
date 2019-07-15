import React from 'react'
import axios from 'axios'
import moment from 'moment'

class Show extends React.Component {
    state = {
        issue: {
            title: '333',
            number: '444',
            user: {login: "dave"}
        }
    }


    componentDidMount() {
        axios.get(`https://api.github.com/repos/facebook/react/issues/${this.props.match.params.id}`)
            .then(result => {
                let issue = result.data;
                this.setState({
                issue                
            });

        })
    }
    
    render() {
        var issue = Object.assign({}, this.state.issue)
        return(
            <>
                <h1>{issue.title}</h1>
                <h2>Details for Issue Number: {issue.number}</h2>
                <h2>Details for login: {issue.user.login}</h2>

                
            </>
        );
    }
}




export default Show;