import '../styles/homepage.css';
import Header from '../components/Header';
import CardPerfil from '../components/CardPerfil';
import Rodape from '../components/Rodape';
function Homepage({children}) {
    return(
       
      <div className="layout-homepage">
      <Header />

      <main className="main-homepage">
        <CardPerfil />
        {children}
      </main>

        <Rodape>
            <p>© 2024 Jefferson Sampaio. Todos os direitos reservados.</p>
        </Rodape>
     
    </div>
           
      
         
       
    );

}

export default Homepage;