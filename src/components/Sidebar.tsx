import React from 'react';
import { Link } from 'react-router-dom';
import { FaCalendarAlt, FaUserFriends, FaUserMd, FaToolbox, FaTruck } from 'react-icons/fa';

const Sidebar: React.FC = () => {
  return (
    <div className="w-64 h-screen bg-blue-700 text-white flex flex-col shadow-lg">
      <div className="text-2xl font-bold p-6 border-b border-blue-500">
        Odonto<span className="text-yellow-300">Vida</span>
      </div>

      <nav className="flex-1 px-4 py-6 space-y-4 text-sm">
        <Link to="/dashboard" className="flex items-center gap-3 hover:bg-blue-600 p-2 rounded transition">
          <FaCalendarAlt className="text-teal-200"/> <p className="text-white">Consultas</p>
        </Link>
        <Link to="#" className="flex items-center gap-3 hover:bg-blue-600 p-2 rounded transition">
          <FaUserFriends className="text-teal-200"/> <p className="text-white">Pacientes</p>
        </Link>
        <Link to="#" className="flex items-center gap-3 hover:bg-blue-600 p-2 rounded transition">
          <FaUserMd className="text-teal-200"/> <p className="text-white">Funcionários</p>
        </Link>
        <Link to="#" className="flex items-center gap-3 hover:bg-blue-600 p-2 rounded transition">
          <FaToolbox className="text-teal-200" /> <p className="text-white">Equipamentos</p>
        </Link>
        <Link to="#" className="flex items-center gap-3 hover:bg-blue-600 p-2 rounded transition">
          <FaTruck className="text-teal-200"/> <p className="text-white">Fornecedores</p>
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
