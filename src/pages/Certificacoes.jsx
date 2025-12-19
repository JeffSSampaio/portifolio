import  useTitulo  from '../hooks/useTitulo';
import Header from '../components/Header';
function Certificações() {
    useTitulo('Certificações');
    return(
        <div>
            <Header children={ <li><a href="/homepage">Home</a></li>}/>
          <h1>Pagina de Certificações</h1>
        </div>
    )
}
export default Certificações;