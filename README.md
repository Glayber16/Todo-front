ToDo List Front
Durante meus estudos de TypeScript, resolvi me aventurar neste projeto de ToDo List, com o objetivo de aprimorar boas práticas de componentização, estudar mais sobre tipagem em TypeScript, Tailwind CSS e consumo de APIs.

Este aplicativo permite gerenciar tarefas, incluindo criação, edição, exclusão e busca, consumindo dados de uma API desenvolvida em .NET.

🖥️ Tecnologias

React 18 + TypeScript

Tailwind CSS para estilização

React Icons para botões e ícones

Axios para requisições HTTP

⚡ Funcionalidades

Adicionar novas tarefas com título, descrição e status.

Editar tarefas existentes.

Deletar tarefas.

Buscar tarefas pelo título.

Interface responsiva e moderna usando Tailwind CSS.

Modal reutilizáveis para criação e alteração de tarefas.

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

