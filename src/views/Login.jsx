import { useContext, useState } from "react"
import { ChatContext } from "../context/ChatContext"
import { useNavigate } from "react-router-dom"

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errorEmail, setErrorEmail] = useState(null)
  const [errorPass, setErrorPass] = useState(null)
  const [error, setError] = useState(false)
  const [showPass, setShowPass] = useState(false)

  const { login, handleUser, loggedUser } = useContext(ChatContext)

  const navigate = useNavigate()

  const handleChangeEmail = (e) => {
    setEmail(e.target.value)
  }

  const handleChangePassword = (e) => {
    setPassword(e.target.value)
  }

  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   setError(null)
  //   const response = login({ email, password })
  //   if ( response || loggedUser && email === loggedUser.email && password === loggedUser.password) {
  //     handleUser({ email, password })
  //     navigate("/")
  //     return
  //   } 
  //   setError(true)
  //   return
  // }

  const handleSubmit = (e) => {
    e.preventDefault()
    setError(null)
    setErrorEmail(null)
    setErrorPass(null)
    const response = login({ email, password })
    console.log(response.password, response.email)
    if (response) {
      if (password.toLowerCase() !== response.password.toLowerCase()) {
        setErrorPass(true)
        return
      }
      handleUser({ email, password })
      navigate("/")
      return
    }
    if (loggedUser) {
      if (email.toLowerCase() !== loggedUser.email.toLowerCase()) {
        setErrorEmail(true)
        return
      }
      if (password.toLowerCase() !== loggedUser.password.toLowerCase()) {
        setErrorPass(true)
        return
      }
      handleUser({ email, password })
      navigate("/")

    }
    setError(true)
    return
  }


  const createNewCount = () => {
    navigate("/register")
  }

  const provideInfo = () => {
    navigate("/abautUs")
  }

  const showingPassword = () => {
    setShowPass(!showPass)
  }

  return (
    <section className="login">
      <div className="monos">
        <img
          src="https://em-content.zobj.net/thumbs/120/apple/354/see-no-evil-monkey_1f648.png"
          className="mono mono-ojos"
        />

        <img
          src="https://em-content.zobj.net/thumbs/120/apple/354/hear-no-evil-monkey_1f649.png"
          className="mono mono-oidos"
        />

        <img
          src="https://em-content.zobj.net/thumbs/120/apple/354/speak-no-evil-monkey_1f64a.png"
          className="mono mono-boca"
        />
      </div>
      <h2 className="title-login">Bienvenido, inicia sesión</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Correo electrónico"
          onChange={handleChangeEmail}
        />
        <div className="btnPassword">
          <input
            type={showPass ? "text" : "password"}
            placeholder="Contraseña"
            onChange={handleChangePassword}
          />
          <button
            onClick={showingPassword}
            type="button">
            {showPass ? <p>🙉</p> : <p>🙈</p>}
          </button>
        </div>
        <button>Ingresar</button>
        {error && <p className="error-form">No existe el usuario</p>}
        {errorEmail && <p className="error-form">Email invalido</p>}
        {errorPass && <p className="error-form">Contraseña incorrecta</p>}
        <button onClick={createNewCount}>Crear una Cuenta nueva</button>
      </form>
      <h4 className="abautUs" onClick={provideInfo}>Acerca de Tu App</h4>
    </section>
  )
}

export { Login }