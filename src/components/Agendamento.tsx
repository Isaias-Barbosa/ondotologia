import React from 'react';
import { Button } from '@/components/ui/button';

const Agendamento: React.FC = () => (
  <section className="text-center py-16 bg-gradient-to-r from-zinc-300 to-blue-400 border-t-4 border-blue-600">
    <h2 className="text-3xl font-bold mb-4 text-blue-700">
      Não perca tempo e agende uma consulta com a gente
    </h2>
    <a href="https://wa.me/5599999999999" target="_blank" rel="noopener noreferrer">
      <Button className="text-lg px-6 py-3 bg-green-500 hover:bg-blue-700 text-white rounded-full transition">
        Marcar Consulta
      </Button>
    </a>
  </section>
);

export default Agendamento;
