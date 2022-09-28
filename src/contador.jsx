import {useState} from 'React';

function Contador() {
    //El estado
    const [contador, setContador] = useState(0);
    return(
      <div>
          <p>Haz hecho click {contador} veces</p>
          <button onClick={() => {setContador(contador + 1)}}>Incrementar</button>
      </div>
    );
}

export default Contador;
