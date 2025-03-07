import { BrowserRouter, Route, Routes } from "react-router-dom"
import Inicio from "./paginas/inicio"
import Sobremim from "./paginas/sobremim"
import Menu from "./components/Menu"
import Rodape from "./components/Rodape"
import PaginaPadrao from "./components/PaginaPadrao"
import Post from "./paginas/Post"
import NaoEncontrada from "./paginas/NaoEncontrada"

function AppRoutes() {


  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<PaginaPadrao />}>
          <Route index element={<Inicio />} />
          <Route path="sobremim" element={<Sobremim />} />
          <Route path="posts/:id" element={<Post />} />

        </Route>

        <Route path="*" element={<NaoEncontrada />} />
      </Routes>
      <Rodape />
    </BrowserRouter>
  )
}

export default AppRoutes
