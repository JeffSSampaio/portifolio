
import '../styles/cardperfil.css';
import fotoPerfil from '../assets/fotoPerfil.svg';
import githubIcon from '../assets/github_icon.svg';
import linkedinIcon from '../assets/linkedin_icon.svg';
/*  import instagramIcon from '../assets/instagram_icon.svg';  */
function CardPerfil({children}) {
  
    return (
        <div className="card-perfil  p-10 md:p-16  w-full max-w-[55rem] min-h-[40rem] rounded-2xl shadow-xl flex flex-col items-center overflow-hidden">
            {children}

            <div className='container-foto' >
            <img src={fotoPerfil} alt="foto"  className='fotoPerfil' />
            </div>
            <h1 className='nome-perfil'>Jefferson Sampaio</h1>
            <h2 className='objetivo-perfil'>Desenvolvedor de Software</h2>
          
            <div className='container-perfil'> 
                <h3>Siga-me</h3>
                <div className='container-icons'>
                <a href="https://github.com/JeffSSampaio"><img src={githubIcon} alt="github"  className='icon'/> </a>
                <a href="https://www.linkedin.com/in/jeffersonssampaio/"><img src={linkedinIcon} alt="linkedin"  className='icon'/></a>
                </div>

            </div>
          
            

        </div>
    );
}

export default CardPerfil;