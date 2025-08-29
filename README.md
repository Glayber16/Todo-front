TODO LIST FRONT

Durante meus estudos de TypeScript, resolvi me aventurar neste projeto de ToDo List, com o objetivo de aprimorar boas práticas de componentização, estudar mais sobre tipagem em TypeScript, Tailwind CSS e consumo de APIs.

Este aplicativo permite gerenciar tarefas, incluindo criação, edição, exclusão e busca, consumindo dados de uma API desenvolvida em .NET.

🖥️ Tecnologias

React 18 + TypeScript

Tailwind CSS para estilização

React Icons para botões e ícones

Axios para requisições HTTP

PostgreSQL como banco de dados

⚡ Funcionalidades

Adicionar novas tarefas com título, descrição e status.

Editar tarefas existentes.

Deletar tarefas.

Buscar tarefas pelo título.

Interface responsiva e moderna usando Tailwind CSS.

Modal reutilizáveis para criação e alteração de tarefas.

📸 Screenshots

<img width="1364" height="639" alt="image" src="https://github.com/user-attachments/assets/a4414539-31f1-400d-993b-b9036cb3e820" />


<img width="1369" height="762" alt="image" src="https://github.com/user-attachments/assets/71063696-135f-448f-9dd5-a9b102fbbfee" />

<img width="1167" height="810" alt="image" src="https://github.com/user-attachments/assets/8d523efb-9e15-4c7a-b1fd-d5300378351a" />

<img width="1125" height="880" alt="image" src="https://github.com/user-attachments/assets/1948a0e7-ddf8-45e3-b297-2db222ffa489" />

<img width="576" height="672" alt="image" src="https://github.com/user-attachments/assets/bd4ef188-bf7b-43bd-a806-ae60c1b0eafb" />

<img width="1108" height="733" alt="image" src="https://github.com/user-attachments/assets/cfd0aeba-3d12-40d9-9eb0-9ca0096b22af" />

<img width="1255" height="477" alt="image" src="https://github.com/user-attachments/assets/4e96f6da-c5c3-4e2f-952a-4089c6570556" />




src/
│
├─ components/

│   ├─ Button.tsx

│   ├─ Card.tsx

│   ├─ Input.tsx

│   ├─ TarefaCard.tsx

│   ├─ TarefaList.tsx

├─ Modal.tsx

│   ├─ ModalAdd.tsx

│   └─ ModalChange.tsx

│
├─ services/
│   ├─ api.ts           // Axios configurado
│   └─ tarefaServices.ts // Funções para CRUD
│
├─ types/
│   └─ types.ts         // Tipagem TypeScript
│
├─ App.tsx
└─ main.tsx

⚙️ Como Rodar

Clone o repositório:

git clone https://github.com/Glayber16/Todo-front.git


Instale as dependências:

npm install


Configure a URL da API no arquivo src/services/api.ts:

import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:5154', // URL do backend .NET
});


Execute o projeto:

npm run dev


O app será aberto em http://localhost:5173
.

💡 Observações

Certifique-se de que o backend em .NET esteja rodando na porta correta e aceitando requisições CORS.

O status das tarefas suporta apenas "Pendente" e "Finalizado".

A busca por título atualiza a lista de tarefas dinamicamente conforme o usuário digita.

📌 Próximos Passos / Melhorias

Implementar autenticação de usuário.

Adicionar notificações de tarefas pendentes.

Ordenar tarefas por prioridade ou data de criação.

Melhorar a experiência mobile com layout dedicado.

Implementar debounce na search bar para reduzir requisições ao backend.

🧑‍💻 Autor

Desenvolvido por Glayberson

Link do back: https://github.com/Glayber16/TodoDIO-API

