import '../styles/homepage.css';
import Header from '../components/Header';
function Homepage({children}) {
    return(
        <div> 
            <Header />
             <main>{children}</main>
        </div>
       
    );

}

export default Homepage;