import  useTitulo  from '../hooks/useTitulo';
import Header from '../components/Header';
import '../styles/projetos.css';
import LanguagePieCards from '../components/LanguagePieCards';
import LanguageBarCards from '../components/LanguageBarCards';
import RepoCards from '../components/RepoCards';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
function Projetos() {
    useTitulo('Projetos');
    return(
        <div>
          <Header children={ <li><Link to="/homepage">Home</Link></li>}/>

          <h1 className='titulo-projetos flex items-center justify-center mt-[20px]'> Projetos</h1>
          
          <div className='container-projetos'>
            <div className='projetos-grid'>
              <div className='repositorios-section' style={{gridArea:"repositorios"}}>
                <h2>Repositórios</h2>
                <RepoCards margem={'10px'} isHover={true} />
              </div>
              
              <div className='linguagens-section' style={{gridArea:"linguagensPie"}}>
                <h2>Linguagens mais utilizadas</h2>
                <LanguagePieCards largura={500} altura={400} margem={{ top: -90, right: 10, left: 10, bottom: 5 }}/>
             
              </div>
              <div className='todas-linguagens-section todasLinguagens' style={{gridArea:"linguagensBar"}}>
                <h2>Todas as linguagens</h2>
                <LanguageBarCards largura={'100%'} altura={400} />
              </div>
            </div>
          </div>
            <Footer> 
              <p className="text-center py-2 text-white">© 2026 Jefferson Sampaio</p>
            </Footer>
        </div>
    )
}

export default Projetos;