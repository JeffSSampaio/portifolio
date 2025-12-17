import useTitulo from "../hooks/useTitulo";

function Dashboard({children}) {
    useTitulo('Dashboard');
    return(
        <div> 
             <main>{children}</main>
        </div>
    );
}

export default Dashboard;