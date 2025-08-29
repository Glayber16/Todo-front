import { useState, useEffect } from "react";
import { Modal} from "../Modal";
import { Input } from "../Input";
import { Button } from "../Button";
import { IoAddCircle } from "react-icons/io5";
import { ImCancelCircle } from "react-icons/im";
import { type ModalChangeTaskProps, type TarefaProps } from "../../types/types";

const ModalChangeTask = ({ placeholder, isOpen, onClose, onSave, tarefa }: ModalChangeTaskProps) => {
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [status, setStatus] = useState<TarefaProps["status"]>("Pendente");

  useEffect(() => {
  if (tarefa && isOpen) {
    setTitulo(tarefa.titulo);
    setDescricao(tarefa.descricao);
    setStatus(tarefa.status);
  } else if (!isOpen) {
    setTitulo('');
    setDescricao('');
    setStatus('Pendente');
  }
}, [tarefa, isOpen]);


  const handleSave = () => {
  if (!titulo.trim()) {
    alert("Precisa de um título");
    return;
  }

  if (!tarefa) return;

  const updatedTask: TarefaProps = {
    ...tarefa,
    titulo: titulo.trim(),
    descricao: descricao.trim(),
    status,
  };

  onSave(updatedTask);
};

  return (
    <Modal isOpen={isOpen} onClose={onClose} placeholder={placeholder}>
      <div className="flex flex-col mb-4">
        <label className="block text-sm font-medium mb-1">Título</label>
        <Input
          value={titulo}
          onChange={setTitulo}
          placeholder="Título da tarefa"
          required={true}
        />
      </div>

      <div className="flex flex-col mb-4">
        <label className="block text-sm font-medium mb-1">Descrição</label>
        <Input value={descricao} onChange={setDescricao} placeholder="Descrição da tarefa" />
      </div>

      <div className="flex flex-col mb-4">
        <label className="block text-sm font-medium mb-1">Status</label>
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value as TarefaProps["status"])}
          className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-white"
        >
          <option value="Pendente">Pendente</option>
          <option value="Finalizado">Finalizado</option>
        </select>
      </div>

      <div className="flex justify-end gap-3 mt-6">
        <Button title="Cancelar" variant="secondary" onClick={onClose} Icon={ImCancelCircle} />
        <Button title="Salvar" variant="alter" onClick={handleSave} Icon={IoAddCircle} />
      </div>
    </Modal>
  );
};

export { ModalChangeTask };
