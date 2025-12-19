import  useTitulo  from '../hooks/useTitulo';
import Header from '../components/Header';
function Projetos() {
    useTitulo('Projetos');
    return(
        <div>
          <Header children={ <li><a href="/homepage">Home</a></li>}/>
          <h1>Pagina de Projetos</h1>
        </div>
    )
}

export default Projetos;