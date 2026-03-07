import { useNavigate } from "react-router-dom"
const AbautUs = () => {
    const navigate = useNavigate()

    const backTotop = () => {
        navigate("/")
    }
    return (
        <section className="acerca">
            <h1>TRABAJO PRACTICO FINAL FRONT-END</h1>
            <p>
                Mi proyecto esta basado en un duplicado de aplicacion de mensajeria.
                El objetivo principal es un sistema de login que acceda a una app donde se encuentre informacion personal del usuario.
                Por ello desarrollamos un sistema que navega entre diferentes secciones segun la situacion del usuario.
                Un usuario puede ingresar y el sistema valida los datos contra una lista de usuarios simulados (mockUsers).
                Un nuevo Usuario debe crearse una cuenta nueva y el sistema lo guarda e ingresa desde la pagina login y lo valida.
                Una vez identificado, el usuario accede a la pagina principal de la aplicacion.
                El objetivo de este proyecto es aplicar todos los conceptos aprendidos en React.
            </p>
            <h2>Partes principales de la aplicacion:</h2>
            <ol>
                <li>Login: es un formulario donde el usuario ingresa email y contraseña. Incluye validaciones y mensajes de error. Corrobora con sistema de
                    autenticación (mockUsers y localStorage) y proporciona opcion para crear nueva cuenta. </li>
                <li>Registro: es un formulario para crear una nueva cuenta y poder ingresar a la app.</li>
                <li> Home: Es la pantalla a la que accede el usuario después de iniciar sesión correctamente.
                    Cuenta con un Aside que contiene la lista de usuarios simulada con un filtrador de usarios, y
                    muestra el chat del usuario seleccionado. </li>
                <li> Not found: Se muestra cuando el usuario intenta entrar a una ruta que no existe.</li>
            </ol>

            <h2>TEGNOLOGIAS utilizadas: </h2>

            <ul>
                <li>React</li>
                <li>Html,Css,JavasCript.</li>
                <li>React Router Dom.</li>
            </ul>

            <h2> Decisiones Tomadas:</h2>
            <ul>
                <li>Utilice renderizado condicional para mostrar mensajes de error cuando los datos ingresados son incorrectos.</li>
                <li>Convertí los datos que ingresan al momento de compararlos para evitar errores si el usuario escribe el email en mayúsculas.</li>
                <li>Agregué un botón para mostrar u ocultar la contraseña y para navegar entre login-register para mejorar la experiencia del usuario.</li>
            </ul>

            <h2>Observaciones:</h2>
            <p>Este proyecto me permitió practicar conceptos importantes de React como el manejo de estado,
                eventos en formularios, hooks, navegacion y  renderizado condicional.
                También fue una buena oportunidad para entender cómo funciona la lógica de autenticación
                de usuarios y cómo manejar distintos tipos de errores en un formulario de login.</p>

            <h2>Dificultades encontradas:</h2>
            <p>Durante el desarrollo del proyecto tuve inconvenientes con el envio de formularios, con los condicionales,
                con el manejo de errores, en la aplicacion de las condiciones.
                Tambien para la experiencia del usuario con el manejo de min/mayuscula pero lo solucione con toLowerCase().
                Y al recibir informacion "undefined" de funciones que estan en distintos componentes.</p>

            <h3 className="return" onClick={backTotop}>volver</h3>
        </section>
    )
}
export { AbautUs }


// ●
// Explicación del proyecto
// ●
// Partes principales de la aplicación
// ●
// Tecnologías utilizadas
// ●
// Decisiones de desarrollo tomadas
// ●
// Observaciones personales del estudiante
// ●
// Dificultades encontradas (opcional)