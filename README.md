# Aplicação de Projeto Mobile de times

Esta é uma aplicação móvel desenvolvida usando React Native e Expo. A aplicação permite aos usuários fazer login e visualizar informações sobre times de futebol.

## Estrutura da Aplicação

A aplicação é estruturada em vários diretórios, cada um contendo arquivos relacionados:

- `src/`: Contém o código-fonte da aplicação.
- `auth/`: Contém o contexto de autenticação usado em toda a aplicação.
- `Home/`: Contém a tela inicial da aplicação.
- `TelaLogin/`: Contém as telas de Login e Registro.
- `TelasTime/`: Contém as telas relacionadas aos times de futebol.

## Arquivos Principais

- [`App.js`](./App.js): O ponto de entrada da aplicação. Ele configura a pilha de navegação e o contexto global de autenticação.
- [`src/auth/AuthContext.js`](./src/auth/AuthContext.js): Define o contexto de autenticação. Este contexto é usado para compartilhar o estado de autenticação em toda a aplicação.
- [`src/TelaLogin/Login.js`](./src/TelaLogin/Login.js): Implementa a tela de Login. Permite aos usuários inserir seu nome de usuário e senha e lida com o processo de login.
- [`src/TelaLogin/Registro.js`](./src/TelaLogin/Registro.js): Implementa a tela de Registro. Permite que novos usuários registrem uma conta.
- [`src/TelasTime/Home.js`](./src/TelasTime/Home.js): Implementa a tela inicial para um time de futebol. Exibe o nome do time, símbolo e conquistas.
- [`src/TelasTime/Plantel.js`](./src/TelasTime/Plantel.js): Implementa a tela que exibe o elenco de um time de futebol.

## Executando a Aplicação

Para executar a aplicação, você precisa ter o Node.js, npm e o Expo CLI instalados na sua máquina. Após instalar esses, você pode executar os seguintes comandos:

- O comando `npm install` instala as dependências necessárias, e o comando `npx expo start` inicia a aplicação.

## Dependências

A aplicação usa várias dependências, incluindo:

- `react` e `react-native`: As bibliotecas principais para construir a interface do usuário.
- `@react-navigation/native` e `@react-navigation/stack`: Usadas para gerenciar a pilha de navegação da aplicação.
- `@react-native-async-storage/async-storage`: Usada para armazenar as informações de login do usuário.

Para uma lista completa de dependências, consulte o arquivo [`package.json`](./package.json).

## Configuração da Aplicação

A configuração da aplicação é armazenada no arquivo [`app.json`](./app.json). Isso inclui o nome da aplicação, versão, orientação, ícone e mais.

## Hooks da aplicação

A aplicação utiliza os seguintes hooks:

- `useState`: O hook `useState` é usado para gerenciar o estado local da aplicação. Ele permite que você adicione estado a componentes funcionais.
- `useEffect`: O hook `useEffect` é usado para executar efeitos colaterais em componentes funcionais. Ele é usado para lidar com tarefas assíncronas, como chamadas de API ou atualizações de estado.
- `useContext`: O hook `useContext` é usado para acessar o contexto em componentes funcionais. Ele permite que você compartilhe dados entre componentes sem a necessidade de passar props manualmente.
- `useNavigation`: O hook `useNavigation` é usado para acessar a navegação em componentes funcionais. Ele permite que você navegue entre telas em um aplicativo de navegação.

Esses hooks são aplicados em diferentes partes da aplicação, dependendo das necessidades específicas de cada componente. Por exemplo, o hook `useState` pode ser usado para gerenciar o estado de autenticação no contexto de autenticação, enquanto o hook `useEffect` pode ser usado para buscar dados de times de futebol na tela inicial.

## Navegação

A aplicação utiliza a biblioteca `react-navigation` para gerenciar a navegação entre telas. Existem duas principais formas de navegação utilizadas na aplicação:

1. Navegação em pilha: A navegação em pilha é utilizada para criar uma pilha de telas, onde cada nova tela é empilhada em cima da anterior. Isso permite que o usuário navegue para trás na pilha de telas. A biblioteca `@react-navigation/stack` é utilizada para implementar a navegação em pilha na aplicação. O arquivo [`App.js`](./App.js) configura a pilha de navegação e define as telas iniciais.

2. Navegação por abas: A navegação por abas é utilizada para exibir diferentes telas em abas na parte inferior da aplicação. Cada aba representa uma categoria ou funcionalidade específica. A biblioteca `@react-navigation/bottom-tabs` pode ser utilizada para implementar a navegação por abas na aplicação.

Para adicionar uma nova tela à navegação, você precisa definir um novo componente de tela e adicioná-lo à configuração de navegação correspondente. Por exemplo, se você deseja adicionar uma nova tela à navegação em pilha, você precisa adicionar uma nova entrada à pilha de navegação no arquivo [`App.js`](./App.js).

A navegação entre telas é realizada utilizando os hooks `useNavigation` e `useRoute` fornecidos pela biblioteca `@react-navigation/native`. O hook `useNavigation` permite acessar o objeto de navegação, que possui métodos para navegar para outras telas. O hook `useRoute` permite acessar os parâmetros passados para a tela atual.

## Telas da Aplicação

Segue abaixo alguams telas da aplicação (que serão refatoradas no futuro):

### Tela de Login

![Tela de Login](https://i.ibb.co/Db5ZcCx/image.png)

A tela de login permite aos usuários inserir seu nome de usuário e senha para fazer login na aplicação.

### Tela de Registro

![Tela de Registro](https://i.ibb.co/7yQBP4C/image.png)

A tela de registro permite que novos usuários criem uma conta fornecendo seu email, nome de usuário e senha.

### Tela Inicial

![Tela Inicial](https://i.ibb.co/8rD5DnB/image.png)

A tela inicial exibe informações sobre um time de futebol, incluindo o nome do time, símbolo e conquistas.


### Tela de Time

![Tela de Time](https://i.ibb.co/27bXLSK/image.png)

A tela de time exibe informações sobre um time de futebol, incluindo o nome do time, símbolo e conquistas. Além disso, permite a navegação entre as telas de plantel e competição.

### Tela de Competição

![Tela de Competição](https://i.ibb.co/ncXCVBQ/image.png)

A tela de competição exibe informações sobre as competições em que o time está participando. Isso inclui o nome do campeonato, o tipo de competição, a fase atual, a data de início e a data de término.

### Tela de Plantel

![Tela de Plantel](https://i.ibb.co/QQ6pVmd/image.png)

A tela de plantel exibe informações sobre os jogadores de um time de futebol. Ela mostra a posição de cada jogador e o nome dos jogadores em cada posição. 