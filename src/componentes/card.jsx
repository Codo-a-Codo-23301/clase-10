
 function Card( props ) {
     return (
        <div className="card">
            <h1>  { props.data.titulo } </h1>
            <img src={ props.data.imagen } />
            <span>
                { props.data.texto }
            </span>
        </div>
    );
}
 

export default Card