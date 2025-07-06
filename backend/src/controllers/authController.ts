import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import { generateToken } from '../utils/jwt';

const prisma = new PrismaClient();

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;



  try {
    const admin = await prisma.admin.findUnique({ where: { email } });
    if (!admin) {
      return res.status(401).json({ error: 'Usuário não encontrado' });
    }

    console.log(req.body);
console.log(admin?.passwordHash);

    const validPassword = await bcrypt.compare(password, admin.passwordHash);
    if (!validPassword) {
      return res.status(401).json({ error: 'Senha incorreta' });
    }

    const token = generateToken({ adminId: admin.id, email: admin.email });

    return res.json({ token });
  } catch (error) {
    return res.status(500).json({ error: 'Erro interno ao fazer login' });
  }

  
};
