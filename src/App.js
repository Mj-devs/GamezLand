import { useState, useEffect } from 'react';
import React from 'react';
import './App.css';
import GameCard from './GameCard.jsx';
import SearchIcon from './search.svg';

// API Key for RAWG
const API_URL = 'https://api.rawg.io/api/games?key=9aacd3c824754712af17aedbc2197350';

const App = () => {
    const [games, setGames] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const searchGames = async (title) => {
        const response = await fetch(`${API_URL}&search=${title}`);
        const data = await response.json();
        console.log(data.results)
        setGames(data.results);
    };

    useEffect(() => {
        searchGames('Call of Duty'); // Initial search
    }, []);

    const handleSearch = () => {
        searchGames(searchTerm);
    };

    return (
        <div className="app">
            <h1>GamezLand</h1>

            <div className="search">
                <input
                    placeholder="Search for games"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <img
                    src={SearchIcon}
                    alt="search"
                    onClick={handleSearch}
                />
            </div>

            {games?.length > 0 ? (
                <div className="container">
                    {games.map((game) => (
                        <GameCard key={game.id} game={game} />
                    ))}
                </div>
            ) : (
                <div className="empty">
                    <h2>No games found!</h2>
                </div>
            )}
        </div>
    );
};

export default App;
