import { getGithubRepositorios } from "../services/githubService";
import { useEffect, useState } from "react";
import Card from "./Card";
function RepoCards({ largura='auto', altura='auto', margem , isHover, cor= '#4748abff'}) {

    const [repositorios, setRepositorios] = useState([]);

    useEffect(() => {
        getGithubRepositorios().then(repos => {
            setRepositorios(repos);
        });
    }, []);

    

    return (
        <div className="repo-scroll">
            {repositorios.map((repo) => (
                <Card key={repo.id} backgroundColor={cor} margin={margem} width={largura} height={altura} borderRadius={8} isHover={isHover} overFlow="none" className={'cardRepo'}  >
                    <h3 className='texto-repo-card text-white font-semibold'>{repo.name}</h3>
                    <p className=' texto-repo-card  text-gray-200 text-sm'>{repo.description}</p>
                    <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className='text-blue-300 text-xs'>Ver no GitHub</a>
                </Card>
            ))}
       
        </div>
      
    );

}
export default RepoCards;