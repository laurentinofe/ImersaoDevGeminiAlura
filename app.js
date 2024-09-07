function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    // Imprime a seção no console para fins de depuração (opcional)
    console.log(section);
  
    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
  
    // Itera sobre os dados e cria as divs dos resultados
    for (let dado of dados) {
      // Cria uma div com as informações do resultado
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
  
    // Atualiza o conteúdo HTML da seção com os resultados
    section.innerHTML = resultados;
  }