let allCharacters = [];


fetch("https://rickandmortyapi.com/api/character")
  .then(respuesta => respuesta.json()) 
  .then(datos =>
  {
    const personajes = document.getElementById("character-list");
    const buscar = document.getElementById("search");

    if (datos && datos.results) { 
      allCharacters = datos.results;
      mostrarPersonajes(allCharacters);
    } else {
      personajes.innerHTML = "<p>No se pudieron cargar los personajes.</p>";
    }



  function mostrarPersonajes(lista) {
    personajes.innerHTML = ""; // Limpiar el contenido
        
    if (lista.length === 0) {
      personajes.innerHTML = "<p>No se encontraron personajes.</p>";
      return;
    }

  lista.forEach(personaje => {
    
    const div = document.createElement("div");
    div.classList.add("card");
    div.innerHTML = `
    
    <h3>${personaje.name}</h3> 
    
    <p>
      ${personaje.status} - 
      ${personaje.species} - 
      ${personaje.type} - 
      ${personaje.origin.name} -
      ${personaje.location.name}
    </p>

    <img src="${personaje.image}">`;
  
    personajes.appendChild(div);

  });
}

search.addEventListener("search", () => {
  
  const texto = search.value.toLowerCase();
  const personajesBuscados = allCharacters.filter(personaje =>
    personaje.name.toLowerCase().includes(texto)
  );

  mostrarPersonajes(personajesBuscados);
  });

})

  .catch(error => console.log(error))

function mostrarPersonajes(lista) {
  const personajes = document.getElementById("character-list");
  personajes.innerHTML = "";

  if (lista.length === 0) {
    personajes.innerHTML = "<p>No se encontraron personajes.</p>";
    return;
  }

  lista.forEach(personaje => {
    const div = document.createElement("div");
    div.classList.add("card");
    div.innerHTML = `
      <img src="${personaje.image}" alt="${personaje.name}">
      <h3>${personaje.name}</h3> 
      <p>${personaje.species}</p>
    `;
    personajes.appendChild(div);
  });
}

// Ejecutamos la función cuando el script cargue
fetchAllCharacters();