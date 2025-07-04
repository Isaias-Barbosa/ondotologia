import React from 'react';
import Navbar from '../components/Navbar.tsx';
import Hero from '../components/Hero';
import Agendamento from '../components/Agendamento';
import Procedimentos from '../components/Procedimentos';
import Depoimentos from '../components/Depoimentos';
import Localizacao from '../components/Locallizacao';
import Especialista from '../components/Especialista';
import Footer from '../components/Footer';

const Home: React.FC = () => (
  <div className="w-full font-sans">
    <Navbar />
    <Hero />
    <Agendamento />
    <Procedimentos />
    <Depoimentos />
    <Localizacao />
    <Especialista />
    <Footer />
  </div>
);

export default Home;
