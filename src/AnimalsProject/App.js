import { useState } from "react";
import Animal from "./Animal";
import './App.css';

function getRandomAnimal() {
  const animals = ["cat", "dog", "bird", "gator", "cow","horse"];

  return animals[Math.floor(Math.random() * animals.length)];
}

function App() {
  const [animals, setAnimals] = useState([]);

  const handleOver = () => {
    setAnimals([...animals, getRandomAnimal()]);
  };

  const renderAnimals = animals.map((animal,index) => {
    return <Animal type={animal} key={index}/>
  })

  return (
    <div className="app">
      <button onClick={handleOver}>Add Animal </button>
      <div className="animal-list">{renderAnimals}</div>
    </div>
  );
}

export default App;
