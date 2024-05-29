import React, { useState, useEffect } from 'react';
import { getCharacters } from '../services/swapi';
import CharacterCard from './CharacterCard';

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const data = await getCharacters(page, search);
      setCharacters(data.results);
      setLoading(false);
    };

    fetchData();
  }, [page, search]);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    setPage(1);
  };

  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handlePreviousPage = () => {
    setPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search characters"
        value={search}
        onChange={handleSearchChange}
      />
      <div className="character-list">
        {loading ? (
          <p>Loading...</p>
        ) : (
          characters.map((character) => (
            <CharacterCard key={character.url} character={character} />
          ))
        )}
      </div>
      <div className="pagination">
        <button onClick={handlePreviousPage} disabled={page === 1}>
          Previous
        </button>
        <button onClick={handleNextPage} disabled={characters.length < 10}>
          Next
        </button>
      </div>
    </div>
  );
};

export default CharacterList;
