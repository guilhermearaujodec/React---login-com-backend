import { useNavigate } from "react-router-dom"

const Dashboard =()=>{

//Hook- useNavigate - ele redireciona para outro componente
    const navigate = useNavigate();

//criando a função handlLogout

const handleLogout=()=>{
     sessionStorage.removeItem("usuario")
     sessionStorage.removeItem("senha")
     alert("Saindo da Sessão")
     navigate("/")

}



    return(
        <>
        <h1>Dashboard</h1>

        <button onClick={handleLogout}>Logout</button>
        </>
    )
}
export default Dashboard