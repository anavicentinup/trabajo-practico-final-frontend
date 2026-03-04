import { useNavigate } from "react-router-dom"
const Register = () =>{
    const navigate = useNavigate()
const backTotop = () => {
    navigate("/login")
}
return(
    <section>
        <form >
<input type="text" name="firstName" placeholder="ingresa tu nombre"/>
<input type="text" name="lastName"placeholder="ingresa tu apellido"/>
<input type="email" name="email"placeholder="ingresa tu email"/>
<input type="text" name="password"placeholder="ingresa tu contraseña"/>
<input type="text" name="addres"placeholder="ingresa tu Nacionalidad"/>
<button>Enviar</button>
        </form>
    <h3 onClick={backTotop}>volver</h3>
    </section>
)
}
export {Register}