function pesquisar() {
  // Obtém a seção onde os resultados serão exibidos
  let section = document.getElementById("resultados-pesquisa");

  // Obtém o valor digitado no campo de pesquisa e o converte para minúsculas
  let campoPesquisa = document.getElementById("campo-pesquisa").value.toLowerCase();

  // Verifica se o campo de pesquisa está vazio
  if (!campoPesquisa) {
    // Se estiver vazio, exibe uma mensagem de erro
    return section.innerHTML = "<p>Nada foi encontrado. Você precisa digitar um parametro para busca.</p>";
  }

  // Inicializa a string que armazenará os resultados da pesquisa
  let resultados = "";

  // Itera sobre os dados a serem pesquisados
  for (let dado of dados) {
    // Converte o título, descrição e tags para minúsculas para facilitar a comparação
    let titulo = dado.titulo.toLowerCase();
    let descricao = dado.descricao.toLowerCase();
    let tags = dado.tags.toLowerCase();

    // Verifica se o termo de pesquisa está presente no título, descrição ou tags
    if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
      // Se o termo for encontrado, adiciona um novo resultado à string
      resultados += `
        <div class="item-resultado">
          <h2>
            <a href="#" target="_blank">${dado.titulo}</a>
          </h2>
          <p class="descricao-meta">${dado.descricao} </p>
          <a href=${dado.link} target="_blank">Mais informações</a>
        </div>
      `;
    }
  }

  // Verifica se algum resultado foi encontrado
  if (!resultados) {
    // Se nenhum resultado for encontrado, exibe uma mensagem
    resultados = "<p>Nada foi encontrado</p>";
  }

  // Atualiza o conteúdo da seção com os resultados da pesquisa
  section.innerHTML = resultados;
}