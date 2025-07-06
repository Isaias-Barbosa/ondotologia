import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  const passwordHash = await bcrypt.hash('senha123', 10);
  await prisma.admin.upsert({
    where: { email: 'admin@odontovida.com' },
    update: {},
    create: {
      email: 'admin@odontovida.com',
      passwordHash,
    },
  });
  console.log('Admin criado');
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
