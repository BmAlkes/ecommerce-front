# Instruções

### Instruções iniciais

 - Dar yarn install para instalar as dependências (usar estritamente yarn para evitar problemas no futuro).
 - Estilizar os produtos com fake-data (você deve criar constantes para utilizar no projeto até o back-end ficar pronto).

### Início
 
 1 - Definir as rotas principais da aplicação:
  - Home
  - Produtos
  - Produto
  - Login
  - Registro

 2 - Definir estilos globais e tema da aplicação.

 3 - Começar a criação dos components principais (com foco na estilização para deixar o mais próximo possível).
  - Header
  - Button (com opção de tamanhos, variantes para cada cor, opção de colocar ícone)
  - Item de produto
  - Heading
  - Horizontal Line
  - Logo
  - Componente de Produtos (visto que é reutilizado em 2 lugares).
  - Drawer (carrinho).
  - Botão de ver mais.

 4 - Criação das páginas
  - Junção de componentes e estilização das páginas com dados fake.
  - Pode me consultar quando for precisar dos dados para eu passar o model.

 5 - Nesse projeto vamos focar bem na estilização para deixar o mais próximo possível, então foque bastante nisso e quando fizer a estilização do projeto, comece as funcionalidades.

### Funcionalidades

 1 - Contexto de Autenticação
  - Adicionar useEffect para ficar responsável por adicionar o usuário ao estado de User.
  - Criar função de signIn (responsável por fazer o login e adicionar o token).
  - Criar função de signUp (responsável por criar o usuário).
  - Criar função de signOut (responsável por deslogar o usuário, removendo ele do estado, jogando ele pra pagina Home e removendo o token do localStorage).

 2 - Contexto de Carrinho
  Consultar comigo antes de fazer contexto de carrinho. Vai ter as funções:
   - Função de addToCart (adicionar item ao carrinho).
   - Função de changeQuantity (mudar a quantidade de um item no carrinho).
   - Função de removeFromCart (remover item do carrinho).