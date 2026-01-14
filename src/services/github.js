
const urlBase = 'https://api.github.com/users/JeffSSampaio';



export async function getGithubUsuario() {
  
 const response = await fetch(urlBase);
 if (!response.ok) {
    throw new Error('Erro ao buscar dados do usuário no GitHub');
    }   
 const data = await response.json();
 return data;
}

export async function getGithubRepositorios(){
    const response = await fetch(`${urlBase}/repos`);
    if (!response.ok) {
        throw new Error('Erro ao buscar repositórios do GitHub');
    }
    const data = await response.json();
    return data;
}

