// Utiliza la misma clave de almacenamiento que js/app.js: "solicitudes".
const solicitudesGuardadas = localStorage.getItem("solicitudes");
let solicitudes = [];
if (solicitudesGuardadas !== null) {
  try {
    const datos = JSON.parse(solicitudesGuardadas);
    solicitudes = Array.isArray(datos) ? datos : [];
  } catch (error) {
    console.warn("No se pudieron interpretar las solicitudes guardadas.", error);
  }
}

const filtroPrioridad = document.getElementById("filtroPrioridad");

function mostrarSolicitudes() {
  const lista = document.getElementById("listaSolicitudes");
  const contador = document.getElementById("contador");
  const prioridadElegida = filtroPrioridad.value;
  const visibles = solicitudes.filter(function (solicitud) {
    return prioridadElegida === "" || solicitud.prioridad === prioridadElegida;
  });

  lista.replaceChildren();
  if (visibles.length === 0) {
    const vacio = document.createElement("p");
    vacio.className = "sin-datos";
    vacio.textContent = "No existen solicitudes registradas.";
    lista.appendChild(vacio);
  }

  visibles.forEach(function (solicitud) {
    const articulo = document.createElement("article");
    articulo.className = "solicitud";
    const titulo = document.createElement("h3");
    titulo.textContent = solicitud.nombre;
    articulo.appendChild(titulo);

    const campos = [
      ["Departamento", solicitud.departamento],
      ["Problema", solicitud.tipoProblema],
      ["Prioridad", solicitud.prioridad],
      ["Descripción", solicitud.descripcion]
    ];
    campos.forEach(function (campo) {
      const parrafo = document.createElement("p");
      parrafo.textContent = campo[0] + ": " + campo[1];
      articulo.appendChild(parrafo);
    });
    lista.appendChild(articulo);
  });

  contador.textContent = visibles.length + " solicitudes";
}

filtroPrioridad.addEventListener("change", mostrarSolicitudes);
mostrarSolicitudes();
