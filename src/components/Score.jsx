import "../Styles/score.css";
const Score = ({score, bestScore, length}) => {
    let scoreClass;
    let winClass;
    console.log(length);
    if (bestScore === length) {
        winClass = "win";
        scoreClass = "hiden";
    } else {
        winClass = "hiden";
        scoreClass = "show";
    }
    
    return (
        <div className='score'>
            <div className={scoreClass}>Score: {score}</div>
            <div className={scoreClass}>Best Score: {bestScore}</div>
            <p className={winClass}>You Won!</p>
        </div>
    );
}

export default Score;