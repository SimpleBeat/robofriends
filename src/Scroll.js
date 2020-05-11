import React from 'react';

const Scroll = (props) => {
    return (
        <div style={{ overflowY: 'scroll', borderTop: '1px solid white', height: '700px' }}>
            { props.children }
        </div>
    )
}

export default Scroll