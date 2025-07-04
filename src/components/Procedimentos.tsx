import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import procedimentosData from "@/data/procedimentos.json";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";

const Procedimentos: React.FC = () => {
  const [showImageIndex, setShowImageIndex] = useState<number | null>(null);

  const toggleImage = (index: number) => {
    setShowImageIndex(showImageIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-gray-100">
      <h2 className="text-4xl font-bold text-center mb-8 text-blue-800">
        Nossos Procedimentos
      </h2>


      {/* Texto explicativo */}
      <div className="bg-black/70 text-white max-w-4xl mx-auto rounded-xl text-center px-28 py-4 mb-8 shadow-sm">
      <p className="text-lg">
        Contamos com uma equipe de profissionais altamente qualificados e dedicados para garantir que cada procedimento seja realizado com segurança, conforto e excelência. Seu sorriso está em boas mãos!
      </p>
      </div>

        {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
        {procedimentosData.slice(0, 6).map(({ nome, imagem }, idx) => (
          <Card
            key={idx}
            className="overflow-hidden rounded-2xl shadow-md"
          >
            {/* Desktop: imagem e título fixos */}
            <div className="hidden md:block">
              <img src={imagem} alt={nome} className="w-full h-48 object-cover" />
              <CardContent className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">{nome}</h3>
              </CardContent>
            </div>

            {/* Mobile: título com setinha, imagem aparece ao clicar */}
            <div
              className="md:hidden px-4 pt-4 pb-2 flex justify-between items-center cursor-pointer"
              onClick={() => toggleImage(idx)}
            >
              <h3 className="text-xl font-semibold text-gray-800">{nome}</h3>
              <ChevronDown
                className={`w-5 h-5 text-blue-600 transition-transform ${
                  showImageIndex === idx ? "rotate-180" : ""
                }`}
              />
            </div>

            {showImageIndex === idx && (
              <img
                src={imagem}
                alt={nome}
                className="md:hidden w-full h-48 object-cover transition-all"
              />
            )}
          </Card>
        ))}
      </div>

      <div className="text-center mt-8 items-center justify-center">
        <Link to="/procedimentos">
          <Button className="px-7 py-6 bg-blue-600 hover:bg-blue-700 text-white text-lg rounded-full transition">
            Ver Mais Procedimentos
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default Procedimentos;
