import React from 'react'
import CardList from './CardList'
import {robots} from './robots';

class App extends React.Component {
    render() {
        return (
            <CardList robots={robots} />
        )
    }
}

export default App