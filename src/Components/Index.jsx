import React from 'react'
import axios from 'axios'
import moment from 'moment'

class Index extends React.Component {
    
    state = {
        issues: ['test1','test2','test3','test4']
    }

    componentDidMount() {
        axios.get('https://api.github.com/repos/facebook/react/issues?page=1&per_page=5')
            .then(result => {
                let issues = result.data;
                this.setState({
                issues
                })
        })
    }
    
    
    render () {
        return(
            <>
                <h1>Index Page</h1>
                    {this.state.issues.map((issue, i) => 
                    <div key={i}>
                        <h2>{issue.title}</h2>
                        <h3>Issue Number: {issue.number}</h3>
                        <p>Submitted by {issue.id}</p>
                        <p> submitted {moment(issue.created_at).startOf().fromNow()}</p>
                        
                        <hr></hr>
                    </div>)}
                
            </>
        )
    }
}




export default Index;