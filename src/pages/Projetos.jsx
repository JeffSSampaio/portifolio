import  useTitulo  from '../hooks/useTitulo';
import Header from '../components/Header';
import '../styles/projetos.css';
import LanguageCards from '../components/LanguageCards';
import RepoCards from '../components/RepoCards';
function Projetos() {
    useTitulo('Projetos');
    return(
        <div>
          <Header children={ <li><a href="/homepage">Home</a></li>}/>

          <h1 className='titulo-projetos flex items-center justify-center mt-[20px]'> Projetos</h1>
          
          <div className='container-projetos'>
            <div className='projetos-grid'>
              <div className='repositorios-section'>
                <h2>Repositórios</h2>
                <RepoCards margem={'10px'} isHover={true} />
              </div>
              
              <div className='linguagens-section'>
                <h2>Linguagens mais utilizadas</h2>
                <LanguageCards largura={400} altura={400} margem={{ top: 5, right: 10, left: 10, bottom: 5 }}/>
              </div>
            </div>
          </div>
            
        </div>
    )
}

export default Projetos;