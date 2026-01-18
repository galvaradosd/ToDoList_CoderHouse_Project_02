// ========================================
// 1. VARIABLES GLOBALES Y ESTADO
// ========================================
let tareas = [];
let filtroActual = "todas";

// ========================================
// 2. FUNCIONES DE ALMACENAMIENTO (localStorage)
// ========================================
function guardarTareasLocalStorage() {
	localStorage.setItem("tareas", JSON.stringify(tareas));
	console.log("Tareas guardadas en LocalStorage.");
}

function cargarTareasDeStorage() {
	const tareasGuardadas = localStorage.getItem("tareas");
	if (tareasGuardadas) {
		try {
			tareas = JSON.parse(tareasGuardadas);
			console.log(`Se cargaron ${tareas.length} tareas de localStorage`);
		} catch (error) {
			console.error("Error al cargar tareas:", error);
			tareas = [];
			localStorage.removeItem("tareas");
		}
	} else {
		tareas = [];
		console.log("No hay tareas en localStorage, array vacío.");
	}
}

// ========================================
// 3. FUNCIONES DE RENDERIZADO (DOM)
// ========================================
function renderizarTareas(tareasParaMostrar) {
	const listaTareas = document.querySelector("#lista-tareas");
	listaTareas.innerHTML = "";

	if (tareasParaMostrar.length === 0) {
		listaTareas.innerHTML = `<li class="mensaje-vacio" role="status"><p>📭 No hay tareas para mostrar</p></li>`;
		return;
	}

	tareasParaMostrar.forEach((tarea) => {
		const li = document.createElement("li");
		li.innerHTML = `
      <div class="tarea-contenido">
        <input
          type="checkbox"
          class="checkbox-completada"
          ${tarea.completada ? "checked" : ""}
          aria-label="Marcar como completada: ${tarea.descripcion}"
        >
        <span class="${tarea.completada ? "completada" : ""}">
          ${tarea.descripcion || "Sin descripción"}
        </span>
      </div>
      <div class="tarea-acciones">
        <button
          class="btn-editar"
          data-id="${tarea.id}"
          aria-label="Editar tarea: ${tarea.descripcion}"
        >
          ✏️
        </button>
        <button
          class="btn-eliminar"
          data-id="${tarea.id}"
          aria-label="Eliminar tarea: ${tarea.descripcion}"
        >
          🗑️
        </button>
      </div>
    `;

		listaTareas.appendChild(li);

		// Event Listeners para esta tarea específica
		const checkbox = li.querySelector(".checkbox-completada");
		const btnEditar = li.querySelector(".btn-editar");
		const btnEliminar = li.querySelector(".btn-eliminar");

		checkbox.addEventListener("change", () => toggleCompletada(tarea.id));
		btnEditar.addEventListener("click", () => editarTarea(tarea.id));
		btnEliminar.addEventListener("click", () => eliminarTarea(tarea.id));
	});
}

// ========================================
// 4. FUNCIONES DE LÓGICA DE NEGOCIO
// ========================================
function agregarTarea() {
	const input = document.getElementById("input-tarea");
	const descripcion = input.value.trim();

	if (descripcion === "") {
		alert("Por favor escribe una tarea");
		return;
	}

	const nuevaTarea = {
		id: Date.now(),
		descripcion: descripcion,
		completada: false,
	};

	tareas.push(nuevaTarea);
	guardarTareasLocalStorage();
	renderizarTareas(obtenerTareasFiltradas());
	input.value = "";
	input.focus();
}

function eliminarTarea(id) {
	if (confirm("¿Estás seguro de eliminar esta tarea?")) {
		tareas = tareas.filter((t) => t.id !== id);
		guardarTareasLocalStorage();
		renderizarTareas(obtenerTareasFiltradas());
	}
}

function editarTarea(id) {
	const tarea = tareas.find((t) => t.id === id);
	if (!tarea) return;

	const nuevaDescripcion = prompt("Editar tarea:", tarea.descripcion);

	if (nuevaDescripcion !== null && nuevaDescripcion.trim() !== "") {
		tarea.descripcion = nuevaDescripcion.trim();
		guardarTareasLocalStorage();
		renderizarTareas(obtenerTareasFiltradas());
	}
}

function toggleCompletada(id) {
	const tarea = tareas.find((t) => t.id === id);
	if (tarea) {
		tarea.completada = !tarea.completada;
		guardarTareasLocalStorage();
		renderizarTareas(obtenerTareasFiltradas());
	}
}

function obtenerTareasFiltradas() {
	if (filtroActual === "todas") {
		return tareas;
	} else if (filtroActual === "pendientes") {
		return tareas.filter((t) => !t.completada);
	} else if (filtroActual === "completadas") {
		return tareas.filter((t) => t.completada);
	}
	return tareas;
}

function aplicarFiltro(filtro) {
	filtroActual = filtro;

	// Actualizar estados visuales y ARIA
	document.querySelectorAll(".btn-filtro").forEach((btn) => {
		const estaActivo = btn.dataset.filtro === filtro;
		btn.classList.toggle("activo", estaActivo);
		btn.setAttribute("aria-pressed", estaActivo);
	});

	renderizarTareas(obtenerTareasFiltradas());
}

// ========================================
// 5. INICIALIZACIÓN
// ========================================
document.addEventListener("DOMContentLoaded", () => {
	cargarTareasDeStorage();
	renderizarTareas(obtenerTareasFiltradas());

	document
		.getElementById("btn-agregar")
		.addEventListener("click", agregarTarea);

	document.getElementById("input-tarea").addEventListener("keypress", (e) => {
		if (e.key === "Enter") {
			agregarTarea();
		}
	});

	document.querySelectorAll(".btn-filtro").forEach((btn) => {
		btn.addEventListener("click", function () {
			aplicarFiltro(this.dataset.filtro);
		});
	});
});
