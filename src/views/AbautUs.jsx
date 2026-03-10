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
                Mi proyecto esta basado en un duplicado de aplicacion de mensajeria. <br />
                El objetivo principal es un sistema de login que acceda a una app donde se encuentre informacion personal del usuario. <br />
                Por ello desarrollamos un sistema que navega entre diferentes secciones segun la situacion del usuario. <br />
                Un usuario puede ingresar y el sistema valida los datos contra una lista de usuarios simulados (mockUsers).<br />
                Un nuevo Usuario debe crearse una cuenta nueva y el sistema lo guarda e ingresa desde la pagina login y lo valida. <br />
                Una vez identificado, el usuario accede a la pagina principal de la aplicacion. <br />
                El objetivo de este proyecto es aplicar todos los conceptos aprendidos en React.
            </p>
            <h2>Partes principales de la aplicacion:</h2>
            <ol>
                <li><span>Login:</span> es un formulario donde el usuario ingresa email y contraseña. Incluye validaciones y mensajes de error. Corrobora con sistema de
                    autenticación (mockUsers y localStorage) y proporciona opcion para crear nueva cuenta. </li>
                <li><span>Registro:</span> es un formulario para crear una nueva cuenta y poder ingresar a la app.</li>
                <li> <span>Home:</span> Es la pantalla a la que accede el usuario después de iniciar sesión correctamente.
                    Cuenta con un Aside que contiene la lista de usuarios simulada con un filtrador de usuarios, y
                    muestra el chat del usuario seleccionado. </li>
                <li> <span>Not found:</span> Se muestra cuando el usuario intenta entrar a una ruta que no existe.</li>
            </ol>

            <h2>TEGNOLOGIAS utilizadas: </h2>
            <div className="containerTeg">
                <ul>
                    <li>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" width="60" />
                        <small>React</small>
                    </li>
                    <li>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" width="60" />
                        <small>JavaScript</small>
                    </li>
                    <li>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" width="60" />
                        <small>Css</small>
                    </li>
                    <li>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" width="60" />
                        <small>Html</small>
                    </li>
                </ul>
            </div>

            <h2> Decisiones Tomadas:</h2>
            <ul>
                <li>Utilicé renderizado condicional para mostrar mensajes de error cuando los datos ingresados son incorrectos.</li>
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
