<br />
<br />
<h1 align="center">
  <img alt="valoriza" src=".github/valoriza.svg" width="420px" /> 
  <br />
  <br />
  Typescript | Typeorm | Express | JWT | Docker
</h1>

<p align="center">
  <img alt="Rocketseat" src="https://img.shields.io/badge/Created%20by%3A-Rocketseat-%236D5CCD" />
  <img alt="EddyPBR" src="https://img.shields.io/badge/Developed%20by%3A-EddyPBR-%23DD3B3F" />
  <img alt="License MIT" src="https://img.shields.io/badge/License-MIT-%2398C611" />
  <img alt="Typescript" src="https://img.shields.io/badge/Main%20lenguage-Typescript-%232F74C0" /> <br />
</p> 
<br />
<br />

## :bookmark: Resumo
<br />

O projeto valoriza consiste em valorizar o trabalho do seu colega dando o feedback do trabalho do seu colega,
mais detalhadamente, o projeto possui um sistema de autenticação com JWT onde o usuário autenticado pode dar
o feedback para outro usuário (que esteja cadastrado), é uma forma simples, mas muito interessante para animar
o coleguinha :)

<br />

## :bulb: Conteúdos abordados
<br />

- Typescript
- Express
- Typeorm
- Insomnia
- Json web tokens
- MySQL
- Docker (milha extra)

<br />

## :rocket: Trilha extra
<br />

