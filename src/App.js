import React from 'react'
import SearchBox from './SearchBox'
import CardList from './CardList'
import {robots} from './robots'

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            robots: robots,
            searchfield: ''
        }
    }

    render() {
        return (
            <div className="tc">
                <h1 className="ma3 pa2 color--blue">Robofriends</h1>
                <SearchBox />
                <CardList robots={robots} />
            </div>
        )
    }
}

export default App