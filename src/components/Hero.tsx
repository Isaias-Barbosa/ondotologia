import React, { useEffect, useState } from 'react';

const Contador = ({ valor }: { valor: number }) => {
  const [contagem, setContagem] = useState(0);

  useEffect(() => {
    let inicio = 0;
    const passo = Math.ceil(valor / 50);
    const interval = setInterval(() => {
      inicio += passo;
      if (inicio >= valor) {
        setContagem(valor);
        clearInterval(interval);
      } else {
        setContagem(inicio);
      }
    }, 30);

    return () => clearInterval(interval);
  }, [valor]);

  return <span className="text-4xl font-bold text-blue-700 ">{contagem}</span>;
};

const Hero: React.FC = () => (
  <div>
  <div
    className="relative w-full h-screen md:h-[70vh] bg-cover bg-center flex items-center justify-center px-10"
    style=
    {{ backgroundImage: 
      'url(https://get.pxhere.com/photo/dentist-dentistry-smile-patient-white-dental-young-female-teeth-clinic-woman-medical-treatment-whitening-care-health-professional-orthodontic-hygiene-equipment-happy-girl-person-healthy-portrait-adult-face-mouth-doctor-clean-background-health-care-visit-tool-clinical-oral-beautiful-perfect-procedure-people-office-caucasian-pretty-fresh-attractive-lifestyle-fun-looking-thinking-smiling-hospital-medical-equipment-service-medical-assistant-therapy-medical-glove-medicine-physician-nursing-1446761.jpg)' }}
  >
    <div className="bg-black/60 text-white p-16 rounded-2xl shadow-2xl max-w-2xl animate-fade-in">
      <h2 className="text-3xl font-bold mb-4 text-center">Sorria com confiança</h2>
      <p className="text-lg text-center">
        Na OdontoVida, cuidamos do seu sorriso com excelência e dedicação. Agende uma avaliação gratuita!
      </p>
    </div>
  </div>
   <div className="relative z-10 -mt-20 mb-20 px-6">
        <div className="bg-white shadow-2xl rounded-2xl p-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="text-center">
            <Contador valor={127}  />
            <p className="text-gray-600 text-2xl">Consultas no mês atual</p>
          </div>
          <div className="text-center">
            <Contador valor={342} />
            <p className="text-gray-600 text-2xl">Clientes satisfeitos nos últimos 3 meses</p>
          </div>
          <div className="text-center">
            <Contador valor={96} />
            <p className="text-gray-600 text-2xl">Nota de satisfação anual (%)</p>
          </div>
        </div>
      </div>
      </div>
  
);

export default Hero;
