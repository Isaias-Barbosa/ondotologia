import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET;

if (!JWT_SECRET) {
  throw new Error('JWT_SECRET não definido no arquivo .env');
}

const jwtSecret: string = JWT_SECRET;

interface JwtPayload {
  adminId: number;
  email: string;
}

// Gera um token JWT
export function generateToken(payload: JwtPayload): string {
  return jwt.sign(payload, jwtSecret, { expiresIn: '8h' });
}

// Verifica e decodifica um token JWT
export function verifyToken(token: string): JwtPayload {
 const decoded = jwt.verify(token, jwtSecret) as unknown;

  if (
    typeof decoded === 'object' && 
    decoded !== null &&
    'adminId' in decoded &&
    'email' in decoded
  ) {
    return decoded as JwtPayload;
  }

  throw new Error('Token inválido');
}