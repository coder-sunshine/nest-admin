import { PrismaClient } from '@prisma/client';
import { Random } from 'mockjs';
import create from '../helper';
import { md5 } from '../../src/utils';

export const UserSeed = async (num: number = 10) => {
  await create(num, async (prisma: PrismaClient) => {
    await prisma.user.create({
      data: {
        username: Random.name(),
        email: Random.email(),
        password: md5('123456'),
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
