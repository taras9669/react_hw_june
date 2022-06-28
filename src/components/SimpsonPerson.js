function SimpsonPerson(props) {
    let {name, text, picture} = props;
    return (
        <div>
            <h3>{name}</h3>
            <p>{text}</p>
            <img src={picture} alt={name}/>
        </div>
    )
}
export default SimpsonPerson