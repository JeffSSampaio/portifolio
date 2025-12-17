import '../styles/homepage.css';
import Header from '../components/Header';
import CardPerfil from '../components/CardPerfil';
function Homepage({children}) {
    return(
        <div> 
            <Header />
             <main>
                <div>
                 <CardPerfil />   
                </div>
                {children}


             </main>
        </div>
       
    );

}

export default Homepage;