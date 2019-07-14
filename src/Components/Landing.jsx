import React from 'react'
import {Link} from 'react-router-dom'

const Landing = props => (
    <>
        <h1>Landing Page</h1>

        <div>
            <Link to='/KanyeTest'>
                <button type="button" className="btn btn">Kanye Test</button>
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