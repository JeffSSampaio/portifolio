

class Feed{

    constructor(data){
        this.id = data.id;
        this.imagem = Array.isArray(data.imagem) ? data.imagem : [];
        this.nome = data.nome;
        this.descricao = data.descricao;
        this.colaboradores = Array.isArray(data.colaboradores)
     ? data.colaboradores.map(colab => ({
        nome: colab.nome,
        linkedin: colab.linkedin
      }))
    : [];
    }


    static fromJSON(data){
        return new Feed(data)
    }


}