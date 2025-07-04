import React from 'react';
import { Card } from '@/components/ui/card';

const Depoimentos: React.FC = () => (
  <section className="bg-white py-16">
    <h2 className="text-4xl font-bold text-center mb-8 text-blue-800">O que dizem sobre nós</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-8xl mx-auto px-4">
      {[1, 2, 3].map((id) => (
        <Card key={id} className="p-6 shadow-2xl rounded-3xlxl bg-blue-50">
          <p className="italic text-gray-700">
            \"Atendimento incrível! Recomendo a todos. Saí de lá com um sorriso novo.\"
          </p>
          <span className="block mt-4 font-semibold text-blue-700">— Cliente {id}</span>
        </Card>
      ))}
    </div>
  </section>
);

export default Depoimentos;
