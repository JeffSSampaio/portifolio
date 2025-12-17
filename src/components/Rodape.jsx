
import '../styles/rodape.css';

function Rodape({children}) {
    return(
        <footer className="footer-page">
           {children}
        </footer>
    );
}
export default Rodape;