export default function Card( { data } ) {
    
    return(
        <div className="card">
        <h1> { data.titulo } </h1>
        <img src={ data.imagen }/>
        <span>
            { data.texto }
        </span>
        </div>
        );
}