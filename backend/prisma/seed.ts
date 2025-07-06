// prisma/seed.ts
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  const passwordHash = await bcrypt.hash('nulled', 10); // define aqui a senha real

  await prisma.admin.upsert({
    where: { email: 'admin@odontovida.com' },
    update: {},
    create: {
      email: 'admin@odontovida.com',
      passwordHash,
    },
  });

  console.log('Admin criado com sucesso!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
