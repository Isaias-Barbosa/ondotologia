import React from 'react';

const Especialista: React.FC = () => (
  <section className="py-20 bg-white">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 items-center animate-fade-in">
      <div className="flex-1">
        <h2 className="text-3xl font-bold mb-4 text-blue-800 text-center">Conheça um dos nossos especialistas</h2>
        <p className="text-lg text-gray-700 text-center">
          Dr. João Sorriso é referência em odontologia estética, com mais de 15 anos de experiência cuidando de milhares de sorrisos.
        </p>
      </div>
      <img
        src="https://saevo.com.br/wp-content/uploads/2022/10/especialidades-da-odontologia-scaled.jpg"
        alt="Dentista"
        className="w-80 h-auto rounded-xl shadow-lg"
      />
    </div>
  </section>
);

export default Especialista;
