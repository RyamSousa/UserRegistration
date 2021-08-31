# NLW Valoriza
>Status: Done ✅ 

## Descrição
<p> 
  Projeto desenvolvido durante a Next Level Week Together(NLW).<br>
  O Projeto NLW valoriza surgiu a partir da ideia de elogiar algum colega por causa de alguma
  atitude dele, seja uma ajuda, um concelho ou alguma outra coisa que também agregue valor 
  para outras pessoas. No Projeto é possível criar tags de elogios, cadastrar elogios, autenticar 
  usuários, listar elogios e listar usuários.
</p>

<p> 
  No projeto foram utilizadas algumas tecnologias. Geração de token utilizando JWT para autenticação dos
  usuários, o express para criar as rotas da aplicação, o typeorm para criar um banco de dados e o typeScript
</p>

### Algumas regras do projeto
- Cadastro de usuário
  
  - Não é permitido cadastrar mais de um usuário com o mesmo e-mail

  - Não é permitido cadastrar usuário sem e-mail

- Cadastro de TAG

  - Não é permitido cadastrar mais de uma tag com o mesmo nome
  
  - Não é permitido cadastrar tag sem nome
  
  - Não é permitido cadastro por usuários que não sejam administradores

- Cadastro elogios 

  - Não é permitido um usuário cadastrar um elogio para si

  - Não é permitido cadastrar elogios para usuários inválidos

  - O usuário precisa estar autenticado na aplicação
