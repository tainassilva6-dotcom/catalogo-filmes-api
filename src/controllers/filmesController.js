const filmes = require("../database/filmes");

exports.listar = (req, res) => {
    res.json(filmes);
};

exports.buscar = (req, res) => {
    const id = Number(req.params.id);

    const filme = filmes.find(f => f.id === id);

    if (!filme) {
        return res.status(404).json({
            mensagem: "Filme não encontrado"
        });
    }

    res.json(filme);
};

exports.cadastrar = (req, res) => {
    const novoFilme = {
        id: filmes.length + 1,
        nome: req.body.nome,
        categoria: req.body.categoria
    };

    filmes.push(novoFilme);

    res.status(201).json(novoFilme);
};

exports.atualizar = (req, res) => {
    const id = Number(req.params.id);

    const filme = filmes.find(f => f.id === id);

    if (!filme) {
        return res.status(404).json({
            mensagem: "Filme não encontrado"
        });
    }

    filme.nome = req.body.nome;
    filme.categoria = req.body.categoria;

    res.json(filme);
};

exports.remover = (req, res) => {
    const id = Number(req.params.id);

    const index = filmes.findIndex(f => f.id === id);

    if (index === -1) {
        return res.status(404).json({
            mensagem: "Filme não encontrado"
        });
    }

    filmes.splice(index, 1);

    res.json({
        mensagem: "Filme removido"
    });
};