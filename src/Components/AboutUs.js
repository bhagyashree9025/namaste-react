import React from 'react'
import UserClass1 from './UserClass1'
import UserClass2 from './UserClass2'

class AboutUs extends React.Component {
    constructor(props) {
        super(props)

        console.log('Parent Constructor')
    }

    componentDidMount() {
        console.log('Parent componentDidMount')
    }
    render() {
        console.log('Parent Render')
        return (
            <div>
                <h1>This is class component</h1>
                <UserClass1 name={'abc'} location={'xyz'} />
                <UserClass2 />
            </div>
        )
    }
}

export default AboutUs
