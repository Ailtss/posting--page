# ◈ Página de Publicações

## 📌 Resumo do Projeto

Este projeto consiste no desenvolvimento de uma **página de publicações dinâmica**,
que simula o funcionamento de uma rede social como LinkedIn ou Facebook.
O usuário preenche um título e um conteúdo, e ao publicar, a aplicação se comunica
com uma API externa e renderiza o post na tela.

O projeto foi desenvolvido como parte do curso **DEVstart - SENAI**,
utilizando HTML, CSS e JavaScript.

---

## 📖 Introdução

Este projeto representa a família completa do front-end: **HTML + CSS + JavaScript**.
A grande novidade em relação aos projetos anteriores é a comunicação com uma **API externa**
via `fetch`, simulando o mundo real de aplicações que consomem e enviam dados.

A API utilizada é a [JSONPlaceholder](https://jsonplaceholder.typicode.com/), uma API
pública e gratuita que simula operações reais de POST, GET, PUT e DELETE.

---

## ⚙️ Especificações do Projeto

### 🗂️ Estrutura de Arquivos

```
posting--page/
│
├── index.html    → Estrutura e conteúdo da página
├── style.css     → Estilização completa da página
├── main.js       → Lógica JavaScript e comunicação com a API
└── README.md     → Documentação do projeto
```

---

### 📄 Estrutura da Página

| Elemento | ID | Descrição |
|---|---|---|
| Formulário | `#form-post` | Entrada de título e conteúdo |
| Campo título | `#titulo` | Input de texto para o título |
| Campo conteúdo | `#conteudo` | Textarea para o corpo do post |
| Feed de posts | `#feed-posts` | Container onde os cards são empilhados |
| Contador | `#total-posts` | Exibe quantos posts foram publicados na sessão |
| Mensagem de erro | `#error-msg` | Exibida caso a requisição falhe |

---

## 📏 Requisitos Atendidos

### 📝 1. Formulário (Entrada de dados)
- `<form>` com `<input>` de título e `<textarea>` de conteúdo
- Botão de submit para disparar a publicação
- Campos com `required` para evitar envio vazio

### ⚙️ 2. JavaScript
- Seletores com `document.querySelector()`
- `addEventListener('submit')` no formulário
- `preventDefault()` para evitar o comportamento padrão do form
- Objeto `data` montado com `title`, `body` e `userId: 1`
- `fetch` com método `POST` para a API JSONPlaceholder
- Renderização do retorno no segundo `.then()`

### 🃏 3. Empilhamento de Cards
- A cada publicação, um novo card é criado dinamicamente com `createElement()`
- Os cards são inseridos no topo do feed com `insertBefore()`
- O post mais recente sempre aparece primeiro

### 🎨 4. Estilo e Interatividade
- Layout inspirado em redes sociais (LinkedIn/Facebook)
- Botão desabilitado com feedback "Publicando..." durante a requisição
- Efeito `:hover` nos botões de reação e de publicar
- Animação de entrada nos cards com `fadeUp`
- Mensagem de erro exibida caso a API falhe
- Layout responsivo com `@media` para dispositivos móveis

---

## 🔁 Fluxo da Aplicação

```
Usuário preenche título e conteúdo
        ↓
Clica em "Publicar"
        ↓
JavaScript captura o evento e monta o objeto data
        ↓
fetch envia POST para a API JSONPlaceholder
        ↓
API retorna o objeto com ID gerado
        ↓
criarCardPost() gera um novo card e empilha no feed
        ↓
Formulário é limpo e contador atualizado
```

---

## ⚠️ Observação sobre Persistência

Ao atualizar a página, os posts e a contagem são resetados.
Isso acontece porque os dados existem apenas na **memória temporária do navegador** —
a JSONPlaceholder é uma API falsa que simula o POST mas não armazena os dados.
Para persistência real, seria necessário usar `localStorage` ou um backend próprio.

---

## ▶️ Como Executar o Projeto

1. Clone o repositório:
```
git clone https://github.com/Ailtss/posting--page
```

2. Acesse a pasta do projeto:
```
cd posting--page
```

3. Abra o arquivo no navegador:
```
Clique duas vezes no arquivo index.html
```
> 💡 Dica: Use a extensão **Live Server** no VS Code para visualizar com atualização automática.

---

## 🚀 Tecnologias Utilizadas

- HTML5 (semântico)
- CSS3 (variáveis, flexbox, grid, animações)
- JavaScript ES6+ (fetch, promises, DOM manipulation)
- Google Fonts (DM Sans + DM Serif Display)
- [JSONPlaceholder](https://jsonplaceholder.typicode.com/) (API fake para testes)

---

## 👨‍💻 Autor - Ailton Gabriel

Projeto desenvolvido como parte do curso **DEVstart - SENAI**.

---

## 📌 Observação

Este projeto demonstra conhecimentos em:

- Manipulação do DOM com JavaScript
- Comunicação com APIs externas via `fetch`
- Programação assíncrona com Promises (`.then()`, `.catch()`, `.finally()`)
- Criação dinâmica de elementos HTML com `createElement()`
- Estruturação semântica com HTML5
- Estilização avançada com CSS3
- Design responsivo com media queries
- Boas práticas de organização de código
