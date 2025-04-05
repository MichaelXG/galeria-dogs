import React, { useEffect, useState } from 'react';
import Carousel from './components/Carousel';
import AlphabetBreedList from './components/AlphabetBreedList';
import './App.css';

export default function App() {
  const [images, setImages] = useState([]);
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const fetchImages = async (breed) => {
    try {
      const res = await fetch(`https://dog.ceo/api/breed/${breed}/images/random/5`);
      const data = await res.json();
      setImages(data.message);
    } catch (err) {
      console.error('Erro ao carregar imagens:', err);
      alert('Erro ao buscar imagens.');
    }
  };

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className="app">
      <header className="topbar">
        <h1>🐶 Galeria de Cachorros</h1>
        <button onClick={toggleTheme} className="theme-toggle">
          {theme === 'dark' ? '🌞 Tema Claro' : '🌙 Tema Escuro'}
        </button>
      </header>

      <main className="grid">
        <div className="left">
          <Carousel images={images} />
        </div>
        <div className="right">
          <AlphabetBreedList onSelect={fetchImages} />
        </div>
      </main>

      <footer className="footer">
        <p>Feito por Michael XG | Dog CEO API</p>
      </footer>
    </div>
  );
}
