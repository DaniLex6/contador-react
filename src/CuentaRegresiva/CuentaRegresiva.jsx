import {useState, useEffect} from 'react';

function CuentaRegresiva() {
    let [totalSegundos, setTotalSegundos] = useState();
    let [segundosPasados, setSegundosPasados] = useState(0);

    useEffect(function(){
        if(totalSegundos === null) {
            return;
        }

        setSegundosPasados(0);

        let intervalo = setInterval(function () {
            setSegundosPasados((segundosPasados) => segundosPasados + 1);
        }, 1000);

        return() => {
            clearInterval(intervalo);
        }
    }, [totalSegundos]);

    function parseForm(event) {
        event.preventDefault();
        let segundos = event.target.seconds.value;
        setTotalSegundos(parseInt(segundos));
    }

    if(segundosPasados >= totalSegundos && totalSegundos !== null){
        return(
            <>
                <p>Terminó el conteo</p>
                <button onClick={() => {setTotalSegundos(null)}}>Regresar</button>
            </>
        );
    }

    if(totalSegundos != null) {
        return (
            <>
                <p>Faltan {totalSegundos - segundosPasados} segundos</p>
            </>
        );
    }

    return(
        <div>
            <p>
                Ingresa los segundos que quieras contar
            </p>
            <form action="#" onSubmit={event => parseForm(event)}>
                <input type={"number"} name="seconds"/>
            </form>
        </div>
    );
}

export default CuentaRegresiva;
