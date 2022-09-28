import listaFrameworks from "./items.js";
import VistaLista from "./VistaLista.jsx";
import { useState } from "react";

function Lista() {
  let [items, setItems] = useState(listaFrameworks);

  function filterItems(pattern) {
    if (pattern === "") {
      setItems(listaFrameworks);
    } else {
      let filteredItems = filtrarItemsPorPattern(pattern);
      setItems(filteredItems);
    }
  }

  function filtrarItemsPorPattern(pattern) {
    let filterItems = listaFrameworks.map((item) =>
      item.toLowerCase().includes(pattern.toLowerCase()) ? item : null
    );
    return filterItems;
  }

  return <VistaLista elementos={items} filter={filterItems} />;
}

export default Lista;
