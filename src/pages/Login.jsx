import { useState } from "react";
import { auth } from "../config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();
  const dashboardPath = import.meta.env.VITE_DASHBOARD_PATH;

  const handleLogin = async (e) =>{
    e.preventDefault();
    try{
      await signInWithEmailAndPassword(auth, email, senha);
      alert("acesso autorizado")
      navigate(dashboardPath);


    } catch(erro){
      alert("Credenciais inválidas" + erro.message);
    }
  }

    return(
        <div className="login-container flex h-screen justify-center items-center"> 
            <form onSubmit={handleLogin} className="login-form flex flex-col gap-4 bg-white p-6 rounded shadow-md">
                <h2 className="text-2xl font-bold mb-4">Admin Login</h2>
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="p-2 border border-gray-300 rounded"
                  required
                />
                <input
                  type="password"
                  placeholder="Senha"
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                  className="p-2 border border-gray-300 rounded"
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