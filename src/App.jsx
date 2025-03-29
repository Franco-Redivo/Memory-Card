import { useState, useEffect } from 'react'
import  getInitialPokemonsList from './apiUtils.js';
import Header from './components/Header.jsx';
import Score from './components/Score.jsx';
import CardsContainer from './components/CardsContainer.jsx';
import './App.css'

function App() {
  const [bestScore, setBestScore] = useState(0);
  const [score, setScore] = useState(0);
  const [pokemonsList, setPokemonsList] = useState([]);
  const [clickedPokemons, setClickedPokemons] = useState([]);
  const [isGameOver, setIsGameOver] = useState(false);
  const [isGameStarted, setIsGameStarted] = useState(true);



  useEffect(() => {
    if (score > bestScore) {
      setBestScore(score);
    }
  }
  , [score, bestScore]);

  useEffect(() => {
    if ( bestScore === pokemonsList.length) {
      setIsGameOver(true);
      setIsGameStarted(false);
    }
  }, [bestScore, pokemonsList.length]);

  useEffect(() => {
    if (isGameOver) {
      setScore(0);
      setClickedPokemons([]);
      setIsGameOver(false);
    }
  }, [isGameOver]);

  useEffect(() => {
    if (isGameStarted) {
      shufflePokemons();
    }
  }, [isGameStarted]);
  
  useEffect(() => {
    const fetchPokemons = async () => {
      const fetchedPokemons = await getInitialPokemonsList();
      setPokemonsList(fetchedPokemons);
    };
    fetchPokemons();
  }, []);


  const handleClick = (pokemon) => {
    if (clickedPokemons.includes(pokemon)) {
      setIsGameOver(true);
      setIsGameStarted(false);
    } else {
      setClickedPokemons((prevClicked) => [...prevClicked, pokemon]);
      setScore((prevScore) => prevScore + 1);
      shufflePokemons();
    }
  };

  const shufflePokemons = () => {
    setPokemonsList((prevList) => [...prevList].sort(() => Math.random() - 0.5));
  }

  
  return (
    <div className='app'>
      <Header/>
      <Score score={score} bestScore ={bestScore} length={pokemonsList.length}/>
      <CardsContainer pokemonsList={pokemonsList} onChange={handleClick}/>
    </div>
    
  );
}

export default App;




