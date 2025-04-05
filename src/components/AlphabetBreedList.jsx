import React, { useEffect, useState } from 'react';
import './AlphabetBreedList.css';

export default function AlphabetBreedList({ onSelect }) {
  const [grouped, setGrouped] = useState({});

  useEffect(() => {
    async function fetchBreeds() {
      const res = await fetch('https://dog.ceo/api/breeds/list/all');
      const data = await res.json();
      const breeds = Object.keys(data.message);
      const groupedData = {};
      breeds.forEach((breed) => {
        const letter = breed[0].toUpperCase();
        if (!groupedData[letter]) groupedData[letter] = [];
        groupedData[letter].push(breed);
      });
      setGrouped(groupedData);
    }
    fetchBreeds();
  }, []);

  return (
    <div className="breed-list">
      {Object.entries(grouped).map(([letter, breeds]) => (
        <div key={letter} className="group">
          <h3>{letter}</h3>
          {breeds.map((b) => (
            <button key={b} onClick={() => onSelect(b)} className="chip">
              {b}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
}
