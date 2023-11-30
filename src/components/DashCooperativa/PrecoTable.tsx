import React, { useState } from 'react';
import { any } from 'zod';

const PrecoTable = () => {
    const [materiais, setMateriais] = useState([
        { material: 'Papel', preco: 200.0, unidade: '/ton' },
        { material: 'Metal', preco: 3200.0, unidade: '/ton' },
        { material: 'Vidro', preco: 400.0, unidade: '/ton' },
        { material: 'Plást', preco: 500.0, unidade: '/ton' },
    ]);

    const [edicaoIndex, setEdicaoIndex] = useState(-1); // -1 indica que nenhum item está sendo editado

    const handleEdit = (index: any) => {
        setEdicaoIndex(index);
    };

    const handleSave = () => {
        setEdicaoIndex(-1);
    };

    const handleCancelEdit = () => {
        setEdicaoIndex(-1);
    };

    const handleDelete = (index: any) => {
        const novosMateriais = [...materiais];
        novosMateriais.splice(index, 1);
        setMateriais(novosMateriais);
        setEdicaoIndex(-1);
    };

    const handleAdd = () => {
        const novoMaterial = { material: 'Novo Material', preco: 0.0, unidade: '/ton' };
        setMateriais([...materiais, novoMaterial]);
        setEdicaoIndex(materiais.length);
    };

    const handleInputChange = (index: any, campo: any, valor: number) => {
        const novosMateriais = [...materiais];
        novosMateriais[index][campo] = valor;
        setMateriais(novosMateriais);
    };

      return (
        <div className='flex flex-col w-5/6 h-5/6 justify-between items-center px-8 py-4 gap-1 bg-white rounded-3xl'>
        <h2 className='text-3xl font-sans'>Preço/Material</h2>
        <div className="flex flex-col w-full gap-2">
          {materiais.map((material, index) => (
            <div key={index} className="flex flex-row justify-between items-center border-2 h-full">
              <div>
                {edicaoIndex === index ? (
                  <input
                    type="text"
                    value={material.material}
                    onChange={(e) => handleInputChange(index, 'material', e.target.value)}
                    className="w-40 px-2 py-1 border rounded flex self-start"
                  />
                ) : (
                  material.material
                )}
              </div>
              <div className="flex items-center">
                {edicaoIndex === index ? (
                  <input
                    type="number"
                    value={material.preco}
                    onChange={(e) => handleInputChange(index, 'preco', parseFloat(e.target.value))}
                    className="w-20 px-2 py-1 border rounded"
                  />
                ) : (
                  material.preco
                )}
              </div>
              <div className="flex items-center">{material.unidade}</div>
              <div className="flex gap-3 items-center">
                {edicaoIndex === index ? (
                  <>
                    <button className='bg-moss-green-500 w-20 h-8 rounded' onClick={() => handleSave()}>Salvar</button>
                    <button className='bg-red-600 w-20 h-8 rounded' onClick={() => handleCancelEdit()}>Cancelar</button>
                  </>
                ) : (
                  <>
                    <button className='bg-moss-green-100 w-20 h-8 rounded' onClick={() => handleEdit(index)}>Editar</button>
                    <button className='bg-red-600 w-20 h-8 rounded' onClick={() => handleDelete(index)}>Excluir</button>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
        <button onClick={handleAdd} className="bg-moss-green-300 w-32 h-10 rounded">Adicionar Novo</button>
      </div>
  );
};

export default PrecoTable;