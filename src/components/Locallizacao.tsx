import React from 'react';

const Localizacao: React.FC = () => (
  <section className="py-16 bg-gray-100 text-center">
    <h2 className="text-2xl font-bold mb-6 text-blue-800">Onde estamos</h2>
    <iframe
      className="w-full max-w-4xl mx-auto h-96 border-0 rounded-xl shadow-md"
      src="https://www.google.com/maps/embed?..."
      allowFullScreen
      loading="lazy"
    ></iframe>
  </section>
);

export default Localizacao;
