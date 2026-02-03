import  useTitulo  from '../hooks/useTitulo';
import Header from '../components/Header';
import '../styles/contato.css';
import { Paperclip, X } from 'lucide-react';
import { useState } from 'react';

function Contato() {
    useTitulo('Contato');
    const [arquivos, setArquivos] = useState([]);

    const handleArquivoChange = (e) => {
        const files = Array.from(e.target.files);
        setArquivos([...arquivos, ...files]);
        e.target.value = '';
    };

    const removerArquivo = (index) => {
        setArquivos(arquivos.filter((_, i) => i !== index));
    };

    return(
        <div>
              <Header children={ <li><a href="/portifolio/homepage">Home</a></li>}/>

            <div className='flex flex-col items-center justify-center align-center'>
                
                <div className='container-form-contato m-[30px] texto text-[20px] font-bold back'>
                     
                      
                        <form className='form-contato'>
                             <h1>Contato</h1>
                             <div className='form-contato-content'>
                                <label htmlFor="assunto">Assunto</label>
                                <input type="text" id="assunto" />
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" />
                                <label htmlFor="mensagem">Mensagem</label>
                                <textarea id="mensagem" rows="4"></textarea>
                                
                                <div className='arquivo-enviar-container'>
                                    <input
                                        type="file"
                                        id="arquivo"
                                        onChange={handleArquivoChange}
                                        className='arquivo-enviar-escondido'
                                        multiple
                                    />
                                    <label htmlFor="arquivo" className='arquivo-enviar-botao'>
                                        <Paperclip size={24} />
                                        <span>Anexar arquivo(s)</span>
                                    </label>
                                    
                                    {arquivos.length > 0 && (
                                        <div className='arquivos-lista'>
                                            {arquivos.map((arquivo, index) => (
                                                <div key={index} className='arquivo-selecionado'>
                                                    <Paperclip size={20} />
                                                    <span>{arquivo.name}</span>
                                                    <button 
                                                        type="button"
                                                        onClick={() => removerArquivo(index)}
                                                        className='botao-remover-arquivo'
                                                    >
                                                        <X size={18} />
                                                    </button>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                             </div>
                             <div className='flex justify-center'>
                                <button type="submit" className='botao-enviar'>Enviar</button>
                             </div>
                        </form>
                       
                </div>
                


            </div>
          
        </div>
    )
}
export default Contato;