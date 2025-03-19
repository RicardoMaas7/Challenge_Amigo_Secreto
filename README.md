# 🎁 Amigo Secreto

## 📌 Descripción
Amigo Secreto es una aplicación web interactiva que permite agregar nombres de participantes y realizar un sorteo aleatorio para asignar un "amigo secreto" a cada uno. Es ideal para eventos, reuniones o simplemente para divertirse con amigos.

## 🚀 Características
- Agregar nombres a una lista.
- Evitar nombres duplicados.
- Realizar un sorteo aleatorio.
- Mostrar el nombre sorteado en pantalla.
- Limpiar la lista después del sorteo para una nueva ronda.

## 🛠️ Tecnologías utilizadas
- HTML5
- CSS3
- JavaScript (JS)

## 📂 Estructura del Proyecto
```
📁 amigo-secreto/
│── 📄 index.html      # Estructura principal de la aplicación
│── 📄 style.css       # Estilos de la interfaz
│── 📄 app.js         # Lógica del sorteo y manipulación del DOM
└── 📁 assets/        # Imágenes y recursos estáticos
```

## 📖 Cómo usar la aplicación
1. **Abrir `index.html` en un navegador.**
2. **Ingresar nombres** en el campo de texto y presionar el botón "Añadir".
3. **Ver la lista de amigos agregados.**
4. **Presionar el botón "Sortear amigo"** para obtener un resultado aleatorio.
5. **La lista se reinicia automáticamente** después del sorteo.

## 🛠️ Instalación y ejecución
1. Clona este repositorio en tu computadora:
   ```sh
   git clone https://github.com/tu-usuario/amigo-secreto.git
   ```
2. Abre el archivo `index.html` en tu navegador.
3. ¡Disfruta del sorteo! 🎉

## 📌 Ejemplo de Código (Función de Sorteo)
```javascript
function sortearAmigo() {
    if (amigos.length > 0) {
        const nombreAleatorio = Math.floor(Math.random() * amigos.length);
        const amigoSorteado = amigos[nombreAleatorio];

        document.getElementById('resultado').innerHTML = `<li> ¡El amigo sorteado es: ${amigoSorteado}!</li>`;
        
        // Vaciar la lista después del sorteo
        amigos = [];
        document.getElementById('listaAmigos').innerHTML = "";
    } else {
        alert("No hay amigos para sortear");
    }
}
```

## 🏆 Contribuciones
Si deseas mejorar este proyecto, ¡serán bienvenidas! Puedes hacer un **fork**, realizar mejoras y enviar un **pull request**.

## 📜 Licencia
Este proyecto está bajo la licencia MIT. Puedes usarlo y modificarlo libremente.

---
💡 **Desarrollado con pasión por Seir en colaboración con Alura** 🚀

