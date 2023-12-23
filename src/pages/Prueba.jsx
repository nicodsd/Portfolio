/* 
import React, { useEffect, useState } from 'react';

const TuComponente = () => {
  const [scrolled, setScrolled] = useState(false);
    

  useEffect(() => {
    const handleScroll = () => {
      const elemento = document.getElementById('miElemento');

      if (elemento) {
        const elementoPosition = elemento.getBoundingClientRect().bottom;
        const scrollPosition = window.scrollY;

        if (scrollPosition > elementoPosition) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='h-screen w-full'>
      <h1 className='mb-[40vh]'>Tu Página</h1>
      <div className={scrolled ? 'bg-white text-[2rem] duration-500 p-5 border-2 w-fit rounded-xl md:text-5xl lg:text-5xl border-black font-normal text-[#0600ff]' : 'text-[2rem] duration-150 p-5 border-2 w-fit rounded-xl md:text-5xl lg:text-5xl border-black font-normal text-[#0600ff]'}>Contenido con animación</div>
      <div className='h-[40vh]'>Contenido con ID</div>
      <div className='mt-20' id="miElemento">dsadasdas</div>
    

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
      [ame]: value,
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

  return (n
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

      
      <button className='bg-black' type="submit" disabled={!areCamposObligatoriosCompletos()}>
        Enviar
      </button>
    </form>

    </div>
  );
};


export default TuComponente;

export default TuFormulario;
 */