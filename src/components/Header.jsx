import "../styles/header.css"



function Header() {

    return(
        <header className="header">
            <ul>
                <a href="/info"> <li>Info</li> </a>
                <a href="/feed"> <li>Feed</li> </a>
                <a href="/certificacoes"> <li>Certificações</li> </a>
                <a href="/projetos"> <li>Projetos</li> </a>
                <a href="/contato"> <li>Contato</li> </a>
            </ul>
            </header>
    )

}
    
export default Header;