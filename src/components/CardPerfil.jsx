
import '../styles/cardperfil.css';
import fotoPerfil from '../assets/fotoPerfil.svg';
function CardPerfil({children}) {
  
    return (
        <div className="card-perfil">
            {children}

            <div className='container-foto'>
            <img src={fotoPerfil} alt="foto" srcset="" className='fotoPerfil' />
            </div>
            <h1 className='nome-perfil'>Jefferson Sampaio</h1>
            <h2 className='objetivo-perfil'>Desenvolvedor de Software</h2>
            

        </div>
    );
}

export default CardPerfil;