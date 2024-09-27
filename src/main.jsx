import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import App from './App.jsx'
import Error from './routes/Error.jsx'
import Home from './routes/Home.jsx'
import Dashboard from './routes/Dashboard.jsx'
import Login from './routes/Login.jsx'
import CadUsuarios from './routes/CadUsuarios.jsx'
import ListarUsuarios from './routes/ListarUsuarios.jsx'

//criando a função 
const router =createBrowserRouter([
  {
    //Elementos Pai
    path:'/', element:<App/>,
    errorElement:<Error/>,

    //Elemento Filho
    children:[
     {path:'/',element:<Home/>},
     {path:'/dashboard', element:<Dashboard/>},
     {path:'/login', element:<Login/>},
     {path:'/cadUsuarios',element:<CadUsuarios/>},
     {path:'/listarUsuarios',element:<ListarUsuarios/>},

     //editarUsuario NÃO PODE ESQUECER DE :id ( para editar e excluir)
     {path:'/editarUsuarios/:id', element:<CadUsuarios/>},
    ]
  
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)