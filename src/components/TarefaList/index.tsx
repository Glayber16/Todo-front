import React from 'react'
import { TarefaCard } from '../TarefaCard'
import { type TarefaListProps} from "../../types/types";


const TarefaList = ({ tarefas, onDelete, onChange }: TarefaListProps) => {
  return (
    <div className='flex flex-col gap-4 w-full'>
      {tarefas.length > 0 ? (
        tarefas.map((tarefa) => (
          <TarefaCard
            key={tarefa.id}
            id={tarefa.id}
            titulo={tarefa.titulo}
            descricao={tarefa.descricao}
            dataCriacao={tarefa.dataCriacao}
            status={tarefa.status}
            onDelete={onDelete}
            onChange={onChange}
          />
        ))
      ) : (
        <p className='text-center text-gray-500'>Nenhuma tarefa adicionada ainda.</p>
      )}
    </div>
  )
}

export { TarefaList }
