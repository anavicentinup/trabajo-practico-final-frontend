import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { ChatContext } from "../context/ChatContext"

const Register = () => {
    const navigate = useNavigate()
    const { handleUser } = useContext(ChatContext)

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [nacionality, setNacionality] = useState("")

    const handleName = (e) => {
        setFirstName(e.target.value)
    }
    const handleLastName = (e) => {
        setLastName(e.target.value)
    }
    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handlePassword = (e) => {
        setPassword(e.target.value)
    }
    const handleNacionality = (e) => {
        setNacionality(e.target.value)
    }

    const handleNewUser = (e) => {
        e.preventDefault()
        const newUser = { firstName, lastName, email, password, nacionality }
        handleUser(newUser)
        navigate("/login")
    }

    const backTotop = () => {
        navigate("/login")
    }

    return (
        <section>
            <form onSubmit={handleNewUser}>
                <input type="text" name="firstName" placeholder="ingresa tu nombre" onChange={handleName} />
                <input type="text" name="lastName" placeholder="ingresa tu apellido" onChange={handleLastName} />
                <input type="email" name="email" placeholder="ingresa tu email" onChange={handleEmail} />
                <input type="text" name="password" placeholder="ingresa tu contraseña" onChange={handlePassword} />
                <input type="text" name="addres" placeholder="ingresa tu Nacionalidad" onChange={handleNacionality} />
                <button>Enviar</button>
            </form>
            <h3 className="return" onClick={backTotop}>volver</h3>
        </section>
    )
}
export { Register }