import React, { useEffect } from 'react';
import CharacterList from './components/CharacterList';
import './App.css';

function App() {
  useEffect(() => {
    document.title = "Star Wars Characters";
  }, []);

  return (
    <div className="App">
      <h1>Star Wars Characters</h1>
      <CharacterList />
      <footer>
        <p>Desenvolvido por <a href="https://www.instagram.com/cunhoso" target="_blank" rel="noopener noreferrer">João Cunha</a></p>
      </footer>
    </div>
  );
}

export default App;