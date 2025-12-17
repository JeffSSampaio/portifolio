import '../styles/homepage.css';
import Header from '../components/Header';
import CardPerfil from '../components/CardPerfil';
import Rodape from '../components/Rodape';
import  useTitulo  from '../hooks/useTitulo';
function Homepage() {
    useTitulo('Home');
    return(
       
      <div className="layout-homepage">
      <Header />

      <main className="main-homepage">
        <CardPerfil />
    
      </main>

        <Rodape>
            <p>© 2024 Jefferson Sampaio. Todos os direitos reservados.</p>
        </Rodape>
     
    </div>
           
      
         
       
    );

}

export default Homepage;