import { PrismaClient } from '@prisma/client';

const create = async (
  count = 10,
  callback: (prisma: PrismaClient) => Promise<void>,
) => {
  const prisma = new PrismaClient();
  for (let i = 1; i <= count; i++) {
    await callback(prisma);
  }
};

export default create;
