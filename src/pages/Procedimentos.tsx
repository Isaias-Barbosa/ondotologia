import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import procedimentosData from '@/data/procedimentos.json';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';

const ProcedimentosPage = () => {
  const [modalAberto, setModalAberto] = useState(false);
  const [procedimentoSelecionado, setProcedimentoSelecionado] = useState<null | { nome: string; descricao: string }>(null);

  function abrirModal(procedimento: { nome: string; descricao: string }) {
    setProcedimentoSelecionado(procedimento);
    setModalAberto(true);
  }

  function fecharModal() {
    setModalAberto(false);
    setProcedimentoSelecionado(null);
  }

  return (
    <div className="w-full font-sans">
     <Navbar />

      {/* Banner */}
      <div
        className="w-full h-[60vh] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            'url(https://sorridents.com.br/business/wp-content/uploads/sites/2/2017/10/128879-dentista-entenda-a-importancia-da-humanizacao-no-atendimento.jpg)',
        }}
      >
        <h2 className="text-white text-4xl font-bold bg-black/60 px-8 py-4 rounded-lg">Nossos Procedimentos</h2>
      </div>

      {/* Lista de Procedimentos */}
      <section className="py-16 bg-gray-100">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto px-4">
          {procedimentosData.map(({ nome, imagem, descricao }, idx) => (
            <Card
              key={idx}
              className="overflow-hidden rounded-2xl shadow-md cursor-pointer"
              onClick={() => abrirModal({ nome, descricao })}
            >
              <img src={imagem} alt={nome} className="w-full h-48 object-cover" />
              <CardContent className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">{nome}</h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Modal */}
      {modalAberto && procedimentoSelecionado && (
        <div
          className="fixed inset-0 text-blue-400 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={fecharModal}
        >
          <div
            className="bg-white rounded-xl max-w-lg p-6 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-4 text-gray-600 hover:text-gray-900 text-1xl font-bold"
              onClick={fecharModal}
              aria-label="Fechar modal"
            >
              &times;
            </button>
            <h3 className="text-2xl font-bold mb-4">{procedimentoSelecionado.nome}</h3>
            <p className="text-gray-700">{procedimentoSelecionado.descricao}</p>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-blue-950 text-white pt-16 pb-8 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 sm:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">OdontoVida</h3>
            <p className="text-sm text-gray-300">
              Excelência em odontologia para transformar sorrisos com qualidade, empatia e tecnologia.
            </p>
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
            <p className="text-sm text-gray-300">
              Rua dos Sorrisos, 123 - Centro
              <br />
              Cidade Feliz - BR
            </p>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-400">
          &copy; 2025 OdontoVida. Todos os direitos reservados.
        </div>
      </footer>
    </div>
  );
};

export default ProcedimentosPage;
