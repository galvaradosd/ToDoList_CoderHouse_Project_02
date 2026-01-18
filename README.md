# 📝 Gestor de Tareas

Una aplicación web moderna y accesible para gestionar y organizar tus tareas diarias. Desarrollada con JavaScript vanilla, HTML5 y CSS3.

![Versión](https://img.shields.io/badge/versión-1.0.0-blue)
![Licencia](https://img.shields.io/badge/licencia-MIT-green)

## 🌟 Características

- ✅ **Crear tareas** - Agrega nuevas tareas con facilidad
- ✏️ **Editar tareas** - Modifica la descripción de tareas existentes
- 🗑️ **Eliminar tareas** - Borra tareas que ya no necesites
- ✔️ **Marcar como completadas** - Marca/desmarca tareas según su estado
- 🔍 **Filtros inteligentes** - Filtra por todas, pendientes o completadas
- 💾 **Persistencia de datos** - Las tareas se guardan automáticamente en localStorage
- 📱 **Diseño responsivo** - Funciona perfectamente en móviles, tablets y escritorio
- ♿ **Accesible** - Cumple con estándares WCAG con roles ARIA y navegación por teclado
- 🎨 **Interfaz moderna** - Diseño limpio con gradientes y animaciones suaves

## 🚀 Demo

Abre `index.html` en tu navegador para ver la aplicación en acción.

## 📋 Requisitos

No se requieren dependencias externas. Solo necesitas un navegador web moderno que soporte:
- ES6+ (JavaScript moderno)
- localStorage API
- CSS Grid y Flexbox

## 🛠️ Instalación

1. Clona el repositorio:
```bash
git clone https://github.com/galvaradosd/ToDoList_CoderHouse_Project_02.git
```

2. Navega al directorio del proyecto:
```bash
cd ToDoList_CoderHouse_Project_02
```

3. Abre `index.html` en tu navegador favorito:
```bash
open index.html
```

O simplemente arrastra el archivo `index.html` a tu navegador.

## 📁 Estructura del Proyecto

```
ToDoList_CoderHouse_Project_02/
├── index.html        # Estructura HTML y marcado semántico
├── styles.css        # Estilos, variables CSS y responsive design
├── main.js          # Lógica de la aplicación
└── README.md        # Documentación del proyecto
```

## 🎯 Uso

### Agregar una tarea
1. Escribe la descripción de tu tarea en el campo de texto (máximo 200 caracteres)
2. Presiona el botón "Agregar" o la tecla Enter

### Completar una tarea
- Haz clic en el checkbox a la izquierda de la tarea

### Editar una tarea
- Haz clic en el botón de editar (✏️) y modifica el texto en el prompt

### Eliminar una tarea
- Haz clic en el botón de eliminar (🗑️) y confirma la acción

### Filtrar tareas
- **Todas**: Muestra todas las tareas
- **Pendientes**: Solo tareas sin completar
- **Completadas**: Solo tareas marcadas como completadas

## 💻 Tecnologías Utilizadas

- **HTML5** - Marcado semántico y accesible
- **CSS3** - Variables CSS, Grid, Flexbox, animaciones
- **JavaScript (ES6+)** - Lógica de la aplicación
- **localStorage** - Persistencia de datos local
- **ARIA** - Atributos de accesibilidad

## 🎨 Características de Diseño

### Sistema de Diseño
- Variables CSS organizadas para fácil personalización
- Paleta de colores moderna (Indigo y violeta)
- Espaciado consistente basado en sistema de 8pt
- Transiciones y animaciones suaves

### Responsivo
- **Desktop**: Layout completo con espaciado generoso
- **Tablet (≤768px)**: Botones apilados, layout ajustado
- **Móvil (≤480px)**: Vista de una columna, botones full-width

### Accesibilidad
- Roles ARIA y landmarks semánticos
- Labels ocultos visualmente para lectores de pantalla
- Estados de foco visibles
- Soporte para `prefers-reduced-motion`
- Navegación completa por teclado

## 📝 Arquitectura del Código

### main.js - Organización

```javascript
// 1. Variables globales y estado
// 2. Funciones de almacenamiento (localStorage)
// 3. Funciones de renderizado (DOM)
// 4. Funciones de lógica de negocio
// 5. Inicialización y event listeners
```

### Funciones Principales

- `agregarTarea()` - Crea y guarda una nueva tarea
- `eliminarTarea(id)` - Elimina una tarea con confirmación
- `editarTarea(id)` - Permite editar la descripción
- `toggleCompletada(id)` - Cambia el estado de completado
- `aplicarFiltro(filtro)` - Filtra las tareas mostradas
- `renderizarTareas(tareasParaMostrar)` - Actualiza el DOM
- `guardarTareasLocalStorage()` - Persiste en localStorage
- `cargarTareasDeStorage()` - Carga datos al iniciar

## 🔒 Manejo de Datos

Los datos se almacenan en el navegador usando `localStorage`:

```javascript
{
  "tareas": [
    {
      "id": 1234567890,
      "descripcion": "Comprar leche",
      "completada": false
    }
  ]
}
```

## 🐛 Manejo de Errores

- Validación de entrada vacía
- Try-catch en la carga de localStorage
- Limpieza automática de datos corruptos
- Console logs para debugging

## 🚧 Mejoras Futuras

- [ ] Edición inline de tareas
- [ ] Drag & drop para reordenar
- [ ] Categorías o etiquetas
- [ ] Fechas de vencimiento
- [ ] Modo oscuro
- [ ] Exportar/importar tareas
- [ ] Búsqueda de tareas
- [ ] Backend para sincronización en la nube

## 👤 Autor

**Germán Alvarado**
- GitHub: [@galvaradosd](https://github.com/galvaradosd)

## 📄 Licencia

Este proyecto es parte del curso de JavaScript en CoderHouse y está disponible para uso educativo.

## 🙏 Agradecimientos

Desarrollado como proyecto para el curso de JavaScript en CoderHouse - 2026

---

⭐ Si te gusta este proyecto, ¡dale una estrella en GitHub!
