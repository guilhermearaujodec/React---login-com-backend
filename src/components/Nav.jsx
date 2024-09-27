import {Link} from 'react-router-dom'

const Nav=()=>{

//pegando o usuario da sessão
 const getUsuario = sessionStorage.getItem("usuario")



    return(
        <>
         <Link to="/">Home</Link>
         <Link to="/login">Login</Link>

         <span>
            {getUsuario ? (
                <p className="userlogado">
                    Usuário Logado : {getUsuario}
                </p>
            ):(
                <p>Usuario não logado</p>
            )}
         </span>
        </>
    )
}
export default Nav