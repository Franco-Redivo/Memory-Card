import "../Styles/cardsContainer.css";

const Card = ({ name, sprite, onChange}) => {
    return (
        <div className='card' onClick={() => onChange(name)} clickable={true}>
            <div className='card-image'>    
                <img src={sprite} alt={name} />
                <h3>{name}</h3>
            </div>
            <div className="card-body">
                <div className="controls">
                    <div className="d-pad"></div>
                    <div className="buttons">
                        <div className="btn btn-a"></div>
                        <div className="btn btn-b"></div>
                    </div>
                </div>
                <div className="select-start">
                    <div className="btn btn-select"></div>
                    <div className="btn btn-start"></div>
                </div>
            </div>    
        </div>
    );
}

export default Card;