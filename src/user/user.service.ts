import { Inject, Injectable } from '@nestjs/common';
import { RegisterUserDto } from './dto/register-user.dto';
import { PrismaService } from '@/prisma/prisma.service';

@Injectable()
export class UserService {
  @Inject(PrismaService)
  private readonly prismaService: PrismaService;

  async registerUser(registerUserDto: RegisterUserDto) {
    const { username } = registerUserDto;

    const user = await this.prismaService.user.findUnique({
      where: { username },
    });

    console.log('user', user);

    return registerUserDto;
  }
}
