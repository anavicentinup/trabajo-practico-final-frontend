import { useContext, useEffect, useState } from "react"
import { ChatContext } from "../context/ChatContext"
import { useNavigate } from "react-router-dom"

const Aside = () => {
  const [search, setSearch] = useState("")
 const navigate = useNavigate()
  const { users, handleSelectedUserId,logout } = useContext(ChatContext)

  const handleChange = (event) => {
    setSearch(event.target.value)
  }

  const filteredUsers = users.filter((user) => {
    const fullName = `${user.firstName} ${user.lastName}`
    return fullName.toLowerCase().includes(search.toLowerCase())
  })

  const handleClick = (id) => {
    handleSelectedUserId(id)
  }
  const handleLogout = () => {
    logout()
    navigate("/login")
  }
  return (
    <aside>
      <h1>Chat UTN</h1>
      <input className="search" type="search" placeholder="Buscar contactos..." onChange={handleChange} />
      {
        filteredUsers.length === 0 && <p className="not-found-text">No se encontraron contactos</p>
      }
      <ul>
        {
          filteredUsers.map((user) => (
            <li key={user.id} onClick={() => handleClick(user.id)}>
              <img src={user.image} alt="" />
              <div>
                {user.firstName} {user.lastName}
                <small>{user.address.country}</small>
              </div>
            </li>
          ))
        }
      </ul>
       <button onClick={handleLogout}>Cerrar sesión</button>
    </aside>
  )
}

export { Aside }