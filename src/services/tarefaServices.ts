
import { api } from "./api";
import { type TarefaProps } from "../types/types";




export const getTarefasTodos = async (): Promise<TarefaProps[]> => {
  try {
    const response = await api.get("Tarefa/ObterTodos");
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar tarefas:", error);
    return [];
  }
};

export const getTarefaTitulo = async(titulo: string): Promise<TarefaProps[]> => {
  try{
    const response = await api.get("Tarefa/ObterPorTitulo")
    return response.data
  }
   catch (error) {
    console.error("Erro ao buscar tarefas por titulo:", error);
    return [];
   }
}





export const createTarefa = async (
  tarefa: Omit<TarefaProps, "id" | "dataCriacao">
): Promise<TarefaProps | null> => {
  try {
    const payload = {
      ...tarefa,
      dataCriacao: new Date().toISOString(),
    };
    const response = await api.post<TarefaProps>("Tarefa", payload);
    return response.data;
  } catch (error) {
    console.error("Erro ao criar tarefa:", error);
    return null;
  }
};

    
 export const deleteTarefa = async (id: number): Promise<boolean> => {
  try {
    await api.delete(`Tarefa/${id}`);
    return true;
  } catch {
    return false;
  }
};

export const changeTarefaStatus = async (
  tarefa: TarefaProps
): Promise<TarefaProps | null> => {
  try {
    const novoStatus = tarefa.status === "Finalizado" ? "Pendente" : "Finalizado";

    const tarefaAtualizada: TarefaProps = {
      ...tarefa,
      status: novoStatus,
    };

    const { data } = await api.put<TarefaProps>(`/Tarefa/${tarefa.id}`, tarefaAtualizada);

    return data;
  } catch (error) {
    console.error("Erro ao alterar o status da tarefa:", error);
    return null;
  }
};

