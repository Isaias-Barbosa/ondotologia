import React, { useEffect, useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { FaUserMd, FaUsers, FaTooth, FaCalendarAlt, FaMoneyBillWave } from 'react-icons/fa';
import DashboardNavbar from '@/components/DashboardNavbar';
import Sidebar from '@/components/Sidebar';

interface Consulta {
  id: number;
  nome: string;
  dentista: string;
  data: string;
  paciente: string;
}

export default function Dashboard() {
  const [consultas, setConsultas] = useState<Consulta[]>([]);
  const [totalConsultas, setTotalConsultas] = useState(0);
  const [consultasRealizadas, setConsultasRealizadas] = useState(0);
  const [rendaMensal, setRendaMensal] = useState(0);

  useEffect(() => {
    async function fetchDados() {
      const res = await fetch('http://localhost:3000/api/consultas');
      const data = await res.json();

      setConsultas(data);
      setTotalConsultas(data.length);
      setConsultasRealizadas(data.filter((c: any) => c.realizada).length);
      setRendaMensal(data.reduce((total: number, c: any) => total + c.valor, 0));
    }

    fetchDados();
  }, []);

  return (
    <div className="flex min-h-screen">
      {/* Menu Lateral */}
      <Sidebar />

        <div className="flex-1 flex flex-col overflow-y-auto">
        <DashboardNavbar />

      {/* Conteúdo */}
      <main className="flex-1 bg-gray-100 p-8 space-y-6">
        {/* Infográficos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardContent className="p-4 flex items-center justify-between">
              <div>
                <h3 className="text-lg text-gray-700">Consultas no mês</h3>
                <p className="text-2xl font-bold text-blue-400">{totalConsultas}</p>
              </div>
              <FaCalendarAlt className="text-blue-600 text-3xl" />
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4 flex items-center justify-between">
              <div>
                <h3 className="text-lg text-gray-700">Renda mensal</h3>
                <p className="text-2xl font-bold text-blue-400">R$ {rendaMensal.toFixed(2)}</p>
              </div>
              <FaMoneyBillWave className="text-green-600 text-3xl" />
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4 flex items-center justify-between">
              <div>
                <h3 className="text-lg text-gray-700">Consultas realizadas</h3>
                <p className="text-2xl font-bold text-blue-400">{consultasRealizadas}</p>
              </div>
              <FaTooth className="text-purple-600 text-3xl" />
            </CardContent>
          </Card>
        </div>

        {/* Tabela */}
        <div className="bg-white rounded-xl shadow">
          <h2 className="text-xl font-bold p-4 text-blue-700">Consultas</h2>
          <Table className='bg-gray-600'>
            <TableHeader className="bg-blue-200">
              <TableRow className="text-gray-700">
                <TableHead>ID</TableHead>
                <TableHead>Nome</TableHead>
                <TableHead>Dentista</TableHead>
                <TableHead>Data</TableHead>
                <TableHead>Paciente</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {consultas.map((consulta) => (
                <TableRow key={consulta.id}>
                  <TableCell>{consulta.id}</TableCell>
                  <TableCell>{consulta.nome}</TableCell>
                  <TableCell>{consulta.dentista}</TableCell>
                  <TableCell>{new Date(consulta.data).toLocaleDateString()}</TableCell>
                  <TableCell>{consulta.paciente}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </main>
    </div>
    </div>
  );
}
