import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes';
import consultaRoutes from './routes/ConsultaRoutes';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'API OdontoVida está ativa' });
});

app.use('/api', authRoutes);
app.use('/api', consultaRoutes); // 👉 nova rota

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));

export default app;
