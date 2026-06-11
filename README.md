# Catálogo de Filmes API

## Tema Escolhido

Filmes

## Integrantes

* Tainá Silva
* Winie de Jesus
* Guilherme de Souza 
* Ana Victoria Capistrano

## Descrição

API REST desenvolvida em Node.js para gerenciamento de um catálogo de filmes.

## Endpoints

### Listar filmes

GET /listar

### Buscar filme por ID

GET /buscar/:id

### Cadastrar filme

POST /cadastrar

### Atualizar filme

PUT /atualizar/:id

### Remover filme

DELETE /remover/:id

## Exemplo de Requisição

POST /cadastrar

{
"Tainá Silva": "Deadpool",
"categoria": "Ação"
}

## Exemplo de Resposta

{
"id": 11,
"Winie de jesus": "Deadpool",
"categoria": "Ação"
}
