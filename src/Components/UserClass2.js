import React from 'react'
class UserClass2 extends React.Component {
    constructor(props) {
        super(props)
        console.log('Child2 Constructor')
    }

    componentDidMount() {
        console.log('Child2 componentDidMount')
    }

    render() {
        console.log('Child2 Render')
        return <h2>Child Component2</h2>
    }
}
export default UserClass2
