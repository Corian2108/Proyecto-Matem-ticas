# Proyecto-Matem-ticas
Sistema de resolución de ejercicios trigonométricos

Estructura

El proyecto lleva la siguiente estructura:

- Carpeta del proyecto
    -index.html >> Se detalla la construcción más abajo.
    -script
        -main.js >> Contiene el script que que muestra y oculta las diferentes secciones
    -style
        -estilo.css >> Contiene el estilo del html, en principio todo el estilo estará hecho con bootstrap, este archivo es solo para colocar cambios en el color y alineamiento.
    -images >> Contiene cualquiér imagen que sea necesaria para el proyecto
- 
El index debe contener la siguiente construcción
    
    - <header> contendrá los iconos del instituto y los datos informativos necesarios
    - <body> contendrá toda la página separada en secciones por etiquetas div's
    - <div id=home > contendrá la pantalla principal donde se elije el curos con 3 botones, uno para resolución de triángulos, otro para ley de senos y el último para ley de cosenos
    - <div id=materia > contendrá la materia necesaria para resolver el ejercicio, con imágenes y lo que se necesite, esto puede ir quemado directamente en el html
    - <div id=ejemplo > contendrá el ejercicio resueelto como ejemplo para poder resolver el ejercicio propuesto
    - <h2> Ejercicio Propuesto </h2> <!-- Se trata de un título estático quemado en el html -->
    - <div id=ejercicio > contendrá el ejercicio completo
        -<div id=encabezado > indica el encabezado del ejercicio propuesto
        -<div id=respuestas > contiene una serie de 5 opciones de respuesta con un select para seleccionar una
    - <div id=botones > contiene un botón para entregar la pregunta
    - <div id=correcto > contiene la pantalla de felicitación que aparece al elegir la opción correcta y el botón para avanzar al siguiente tema
    - <div id=incorrecto > contiene el mensaje de respuesta incorrecta vuelva a intentar y el botón para regresar
    - </body>
    - <footer> contendrá los datos de los integrantes, carrera, curso y profesor

El index deberá contener 2 ejemplos y tres ejercicios de cada tema