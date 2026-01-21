
import  useTitulo  from '../hooks/useTitulo';
import Header from '../components/Header';
import fotoPerfil from '../assets/fotoPerfil.svg'; 
import Card from '../components/Card';
import Footer from '../components/Footer';
import '../styles/info.css';

function Info() {
    useTitulo('Info');
    
    const cvData = {
        name: "Jefferson Sampaio",
        title: "Desenvolvedor Front-end",
        sobre: "Sou desenvolvedor apaixonado por tecnologia com experiência em desenvolvimento web e mobile. Tenho conhecimento em HTML5, CSS3, JavaScript e React. Busco sempre aprender novas tecnologias e aplicar as melhores práticas de desenvolvimento.",

        formacao: [
            {
                instituicao: "Faculdade Santos",
                curso: "Sistemas de Informação",
                periodo: "2021 - 2025"
            },
            {
                instituicao: "Faculdade Santos",
                curso: "Sistemas de Informação",
                periodo: "2021 - 2025"
            }

        ],
        experiencias: [
            {
                empresa: "Maravilha Plásticas",
                cargo: "Desenvolvedor",
                periodo: "06/23 - 10/23",
                atribuicoes: [
                    "Desenvolvimento de um sistema interno para gerenciamento de estoque utilizando React e Node.js.",
                    "Implementação de funcionalidades para otimizar processos internos da empresa.",
                    "Colaboração com a equipe para garantir a qualidade do código e a entrega dentro dos prazos estabelecidos."
                ]
            },
            {   
                empresa: "Maravilha Plásticas",
                cargo: "Estagiário de Estoque",
                periodo: "02/22 - 10/22",
                atribuicoes: [
                    "Auxílio na organização e controle do estoque da empresa.",
                    "Apoio na implementação de melhorias nos processos de armazenamento e distribuição de produtos.",
                    "Colaboração com a equipe para garantir a eficiência nas operações diárias."
                ]
            }
        ]
    };

    return(

            <div>

                <Header children={ <li><a href="/homepage">Home</a></li>}/>
        <div className='flex justify-center '>
            
            <div className='card-info'>
            
                
                <div className='conteudo-principal flex flex-row items-center justify-center pt-3 pb-4 '>

                <div className='container-foto-info'>
                    <img src={fotoPerfil} alt="Foto de perfil" className='fotoPerfilInfo' />
                </div>
                
               
                <div className=' conteudo-info text-center mt-6 mb-6'>
                    <h1 className='text-3xl font-bold text-white'>{cvData.name}</h1>
                    <p className='text-gray-300 text-lg'>{cvData.title}</p>
                </div>

                </div>
         
               

                <div className='sobre-mim px-6 py-4 w-full'>
                    <h2 className='text-xl font-bold text-white mb-2'>Sobre Mim</h2>
                    <p className='text-gray-200 text-sm leading-relaxed'>{cvData.sobre}</p>
                  
                </div>
                
        
              
                <div className='formacao-academica px-6 py-4 w-full'>
                    <h2 className='text-xl font-bold text-white mb-3'>Formação Acadêmica</h2>
                      <ul>
                    {cvData.formacao.map((form, index) => (   
                            <li key={index}>{form.instituicao} - {form.curso} - {form.periodo}</li> 
                    ))}

                    </ul>
                </div>
                
      
               
                <div className='experiencias px-6 py-4 w-full'>
                    <h2 className='text-xl font-bold text-white mb-3'>Experiências Profissionais </h2>
                    {cvData.experiencias.map((exp, index) => (
                        <div key={index} className='mb-4 bg-blue-800 p-3 rounded'>
                            <Card backgroundColor='var(--cor-roxo-escuro)' margin='30px' width={400} borderRadius={8} isHover  >
                            <h3 className='text-white font-semibold'>{exp.empresa}</h3>
                            <h3 className='text-gray-200 text-sm'>{exp.cargo}</h3>
                            <h3 className='text-gray-400 text-xs'>{exp.periodo} </h3>
                            </Card>
 
                        </div>
                    ))}
                </div>
            </div>
        </div>
        <Footer>
            <p className="text-center py-2 text-white">© 2026 Jefferson Sampaio</p>
        </Footer>
            </div>

    )
}
export default Info;