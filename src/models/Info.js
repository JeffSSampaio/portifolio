
class Info {
    

    constructor(data) {
        this.nome = data.nome;
        this.conteudo = {
            titulo: data.titulo,
            sobre: data.sobre,
            experiencias: Array.isArray(data.experiencias)
             ? data.experiencias.map(exp => ({
                  empresa: exp.empresa,
                  cargo: exp.cargo,
                  periodo: exp.periodo,
                  atribuicoes: Array.isArray(exp.atribuicoes)
             ? exp.atribuicoes
             : []
    }))
  : [],
           formacao: Array.isArray(data.formacao)
            ? data.formacao.map(form => ({
            instituicao: form.instituicao,
            periodo: form.periodo,
            grau: form.grau,
            curso: form.curso
    }))
  : []
        }

    }

    static fromJSON(data) {
        return new Info(data);
    }
}

export { Info };





