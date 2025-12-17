
import '../styles/cardperfil.css';
import fotoPerfil from '../assets/fotoPerfil.svg';
import githubIcon from '../assets/github_icon.svg';
import linkedinIcon from '../assets/linkedin_icon.svg';
/*  import instagramIcon from '../assets/instagram_icon.svg';  */
function CardPerfil({children}) {
  
    return (
        <div className="card-perfil">
            {children}

            <div className='container-foto'>
            <img src={fotoPerfil} alt="foto" srcset="" className='fotoPerfil' />
            </div>
            <h1 className='nome-perfil'>Jefferson Sampaio</h1>
            <h2 className='objetivo-perfil'>Desenvolvedor de Software</h2>

            <div className='container-redes-perfil'> 
                <h3>Siga-me</h3>
                <div className='container-icons'>
                <a href="https://github.com/JeffSSampaio"><img src={githubIcon} alt="github" srcset=""  className='icon'/> </a>
                <a href="https://www.linkedin.com/in/jeffersonssampaio/"><img src={linkedinIcon} alt="linkedin" srcset="" className='icon'/></a>
                </div>

            </div>
          
            

        </div>
    );
}

export default CardPerfil;