Para facilitar a vida de quem vai executar ou consultar esse projeto em sua máquina para adquirir conhecimento ou referências eu criei um
container Docker MySQL o projeto já esta totalmente configurado, bastando assim instalar o docker para executar o projeto. Dito isso pretendo adicionar
a funcionalidade de recuperação de senha via email, mas agora tenho outras prioridades :( ... Caso esteja interessado nessa funcionalidade eu desenvolvi
em outro projeto meu [Project-advisor-3000](https://github.com/EddyPBR/project-advisor-3000) espero que goste.

<br />

## :wrench: Colocando o projeto para rodar
<br />

Para colocar o projeto para rodar, basta seguir o passo a passo fornecido logo abaixo:

- 1º: Tenha o NODE instalado na sua máquina;
- 2º: Faça o download deste projeto;
- 3º: Com o terminal/prompt abra o diretório deste projeto e execute o comando `npm run` ou `yarn`;
- 4º: Esta etapa é referente ao banco de dados, existem duas formas, com container docker (passo 5) ou sem (passo 6).
- 5º: Para executar o banco de dados com o docker, tenha o docker instalado em sua máquina e execute o comando `yarn db-docker`;
- 6º: Caso queria conectar a algum outro banco MySQL configure o arquivo `ormconfig.json` na raiz do projeto;
- 7º: Com o banco de dados configurados, basta executar o comando `yarn typeorm migration:run`;
- 8º: Agora para executar o servidor basta utilizar o comando `yarn dev`;
- 9º: Espero que aproveite o projeto :)

<br />

## :wrench: Testando rotas
<br />

Para testar as rotas da aplicação basta utilizar um aplicativo de requisições http, eu recomendo o [insomnia](https://insomnia.rest/download) inclusive deixei
um arquivo `insomnia.json` para importar as requisições e já iniciar os testes.

Em alguns casos, você receberá a resposta `unathorized` ou `não autorizado` isso acontece porquê é necessária a autenticação no sistema. Para adquirir
a autenticação, basta utilizar a rota `/auth` informando um JSON: `{"email": "emailOfYour@database.com", "password": "yourpassword"}` a resposta da rota
será um token, copie esse token e na rota onde você recebeu a mensagem de autorização vá na aba `AUTH` escolha Bearer Token e no campo Token cole o mesmo.

<br />

## :wrench: Rotas
<br />

<table>
  <thead>
  <tr>
    <th>ROTA</th>
    <th>TIPO</th>
    <th>AUTENTICAÇÃO</th>
    <th>A ENVIAR</th>
    <th>A RECEBER</th>
  <tr>
  </thead>
  <tbody>
    <tr>
      <td>/users</td>
      <td>POST</td>
      <td>NÃO</td>
      <td>
        { <br />
          &nbsp; "name": string, <br />
          &nbsp;"email": string, <br />
          &nbsp;"admin": boolean, <br />
          &nbsp; "password": string <br />
        } 
      </td>
      <td>
          { <br />
            &nbsp; "id": string | uuid(string), <br />
            &nbsp; "name": string, <br />
            &nbsp; "email": string, <br />
            &nbsp; "admin": boolean, <br />
            &nbsp; "password": string, <br />
            &nbsp; "created_at": string | Date, <br />
            &nbsp; "updated_at": string | Date <br />
          }
      </td>
    <tr>
    <tr>
      <td>/users</td>
      <td>GET</td>
      <td>SIM</td>
      <td>
        {}
      </td>
      <td>
          [
            { <br />
              &nbsp; "id": string | uuid(string), <br />
              &nbsp; "name": string, <br />
              &nbsp; "email": string, <br />
              &nbsp; "admin": boolean, <br />
              &nbsp; "password": string, <br />
              &nbsp; "created_at": string | Date, <br />
              &nbsp; "updated_at": string | Date <br />
            }, ...
          ]
      </td>
    <tr>
    <tr>
      <td>/tags</td>
      <td>POST</td>
      <td>NÃO</td>
      <td>
        { <br />
          &nbsp; "name": string, <br />
        } 
      </td>
      <td>
          { <br />
            &nbsp; "id": string | uuid(string), <br />
            &nbsp; "name": string, <br />
            &nbsp; "created_at": string | Date, <br />
            &nbsp; "updated_at": string | Date <br />
          }
      </td>
    <tr>
    <tr>
      <td>/tags</td>
      <td>GET</td>
      <td>NÃO</td>
      <td>
        {}
      </td>
      <td>
          [
            { <br />
              &nbsp; "id": string | uuid(string), <br />
              &nbsp; "name": string, <br />
              &nbsp; "created_at": string | Date, <br />
              &nbsp; "updated_at": string | Date, <br />
              &nbsp; "tag_custom": string <br />
            }, ...
          ]
      </td>
    <tr>
    <tr>
      <td>/compliments</td>
      <td>POST</td>
      <td>SIM</td>
      <td>
        { <br />
          &nbsp; "tag_id": string, <br />
          &nbsp; "user_receiver": string, <br />
          &nbsp; "message": string <br />
        } 
      </td>
      <td>
          { <br />
            &nbsp; "id": string | uuid(string), <br />
            &nbsp; "user_sender": string, <br />
            &nbsp; "user_receiver": string, <br />
            &nbsp; "tag_id": string, <br />
            &nbsp; "message": string, <br />
            &nbsp; "created_at": string | Date, <br />
          }
      </td>
    <tr>
    <tr>
      <td>/users/compliments/receive</td>
      <td>GET</td>
      <td>SIM</td>
      <td>
        {}
      </td>
      <td>
          [
            { <br />
              &nbsp; "id": string | uuid(string), <br />
              &nbsp; "user_sender": string, <br />
              &nbsp; "user_receiver": string, <br />
              &nbsp; "tag_id": string, <br />
              &nbsp; "message": string, <br />
              &nbsp; "created_at": string | Date, <br />
            } ...
          ]
      </td>
    <tr>
    <tr>
      <td>/users/compliments/send</td>
      <td>GET</td>
      <td>SIM</td>
      <td>
        {}
      </td>
      <td>
          [
            { <br />
              &nbsp; "id": string | uuid(string), <br />
              &nbsp; "user_sender": string, <br />
              &nbsp; "user_receiver": string, <br />
              &nbsp; "tag_id": string, <br />
              &nbsp; "message": string, <br />
              &nbsp; "created_at": string | Date, <br />
            } ...
          ]
      </td>
    <tr>
    <tr>
      <td>/auth</td>
      <td>POST</td>
      <td>NÃO</td>
      <td>
        { <br />
          &nbsp; "email": string, <br />
          &nbsp; "password": string <br />
        } 
      </td>
      <td>
          string | jwt token
      </td>
    <tr>
  </tbody>
<table>

<br />

## :memo: License

Este projeto esta sob a [MIT license](LICENSE) para mais detalhes.
<br />
<br />

## :wave: Social

Siga @EddyPBR nas redes :wink:
<br />

- [Instagram](https://www.instagram.com/edvaldo_junior_dev/)
- [LinkedIn](https://www.linkedin.com/in/edvaldojuniordev/)

<br />

Siga a @Rocketeat nas redes
<br />

- [Website](https://rocketseat.com.br/)
- [YouTube](https://www.youtube.com/channel/UCSfwM5u0Kce6Cce8_S72olg)
- [Instagram](https://www.instagram.com/rocketseat_oficial/?hl=pt-br)
