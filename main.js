// ============================================================
//  PostMe — main.js
//  Comunicação com a API JSONPlaceholder via fetch POST
// ============================================================

// --- SELETORES ---
const formPost     = document.querySelector('#form-post');
const titulo       = document.querySelector('#titulo');
const conteudo     = document.querySelector('#conteudo');
const feedPosts    = document.querySelector('#feed-posts');
const errorMsg     = document.querySelector('#error-msg');
const btnPostar    = document.querySelector('#btn-postar');
const btnTexto     = document.querySelector('#btn-texto');
const totalPostsEl = document.querySelector('#total-posts');

// Contador de posts publicados na sessão
let totalPosts = 0;

// --- FUNÇÃO: cria e insere um card novo no topo do feed ---
function criarCardPost(titulo, conteudo, id) {
  // Cria o elemento container do card
  const card = document.createElement('div');
  card.classList.add('post-result');

  // Monta o HTML interno do card
  // Os ids renderizador-titulo e renderizador-conteudo ficam aqui
  // para manter compatibilidade com a especificação do projeto
  card.innerHTML = `
    <div class="post-card">
      <div class="post-card-header">
        <div class="avatar-sm">AG</div>
        <div class="post-meta">
          <strong>Ailton Gabriel</strong>
          <span>agora mesmo · Post ID: ${id}</span>
        </div>
      </div>
      <div class="post-card-body">
        <h2 id="renderizador-titulo">${titulo}</h2>
        <p id="renderizador-conteudo">${conteudo}</p>
      </div>
      <div class="post-card-footer">
        <button class="reaction-btn">👍 Curtir</button>
        <button class="reaction-btn">💬 Comentar</button>
        <button class="reaction-btn">↗ Compartilhar</button>
      </div>
    </div>
  `;

  // Insere o card no TOPO do feed (antes dos outros)
  feedPosts.insertBefore(card, feedPosts.firstChild);

  // Rola suavemente até o novo card
  card.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// --- EVENTO DE SUBMIT ---
formPost.addEventListener('submit', function(e) {
  e.preventDefault(); // previne o comportamento padrão do formulário

  // Monta o objeto conforme especificação da API
  const data = {
    title: titulo.value,
    body: conteudo.value,
    userId: 1
  };

  // Feedback visual: desabilita botão durante a requisição
  btnPostar.disabled = true;
  btnTexto.textContent = 'Publicando...';
  errorMsg.style.display = 'none';

  // --- FETCH POST ---
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-type': 'application/json; charset=UTF-8' }
  })
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      // Cria e empilha um novo card no feed
      criarCardPost(data.title, data.body, json.id);

      // Atualiza contador de posts na sidebar
      totalPosts++;
      totalPostsEl.textContent = totalPosts;

      // Limpa o formulário
      formPost.reset();
    })
    .catch(function(erro) {
      console.error('Erro na requisição:', erro);
      errorMsg.style.display = 'block';
    })
    .finally(function() {
      // Reabilita o botão independente de sucesso ou erro
      btnPostar.disabled = false;
      btnTexto.textContent = 'Publicar';
    });
});
