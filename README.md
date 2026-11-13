# Catálogo de Produtos Responsivo com Interatividade em JavaScript

## Identificação do Formando
* **Nome: João Mendes**
* **Número: 6014**

## Descrição da Estrutura do Projeto
O projeto está estruturado da seguinte forma:
- `index.html`: Página principal com estrutura semântica (header, main com 4 cartões de produtos e footer com formulário de subscrição).
- `css/style.css`: Estilos visuais personalizados, layout em Grid/Flexbox, design responsivo com Media Queries e suporte a Modo Escuro.
- `js/script.js`: Lógica dinâmica para manipulação do DOM (alternância de tema, incremento do carrinho de compras e validação interativa do formulário).
- `img/`: Diretório destinado às imagens ilustrativas dos produtos do catálogo.

## Instruções de Execução
1. Certifique-se de que a estrutura de pastas e ficheiros se mantém exatamente como fornecida.
2. Abra o ficheiro `index.html` diretamente num browser web moderno (Google Chrome, Firefox, Microsoft Edge, etc.). Não é necessário recorrer a nenhum servidor local.

### Como Testar os Desafios de JavaScript:
- **Desafio 1 (Dark Mode):** Clique no botão "Modo Escuro" localizado no canto superior direito para alternar as cores da página.
- **Desafio 2 (Carrinho de Compras):** Clique no botão "Comprar" de qualquer produto. O contador no cabeçalho ("Carrinho: 0") será incrementado imediatamente em tempo real.
- **Desafio 3 (Validação de Newsletter):** 
  - Tente clicar em "Submeter" com o campo de email vazio e veja a mensagem de erro a vermelho.
  - Insira um endereço de email válido e clique em "Submeter" para limpar o campo e visualizar a mensagem de sucesso a verde.

## Limitações Conhecidas
- A aplicação não utiliza persistência de dados em armazenamento local (`localStorage`), pelo que o estado do carrinho e o tema são repostos ao atualizar a página.