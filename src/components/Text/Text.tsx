import "./Text.css"

interface JokeText {
    joke: string;
}

const Text: React.FC<JokeText> = (props) => {
    return <>
        <div className="chuckphoto container">
        </div>
        <div className="quote">
            <p>{props.joke}</p>
        </div>
    </>
}

export default Text;