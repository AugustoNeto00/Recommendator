# 🎬 RecommendationAI

Um sistema simples de recomendação de filmes baseado em gêneros, desenvolvido com Node.js, Express e EJS. O usuário seleciona um gênero (Comédia, Ação ou Drama) e recebe uma lista de filmes sugeridos diretamente da API do TMDB (The Movie Database).

## 📌 Objetivo

Esse projeto foi criado como prática de consumo de API externa e renderização dinâmica com EJS no backend. Também serve como base para aplicações que envolvem interação com usuários via formulários e manipulação de dados via HTTP POST.
O intuito de cria-lo foi apenas para aprender a utiliza API's e melhorar minhas habilidades com as tecnologias utilizadas.

## 🚀 Tecnologias Utilizadas

- Node.js
- Express.js
- EJS (Embedded JavaScript templates)
- Axios (requisições HTTP)
- API do TMDB (https://www.themoviedb.org/)

## 📷 Demonstração



## 🧠 Funcionalidades

- Interface com formulário para seleção de gênero.
- Requisição dinâmica à API do TMDB com base no gênero escolhido.
- Exibição dos títulos e sinopses dos filmes retornados.
- Tudo acontece na **mesma página**, sem redirecionamentos.

## 🚀 Como Rodar o Projeto

### ✅ Pré-requisitos

Antes de começar, você precisa ter instalado:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

---

### 📦 Instalar dependências

Clone o projeto e acesse a pasta:

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
cd RecommendationAI

```
Instale os pacotes com:

```bash
npm install

```
Crie o arquivo .env e coloque sua chave da API:

```bash
API_KEY=sua_chave_aqui

```
Rode o servidor:

```bash
node app.js

```
Acesse no navegador:

```bash
http://localhost:3000



