import React from "react";  // si vamos a usar use state es necesario importar  REact


function TodoSearch({ searchValue, setSearchValue }){

 
  return(
    <section className="search_container">
      <input 
        type="text"
        placeholder="Preparar la cena"
        value={searchValue} // el  value debe ser el estado
        onChange={
          (event) => {
            // console.log(event.target.value);
            setSearchValue(event.target.value) // Esta linea actualiza el estado en useState
          }
        } />
        <div className="searchIcon"></div>
      </section>
  );
}

export {
  TodoSearch
}