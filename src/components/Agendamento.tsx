import React from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react'; 

const Agendamento: React.FC = () => (
  <section className="text-center py-16 bg-gradient-to-r from-zinc-300 to-blue-400 border-t-4 border-blue-600">
    <h2 className="text-3xl font-bold mb-4 text-blue-700">
      Não perca tempo e agende uma consulta com a gente
    </h2>

    <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
      <a href="tel:5599999999999" className="text-blue-700 hover:text-blue-900">
        <Button className="text-lg px-6 py-3 bg-lime-600 hover:bg-green-700 text-white rounded-full transition">
           <MessageCircle className="w-5 h-5" />
          Marcar Consulta via Whatsapp
        </Button>
      </a>
     <Button className="text-lg px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-full">
        Marcar Consulta Web
      </Button>
    </div>
  </section>
);

export default Agendamento;

