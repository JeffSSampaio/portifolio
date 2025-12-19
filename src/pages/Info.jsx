
import  useTitulo  from '../hooks/useTitulo';
import Header from '../components/Header';
function Info() {
    useTitulo('Info');
    return(
        <div>
              <Header children={<li><a href="/homepage">Home</a></li>}/>
        </div>
    )
}
export default Info;