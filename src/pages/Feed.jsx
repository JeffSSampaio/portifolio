import  useTitulo  from '../hooks/useTitulo';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Post from '../components/Post';
function Feed() {
    useTitulo('Feed');
    return(
        <div className="flex flex-col min-h-screen"> 
              <Header children={ <li><a href="/homepage">Home</a></li>}/>
          
          <h1 className='flex items-center justify-center m-[20px] texto text-[30px] font-bold'>Publicações</h1>
          
          <main className='flex flex-col flex-grow justify-start items-center '>
          <Post />
          </main>

          <Footer>
            <p className="text-center py-2 text-white">© 2026 Jefferson Sampaio</p>
          </Footer>
        </div>
    )
}
export default Feed;