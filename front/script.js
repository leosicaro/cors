function rickymortyInfo() {
    const rickymortyNameInput = document.getElementById("rickymortyName")
    const rickymortyInfo = document.getElementById("rickymortyInfo")
    
    
    const rickymortyName = rickymortyNameInput.value.toLocaleLowerCase()

    fetch(`https://rickandmortyapi.com/api/character/?name=${rickymortyName}`)
        .then( response => response.json())
        .then ( data => {const personajes = data.results[0];
            const {name, status, species,gender, origin: {name:planetDimension}, image} = personajes
            rickymortyInfo.innerHTML = `
            <h2>${name}</h2>
            <img src ="${image}" alt ="${name}"/>
            <p>Estado: ${status}</p>
            <p>Raza: ${species}</p>
            <p>Genero: ${gender}</p>
            <p>Origen: ${planetDimension}</p>
            `
        })
        .catch(error => rickymortyInfo.innerHTML =`<p>Imposible acceder al personaje</p>`)
}