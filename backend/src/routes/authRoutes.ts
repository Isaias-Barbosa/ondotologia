console.log('authRoutes carregado');

import { Router } from 'express';
import { login } from '../controllers/authController';
import { authMiddleware } from '../middlewares/authMiddleware';

const router = Router();

router.post('/login', login);

// Protegida
router.get('/dashboard', authMiddleware, (req, res) => {
  res.json({ message: 'Você acessou a dashboard protegida!' });
});

export default router;
