import { useState, useEffect } from "react"
import{Link} from 'react-router-dom'
import { FaEdit, FaTrash} from 'react-icons/fa';

const ListarUsuarios =()=>{

     //Hook - useState - Manipula o estado da variavel
     const [usuarios,setUsuarios]= useState([])


     // função deletar
  const handleDelete = (id) => {
    fetch(`http://localhost:5000/usuarios/${id}`, {
      method: 'delete',
    })
      .then(() => {
        window.location = '/listarUsuarios';
      })
      .catch((error) => {
        console.log(error);
      });
  };


   //Hook- useEffect - carrega todo os usuarios cadastrados com uma promisse assincrona
   useEffect(() => {
    fetch('http://localhost:5000/usuarios/')
      .then((resp) => {
        return resp.json();
      })
      .then((resp) => {
        setUsuarios(resp);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []); //callback retorna uma vez

    return (
        <section className='listarUsuario'>
        <h1>Lista Usuários</h1>
              <Link to="/cadUsuarios">Inserir Novo Usuario</Link>
              <Link to="/login" >Voltar</Link>
              <table>
                <thead>
                  <tr>           
                    <th>Usuario</th>
                    <th>senha</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {usuarios.map((item,index) => (
                    <tr key={index}>
                     
                      <td>{item.usuario}</td>
                      <td>{item.senha}</td>           
                      <td></td>
                      <td>
                        <Link to={`/editarUsuarios/${item.id}`}>
                          <FaEdit />
                        </Link>
                        <button onClick={handleDelete.bind(this, item.id)}>
                          <FaTrash />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
        </section>
      )
    
}
export default ListarUsuarios