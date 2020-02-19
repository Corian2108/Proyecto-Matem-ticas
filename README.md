# Proyecto-Matem-ticas
Sistema de resolución de ejercicios trigonométricos

Estructura

El proyecto lleva la siguiente estructura:

- Carpeta del proyecto
    -index.html >> Se detalla la construcción más abajo.
    -script
        -main.js >> Contiene el script principal que llama a la clase ejercicios y a las funciones de vistas.
        -ejercicios.js >> Contiene la clase ejercicios con los datos de cada ejercicio (Id, Pregunta, Imagen, Respuestas) almacenados en un array; o sea es un array de objetos
        -vistas.js >> Contiene el objeto vistas que tiene la función de mostrar y ocultar partes del html.
    -style
        -estilo.css >> Contiene el estilo del html, en principio todo el estilo estará hecho con bootstrap, este archivo es solo para colocar cambios en el color y alineamiento.
    -images >> Contiene cualquiér imagen que sea necesaria para el proyecto

El index debe contener la siguiente construcción
    
    - <header> contendrá los iconos del instituto y los datos informativos necesarios
    - <body> contendrá toda la página separada en secciones por etiquetas div's
    - <div class=materia > contendrá la materia necesaria para resolver el ejercicio, con imágenes y lo que se necesite, esto puede ir quemado directamente en el html
    - <div class=ejemplo > contendrá el ejercicio resueelto como ejemplo para poder resolver el ejercicio propuesto
    - <h2> Ejercicio Propuesto </h2> <!-- Se trata de un título estático quemado en el html -->
    - <div class=ejercicio > contendrá el ejercicio completo
        -<div class=encabezado > indica el encabezado del ejercicio propuesto
        -<div class=respuestas > contiene una serie de 5 opciones de respuesta con un select para seleccionar una
    - <div class=botones > contiene un botón para entregar la pregunta
    - <div class=correcto > contiene la pantalla de felicitación que aparece al elegir la opción correcta y el botón para avanzar al siguiente tema
    - <div class=incorrecto > contiene el mensaje de respuesta incorrecta vuelva a intentar y el botón para regresar
    - </body>
    - <footer> contendrá los datos de los integrantes, carrera, curso y profesor
