import React from 'react';
import { type TarefaCardProps } from '../../types/types';
import { Button } from '../Button';
import { FaTrashAlt } from 'react-icons/fa';
import { SlMagicWand } from 'react-icons/sl';

const TarefaCard = ({ id, titulo, descricao, dataCriacao, status, onDelete, onChange }: TarefaCardProps) => {
    const formattedDate = new Date(dataCriacao).toLocaleDateString();

    return (
        <div className='flex flex-col rounded-xl shadow-lg p-6 bg-gray-800 text-gray-200 w-full min-h-[150px] border border-gray-700'>
           
            <div className='flex justify-between items-start w-full mb-4 pb-2 border-b border-gray-700'>
                <h3 className='text-xl md:text-3xl font-extrabold text-gray-400'>{titulo}</h3>
                <h1 className='text-lg md:text-2xl font-bold text-gray-400'>#{id}</h1>
            </div>

            
            <div className='flex flex-col md:flex-row md:items-start justify-between w-full flex-grow mb-4'>
                <p className='text-sm md:text-lg font-light text-gray-300 md:w-3/4 mb-4 md:mb-0'>{descricao}</p>
                <div className='flex flex-col items-start md:items-end text-sm text-gray-400 md:text-right md:ml-4'>
                    <p className={`font-medium ${status === "Finalizado" ? 'text-green-400' : 'text-yellow-400'}`}>Status: {status}</p>
                    <p className='mt-1'>Criado em: <span className='font-medium text-gray-300'>{formattedDate}</span></p>
                </div>
            </div>

            <div className='flex flex-col md:flex-row justify-end items-center gap-2 md:gap-4 w-full pt-4 border-t border-gray-700'>
                <Button 
                    title="Excluir" 
                    onClick={() => onDelete(id)}
                    variant="delete" 
                    Icon={FaTrashAlt}
                />
                <Button
                  title="Editar"
                  variant="alter"
                  onClick={() =>  onChange({ id, titulo, descricao, dataCriacao, status })}
                  Icon={SlMagicWand}
                />
            </div>
        </div>
    );
};

export { TarefaCard };