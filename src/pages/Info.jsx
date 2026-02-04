
import  useTitulo  from '../hooks/useTitulo';
import Header from '../components/Header';
import fotoPerfil from '../assets/fotoPerfil.svg'; 
import Card from '../components/Card';
import Footer from '../components/Footer';
import { useInfo } from '../hooks/useInfo';
import '../styles/info.css';
import { useEffect, useRef } from 'react';

function Info() {


    useTitulo('Info');
    const { infos, loading, error } = useInfo();
    const cvRef = useRef();

    const handleDownloadCV = async () => {
        try {
            const html2pdf = (await import('html2pdf.js')).default;
            const elemento = cvRef.current;
            
            const clone = elemento.cloneNode(true);
            clone.style.width = '100%';
            clone.style.maxWidth = 'none';
            clone.style.margin = '0';
            clone.style.padding = '15px';
            clone.style.boxShadow = 'none';
            clone.style.border = 'none';
            clone.style.borderRadius = '0';
            
         
            const foto = clone.querySelector('.fotoPerfilInfo');
            if (foto) {
                foto.style.height = '140px';
                foto.style.width = '140px';
            }
            
            const conteudoInfo = clone.querySelector('.conteudo-info');
            if (conteudoInfo) {
                conteudoInfo.style.fontSize = '26px';
            }
            
            const titulos = clone.querySelectorAll('h2');
            titulos.forEach(titulo => {
                titulo.style.fontSize = '32px';
            });
            
            const opcoes = {
                margin: [1, 1, 1, 1],
                filename: 'CV_Jefferson_Sampaio.pdf',
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: { 
                    scale: 2, 
                    useCORS: true, 
                    allowTaint: true, 
                    backgroundColor: '#3730a3'
                },
                jsPDF: { 
                    orientation: 'portrait', 
                    unit: 'mm', 
                    format: 'a4', 
                    compress: true 
                }
            };
            
            html2pdf().set(opcoes).from(clone).save();
        } catch (err) {
            console.error('Erro ao gerar PDF:', err);
            alert('Erro ao gerar PDF. Tente novamente.');
        }
    };

   
    if (loading) {
        return <div className='text-white text-center m-[30px] '>Carregando informações...</div>;
    }
    if (error) {
        return <div className='text-white text-center mt-10'>Erro ao carregar informações: {error.message}</div>;
    }
    if (!infos || infos.length === 0) {
        return <div className='text-white text-center mt-10'>Nenhuma informação disponível.</div>;
    }
    const dados = infos[0];
    const cvData = {
        nome: dados.nome,
        title: dados.conteudo.titulo,
        sobre: dados.conteudo.sobre,
        formacao: dados.conteudo.formacao || [],
        experiencias: dados.conteudo.experiencias || []
    };


    return(

            <div>

         <Header children={ <li><a href="/portifolio/homepage">Home</a></li>}/>
        <div className='flex justify-center flex-col items-center'>
           <div className='container-btn-pdf-cv'>

             <button 
                onClick={handleDownloadCV}
                className='btn-pdf-cv mt-8 mb-4 bg-white text-indigo-900 font-bold py-3 px-8 rounded-xl hover:bg-gray-100 transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl hover:scale-105'
            >
                <span>Baixar CV em PDF</span>
            </button>
           </div>
            
            <div className='card-info' ref={cvRef}>
            
                
                <div className='conteudo-principal flex flex-row items-center justify-center pt-3 pb-4 '>

                <div className='container-foto-info'>
                    <img src={fotoPerfil} alt="Foto de perfil" className='fotoPerfilInfo' />
                </div>
                
               
                <div className=' conteudo-info text-center mt-6 mb-6'>
                    <h1 className='text-3xl font-bold text-white'>{cvData.nome}</h1>
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
                            <li key={index}>{form.grau} - {form.instituicao} - {form.curso} - {form.periodo}</li> 
                    ))}

                    </ul>
                </div>
                
      
               
                <div className='experiencias px-6 py-4 w-full'>
                    <h2 className='text-xl font-bold text-white mb-3'>Experiências Profissionais </h2>
                    {cvData.experiencias.map((exp, index) => (
                        <div key={index} className='mb-4 w-full'>
                            <Card backgroundColor='var(--cor-roxo-escuro)' margin='0' width={'100%'} borderRadius={8}  >
                            <h3 className='text-white font-semibold text-left'>Empresa: {exp.empresa}</h3>
                            <h3 className='text-gray-400 text-xs text-left'>Período: {exp.periodo} </h3>
                            <h3 className='text-gray-200 text-sm text-left'>Cargo: {exp.cargo}</h3>
                            <ul className='lista-experiencias '>
                                {exp.atribuicoes.map((atribuicao, idx) => (
                                    <li key={idx}>{atribuicao}</li>
                                ))}
                            </ul>
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