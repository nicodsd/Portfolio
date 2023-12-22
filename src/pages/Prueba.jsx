import React, { useState } from 'react';

const TuFormulario = () => {
  // Estado local para realizar un seguimiento de los valores de los campos del formulario
  const [formulario, setFormulario] = useState({
    campo1: '',
    campo2: '',
    // Agrega más campos según sea necesario
  });

  // Manejador de cambios para actualizar el estado del formulario cuando se ingresan datos
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormulario({
      ...formulario,
      [name]: value,
    });
  };

  // Manejador para el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    // Realiza la lógica de envío del formulario aquí
  };

  // Verifica si todos los campos obligatorios están completos
  const areCamposObligatoriosCompletos = () => {
    // Asegúrate de agregar todos los campos obligatorios al arreglo
    const camposObligatorios = ['campo1', 'campo2'];
    return camposObligatorios.every((campo) => formulario[campo].trim() !== '');
  };

  return (
    <div className='w-full h-screen flex justify-center items-center'>
    <form onSubmit={handleSubmit}>
      <label>
        Campo 1 (Obligatorio):
        <input
          type="text"
          name="campo1"
          value={formulario.campo1}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Campo 2 (Obligatorio):
        <input
          type="text"
          name="campo2"
          value={formulario.campo2}
          onChange={handleChange}
        />
      </label>
      <br />
      {/* Agrega más campos según sea necesario */}
      
      <button className='bg-black' type="submit" disabled={!areCamposObligatoriosCompletos()}>
        Enviar
      </button>
    </form>
    </div>
  );
};

export default TuFormulario;
