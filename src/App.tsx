import { useState, useEffect } from 'react';
import { Button } from './components/Button';
import { IoIosAdd } from "react-icons/io";
import { Card } from './components/Card';
import { Input } from './components/Input';
import { TarefaList } from './components/TarefaList';
import { type TarefaProps } from './types/types';
import { api } from "./services/api";
import { deleteTarefa, createTarefa } from './services/tarefaServices';
import { ModalAddTask } from './components/ModalAdd';
import { ModalChangeTask } from './components/ModalChange';

function App() {
  const [texto, setTexto] = useState('');
  const [tarefas, setTarefas] = useState<TarefaProps[]>([]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedTarefa, setSelectedTarefa] = useState<TarefaProps | null>(null);

  
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);


  const openEditModal = (tarefa: TarefaProps) => {
    setSelectedTarefa(tarefa);
    setIsEditModalOpen(true);
  };
  const closeEditModal = () => {
    setSelectedTarefa(null);
    setIsEditModalOpen(false);
  };

  const handleSave = async (novaTarefa: Omit<TarefaProps, "id" | "dataCriacao">) => {
    await createTarefa(novaTarefa);
    fetchTarefas();
    closeModal();
  };

  const fetchTarefasPorTitulo = async (titulo: string) => {
  try {
    if (!titulo.trim()) {
      
      fetchTarefas();
      return;
    }

    const response = await api.get<TarefaProps[]>(`/Tarefa/ObterPorTitulo?titulo=${titulo}`);
    setTarefas(response.data);
  } catch (error) {
    console.error('Erro ao buscar tarefas por título:', error);
  }
};


  const fetchTarefas = async () => {
    try {
      const response = await api.get<TarefaProps[]>("/Tarefa/ObterTodos");
      setTarefas(response.data);
    } catch (error) {
      console.error("Erro ao buscar tarefas:", error);
    }
  };

  useEffect(() => {
    fetchTarefas();
  }, []);


  const handleDelete = async (id: number) => {
    const sucesso = await deleteTarefa(id);
    if (sucesso) {
      alert(`Tarefa ${id} deletada`);
      fetchTarefas();
    }
  };


  const handleChange = async (tarefaAtualizada: TarefaProps) => {
    try {
      await api.put(`/Tarefa/${tarefaAtualizada.id}`, tarefaAtualizada);
      alert(`Tarefa ${tarefaAtualizada.id} alterada`);
      fetchTarefas();
      closeEditModal();
    } catch (error) {
      console.error("Erro ao atualizar tarefa:", error);
      alert("Não foi possível atualizar a tarefa");
    }
  };

  return (
    <div className='bg-gray-400 flex items-center justify-center flex-col min-h-screen text-white font-poppins'>
      <Card>
        <h1 className='text-4xl font-bold mb-4'>ToDo List</h1>
        <div className='flex w-full justify-between items-center'>
          <Input 
            value={texto} 
            onChange={(value) => {
              setTexto(value);
              fetchTarefasPorTitulo(value);
            }} 
            placeholder="Buscar tarefa..." 
          />
          <Button
            title=''
            onClick={openModal}
            Icon={IoIosAdd}
          />
        </div> 

        <TarefaList 
          tarefas={tarefas}
          onDelete={handleDelete}
          onChange={openEditModal}
        />
      </Card>

      <ModalAddTask 
        placeholder="Adicionar Tarefa" 
        isOpen={isModalOpen} 
        onClose={closeModal} 
        onSave={handleSave} 
      />

      <ModalChangeTask 
        placeholder="Alterar Tarefa" 
        isOpen={isEditModalOpen} 
        onClose={closeEditModal} 
        tarefa={selectedTarefa} 
        onSave={handleChange} 
      />
    </div>
  );
}

export default App;
