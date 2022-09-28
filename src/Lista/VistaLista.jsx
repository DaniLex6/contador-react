function VistaLista({elementos, filter}) {
    console.log(elementos)
    return(
        <div>
            <input type="text" onChange={event => filter(event.target.value)}/>

            <ul>
            {
                elementos.map(nombre => nombre && <li key={nombre}>{nombre}</li>)
            }
            </ul>
        </div>
    );
}

export default VistaLista;
