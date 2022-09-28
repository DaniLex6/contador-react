import Backlog from "./Backlog.jsx";
import {GiMineTruck} from 'react-icons/all'

function App() {
  return (
    <>


      <h1>Lista de Backlogs <GiMineTruck fontSize="45"/></h1>
      <Backlog
        id={"0001"}
        cliente="Minera Penmont"
        serie="APX123"
        modelo="420TRS"
        marca="CAT"
      />
      <br />
      <Backlog
          id={"0002"}
          cliente="Cliente iterno"
          serie="TRX123"
          modelo="421POC"
          marca="CAT"/>
      <br />
      <Backlog
          id={"0003"}
          cliente="Ingenieros civiles"
          serie="BNM0911"
          modelo="360ADS"
          marca="MSF"/>
    </>
  );
}

export default App;
