function Backlog(props) {
    console.log(props);

    return <>
        <p>id: {props.id}</p>
        <p>cliente: {props.cliente}</p>
        <p>serie: {props.serie}</p>
        <p>modelo: {props.modelo}</p>
        <p>marca: {props.marca}</p>
    </>
}

export default Backlog
