import Card from './Card.jsx';
import "../styles/cardsContainer.css";

const CardsContainer = ({ pokemonsList,onChange }) => {
    const displayedPokemons = pokemonsList.slice(0, 10);
    return (
        <div className='cards-container'>
            {displayedPokemons.map(pokemon => (
                <Card 
                key={pokemon.name} 
                name={pokemon.name} 
                sprite={pokemon.sprite}
                onChange={onChange}/>
            ))}
        </div>

    );

}

export default CardsContainer;