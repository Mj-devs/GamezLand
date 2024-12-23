import React from 'react';

const GameCard = ({ game }) => {
    return (
        <div className="game-card">
            <div>
                <p>{game.genres?.map(genres => genres.name).join(', ') || 'No genres available'}</p>
            </div>

            <div>
                <img 
                    src={game.background_image || 'https://via.placeholder.com/400'} 
                    alt={game.name}
                />
            </div>

            <div>
                <span>{game.released || 'Release date not available'}</span>
                <h3>{game.name || 'No name available'}</h3>
            </div>
        </div>
    );
};

export default GameCard;
