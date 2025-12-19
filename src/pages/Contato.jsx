import  useTitulo  from '../hooks/useTitulo';

function Contato() {
    useTitulo('Contato');
    return(
        <div>
              <Header children={ <li><a href="/homepage">Home</a></li>}/>
          <h1>Pagina de Contato</h1>
        </div>
    )
}
export default Contato;