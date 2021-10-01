import "./Header.css"

const Header: React.FC = () => {
    return <div className="header">
        <div className="container">
            <img src="https://assets.chucknorris.host/img/avatar/chuck-norris.png" width="43px" height="43px" alt="chuck" />
            <h3>Chuck-Norris</h3>
        </div>
    </div>
}

export default Header;