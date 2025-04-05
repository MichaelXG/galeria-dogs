import React, { useState } from 'react';
import './Carousel.css';

export default function Carousel({ images }) {
  const [index, setIndex] = useState(0);

  if (!images || images.length === 0)
    return <p className="no-images">🔍 Selecione uma raça para ver imagens</p>;

  const next = () => setIndex((i) => (i + 1) % images.length);
  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);

  return (
    <div className="carousel">
      <button onClick={prev}>⬅</button>
      <img src={images[index]} alt="Dog" />
      <button onClick={next}>➡</button>
    </div>
  );
}
