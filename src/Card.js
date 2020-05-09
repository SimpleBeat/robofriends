import React from 'react';

const Card = ({name, username, email}) => {
    return(
        <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 tc">
            <img src={`https://robohash.org/${username}?200x200` } alt="robot" />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card