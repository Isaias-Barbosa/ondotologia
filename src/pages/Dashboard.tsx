// src/pages/Dashboard.tsx

import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Dashboard() {
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');

    axios
      .get('http://localhost:3000/api/dashboard', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => setMessage(res.data.message))
      .catch((err) => {
        setError('Não autorizado ou token inválido');
        console.error(err);
      });
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      {message && <p className="mt-4 text-green-600">{message}</p>}
      {error && <p className="mt-4 text-red-500">{error}</p>}
    </div>
  );
}
