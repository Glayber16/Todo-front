import type { IconType } from "react-icons";

export type ButtonProps = {
  title: string;
  variant?: "primary" | "secondary" | string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  Icon: IconType;
}

export type InputProps = {
  placeholder: string;
  variant?: "primary" | "secondary" | string;
  onChange: (newValue: string) => void;
  value: string; 
  required?: boolean;
  
}

export type TarefaProps = {
  id: number;
  titulo: string;
  descricao: string;
  dataCriacao: string; 
  status: string;
};


export type ModalTaskProps = {
  placeholder: string;
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;

}

export type ModalAddTaskProps = {
  placeholder: string;
  isOpen: boolean;
  onClose: () => void;
  onSave: (tarefa: Omit<TarefaProps, "id" | "dataCriacao">) => void;
}

export type ModalChangeTaskProps = {
  placeholder: string;
  isOpen: boolean;
  onClose: () => void;
  tarefa: TarefaProps | null; 
  onSave: (tarefa: TarefaProps) => void; 
};


export interface TarefaCardProps extends TarefaProps {
    onDelete: (id: number) => void;
    onChange: (tarefa: TarefaProps) => void;
}

export type TarefaListProps = {
  tarefas: TarefaProps[];
  onDelete: (id: number) => void;
  onChange: (tarefa: TarefaProps) => void;
}


