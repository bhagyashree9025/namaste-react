import React from 'react'
class UserClass1 extends React.Component {
    constructor(props) {
        super(props)
        console.log(this.props.name, 'Child1 Constructor')
        this.state = {
            userInfo: {
                name: 'abc1',
                location: 'xyz',
            },
        }
    }

    async componentDidMount() {
        console.log('Child1 componentDidMount')
        const response = await fetch(
            'https://api.github.com/users/akshaymarch7'
        )
        const data = await response.json()
        this.setState({ userInfo: data })
    }
    componentDidUpdate() {
        console.log('Child1 componentDidUpdate')
    }

    render() {
        console.log('Child1 Render')
        const { name, location } = this.state.userInfo
        return (
            <div>
                <h2>Child Component1</h2>
                <h3>Name:{name}</h3>
                <h3>Location:{location}</h3>
            </div>
        )
    }
}
export default UserClass1
