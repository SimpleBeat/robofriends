import React from 'react'

const SearchBox = ({ searchChange }) => {
    return (
        <div className="ma2 pa2">
            <input 
                className="ba pa3 b--green bg-white"
                type='search' 
                placeholder='search robot' 
                onChange={searchChange}
            />
        </div>
    )
}

export default SearchBox