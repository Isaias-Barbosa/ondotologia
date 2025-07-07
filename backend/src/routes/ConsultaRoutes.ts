import { Router } from 'express';

const router = Router();

router.get('/consultas', (req, res) => {
  const consultas = [
    {
      id: 1,
      nome: 'Consulta inicial',
      dentista: 'Dra. Amanda Silva',
      data: '2025-07-10',
      paciente: 'Carlos Souza',
      valor: 200,
      realizada: true,
    },
    {
      id: 2,
      nome: 'Limpeza',
      dentista: 'Dr. Pedro Henrique',
      data: '2025-07-12',
      paciente: 'Fernanda Lima',
      valor: 150,
      realizada: false,
    },
    {
      id: 3,
      nome: 'Canal',
      dentista: 'Dra. Juliana Rocha',
      data: '2025-07-02',
      paciente: 'Rafael Costa',
      valor: 500,
      realizada: true,
    },
    {
      id: 4,
      nome: 'Extração',
      dentista: 'Dr. Leandro Martins',
      data: '2025-07-05',
      paciente: 'Ana Beatriz',
      valor: 300,
      realizada: true,
    },
  ];

  res.json(consultas);
});

export default router;
