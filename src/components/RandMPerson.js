function RandMPerson(props) {
    let {id,name,status,species,gender,image} = props;
    return (
        <div>
            <h1>NAME:{name}</h1>
            <h3>ID:{id}</h3>
            <p>STATUS:{status}</p>
            <p>SPECIES:{species}</p>
            <p>GENDER:{gender}</p>
            <img src={image} alt={name}/>
        </div>
    )
}
export default RandMPerson