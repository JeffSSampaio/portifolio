import { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import  useTitulo  from "../hooks/useTitulo";
function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();
  const dashboardPath = import.meta.env.VITE_DASHBOARD_PATH;

  const handleLogin = async (e) =>{
    e.preventDefault();
    try{
      await login(email, senha);
      alert("acesso autorizado")
      navigate(dashboardPath);
    } catch(erro){
      alert("Credenciais inválidas" + erro.message);
    }
  }
  useTitulo('Admin Login');

    return(
        <div className="login-container"> 
            <form onSubmit={handleLogin} className="login-form">
                <h2 className="texto-tittulo">Admin Login</h2>
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="input-email"
                  required
                />
                <input
                  type="password"
                  placeholder="Senha"
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                  className="input-senha"
                  required
                />
                <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
                  Login
                </button>
            </form>
        </div>
    );
}

export default Login;