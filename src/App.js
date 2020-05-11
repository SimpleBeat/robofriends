import React from 'react'
import SearchBox from './SearchBox'
import CardList from './CardList'
import Scroll from './Scroll'

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ robots: users }));
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    }
    
    render() {
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())}
        )

        if (this.state.robots.length === 0) {
            return <h1 className="tc gray">Loading...</h1>
        } else {
            return (
                <div className="tc">
                    <h1 className="ma3 pa2 dark-blue f1">Robofriends</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scroll>
                        <CardList robots={filteredRobots} />
                    </Scroll>
                </div>
            )
        }
    }
}

export default App