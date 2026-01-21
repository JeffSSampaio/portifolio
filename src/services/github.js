
const urlBase = 'https://api.github.com';



export async function getGithubUsuario() {
  
 const response = await fetch(`${urlBase}/users/JeffSSampaio`);
 if (!response.ok) {
    throw new Error('Erro ao buscar dados do usuário no GitHub');
    }   
 const data = await response.json();
 return data;
}

export async function getGithubRepositorios(){
    const response = await fetch(`${urlBase}/users/JeffSSampaio/repos`);
    if (!response.ok) {
        throw new Error('Erro ao buscar repositórios do GitHub');
    }
    const data = await response.json();
    return data;
}

export async function getGithubTodasLinguagens(){
    try {
        const repos = await getGithubRepositorios();
        const languagesMap = {};
        
        
        for (const repo of repos) {
            const response = await fetch(`${urlBase}/repos/JeffSSampaio/${repo.name}/languages`);
            if (response.ok) {
                const languages = await response.json();
                Object.entries(languages).forEach(([lang, bytes]) => {
                    languagesMap[lang] = (languagesMap[lang] || 0) + bytes;
                });
            }
        }
        
        return languagesMap;
    } catch (error) {
        throw new Error('Erro ao buscar linguagens do GitHub: ' + error.message);
    }
}
export async function getGithubTopLinguagens(top = 4) {
  try {
    const repos = await getGithubRepositorios();
    const languagesMap = {};

    for (const repo of repos) {
      const response = await fetch(`${urlBase}/repos/JeffSSampaio/${repo.name}/languages`);
      if (response.ok) {
        const languages = await response.json();
        Object.entries(languages).forEach(([lang, bytes]) => {
          languagesMap[lang] = (languagesMap[lang] || 0) + bytes;
        });
      }
    }
    const sorted = Object.entries(languagesMap)
      .map(([name, bytes]) => ({ name, bytes }))
      .sort((a, b) => b.bytes - a.bytes);

    const topLanguages = sorted.slice(0, top);
    const topMap = {};
    topLanguages.forEach(lang => {
      topMap[lang.name] = lang.bytes;
    });

    return topMap;
  } catch (error) {
    throw new Error('Erro ao buscar top linguagens do GitHub: ' + error.message);
  }
}
