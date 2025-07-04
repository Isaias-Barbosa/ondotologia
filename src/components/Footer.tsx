import React from 'react';

const Footer: React.FC = () => (
   <footer className="bg-blue-950 text-white pt-16 pb-8 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 sm:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">OdontoVida</h3>
            <p className="text-sm text-gray-300">Excelência em odontologia para transformar sorrisos com qualidade, empatia e tecnologia.</p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Serviços</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Implantes</li>
              <li>Clareamento</li>
              <li>Ortodontia</li>
              <li>Estética</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Telefone: (99) 99999-9999</li>
              <li>Email: contato@odontovida.com</li>
              <li>WhatsApp: (99) 99999-9999</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Endereço</h4>
            <p className="text-sm text-gray-300">Rua dos Sorrisos, 123 - Centro<br />Cidade Feliz - BR</p>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-400">
          &copy; 2025 OdontoVida. Todos os direitos reservados.
        </div>
      </footer>
);

export default Footer;
