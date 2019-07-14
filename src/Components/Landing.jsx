import React from 'react'
import {Link} from 'react-router-dom'

const Landing = props => (
    <>
        <h1>Landing Page</h1>
        <div>
            <Link to='/kanyetest'>
                <button type="button" className="btn btn">kanyetest</button>
            </Link>
        </div>
        <div>
            <Link to='/Index'>
                <button type="button" className="btn btn">Go to Issues</button>
            </Link>
        </div>
    </>
)





export default Landing;