import { useNavigate } from "react-router-dom"
const AbautUs = () =>{
    const navigate= useNavigate()

    const backTotop = () => {
    navigate("/")
}
    return(
       <section>
         <h1>Este es mi Proyecto X</h1>
        <h3 onClick={backTotop}>volver</h3>
       </section>
    )
}
export {AbautUs}
