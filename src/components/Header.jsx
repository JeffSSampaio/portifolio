import "../styles/header.css"



function Header() {

    return (
        <header className="header">
            <ul className="  max-w-6xl flex flex-wrap md:flex-col justify-center gap-4 sm:gap-6 md:gap-8 px-4 sm:px-6 md:px-10 py-3 rounded-xl shadow-lg">
                <li> <a href="/info">Info</a> </li>
                <li> <a href="/feed">Feed</a> </li>
                <li> <a href="/certificacoes">Certificações</a> </li>
                <li> <a href="/projetos">Projetos</a> </li>
                <li> <a href="/contato">Contato</a> </li>
            </ul>
        </header>
    )

}

export default Header;