import { PrismaClient } from '@prisma/client';
import { Random } from 'mockjs';
import { hash } from 'argon2';
import create from '../helper';

export const UserSeed = async (num: number = 10) => {
  await create(num, async (prisma: PrismaClient) => {
    await prisma.user.create({
      data: {
        name: Random.name(),
        email: Random.email(),
        password: await hash(Random.sentence()),
        avatar: Random.image(
          '200x200',
          Random.color(),
          Random.color(),
          Random.color(),
          Random.color(),
        ),
      },
    });
  });
};
