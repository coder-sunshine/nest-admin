import { UserSeed } from './seeds/user';

const run = async () => {
  await UserSeed(10);
};

run();
