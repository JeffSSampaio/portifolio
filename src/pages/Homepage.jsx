import '../styles/homepage.css';
import Header from '../components/Header';
import CardPerfil from '../components/CardPerfil';
import Footer from '../components/Footer';
import  useTitulo  from '../hooks/useTitulo';
function Homepage() {
    useTitulo('Home');
    return(
       
      <div className="layout-homepage">
      <Header />

      <main className="main-homepage">
        <CardPerfil />
    
      </main>

        <Footer>
            <p>© 2026 Jefferson Sampaio. Todos os direitos reservados.</p>
        </Footer>
     
    </div>
           
      
         
       
    );

}

export default Homepage;