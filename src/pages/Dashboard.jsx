import useTitulo from "../hooks/useTitulo";

function Dashboard({children}) {
    useTitulo('Dashboard');
    return(
        <div> 
                <Header children={ <li><a href="/homepage">Home</a></li>}/>
             <main>{children}</main>
        </div>
    );
}

export default Dashboard;