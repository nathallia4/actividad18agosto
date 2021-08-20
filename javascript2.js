function insertarNombre(evt){
    
    
    evt.preventDefault();

    let nombre = document.getElementById("nombre").value;

    if (nombre =="") {

        alert("El campo no puedo estar vacio");
    } else {
        let opcion = "<li>" + nombre + "</li>";

        let lista = document.getElementById("lista-nombres");

        lista.innerHTML += opcion;

        alert("se agrego el producto");
    }
}