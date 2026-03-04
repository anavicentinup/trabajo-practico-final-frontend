import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "../views/Home"
import { NotFound } from "../views/NotFound"
import { Login } from "../views/Login"
import { RouteProtected } from "../components/RouteProtected"
import { Register } from "../views/Register"
import { AbautUs } from "../views/AbautUs"

const RouterApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RouteProtected><Home /></RouteProtected>} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/register" element={<Register/>}/>
        <Route path="/abautUs" element={<AbautUs/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export { RouterApp }