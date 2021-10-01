import "./Menu.css"


interface MenuProps {
    text: string;
    onClick(text: string): void
}

const Menu: React.FC<MenuProps> = (props) => {
    const handleClick = () => {
        props.onClick(props.text)
    }
    return <>
        <button onClick={handleClick}>{props.text}</button>
    </>
}

export default Menu;