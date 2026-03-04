import { useContext, useState } from "react"
import { ChatContext } from "../context/ChatContext"
import { useNavigate } from "react-router-dom"

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(null)

  const { login, handleUser } = useContext(ChatContext)

  const navigate = useNavigate()

  const handleChangeEmail = (e) => {
    setEmail(e.target.value)
  }

  const handleChangePassword = (e) => {
    setPassword(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setError(null)
    const response = login({ email, password })

    if (!response) {
      setError(true)
      return
    }

    handleUser({ email, password })
    navigate("/")
  }

  const createNewCount = () => {
    navigate("/register")
  }

  const provideInfo = () =>{
    navigate("/abautUs")
  }
  
  return (
    <section>
      <h2 className="title-login">Bienvenido, inicia sesión</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Correo electrónico"
          onChange={handleChangeEmail}
        />
        <input
          type="password"
          placeholder="Contraseña"
          onChange={handleChangePassword}
        />
        <button>Ingresar</button>
        {
          error && <p className="error-form">Error al ingresar</p>
        }
      </form>
      <h3 onClick={createNewCount}>Crear una Cuenta nueva</h3>
      <h3 onClick={provideInfo}>Acerca de Tu App</h3>
    </section>
  )
}

export { Login }